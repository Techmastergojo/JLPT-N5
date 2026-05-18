// ============================================
// JLPT N5 Study Tracker — Application Logic
// ============================================

// Romaji to Hiragana converter
function toHiragana(text) {
    if (!text) return '';
    text = text.toLowerCase().trim();
    const map = {
        'kya': 'きゃ', 'kyu': 'きゅ', 'kyo': 'きょ',
        'sha': 'しゃ', 'shu': 'しゅ', 'sho': 'しょ',
        'cha': 'ちゃ', 'chu': 'ちゅ', 'cho': 'ちょ',
        'nya': 'にゃ', 'nyu': 'にゅ', 'nyo': 'にょ',
        'hya': 'ひゃ', 'hyu': 'ひゅ', 'hyo': 'ひょ',
        'mya': 'みゃ', 'myu': 'みゅ', 'myo': 'みょ',
        'rya': 'りゃ', 'ryu': 'りゅ', 'ryo': 'りょ',
        'gya': 'ぎゃ', 'gyu': 'ぎゅ', 'gyo': 'ぎょ',
        'ja': 'じゃ', 'ju': 'じゅ', 'jo': 'じょ',
        'bya': 'びゃ', 'byu': 'びゅ', 'byo': 'びょ',
        'pya': 'ぴゃ', 'pyu': 'ぴゅ', 'pyo': 'ぴょ',
        'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ',
        'sa': 'さ', 'shi': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ',
        'ta': 'た', 'chi': 'ち', 'tsu': 'つ', 'te': 'て', 'to': 'と',
        'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の',
        'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ',
        'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も',
        'ya': 'や', 'yu': 'ゆ', 'yo': 'よ',
        'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ',
        'wa': 'わ', 'wo': 'を', 'nn': 'ん', 'n': 'ん',
        'ga': 'が', 'gi': 'ぎ', 'gu': 'ぐ', 'ge': 'げ', 'go': 'ご',
        'za': 'ざ', 'ji': 'じ', 'zu': 'ず', 'ze': 'ぜ', 'zo': 'ぞ',
        'da': 'だ', 'de': 'で', 'do': 'ど',
        'ba': 'ば', 'bi': 'び', 'bu': 'ぶ', 'be': 'べ', 'bo': 'ぼ',
        'pa': 'ぱ', 'pi': 'ぴ', 'pu': 'ぷ', 'pe': 'ぺ', 'po': 'ぽ',
        'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お',
        '-': 'ー'
    };
    let res = '';
    let i = 0;
    while (i < text.length) {
        if (i < text.length - 1 && text[i] === text[i+1] && !'aeiou'.includes(text[i]) && text[i] !== 'n') {
            res += 'っ';
            i++;
            continue;
        }
        let found = false;
        for (let len = 3; len >= 1; len--) {
            if (i + len <= text.length) {
                let sub = text.substring(i, i + len);
                if (map[sub]) {
                    res += map[sub];
                    i += len;
                    found = true;
                    break;
                }
            }
        }
        if (!found) {
            res += text[i];
            i++;
        }
    }
    return res;
}

// ---- STATE ----
let currentUser = localStorage.getItem('jlpt_current_user') || 'default';
let STATE_KEY = 'jlpt_n5_tracker_' + currentUser;

// Migrate old data if present and new key is empty
if (currentUser === 'default' && !localStorage.getItem(STATE_KEY) && localStorage.getItem('jlpt_n5_tracker')) {
    localStorage.setItem(STATE_KEY, localStorage.getItem('jlpt_n5_tracker'));
}

function getSavedUsers() {
    try {
        const users = JSON.parse(localStorage.getItem('jlpt_users'));
        if (Array.isArray(users) && users.length > 0) return users;
    } catch(e) {}
    return ['default'];
}

function saveUsers(users) {
    localStorage.setItem('jlpt_users', JSON.stringify(users));
}

let state = loadState();

