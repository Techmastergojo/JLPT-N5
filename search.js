// ============================================
// Phase 3: Omnisearch & Reference Hub
// ============================================

// --- OMNISEARCH ---
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
    }
    if (e.key === 'Escape' && searchModal.classList.contains('show')) {
        closeSearch();
    }
});

function openSearch() {
    searchModal.classList.add('show');
    searchInput.focus();
}

function closeSearch() {
    searchModal.classList.remove('show');
    searchInput.value = '';
    searchResults.innerHTML = '';
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
    }

    const results = performSearch(query);
    renderResults(results);
});

function performSearch(query) {
    let matches = [];

    // Search Kanji
    if (window.KANJI_DATA) {
        matches.push(...KANJI_DATA.filter(k =>
            k.char.includes(query) ||
            k.meaning.toLowerCase().includes(query) ||
            k.on.toLowerCase().includes(query) ||
            k.kun.toLowerCase().includes(query)
        ).map(k => ({ ...k, type: 'Kanji' })));
    }

    // Search Vocab
    const allVocab = [...(window.VOCAB1 || []), ...(window.VOCAB2 || []), ...(window.VOCAB3 || []), ...(window.VOCAB4 || [])];
    matches.push(...allVocab.filter(v =>
        v.jp.includes(query) ||
        v.en.toLowerCase().includes(query) ||
        v.r.includes(query)
    ).map(v => ({ ...v, type: 'Vocab' })));

    // Search Grammar
    if (window.GRAMMAR_DATA) {
        matches.push(...GRAMMAR_DATA.filter(g =>
            g.title.toLowerCase().includes(query) ||
            g.meaning.toLowerCase().includes(query)
        ).map(g => ({ ...g, type: 'Grammar' })));
    }

    return matches.slice(0, 10); // Limit to 10 for performance
}

function renderResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-empty">No matches found...</div>';
        return;
    }

    searchResults.innerHTML = results.map(res => `
        <div class="search-item">
            <div class="search-item-info" onclick="handleSearchSelect('${res.type}', '${res.char || res.jp || res.title}')">
                <div class="search-item-main">
                    <span class="search-item-type ${res.type.toLowerCase()}">${res.type}</span>
                    <span class="search-item-text">${res.char || res.jp || res.title}</span>
                </div>
                <div class="search-item-sub">${res.meaning || res.r || ''}</div>
            </div>
            <button class="ai-ask-btn" onclick="explainWithAI('${res.type}', '${res.char || res.jp || res.title}')">✨ Explain</button>
        </div>
    `).join('');
}

async function explainWithAI(type, text) {
    window.showView('ai-hub');
    const prompt = `Explain the ${type} "${text}" to an N5 student. Provide its usage, common nuances, and 1-2 simple example sentences.`;

    document.getElementById('aiChatInput').value = prompt;
    window.sendChatMessage();
}


function handleSearchSelect(type, id) {
    closeSearch();
    if (type === 'Kanji') {
        window.openKanjiModal(id);
    } else if (type === 'Vocab') {
        // Find in all lists
        const allVocab = [...(window.VOCAB1 || []), ...(window.VOCAB2 || []), ...(window.VOCAB3 || []), ...(window.VOCAB4 || [])];
        const v = allVocab.find(item => item.jp === id);
        if (v) showVocabDetail(v);
    } else if (type === 'Grammar') {
        window.showView('grammar');
        // Optional: Scroll to it
    }
}

function showVocabDetail(v) {
    // Simple alert or dedicated modal
    alert(`Vocab: ${v.jp} (${v.r})\nMeaning: ${v.en}`);
}

// --- RADICAL BREAKDOWN (Dictionary for N5 Kanji) ---
const RADICALS = {
    '語': ['言 (speech)', '五 (five)', '口 (mouth)'],
    '飲': ['食 (food/eat)', '欠 (lack)'],
    '学': ['子 (child)', '冖 (cover)'],
    '何': ['人 (person)', '可 (possible)'],
    '会': ['人 (person)', '云 (say)'],
    '空': ['穴 (hole)', '工 (work)'],
    // Placeholder - in a real app, this would be a larger dataset
};

function loadRadicals(char) {
    const container = document.getElementById('radicalBreakdown');
    if (!container) return;

    const parts = RADICALS[char] || [];
    if (parts.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    container.innerHTML = `
        <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:5px; font-weight:700">RADICALS / PARTS</div>
        <div style="display:flex; gap:10px; flex-wrap:wrap">
            ${parts.map(p => `<span class="badge" style="background:var(--bg-primary); border:1px solid var(--border)">${p}</span>`).join('')}
        </div>
    `;
}

// --- CUSTOM CARD STORAGE ---
function initCustomCards() {
    const btn = document.getElementById('addCustomCardBtn');
    const modal = document.getElementById('customCardModal');
    const save = document.getElementById('saveCustomCard');

    if (!btn) return;

    btn.onclick = () => modal.classList.add('show');

    save.onclick = () => {
        const jp = document.getElementById('customJp').value;
        const r = document.getElementById('customR').value;
        const en = document.getElementById('customEn').value;

        if (!jp || !en) return alert('Please fill in at least Japanese and Meaning');

        if (window.addToSRS) {
            window.addToSRS('vocab', jp, en, r, '');
            modal.classList.remove('show');
            document.getElementById('customJp').value = '';
            document.getElementById('customR').value = '';
            document.getElementById('customEn').value = '';
        }
    };
}

// Mobile FAB
document.getElementById('mobileSearchBtn').onclick = openSearch;

window.openSearch = openSearch;
window.loadRadicals = loadRadicals;
window.initCustomCards = initCustomCards;
window.handleSearchSelect = handleSearchSelect;
