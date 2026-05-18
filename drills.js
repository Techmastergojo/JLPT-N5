// ============================================
// Practice Drills Management
// ============================================

let currentConjugation = null;
let currentSentence = null;
let currentSelectedWords = [];

// ---- CONJUGATION ----
function initConjugation() {
    const input = document.getElementById('drillInput');
    const feedback = document.getElementById('drillFeedback');

    currentConjugation = CONJUGATION_RULES[Math.floor(Math.random() * CONJUGATION_RULES.length)];
    // Random form: masu or masen or mashita
    const forms = ['masu', 'masen', 'mashita'];
    const form = forms[Math.floor(Math.random() * forms.length)];
    currentConjugation.targetForm = form;

    document.getElementById('drillVerb').textContent = currentConjugation.verb;
    document.getElementById('drillMeaning').textContent = `to ${currentConjugation.meaning} (${form} form)`;

    if (input) input.value = '';
    if (feedback) {
        feedback.className = 'drill-feedback';
        feedback.textContent = '';
    }
    if (input) input.focus();
}

function checkConjugation() {
    const input = document.getElementById('drillInput');
    if (!input) return;
    const val = input.value.trim();
    const stem = currentConjugation.stem;
    let correct = '';
    if (currentConjugation.targetForm === 'masu') correct = stem + 'ます';
    if (currentConjugation.targetForm === 'masen') correct = stem + 'ません';
    if (currentConjugation.targetForm === 'mashita') correct = stem + 'ました';

    const feedback = document.getElementById('drillFeedback');
    if (!feedback) return;
    if (val === correct || toHiragana(val) === correct) {
        feedback.textContent = 'Correct! ✨';
        feedback.className = 'drill-feedback correct';
        setTimeout(initConjugation, 1500);
    } else {
        feedback.textContent = `Try again! Hint: ${correct}`;
        feedback.className = 'drill-feedback wrong';
    }
}

const checkDrillBtnEl = document.getElementById('checkDrillBtn');
if (checkDrillBtnEl) {
    checkDrillBtnEl.addEventListener('click', checkConjugation);
    const drillInputEl = document.getElementById('drillInput');
    if (drillInputEl) drillInputEl.addEventListener('keypress', e => { if (e.key === 'Enter') checkConjugation(); });
}

// ---- SENTENCE BUILDER ----
function initSentences() {
    currentSentence = SENTENCE_TEMPLATES[Math.floor(Math.random() * SENTENCE_TEMPLATES.length)];
    const prompt = document.getElementById('sentenceEnPrompt');
    if (prompt) prompt.textContent = currentSentence.en;

    const slots = document.getElementById('sentenceSlots');
    const tiles = document.getElementById('sentenceTiles');
    if (!slots || !tiles) return;
    slots.innerHTML = '';
    tiles.innerHTML = '';
    currentSelectedWords = [];

    let allWords = [...currentSentence.jp, ...currentSentence.distractors];
    shuffle(allWords);

    allWords.forEach(word => {
        const btn = document.createElement('div');
        btn.className = 'word-tile';
        btn.textContent = word;
        btn.onclick = () => selectWord(word, btn);
        tiles.appendChild(btn);
    });
}

function selectWord(word, btn) {
    if (btn.classList.contains('used')) return;
    btn.classList.add('used');
    currentSelectedWords.push(word);

    const slots = document.getElementById('sentenceSlots');
    const tile = document.createElement('div');
    tile.className = 'word-tile';
    tile.textContent = word;
    tile.onclick = () => unselectWord(word, tile, btn);
    slots.appendChild(tile);

    checkSentence();
}

function unselectWord(word, slotTile, originalBtn) {
    slotTile.remove();
    originalBtn.classList.remove('used');
    currentSelectedWords = currentSelectedWords.filter(w => w !== word);
    checkSentence();
}

function checkSentence() {
    const feedback = document.getElementById('sentenceFeedback');
    if (!feedback) return;
    if (currentSelectedWords.join('') === currentSentence.jp.join('')) {
        feedback.textContent = 'Perfect! 🌟';
        feedback.className = 'drill-feedback correct';
        setTimeout(initSentences, 2000);
    } else if (currentSelectedWords.length === currentSentence.jp.length) {
        feedback.textContent = 'Not quite right. Keep trying!';
        feedback.className = 'drill-feedback wrong';
    } else {
        feedback.textContent = '';
    }
}

// ---- READING ----
function initReading() {
    const grid = document.getElementById('readingList');
    const stage = document.getElementById('readingStage');
    if (!grid || !stage) return;
    grid.innerHTML = READING_PASSAGES.map((p, i) => `
        <div class="reading-item" onclick="openReading(${i})">
            <div class="reading-title">${p.title}</div>
            <div class="reading-desc">${p.jp.substring(0, 30)}...</div>
        </div>
    `).join('');
    grid.classList.remove('hidden');
    stage.classList.add('hidden');
}