function defaultState() {
    return {
        currentDay: 1,
        completedDays: [],
        kanjiMastered: [],
        vocabMastered: [],
        grammarMastered: [],
        checkItems: {},
        studyMinutes: 0,
        sessions: [],
        streak: 0,
        lastStudyDate: null,
        quizScores: [],
        srsDeck: [],
        settings: {
            theme: 'dark',
            furigana: false,
            notifications: false
        },
        mnemonics: {}
    };
}
function loadState() {
    try { const s = JSON.parse(localStorage.getItem(STATE_KEY)); return s ? { ...defaultState(), ...s } : defaultState(); }
    catch { return defaultState(); }
}
function saveState() { localStorage.setItem(STATE_KEY, JSON.stringify(state)); updateDashboard(); }

// ---- PRELOADER ----
window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('preloader').classList.add('hidden'), 2000);
});

// ---- NAVIGATION ----
const navLinks = document.querySelectorAll('.nav-links a');
const views = document.querySelectorAll('.view');
const sidebar = document.getElementById('sidebar');
const mobileToggle = document.getElementById('mobileToggle');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const viewId = link.dataset.view;
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        views.forEach(v => v.classList.remove('active'));
        const targetView = document.getElementById('view-' + viewId);
        if (targetView) targetView.classList.add('active');

        // Trigger specific view renders
        if (viewId === 'srs') if (window.initSRS) initSRS();
        if (viewId === 'conjugation') if (window.initConjugation) initConjugation();
        if (viewId === 'sentences') if (window.initSentences) initSentences();
        if (viewId === 'conversation') if (window.initConversation) initConversation();
        if (viewId === 'reading') if (window.initReading) initReading();
        if (viewId === 'exam') if (window.initExam) initExam();

        if (viewId === 'kanji') renderKanjiBank();
        if (viewId === 'vocab') renderVocab();
        if (viewId === 'grammar') renderGrammar();
        if (viewId === 'particles') renderParticles();
        if (viewId === 'reading') if (window.initReading) initReading();
        if (viewId === 'quiz') if (window.initQuiz) initQuiz();
        if (viewId === 'timer') if (window.initTimer) initTimer();
        if (viewId === 'exam') if (window.initExam) initExam();
        if (viewId === 'dashboard') updateDashboard();

        if (window.innerWidth < 768) {
            sidebar.classList.remove('active');
        }
    });
});

window.showView = function(viewId) {
    const link = document.querySelector(`.nav-links a[data-view="${viewId}"]`);
    if (link) {
        link.click();
    } else {
        views.forEach(v => v.classList.remove('active'));
        const targetView = document.getElementById('view-' + viewId);
        if (targetView) targetView.classList.add('active');
    }
};
mobileToggle.addEventListener('click', () => sidebar.classList.toggle('open'));

// ---- THEME & FURIGANA ----
const themeToggle = document.getElementById('themeToggle');
const furiganaToggle = document.getElementById('furiganaToggle');

function applySettings() {
    document.body.classList.toggle('light-mode', state.settings.theme === 'light');
    document.body.classList.toggle('show-furigana', state.settings.furigana);
    themeToggle.innerHTML = state.settings.theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode';
    furiganaToggle.classList.toggle('active', state.settings.furigana);
}

themeToggle.addEventListener('click', () => {
    state.settings.theme = state.settings.theme === 'light' ? 'dark' : 'light';
    saveState();
    applySettings();
});

furiganaToggle.addEventListener('click', () => {
    state.settings.furigana = !state.settings.furigana;
    saveState();
    applySettings();
});

applySettings();

// ---- DATE DISPLAY ----
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const now = new Date();
document.getElementById('dateDisplay').textContent = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

// ---- MOTIVATIONAL QUOTES ----
const quotes = [
    "「七転び八起き」— Fall seven times, stand up eight.",
    "「継続は力なり」— Continuity is strength.",
    "「一生懸命」— With all one's might.",
    "「石の上にも三年」— Persistence pays off (3 years on a stone).",
    "「千里の道も一歩から」— A journey of a thousand miles begins with a single step.",
    "「猿も木から落ちる」— Even monkeys fall from trees (everyone makes mistakes).",
    "「能ある鷹は爪を隠す」— A talented hawk hides its claws (humility in skill).",
    "「花より団子」— Dumplings over flowers (substance over style).",
    "「急がば回れ」— If in a hurry, take the detour (slow and steady).",
    "「雨降って地固まる」 Rain hardens the ground (adversity builds strength).",
];
document.getElementById('dailyQuote').textContent = quotes[now.getDate() % quotes.length];

