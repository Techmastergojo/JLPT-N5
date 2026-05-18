// ============================================
// JLPT N5 Study Tracker — Data Assembly
// Merges all vocab/grammar parts into unified arrays
// ============================================

// Merge all vocabulary into single VOCAB_DATA array (~800 words)
const VOCAB_DATA = [
  ...VOCAB_NOUNS_1,
  ...VOCAB_NOUNS_2,
  ...VOCAB_NOUNS_3,
  ...VOCAB_VERBS,
  ...VOCAB_ADJECTIVES,
  ...VOCAB_ADVERBS_EXP,
  ...VOCAB_EXPRESSIONS,
];

// Use full 80-point grammar and map properties to match app expectations
const GRAMMAR_DATA = GRAMMAR_FULL.map(g => ({
    jp: g.pattern,
    en: g.meaning,
    ex: g.example,
    ex_en: g.translation,
    title: g.pattern,
    meaning: g.meaning,
    week: g.week
}));

// Kanji stays the same (120 kanji from original data)
// KANJI_DATA is defined in kanji.js
// PARTICLES_DATA is defined in particles.js