function openReading(idx) {
    const p = READING_PASSAGES[idx];
    const grid = document.getElementById('readingList');
    const stage = document.getElementById('readingStage');
    if (!grid || !stage) return;
    grid.classList.add('hidden');
    stage.classList.remove('hidden');

    const textContent = document.getElementById('readingTextContent');
    if (textContent) textContent.innerHTML = `<ruby>${p.jp}</ruby><div style="margin-top:15px; font-size:0.85rem; color:var(--text-muted)">${p.en}</div>`;

    const qArea = document.getElementById('readingQuestions');
    if (qArea) {
        qArea.innerHTML = p.questions.map((q, qi) => `
            <div class="reading-q">
                <p>${q.q}</p>
                <div class="quiz-options">
                    ${q.options.map(o => `<div class="quiz-opt" onclick="checkReadingQ(this, '${o}', '${q.a}')">${o}</div>`).join('')}
                </div>
                <div id="readingFeedback-${qi}" class="drill-feedback"></div>
            </div>
        `).join('');
    }
}

function checkReadingQ(el, selected, correct) {
    const parent = el.parentElement;
    parent.querySelectorAll('.quiz-opt').forEach(opt => opt.classList.add('disabled'));
    if (selected === correct) {
        el.classList.add('correct');
    } else {
        el.classList.add('wrong');
    }
}

function closeReading() {
    initReading();
}

// ---- CONVERSATION ----
function initConversation() {
    const grid = document.getElementById('convoList');
    const stage = document.getElementById('convoStage');
    if (!grid || !stage) return;
    grid.innerHTML = CONVERSATIONS.map((c, i) => `
        <div class="convo-item" onclick="openConvo(${i})">
            <div class="convo-title">${c.title}</div>
            <div class="convo-desc">${c.desc}</div>
        </div>
    `).join('');
    grid.classList.remove('hidden');
    stage.classList.add('hidden');
}

function openConvo(idx) {
    const c = CONVERSATIONS[idx];
    const grid = document.getElementById('convoList');
    const stage = document.getElementById('convoStage');
    if (!grid || !stage) return;
    grid.classList.add('hidden');
    stage.classList.remove('hidden');

    const chat = document.getElementById('convoContent');
    if (!chat) return;
    chat.innerHTML = '';

    c.script.forEach((line, li) => {
        setTimeout(() => {
            const div = document.createElement('div');
            div.className = `convo-bubble bubble-${line.role}`;
            div.innerHTML = `
                <div class="jp"><ruby>${line.jp}</ruby></div>
                <div class="en" style="font-size:0.75rem;opacity:0.7;margin-top:4px">${line.en}</div>
            `;
            chat.appendChild(div);
            div.scrollIntoView({ behavior: 'smooth' });

            // Add TTS button if speak function exists
            if (typeof speak === 'function') {
                const btn = document.createElement('button');
                btn.className = 'action-btn';
                btn.style.marginLeft = '10px';
                btn.innerHTML = '🔊';
                btn.onclick = () => speak(line.jp);
                div.appendChild(btn);
            }
        }, li * 1500);
    });
}

function closeConvo() {
    initConversation();
}

// Utility
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ---- LISTENING JUMBLE ----
function initListening() {
    initSentences(); // Reuse sentence builder logic
    const slots = document.getElementById('sentenceSlots');
    const prompt = document.getElementById('sentenceEnPrompt');
    if (slots) slots.classList.add('listening-mode');
    if (prompt) prompt.classList.add('hidden');

    // Add a big play button
    if (slots && typeof speak === 'function') {
        const playBtn = document.createElement('button');
        playBtn.className = 'btn-primary listening-play-btn';
        playBtn.innerHTML = '🔊 Play Audio';
        playBtn.onclick = () => speak(currentSentence.jp.join(''));
        slots.appendChild(playBtn);
    }
}

// ---- EXAM SIMULATOR ----
let examTimer = null;
let examTimeLeft = 15 * 60;
let examQuestions = [];
let examIdx = 0;
let examAnswers = [];

function initExam() {
    const intro = document.getElementById('examIntro');
    const session = document.getElementById('examSession');
    if (intro) intro.classList.remove('hidden');
    if (session) session.classList.add('hidden');
}

const startExamBtnEl = document.getElementById('startExamBtn');
if (startExamBtnEl) {
    startExamBtnEl.addEventListener('click', () => {
        document.getElementById('examIntro').classList.add('hidden');
        document.getElementById('examSession').classList.remove('hidden');
        startExam();
    });
}