// ---- DASHBOARD ----
function getPhase(day) {
    if (day <= 7) return { num: 1, name: 'Phase I: Orthographic Foundation', color: 'var(--phase-1)' };
    if (day <= 14) return { num: 2, name: 'Phase II: Verbal Mechanics', color: 'var(--phase-2)' };
    if (day <= 21) return { num: 3, name: 'Phase III: Description & Awareness', color: 'var(--phase-3)' };
    return { num: 4, name: 'Phase IV: Synthesis & Exam Readiness', color: 'var(--phase-4)' };
}

function updateDashboard() {
    const cd = state.completedDays.length;
    const km = state.kanjiMastered.length;
    const vm = state.vocabMastered.length;
    const gm = state.grammarMastered.length;

    const streakEl = document.getElementById('dashStreak');
    if (streakEl) streakEl.textContent = state.streak + ' days';

    // Phase calculation
    const currentPhase = getPhase(state.currentDay);
    const phaseNumEl = document.getElementById('phaseNum');
    if (phaseNumEl) phaseNumEl.textContent = currentPhase.num;
    const phaseNameEl = document.getElementById('phaseName');
    if (phaseNameEl) {
        phaseNameEl.textContent = currentPhase.name;
        phaseNameEl.style.color = currentPhase.color;
    }

    // Phase 3 Metrics
    // updateConsistencyMetrics(); // Removed alongside analytics features
    if (window.initCustomCards) window.initCustomCards();

    const setElText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setElText('kanjiMastered', km);
    setElText('vocabMastered', vm);
    setElText('grammarMastered', gm);
    setElText('totalStudyTime', Math.floor(state.studyMinutes / 60) + 'h ' + (state.studyMinutes % 60) + 'm');

    const totalTasks = Object.values(state.checkItems).filter(v => v).length;
    setElText('tasksCompleted', totalTasks);

    const dp = Math.round((cd / 30) * 100);
    const kp = Math.round((km / 120) * 100);
    const vp = Math.round((vm / VOCAB_DATA.length) * 100);
    const gp = Math.round((gm / GRAMMAR_DATA.length) * 100);

    const setProgress = (idFill, idPercent, percent) => {
        const fill = document.getElementById(idFill);
        const text = document.getElementById(idPercent);
        if (fill) fill.style.width = percent + '%';
        if (text) text.textContent = percent + '%';
    };

    setProgress('daysFill', 'daysPercent', dp);
    setProgress('kanjiFill', 'kanjiPercent', kp);
    setProgress('vocabFill', 'vocabPercent', vp);
    setProgress('grammarFill', 'grammarPercent', gp);

    setElText('phaseBadge', 'Phase ' + 'I'.repeat(currentPhase.num > 3 ? 0 : currentPhase.num) + (currentPhase.num === 4 ? 'IV' : ''));
    setElText('currentDayBadge', state.currentDay);

    const overallPct = (dp + kp + vp + gp) / 4 / 100;
    const estVGR = Math.round(60 * Math.min(1, overallPct * 1.15));
    const estListen = Math.round(60 * Math.min(1, overallPct * 0.85));
    
    const estVGREl = document.getElementById('estVGR');
    if (estVGREl) estVGREl.innerHTML = estVGR + ' <span>/ 60</span>';
    const estListeningEl = document.getElementById('estListening');
    if (estListeningEl) estListeningEl.innerHTML = estListen + ' <span>/ 60</span>';
    const estTotalEl = document.getElementById('estTotal');
    const total = estVGR + estListen;
    if (estTotalEl) estTotalEl.innerHTML = total + ' <span>/ 180</span>';

    const lesson = DAILY_LESSONS.find(l => l.day === state.currentDay);
    if (lesson) {
        const todayEl = document.getElementById('todayOverview');
        if (todayEl) {
            todayEl.innerHTML = `
                <h4>Day ${lesson.day}: ${lesson.title}</h4>
                <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:8px">${lesson.subtitle}</p>
                <ul>${lesson.blocks.map(b => '<li>' + b.title + ' (' + b.items.length + ' items)</li>').join('')}</ul>
                <button onclick="navigateToDay(${lesson.day})" style="margin-top:12px;padding:8px 20px;background:var(--red);color:white;border:none;border-radius:6px;cursor:pointer;font-weight:600">Go to Today's Lesson →</button>
            `;
        }
    }
    if (window.updateCultureTidbit) window.updateCultureTidbit();
}

