// ============================================
// JLPT N5 SRS Engine (Anki-style Decks)
// ============================================

const SRS_INTERVALS = [1, 10, 1440, 5760, 10080, 20160, 43200]; // in minutes
const SRS_LEVELS = ['Starter', 'Apprentice', 'Guru', 'Master', 'Enlightened', 'Burned'];

let currentSrsCard = null;
let currentDueCards = [];
let currentDeckId = 'default';

// Migration & Init
function initSRS() {
    // Migrate old flat structure to deck structure if needed
    if (state.srsDeck && !state.srsDecks) {
        state.srsDecks = [
            { id: 'default', name: 'Main Deck', cards: state.srsDeck }
        ];
        delete state.srsDeck;
        saveState();
    }
    if (!state.srsDecks) {
        state.srsDecks = [{ id: 'default', name: 'Main Deck', cards: [] }];
        saveState();
    }

    renderDecksDashboard();

    // Update global badge
    let totalDue = 0;
    const now = Date.now();
    state.srsDecks.forEach(deck => {
        totalDue += deck.cards.filter(c => c.nextReview <= now).length;
    });
    const badge = document.getElementById('srsBadge');
    if (badge) {
        badge.textContent = totalDue;
        badge.classList.toggle('hidden', totalDue === 0);
    }
    const counter = document.getElementById('srsCounter');
    if (counter) counter.textContent = `${totalDue} total cards due`;
}

function renderDecksDashboard() {
    document.getElementById('srsDecksDashboard').classList.remove('hidden');
    document.getElementById('srsDeckOverview').classList.add('hidden');
    document.getElementById('srsSession').classList.add('hidden');

    const dash = document.getElementById('srsDecksDashboard');
    dash.innerHTML = '';

    const now = Date.now();
    state.srsDecks.forEach(deck => {
        const dueCount = deck.cards.filter(c => c.nextReview <= now).length;
        const div = document.createElement('div');
        div.className = 'stat-card';
        div.style.cursor = 'pointer';
        div.style.position = 'relative';
        div.innerHTML = `
            <div style="font-size: 1.2rem; font-weight: 700; color: var(--primary);">${deck.name}</div>
            <div style="margin-top: 5px; color: var(--text-secondary);">${deck.cards.length} cards total</div>
            <div style="margin-top: 15px; font-weight: 700; ${dueCount > 0 ? 'color: var(--accent);' : 'color: var(--green);'}">
                ${dueCount > 0 ? dueCount + ' Cards Due' : 'All caught up! 🎉'}
            </div>
            <button class="delete-deck-btn" style="position:absolute; top:10px; right:10px; background:transparent; border:none; color:var(--text-muted); cursor:pointer; font-size:1.2rem;">&times;</button>
        `;
        
        // Prevent deck opening when clicking the delete button
        div.querySelector('.delete-deck-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            if(confirm(`Are you sure you want to delete "${deck.name}" and all its ${deck.cards.length} cards?`)) {
                state.srsDecks = state.srsDecks.filter(d => d.id !== deck.id);
                saveState();
                initSRS();
            }
        });

        div.addEventListener('click', () => openDeck(deck.id));
        dash.appendChild(div);
    });
}

document.getElementById('createDeckBtn').addEventListener('click', () => {
    const name = prompt("Enter a name for the new deck:");
    if (!name) return;
    const id = 'deck_' + Date.now();
    state.srsDecks.push({ id, name, cards: [] });
    saveState();
    renderDecksDashboard();
});

function openDeck(deckId) {
    currentDeckId = deckId;
    const deck = state.srsDecks.find(d => d.id === deckId);
    if (!deck) return;

    document.getElementById('srsDecksDashboard').classList.add('hidden');
    document.getElementById('srsDeckOverview').classList.remove('hidden');
    document.getElementById('srsSession').classList.add('hidden');

    document.getElementById('srsDeckName').textContent = deck.name;
    
    const now = Date.now();
    currentDueCards = deck.cards.filter(c => c.nextReview <= now);
    
    const msg = document.getElementById('srsDeckDueMsg');
    const startBtn = document.getElementById('beginSrs');

    if (currentDueCards.length > 0) {
        msg.textContent = `${currentDueCards.length} Cards Due`;
        startBtn.disabled = false;
        startBtn.textContent = "Start Review";
    } else {
        msg.textContent = `No cards due right now.`;
        startBtn.disabled = true;
        startBtn.textContent = "All caught up!";
    }
}

