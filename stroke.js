// ============================================
// Kanji Stroke Order Animator (using KanjiVG)
// ============================================

const KANJIVG_URL = 'https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/';
let currentStrokePaths = [];
let currentStrokeIndex = 0;
let isAnimating = false;

async function loadKanjiStroke(char) {
    const hex = char.charCodeAt(0).toString(16).padStart(5, '0');
    const container = document.getElementById('strokeOrderContainer');
    container.innerHTML = '<div class="loader">Loading strokes...</div>';

    try {
        const response = await fetch(`${KANJIVG_URL}${hex}.svg`);
        if (!response.ok) throw new Error('Kanji not found');
        const svgText = await response.text();

        container.innerHTML = svgText;
        const svg = container.querySelector('svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');

        // Setup paths for animation
        currentStrokePaths = Array.from(container.querySelectorAll('path'));
        currentStrokePaths.forEach(path => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            path.style.transition = 'none';
            // Custom stroke styles for better visibility
            path.style.stroke = 'var(--blue)';
            path.style.strokeWidth = '3';
        });

        currentStrokeIndex = 0;
        isAnimating = false;

    } catch (err) {
        container.innerHTML = '<div style="color:var(--red)">Could not load stroke data.</div>';
        console.error(err);
    }
}

async function playStrokes() {
    if (isAnimating) return;
    isAnimating = true;

    // Reset all
    currentStrokePaths.forEach(path => {
        const length = path.getTotalLength();
        path.style.strokeDashoffset = length;
        path.style.transition = 'none';
    });

    for (let i = 0; i < currentStrokePaths.length; i++) {
        if (!isAnimating) break;
        await animateStroke(i);
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    isAnimating = false;
}

function animateStroke(index) {
    return new Promise(resolve => {
        const path = currentStrokePaths[index];
        path.style.transition = 'stroke-dashoffset 0.5s ease-in-out';
        path.style.strokeDashoffset = '0';
        setTimeout(resolve, 500);
    });
}

function stepForward() {
    if (currentStrokeIndex >= currentStrokePaths.length) {
        // Reset
        currentStrokePaths.forEach(path => {
            path.style.strokeDashoffset = path.getTotalLength();
        });
        currentStrokeIndex = 0;
    }

    const path = currentStrokePaths[currentStrokeIndex];
    path.style.transition = 'stroke-dashoffset 0.3s ease-in-out';
    path.style.strokeDashoffset = '0';
    currentStrokeIndex++;
}

// Modal management
const modal = document.getElementById('kanjiModal');
const closeBtn = document.querySelector('.close-modal');

function openKanjiModal(char) {
    const kanjiObj = KANJI_DATA.find(k => k.char === char);
    document.getElementById('modalKanjiChar').textContent = char;
    document.getElementById('modalKanjiReading').textContent = `${kanjiObj.on} / ${kanjiObj.kun}`;
    document.getElementById('modalKanjiMeaning').textContent = kanjiObj.meaning;

    modal.classList.add('show');
    loadKanjiStroke(char);
    if (window.loadMnemonic) window.loadMnemonic(char);
    if (window.loadRadicals) window.loadRadicals(char);
    if (window.initHandwriting) initHandwriting();
}

closeBtn.onclick = () => {
    modal.classList.remove('show');
    isAnimating = false;
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.classList.remove('show');
        isAnimating = false;
    }
};

document.getElementById('playStroke').addEventListener('click', playStrokes);
document.getElementById('stepStroke').addEventListener('click', stepForward);

if (window.initMnemonics) window.initMnemonics();

window.openKanjiModal = openKanjiModal;