function navigateToDay(day) {
    state.currentDay = day;
    saveState();
    document.querySelector('[data-view="daily"]').click();
    renderDailyLesson(day);
}


// ---- CALENDAR ----
function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    if (!grid) return;
    grid.innerHTML = '';
    DAILY_LESSONS.forEach(lesson => {
        const div = document.createElement('div');
        const completed = state.completedDays.includes(lesson.day);
        const isToday = lesson.day === state.currentDay;
        div.className = `cal-day phase-${lesson.phase}${completed ? ' completed' : ''}${isToday ? ' today' : ''}`;
        div.innerHTML = `
            <div class="cal-day-num">${lesson.day}</div>
            <div class="cal-day-title">${lesson.title}</div>
            ${completed ? '<div class="cal-day-check">✅</div>' : ''}
        `;
        div.addEventListener('click', () => navigateToDay(lesson.day));
        grid.appendChild(div);
    });
}

// Analytics and Social Sync sections removed

// ---- DAILY LESSONS ----
const daySelect = document.getElementById('daySelect');
for (let i = 1; i <= 30; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = 'Day ' + i;
    daySelect.appendChild(opt);
}
daySelect.addEventListener('change', () => renderDailyLesson(parseInt(daySelect.value)));
document.getElementById('prevDay').addEventListener('click', () => {
    const d = Math.max(1, parseInt(daySelect.value) - 1);
    daySelect.value = d;
    renderDailyLesson(d);
});
document.getElementById('nextDay').addEventListener('click', () => {
    const d = Math.min(30, parseInt(daySelect.value) + 1);
    daySelect.value = d;
    renderDailyLesson(d);
});

function renderDailyLesson(day) {
    const lesson = DAILY_LESSONS.find(l => l.day === day);
    if (!lesson) return;
    daySelect.value = day;
    document.getElementById('dailyTitle').textContent = `Day ${day}: ${lesson.title}`;
    document.getElementById('dailySubtitle').textContent = lesson.subtitle;
    const container = document.getElementById('dailyContent');
    container.innerHTML = '';

    lesson.blocks.forEach((block, bi) => {
        const blockEl = document.createElement('div');
        blockEl.className = 'lesson-block';
        let itemsHtml = block.items.map((item, ii) => {
            const key = `d${day}_b${bi}_i${ii}`;
            const checked = state.checkItems[key] || false;
            return `<div class="check-item${checked ? ' done' : ''}">
                <input type="checkbox" data-key="${key}" ${checked ? 'checked' : ''}>
                <span class="check-text">${item}</span>
            </div>`;
        }).join('');

        blockEl.innerHTML = `
            <div class="lesson-block-header"><h4>${block.title}</h4></div>
            <div class="lesson-block-body">${itemsHtml}</div>
        `;
        container.appendChild(blockEl);
    });

    const completed = state.completedDays.includes(day);
    const btn = document.createElement('button');
    btn.className = 'day-complete-btn' + (completed ? ' completed' : '');
    btn.textContent = completed ? '✅ Day Completed! (Click to undo)' : '✅ Mark Day as Complete';
    btn.addEventListener('click', () => {
        if (state.completedDays.includes(day)) {
            state.completedDays = state.completedDays.filter(d => d !== day);
        } else {
            state.completedDays.push(day);
            // Auto advance to next day if completing current day
            if (day === state.currentDay && day < 30) {
                state.currentDay++;
            }
            updateStreak();
        }
        saveState();
        // Always render the advanced or current day to keep UI in sync
        renderDailyLesson(state.currentDay);
        renderCalendar();
    });
    container.appendChild(btn);

    container.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => {
            state.checkItems[cb.dataset.key] = cb.checked;
            cb.closest('.check-item').classList.toggle('done', cb.checked);
            saveState();
        });
    });
}

