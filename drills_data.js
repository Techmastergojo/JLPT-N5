// ============================================
// JLPT N5 Expansion — Drills Data
// ============================================

const CONJUGATION_RULES = [
    { verb: '食べる', stem: '食べ', group: 'ru', meaning: 'to eat' },
    { verb: '見る', stem: '見', group: 'ru', meaning: 'to see' },
    { verb: '行く', stem: '行き', group: 'u', meaning: 'to go' },
    { verb: '飲む', stem: '飲み', group: 'u', meaning: 'to drink' },
    { verb: 'する', stem: 'し', group: 'irr', meaning: 'to do' },
    { verb: '来る', stem: '来', group: 'irr', meaning: 'to come' }
];

const READING_PASSAGES = [
    {
        title: '私の家 (My House)',
        jp: '私の家は新しいです。田中さんと一緒に住んでいます。部屋が三つあります。台所は広いです。毎日、公園で散歩します。',
        en: 'My house is new. I live with Mr. Tanaka. There are three rooms. The kitchen is spacious. Every day, I take a walk in the park.',
        questions: [
            { q: '部屋はいくつありますか？ (How many rooms?)', a: '三つ (3)', options: ['二つ', '三つ', '四つ'] }
        ]
    },
    {
        title: 'デパートで (At the Department Store)',
        jp: '今日は日曜日です。デパートへ行きます。カバンを買いたいです。この赤いカバンは五千円です。',
        en: 'Today is Sunday. I am going to the department store. I want to buy a bag. This red bag is 5000 yen.',
        questions: [
            { q: '何を買いたいですか？ (What do you want to buy?)', a: 'カバン (Bag)', options: ['カバン', '本', '靴'] }
        ]
    }
];

const CONVERSATIONS = [
    {
        title: '自己紹介 (Self Introduction)',
        desc: 'Meeting someone for the first time.',
        script: [
            { role: 'ai', jp: 'はじめまして。私はタナカです。お名前は何ですか？', en: 'Nice to meet you. I am Tanaka. What is your name?' },
            { role: 'user', jp: 'はじめまして。私はハムザです。よろしくお願いします。', en: 'Nice to meet you. I am Hamza. Please treat me well.' },
            { role: 'ai', jp: 'こちらこそ、よろしくお願いします。', en: 'Likewise, nice to meet you.' }
        ]
    }
];

const SENTENCE_TEMPLATES = [
    { en: 'I eat bread at 7 o\'clock.', jp: ['私', 'は', '七時', 'に', 'パン', 'を', '食べます'], distractors: ['の', 'で', 'へ'] },
    { en: 'Yesterday I went to the library.', jp: ['昨日', '私', 'は', '図書館', 'へ', '行きました'], distractors: ['を', 'に', 'から'] }
];