function startExam() {
    examTimeLeft = 15 * 60;
    examQuestions = generateQuizQuestions('mixed', 60); // 60 questions from all pools
    examIdx = 0;
    examAnswers = [];

    clearInterval(examTimer);
    examTimer = setInterval(() => {
        examTimeLeft--;
        const m = Math.floor(examTimeLeft / 60);
        const s = examTimeLeft % 60;
        const timerEl = document.getElementById('examTimer');
        if (timerEl) timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        if (examTimeLeft <= 0) endExam();
    }, 1000);

    renderExamQuestion();
}

function renderExamQuestion() {
    const area = document.getElementById('examArea');
    const progress = document.getElementById('examProgress');
    if (!area) return;
    if (examIdx >= examQuestions.length) {
        endExam();
        return;
    }

    const q = examQuestions[examIdx];
    if (progress) progress.textContent = `Question ${examIdx + 1} / ${examQuestions.length}`;

    const options = shuffle([q.a, ...q.distractors]);

    area.innerHTML = `
        <div class="exam-q-card animate-fade-in">
            <div class="exam-q-text">${q.q}</div>
            <div class="exam-options">
                ${options.map(o => `<div class="exam-opt" onclick="nextExamQ('${o}')">${o}</div>`).join('')}
            </div>
        </div>
    `;
}

function nextExamQ(answer) {
    examAnswers.push({ q: examQuestions[examIdx], user: answer });
    examIdx++;
    renderExamQuestion();
}

function endExam() {
    clearInterval(examTimer);
    const area = document.getElementById('examArea');
    if (!area) return;
    const correct = examAnswers.filter(a => a.user === a.q.a).length;
    const score = Math.round((correct / examQuestions.length) * 100);

    area.innerHTML = `
        <div class="stat-card" style="flex-direction:column; text-align:center; padding:40px;">
            <div style="font-size:4rem; margin-bottom:20px;">${score >= 70 ? '🎉' : '📚'}</div>
            <h2>Exam Results</h2>
            <div class="metric-value" style="font-size:4rem; margin:20px 0;">${score}%</div>
            <p style="font-size:1.2rem; color:var(--text-secondary);">${correct} / ${examQuestions.length} correct</p>
            <p style="margin:20px 0;">${score >= 70 ? 'You passed the mock exam! You are ready for the real N5.' : 'Not quite there yet. Keep reviewing your SRS deck!'}</p>
            <button onclick="initExam()" class="btn-primary" style="padding:12px 30px;">Restart Hub</button>
        </div>
    `;
}

function startAIExam(examData) {
    const intro = document.getElementById('examIntro');
    const session = document.getElementById('examSession');
    if (intro) intro.classList.add('hidden');
    if (session) session.classList.remove('hidden');

    examTimeLeft = 15 * 60;
    examQuestions = examData;
    examIdx = 0;
    examAnswers = [];

    clearInterval(examTimer);
    examTimer = setInterval(() => {
        examTimeLeft--;
        const m = Math.floor(examTimeLeft / 60);
        const s = examTimeLeft % 60;
        const timerEl = document.getElementById('examTimer');
        if (timerEl) timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        if (examTimeLeft <= 0) endExam();
    }, 1000);

    renderExamQuestion();
}

window.startAIExam = startAIExam;
window.initListening = initListening;
window.initExam = initExam;
window.nextExamQ = nextExamQ;

window.initConjugation = initConjugation;
window.initSentences = initSentences;
window.initReading = initReading;
window.initConversation = initConversation;
window.closeReading = closeReading;
window.closeConvo = closeConvo;
window.checkReadingQ = checkReadingQ;
window.openReading = openReading;
window.openConvo = openConvo;

const clearSentenceBtnEl = document.getElementById('clearSentence');
if (clearSentenceBtnEl) {
    clearSentenceBtnEl.addEventListener('click', () => {
        if (!currentSentence) return;
        const slots = document.getElementById('sentenceSlots');
        const tiles = document.getElementById('sentenceTiles');
        if (slots) slots.innerHTML = '';
        if (tiles) tiles.innerHTML = '';
        currentSelectedWords = [];
        let allWords = [...currentSentence.jp, ...currentSentence.distractors];
        shuffle(allWords);
        allWords.forEach(word => {
            const btn = document.createElement('div');
            btn.className = 'word-tile';
            btn.textContent = word;
            btn.onclick = () => selectWord(word, btn);
            tiles.appendChild(btn);
        });
        const feedback = document.getElementById('sentenceFeedback');
        if (feedback) {
            feedback.textContent = '';
            feedback.className = 'drill-feedback';
        }
    });
}

const checkSentenceBtnEl = document.getElementById('checkSentence');
if (checkSentenceBtnEl) checkSentenceBtnEl.addEventListener('click', checkSentence);

const backToConvoListBtn = document.getElementById('backToConvoList');
if (backToConvoListBtn) backToConvoListBtn.addEventListener('click', closeConvo);

const backToReadingListBtn = document.getElementById('backToReadingList');
if (backToReadingListBtn) backToReadingListBtn.addEventListener('click', closeReading);