function updateStreak() {
    const today = new Date().toDateString();
    if (state.lastStudyDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    state.streak = (state.lastStudyDate === yesterday) ? state.streak + 1 : 1;
    state.lastStudyDate = today;
}

// ---- KANJI BANK ----
function renderKanjiBank() {
    const grid = document.getElementById('kanjiGrid');
    const weekFilter = document.getElementById('kanjiWeekFilter').value;
    const statusFilter = document.getElementById('kanjiStatusFilter').value;

    let filtered = KANJI_DATA;
    if (weekFilter !== 'all') filtered = filtered.filter(k => k.week === parseInt(weekFilter));
    if (statusFilter === 'mastered') filtered = filtered.filter(k => state.kanjiMastered.includes(k.char));
    if (statusFilter === 'learning') filtered = filtered.filter(k => !state.kanjiMastered.includes(k.char));

    grid.innerHTML = filtered.map(k => {
        const mastered = state.kanjiMastered.includes(k.char);
        return `<div class="kanji-card${mastered ? ' mastered' : ''}" onclick="openKanjiModal('${k.char}')">
            <div class="kanji-star" data-char="${k.char}" onclick="event.stopPropagation(); toggleKanjiMastery('${k.char}')">${mastered ? '⭐' : '☆'}</div>
            <div class="kanji-char">${k.char}</div>
            <div class="kanji-reading">${k.on} / ${k.kun}</div>
            <div class="kanji-meaning">${k.meaning}</div>
            <div class="card-actions">
                <button class="action-btn" onclick="event.stopPropagation(); speak('${k.char}')" title="Pronounce">🔊</button>
                <button class="action-btn" onclick="event.stopPropagation(); addToSRS('kanji', '${k.char}', '${k.meaning}', '${k.on} / ${k.kun}')" title="Add to Reviews">+</button>
            </div>
        </div>`;
    }).join('');
}

function toggleKanjiMastery(char) {
    if (state.kanjiMastered.includes(char)) {
        state.kanjiMastered = state.kanjiMastered.filter(c => c !== char);
    } else {
        state.kanjiMastered.push(char);
    }
    saveState();
    renderKanjiBank();
}
document.getElementById('kanjiWeekFilter').addEventListener('change', renderKanjiBank);
document.getElementById('kanjiStatusFilter').addEventListener('change', renderKanjiBank);

// ---- VOCABULARY ----
function renderVocab() {
    const list = document.getElementById('vocabList');
    const search = document.getElementById('vocabSearch').value.toLowerCase();
    const catFilter = document.getElementById('vocabCategoryFilter').value;

    let filtered = VOCAB_DATA;
    if (catFilter !== 'all') filtered = filtered.filter(v => v.cat === catFilter);
    if (search) filtered = filtered.filter(v => v.jp.includes(search) || v.en.toLowerCase().includes(search) || (v.r && v.r.includes(search)));

    list.innerHTML = filtered.map(v => {
        const mastered = state.vocabMastered.includes(v.jp);
        return `<div class="vocab-item${mastered ? ' mastered' : ''}">
            <div class="vocab-jp">
                <ruby>${v.jp}<rt>${v.r || ''}</rt></ruby>
            </div>
            <div>
                 <div class="vocab-en">${v.en}</div>
                 <div class="vocab-cat">${v.cat}</div>
            </div>
            <div class="vocab-actions">
                <span class="vocab-star" onclick="toggleVocabMastery('${v.jp}')">${mastered ? '⭐' : '☆'}</span>
                <button class="action-btn" onclick="speak('${v.jp}')">🔊</button>
                <button class="action-btn" onclick="addToSRS('vocab', '${v.jp}', '${v.en}', '${v.r || ''}')">+</button>
            </div>
        </div>`;
    }).join('');
}

function toggleVocabMastery(jp) {
    if (state.vocabMastered.includes(jp)) {
        state.vocabMastered = state.vocabMastered.filter(v => v !== jp);
    } else {
        state.vocabMastered.push(jp);
    }
    saveState();
    renderVocab();
}

const cats = [...new Set(VOCAB_DATA.map(v => v.cat))];
const catSelect = document.getElementById('vocabCategoryFilter');
cats.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; catSelect.appendChild(o); });
document.getElementById('vocabSearch').addEventListener('input', renderVocab);
catSelect.addEventListener('change', renderVocab);

