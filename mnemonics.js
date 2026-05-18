// ============================================
// Kanji & Vocab Mnemonic Logic
// ============================================

function initMnemonics() {
    const saveBtn = document.getElementById('saveMnemonicBtn');
    const noteArea = document.getElementById('mnemonicNote');

    saveBtn.onclick = () => {
        const char = document.getElementById('modalKanjiChar').textContent;
        if (!state.mnemonics) state.mnemonics = {};
        state.mnemonics[char] = noteArea.value;
        saveState();
        alert('✅ Mnemonic saved!');
    };
}

function loadMnemonic(char) {
    const noteArea = document.getElementById('mnemonicNote');
    if (state.mnemonics && state.mnemonics[char]) {
        noteArea.value = state.mnemonics[char];
    } else {
        noteArea.value = '';
    }
}

// Global exposure
window.initMnemonics = initMnemonics;
window.loadMnemonic = loadMnemonic;