document.getElementById('beginSrs').addEventListener('click', startSrsSession);

function startSrsSession() {
    document.getElementById('srsDeckOverview').classList.add('hidden');
    document.getElementById('srsSession').classList.remove('hidden');
    shuffle(currentDueCards);
    nextSrsCard();
}

function nextSrsCard() {
    if (currentDueCards.length === 0) {
        alert('🎉 All reviews for this deck completed! Great job.');
        initSRS();
        return;
    }

    currentSrsCard = currentDueCards[0];
    const cardEl = document.getElementById('srsCard');
    cardEl.classList.remove('flipped');

    document.getElementById('srsCardType').textContent = currentSrsCard.type.toUpperCase();
    document.getElementById('srsQuestion').textContent = currentSrsCard.q;
    document.getElementById('srsReading').textContent = currentSrsCard.r || '';
    document.getElementById('srsAnswer').textContent = currentSrsCard.a;
    document.getElementById('srsExample').textContent = currentSrsCard.ex || '';

    // Dynamic Button Intervals
    const step = currentSrsCard.step || 0;
    
    function formatInterval(minutes) {
        if (minutes < 60) return `${minutes}m`;
        if (minutes < 1440) return `${Math.round(minutes/60)}h`;
        return `${Math.round(minutes/1440)}d`;
    }

    document.querySelector('.srs-btn.again').textContent = `Again (<10m)`;
    
    const hardStep = Math.min(step + 1, SRS_INTERVALS.length - 1);
    document.querySelector('.srs-btn.hard').textContent = `Hard (${formatInterval(SRS_INTERVALS[hardStep])})`;

    const goodStep = Math.min(step + 2, SRS_INTERVALS.length - 1);
    document.querySelector('.srs-btn.good').textContent = `Good (${formatInterval(SRS_INTERVALS[goodStep])})`;

    const easyStep = Math.min(step + 3, SRS_INTERVALS.length - 1);
    document.querySelector('.srs-btn.easy').textContent = `Easy (${formatInterval(SRS_INTERVALS[easyStep])})`;

    if (currentSrsCard.q.length > 4) {
        document.getElementById('srsQuestion').style.fontSize = '2.5rem';
    } else {
        document.getElementById('srsQuestion').style.fontSize = '5rem';
    }
}

document.getElementById('srsFlipBtn').addEventListener('click', () => {
    document.getElementById('srsCard').classList.add('flipped');
});

document.querySelectorAll('.srs-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const grade = parseInt(btn.dataset.grade);
        handleSrsGrade(grade);
    });
});

function handleSrsGrade(grade) {
    const cardId = currentSrsCard.id;
    const deck = state.srsDecks.find(d => d.id === currentDeckId);
    const deckCard = deck.cards.find(c => c.id === cardId);

    if (!deckCard.step) deckCard.step = 0;

    if (grade === 0) {
        deckCard.step = 0;
        deckCard.interval = 1;
    } else {
        if (deckCard.step < SRS_INTERVALS.length - 1) {
            deckCard.step += grade;
            if (deckCard.step >= SRS_INTERVALS.length) deckCard.step = SRS_INTERVALS.length - 1;
        }
        deckCard.interval = SRS_INTERVALS[deckCard.step];
    }

    deckCard.nextReview = Date.now() + (deckCard.interval * 60 * 1000);
    saveState();

    currentDueCards.shift();
    nextSrsCard();
}

function addToSRS(type, q, a, r = '', ex = '') {
    if (!state.srsDecks || state.srsDecks.length === 0) {
        state.srsDecks = [{ id: 'default', name: 'Main Deck', cards: [] }];
    }
    
    // Add to default deck (first one) unless specified
    const targetDeck = state.srsDecks.find(d => d.id === currentDeckId) || state.srsDecks[0];
    const id = `${type}_${q}`;
    
    if (targetDeck.cards.some(c => c.id === id)) {
        alert('This card is already in this deck!');
        return;
    }

    targetDeck.cards.push({
        id, type, q, a, r, ex,
        step: 0,
        interval: 1,
        nextReview: Date.now()
    });
    saveState();
    initSRS();
    alert(`✅ Added to deck: ${targetDeck.name}!`);
}

window.initSRS = initSRS;
window.renderDecksDashboard = renderDecksDashboard;
window.addToSRS = addToSRS;