// ---- GRAMMAR ----
function renderGrammar() {
    const list = document.getElementById('grammarList');
    const weekFilter = document.getElementById('grammarWeekFilter').value;
    let filtered = GRAMMAR_DATA;
    if (weekFilter !== 'all') filtered = filtered.filter(g => g.week === parseInt(weekFilter));

    list.innerHTML = filtered.map(g => {
        const mastered = state.grammarMastered.includes(g.jp);
        return `<div class="grammar-card${mastered ? ' mastered' : ''}">
            <div class="grammar-header">
                <span class="grammar-pattern">${g.jp}</span>
                <span class="grammar-star" onclick="toggleGrammarMastery('${g.jp}')">${mastered ? '⭐' : '☆'}</span>
            </div>
            <div class="grammar-meaning">${g.en}</div>
            <div class="grammar-example">
                <ruby>${g.ex}<rt>${g.ex_r || ''}</rt></ruby>
                <div class="ex-en">${g.ex_en}</div>
            </div>
            <div class="grammar-actions">
                 <button class="action-btn" onclick="addToSRS('grammar', '${g.jp}', '${g.en}', '${g.ex_r || ''}', '${g.ex}')">Add to Reviews</button>
            </div>
        </div>`;
    }).join('');
}

function toggleGrammarMastery(jp) {
    if (state.grammarMastered.includes(jp)) {
        state.grammarMastered = state.grammarMastered.filter(g => g !== jp);
    } else {
        state.grammarMastered.push(jp);
    }
    saveState();
    renderGrammar();
}
document.getElementById('grammarWeekFilter').addEventListener('change', renderGrammar);

// ---- PARTICLES ----
function renderParticles() {
    const list = document.getElementById('particlesList');
    list.innerHTML = PARTICLES_DATA.map(p => `
        <div class="particle-card">
            <div class="particle-char">${p.char}</div>
            <div class="particle-info">
                <h4>${p.name} — ${p.func}</h4>
                <div class="particle-desc">${p.desc}</div>
                <div class="particle-examples">
                    ${p.examples.map(ex => `<div class="particle-ex"><span class="jp">${ex.jp}</span><span class="en"> — ${ex.en}</span></div>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ---- TTS UTILITY ----
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

// ---- QUIZ ----
let quizQuestions = [];
let quizIndex = 0;
let quizCorrect = 0;

document.getElementById('startQuiz').addEventListener('click', startQuiz);

function startQuiz() {
    const type = document.getElementById('quizType').value;
    quizQuestions = generateQuizQuestions(type, 10);
    quizIndex = 0;
    quizCorrect = 0;
    document.getElementById('quizResult').classList.remove('show');
    renderQuizQuestion();
}

function generateQuizQuestions(type, count) {
    let pool = [];
    if (type === 'kanji' || type === 'mixed') {
        KANJI_DATA.forEach(k => pool.push({ q: k.char, a: k.meaning, type: 'kanji', distractors: getDistractors(k.meaning, KANJI_DATA.map(x => x.meaning)) }));
    }
    if (type === 'vocab' || type === 'mixed') {
        const vocabSample = shuffle([...VOCAB_DATA]).slice(0, 60);
        vocabSample.forEach(v => pool.push({ q: v.jp, a: v.en, type: 'vocab', distractors: getDistractors(v.en, VOCAB_DATA.map(x => x.en)) }));
    }
    if (type === 'grammar' || type === 'mixed') {
        GRAMMAR_DATA.forEach(g => pool.push({ q: g.jp, a: g.en, type: 'grammar', distractors: getDistractors(g.en, GRAMMAR_DATA.map(x => x.en)) }));
    }
    if (type === 'particle') {
        PARTICLES_DATA.forEach(p => pool.push({ q: p.char, a: p.func, type: 'particle', distractors: getDistractors(p.func, PARTICLES_DATA.map(x => x.func)) }));
    }
    shuffle(pool);
    return pool.slice(0, count);
}

function getDistractors(correct, allAnswers) {
    const others = allAnswers.filter(a => a !== correct);
    shuffle(others);
    return others.slice(0, 3);
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function renderQuizQuestion() {
    const area = document.getElementById('quizArea');
    if (quizIndex >= quizQuestions.length) {
        area.innerHTML = '';
        showQuizResult();
        return;
    }
    const q = quizQuestions[quizIndex];
    const options = shuffle([q.a, ...q.distractors]);

    area.innerHTML = `
        <div class="quiz-question">
            <div class="quiz-q-num">Question ${quizIndex + 1} / ${quizQuestions.length} — ${q.type}</div>
            <div class="quiz-q-text">${q.q}</div>
            <div class="quiz-options">
                ${options.map(o => `<div class="quiz-opt" data-answer="${o}">${o}</div>`).join('')}
            </div>
        </div>
    `;

    area.querySelectorAll('.quiz-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            area.querySelectorAll('.quiz-opt').forEach(o => {
                o.classList.add('disabled');
                if (o.dataset.answer === q.a) o.classList.add('correct');
                if (o === opt && o.dataset.answer !== q.a) o.classList.add('wrong');
            });
            if (opt.dataset.answer === q.a) quizCorrect++;
            setTimeout(() => { quizIndex++; renderQuizQuestion(); }, 1200);
        });
    });
}

function showQuizResult() {
    const result = document.getElementById('quizResult');
    const pct = Math.round((quizCorrect / quizQuestions.length) * 100);
    result.classList.add('show');
    result.innerHTML = `
        <div class="quiz-score ${pct >= 70 ? 'pass' : 'fail'}">${quizCorrect}/${quizQuestions.length}</div>
        <p>${pct}% — ${pct >= 90 ? '素晴らしい! Amazing!' : pct >= 70 ? 'よくできました! Good job!' : pct >= 50 ? 'もう少し! Almost there!' : 'がんばって! Keep studying!'}</p>
        <button onclick="startQuiz()" class="btn-primary" style="margin-top:16px">Try Again</button>
    `;
    state.quizScores.push({ score: quizCorrect, total: quizQuestions.length, date: new Date().toISOString() });
    saveState();
}

// ---- STUDY TIMER ----
let timerInterval = null;
let timerSeconds = 25 * 60;
let timerTotal = 25 * 60;
let timerRunning = false;

const timerText = document.getElementById('timerText');
const timerCircle = document.getElementById('timerCircle');
const circumference = 2 * Math.PI * 90;
timerCircle.style.strokeDasharray = circumference;

function updateTimerDisplay() {
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    timerText.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    const offset = circumference * (1 - timerSeconds / timerTotal);
    timerCircle.style.strokeDashoffset = offset;
}

document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        timerSeconds = parseInt(btn.dataset.time) * 60;
        timerTotal = timerSeconds;
        timerRunning = false;
        clearInterval(timerInterval);
        document.getElementById('timerStart').disabled = false;
        document.getElementById('timerPause').disabled = true;
        updateTimerDisplay();
    });
});

document.getElementById('timerStart').addEventListener('click', () => {
    if (timerRunning) return;
    timerRunning = true;
    document.getElementById('timerStart').disabled = true;
    document.getElementById('timerPause').disabled = false;
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            const mins = Math.floor(timerTotal / 60);
            state.studyMinutes += mins;
            state.sessions.push({ mins, time: new Date().toLocaleTimeString() });
            updateStreak();
            saveState();
            renderSessionLog();
            document.getElementById('timerStart').disabled = false;
            document.getElementById('timerPause').disabled = true;
            try { new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbsGczGR+Isda2dy0ZEYa62sFpKBUIcaXMx3UuGA15rNbBZCMVCX').play(); } catch { }
            alert('⏰ Time is up! 頑張りました！');
        }
    }, 1000);
});

document.getElementById('timerPause').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('timerStart').disabled = false;
    document.getElementById('timerPause').disabled = true;
});

document.getElementById('timerReset').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerRunning = false;
    const active = document.querySelector('.preset-btn.active') || { dataset: { time: 25 } };
    timerSeconds = parseInt(active.dataset.time) * 60;
    timerTotal = timerSeconds;
    document.getElementById('timerStart').disabled = false;
    document.getElementById('timerPause').disabled = true;
    updateTimerDisplay();
});

function renderSessionLog() {
    const log = document.getElementById('sessionLog');
    const todaySessions = state.sessions.slice(-10);
    log.innerHTML = todaySessions.map(s => `<div class="session-entry"><span>${s.time}</span><span>${s.mins} min</span></div>`).join('') || '<p style="color:var(--text-muted);font-size:0.82rem">No sessions yet today</p>';
    document.getElementById('totalToday').textContent = state.sessions.reduce((a, s) => a + s.mins, 0) + ' min';
}

// ---- IMPORT / EXPORT STORAGE ----
document.getElementById('exportBtn').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jlpt_n5_progress.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

document.getElementById('importBtn').addEventListener('click', () => {
    document.getElementById('importFile').click();
});

document.getElementById('importFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        try {
            const imported = JSON.parse(ev.target.result);
            state = { ...defaultState(), ...imported };
            saveState();
            renderAll();
            alert('✅ Progress imported successfully! がんばって！');
        } catch (err) {
            alert('❌ Invalid file. Please select a valid jlpt_n5_progress.json file.');
        }
    };
    reader.readAsText(file);
    e.target.value = '';
});

// ---- RESET ----
document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('⚠️ Are you sure you want to reset ALL progress? This cannot be undone!')) {
        state = defaultState();
        saveState();
        renderAll();
    }
});

// ---- INIT ----
function initUserSelect() {
    const userSelect = document.getElementById('userSelect');
    if (!userSelect) return;
    
    const users = getSavedUsers();
    userSelect.innerHTML = '';
    users.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u;
        opt.textContent = u === 'default' ? 'Default User' : u;
        userSelect.appendChild(opt);
    });
    
    const addOpt = document.createElement('option');
    addOpt.value = 'add_new';
    addOpt.textContent = '+ Add New User...';
    userSelect.appendChild(addOpt);
    
    userSelect.value = currentUser;
    
    userSelect.addEventListener('change', (e) => {
        if (e.target.value === 'add_new') {
            const newName = prompt('Enter new user name:');
            if (newName && newName.trim().length > 0 && newName !== 'add_new') {
                const name = newName.trim();
                const currentUsers = getSavedUsers();
                if (!currentUsers.includes(name)) {
                    currentUsers.push(name);
                    saveUsers(currentUsers);
                }
                switchUser(name);
            } else {
                e.target.value = currentUser;
            }
        } else {
            switchUser(e.target.value);
        }
    });
}

function switchUser(username) {
    if(!username) return;
    saveState(); // Save current user's state before switching
    currentUser = username;
    localStorage.setItem('jlpt_current_user', username);
    STATE_KEY = 'jlpt_n5_tracker_' + username;
    state = loadState();
    
    // Re-init dropdown to show newly selected user
    initUserSelect();
    
    // Re-render everything with new state
    renderAll();
}

function renderAll() {
    updateDashboard();
    renderCalendar();
    renderDailyLesson(state.currentDay);
    renderKanjiBank();
    renderVocab();
    renderGrammar();
    renderParticles();
    renderSessionLog();
    updateTimerDisplay();
}

renderAll();
initUserSelect();

// ---- SERVICE WORKER (PWA) ----
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(() => {
            console.log('Service Worker Registered');
        }).catch(err => {
            console.log('Service Worker Registration Failed', err);
        });
    });
}
