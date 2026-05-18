// JLPT N5 — Kanji Data (120 kanji)
const KANJI_DATA = [
    // Week 1: Numbers, Time, Nature
    { char: "一", on: "イチ", kun: "ひと(つ)", meaning: "One", week: 1, day: 2 },
    { char: "二", on: "ニ", kun: "ふた(つ)", meaning: "Two", week: 1, day: 2 },
    { char: "三", on: "サン", kun: "み(つ)", meaning: "Three", week: 1, day: 2 },
    { char: "四", on: "シ", kun: "よ(つ)/よん", meaning: "Four", week: 1, day: 2 },
    { char: "五", on: "ゴ", kun: "いつ(つ)", meaning: "Five", week: 1, day: 2 },
    { char: "六", on: "ロク", kun: "む(つ)", meaning: "Six", week: 1, day: 3 },
    { char: "七", on: "シチ", kun: "なな(つ)", meaning: "Seven", week: 1, day: 3 },
    { char: "八", on: "ハチ", kun: "や(つ)", meaning: "Eight", week: 1, day: 3 },
    { char: "九", on: "ク/キュウ", kun: "ここの(つ)", meaning: "Nine", week: 1, day: 3 },
    { char: "十", on: "ジュウ", kun: "とお", meaning: "Ten", week: 1, day: 3 },
    { char: "百", on: "ヒャク", kun: "—", meaning: "Hundred", week: 1, day: 3 },
    { char: "千", on: "セン", kun: "ち", meaning: "Thousand", week: 1, day: 3 },
    { char: "万", on: "マン", kun: "—", meaning: "Ten thousand", week: 1, day: 3 },
    { char: "円", on: "エン", kun: "まる", meaning: "Yen / Circle", week: 1, day: 3 },
    { char: "日", on: "ニチ/ジツ", kun: "ひ/か", meaning: "Day / Sun", week: 1, day: 4 },
    { char: "月", on: "ゲツ/ガツ", kun: "つき", meaning: "Month / Moon", week: 1, day: 4 },
    { char: "年", on: "ネン", kun: "とし", meaning: "Year", week: 1, day: 4 },
    { char: "時", on: "ジ", kun: "とき", meaning: "Time / Hour", week: 1, day: 4 },
    { char: "分", on: "ブン/フン", kun: "わ(ける)", meaning: "Minute / Part", week: 1, day: 4 },
    { char: "火", on: "カ", kun: "ひ", meaning: "Fire", week: 1, day: 5 },
    { char: "水", on: "スイ", kun: "みず", meaning: "Water", week: 1, day: 5 },
    { char: "木", on: "モク/ボク", kun: "き", meaning: "Tree / Wood", week: 1, day: 5 },
    { char: "金", on: "キン/コン", kun: "かね", meaning: "Gold / Money", week: 1, day: 6 },
    { char: "土", on: "ド/ト", kun: "つち", meaning: "Earth / Soil", week: 1, day: 6 },
    { char: "本", on: "ホン", kun: "もと", meaning: "Book / Origin", week: 1, day: 6 },
    { char: "人", on: "ジン/ニン", kun: "ひと", meaning: "Person", week: 1, day: 6 },
    { char: "子", on: "シ/ス", kun: "こ", meaning: "Child", week: 1, day: 6 },
    { char: "上", on: "ジョウ", kun: "うえ/あ(がる)", meaning: "Up / Above", week: 1, day: 5 },
    { char: "下", on: "カ/ゲ", kun: "した/さ(がる)", meaning: "Down / Below", week: 1, day: 5 },
    { char: "中", on: "チュウ", kun: "なか", meaning: "Inside / Middle", week: 1, day: 5 },
    // Week 2: People, School, Motion
    { char: "大", on: "ダイ/タイ", kun: "おお(きい)", meaning: "Big / Large", week: 2, day: 8 },
    { char: "小", on: "ショウ", kun: "ちい(さい)/こ", meaning: "Small / Little", week: 2, day: 8 },
    { char: "外", on: "ガイ/ゲ", kun: "そと/ほか", meaning: "Outside", week: 2, day: 8 },
    { char: "前", on: "ゼン", kun: "まえ", meaning: "Front / Before", week: 2, day: 8 },
    { char: "後", on: "ゴ/コウ", kun: "うし(ろ)/あと", meaning: "Behind / After", week: 2, day: 9 },
    { char: "左", on: "サ", kun: "ひだり", meaning: "Left", week: 2, day: 9 },
    { char: "右", on: "ウ/ユウ", kun: "みぎ", meaning: "Right", week: 2, day: 9 },
    { char: "午", on: "ゴ", kun: "—", meaning: "Noon", week: 2, day: 10 },
    { char: "半", on: "ハン", kun: "なか(ば)", meaning: "Half", week: 2, day: 10 },
    { char: "間", on: "カン/ケン", kun: "あいだ/ま", meaning: "Interval / Between", week: 2, day: 10 },
    { char: "行", on: "コウ/ギョウ", kun: "い(く)/おこな(う)", meaning: "Go / Carry out", week: 2, day: 11 },
    { char: "来", on: "ライ", kun: "く(る)/き(た)", meaning: "Come", week: 2, day: 11 },
    { char: "出", on: "シュツ", kun: "で(る)/だ(す)", meaning: "Exit / Put out", week: 2, day: 12 },
    { char: "入", on: "ニュウ", kun: "い(る)/はい(る)", meaning: "Enter", week: 2, day: 12 },
    { char: "休", on: "キュウ", kun: "やす(む)", meaning: "Rest", week: 2, day: 11 },
    { char: "食", on: "ショク", kun: "た(べる)", meaning: "Eat / Food", week: 2, day: 12 },
    { char: "飲", on: "イン", kun: "の(む)", meaning: "Drink", week: 2, day: 12 },
    { char: "見", on: "ケン", kun: "み(る)", meaning: "See / Look", week: 2, day: 14 },
    { char: "聞", on: "ブン/モン", kun: "き(く)", meaning: "Hear / Ask", week: 2, day: 14 },
    { char: "書", on: "ショ", kun: "か(く)", meaning: "Write", week: 2, day: 14 },
    { char: "読", on: "ドク/トク", kun: "よ(む)", meaning: "Read", week: 2, day: 14 },
    { char: "話", on: "ワ", kun: "はな(す)/はなし", meaning: "Talk / Story", week: 2, day: 14 },
    { char: "買", on: "バイ", kun: "か(う)", meaning: "Buy", week: 2, day: 13 },
    { char: "立", on: "リツ", kun: "た(つ)", meaning: "Stand", week: 2, day: 13 },
    { char: "座", on: "ザ", kun: "すわ(る)", meaning: "Sit", week: 2, day: 13 },
    // Week 3
    { char: "学", on: "ガク", kun: "まな(ぶ)", meaning: "Learn / Study", week: 3, day: 15 },
    { char: "校", on: "コウ", kun: "—", meaning: "School", week: 3, day: 15 },
    { char: "生", on: "セイ/ショウ", kun: "い(きる)/う(まれる)", meaning: "Life / Birth", week: 3, day: 15 },
    { char: "先", on: "セン", kun: "さき", meaning: "Before / Previous", week: 3, day: 15 },
    { char: "友", on: "ユウ", kun: "とも", meaning: "Friend", week: 3, day: 16 },
    { char: "父", on: "フ", kun: "ちち", meaning: "Father", week: 3, day: 19 },
    { char: "母", on: "ボ", kun: "はは", meaning: "Mother", week: 3, day: 19 },
    { char: "男", on: "ダン/ナン", kun: "おとこ", meaning: "Man / Male", week: 3, day: 16 },
    { char: "女", on: "ジョ/ニョ", kun: "おんな", meaning: "Woman / Female", week: 3, day: 16 },
    { char: "山", on: "サン", kun: "やま", meaning: "Mountain", week: 3, day: 19 },
    { char: "川", on: "セン", kun: "かわ", meaning: "River", week: 3, day: 19 },
    { char: "天", on: "テン", kun: "あめ/あま", meaning: "Sky / Heaven", week: 3, day: 17 },
    { char: "気", on: "キ/ケ", kun: "—", meaning: "Spirit / Energy", week: 3, day: 17 },
    { char: "雨", on: "ウ", kun: "あめ", meaning: "Rain", week: 3, day: 17 },
    { char: "花", on: "カ", kun: "はな", meaning: "Flower", week: 3, day: 18 },
    { char: "国", on: "コク", kun: "くに", meaning: "Country", week: 3, day: 18 },
    { char: "語", on: "ゴ", kun: "かた(る)", meaning: "Language / Word", week: 3, day: 18 },
    { char: "長", on: "チョウ", kun: "なが(い)", meaning: "Long / Chief", week: 3, day: 20 },
    { char: "高", on: "コウ", kun: "たか(い)", meaning: "Tall / Expensive", week: 3, day: 20 },
    { char: "安", on: "アン", kun: "やす(い)", meaning: "Cheap / Peaceful", week: 3, day: 20 },
    { char: "新", on: "シン", kun: "あたら(しい)", meaning: "New", week: 3, day: 20 },
    { char: "古", on: "コ", kun: "ふる(い)", meaning: "Old (things)", week: 3, day: 20 },
    { char: "白", on: "ハク/ビャク", kun: "しろ(い)", meaning: "White", week: 3, day: 21 },
    { char: "電", on: "デン", kun: "—", meaning: "Electricity", week: 3, day: 21 },
    { char: "車", on: "シャ", kun: "くるま", meaning: "Car / Vehicle", week: 3, day: 21 },
    // Week 4
    { char: "駅", on: "エキ", kun: "—", meaning: "Station", week: 4, day: 22 },
    { char: "店", on: "テン", kun: "みせ", meaning: "Shop / Store", week: 4, day: 22 },
    { char: "道", on: "ドウ", kun: "みち", meaning: "Road / Way", week: 4, day: 22 },
    { char: "名", on: "メイ/ミョウ", kun: "な", meaning: "Name", week: 4, day: 23 },
    { char: "何", on: "カ", kun: "なに/なん", meaning: "What", week: 4, day: 23 },
    { char: "北", on: "ホク", kun: "きた", meaning: "North", week: 4, day: 24 },
    { char: "南", on: "ナン", kun: "みなみ", meaning: "South", week: 4, day: 24 },
    { char: "東", on: "トウ", kun: "ひがし", meaning: "East", week: 4, day: 24 },
    { char: "西", on: "セイ/サイ", kun: "にし", meaning: "West", week: 4, day: 24 },
    { char: "口", on: "コウ/ク", kun: "くち", meaning: "Mouth / Opening", week: 4, day: 25 },
    { char: "目", on: "モク/ボク", kun: "め", meaning: "Eye", week: 4, day: 25 },
    { char: "耳", on: "ジ", kun: "みみ", meaning: "Ear", week: 4, day: 25 },
    { char: "手", on: "シュ", kun: "て", meaning: "Hand", week: 4, day: 25 },
    { char: "足", on: "ソク", kun: "あし/た(りる)", meaning: "Foot / Enough", week: 4, day: 25 },
    { char: "毎", on: "マイ", kun: "—", meaning: "Every", week: 4, day: 27 },
    { char: "今", on: "コン/キン", kun: "いま", meaning: "Now / Present", week: 4, day: 27 },
    { char: "週", on: "シュウ", kun: "—", meaning: "Week", week: 4, day: 27 },
    { char: "言", on: "ゲン/ゴン", kun: "い(う)/こと", meaning: "Say / Word", week: 4, day: 26 },
    { char: "会", on: "カイ/エ", kun: "あ(う)", meaning: "Meet", week: 4, day: 26 },
    { char: "社", on: "シャ", kun: "やしろ", meaning: "Company / Shrine", week: 4, day: 26 },
    { char: "多", on: "タ", kun: "おお(い)", meaning: "Many / Much", week: 4, day: 27 },
    { char: "少", on: "ショウ", kun: "すく(ない)/すこ(し)", meaning: "Few / Little", week: 4, day: 27 },
    { char: "早", on: "ソウ/サッ", kun: "はや(い)", meaning: "Early / Fast", week: 4, day: 26 },
    { char: "夕", on: "セキ", kun: "ゆう", meaning: "Evening", week: 4, day: 26 },
    { char: "力", on: "リョク/リキ", kun: "ちから", meaning: "Power / Strength", week: 4, day: 27 },
];

const PARTICLES_DATA = [
    {
        char: "は", name: "wa", func: "Topic Marker", desc: "Marks the topic of the sentence.", examples: [
            { jp: "わたし は がくせい です", en: "I am a student" },
            { jp: "きょう は あつい です", en: "Today is hot" },
            { jp: "にほんご は たのしい です", en: "Japanese is fun" },
        ]
    },
    {
        char: "が", name: "ga", func: "Subject Marker", desc: "Marks the subject. Used with あります/います and after question words.", examples: [
            { jp: "パン が あります", en: "There is bread" },
            { jp: "だれ が きましたか", en: "Who came?" },
            { jp: "わたし が します", en: "I will do it (emphasis)" },
        ]
    },
    {
        char: "を", name: "o", func: "Object Marker", desc: "Marks the direct object — what receives the action.", examples: [
            { jp: "みず を のみます", en: "I drink water" },
            { jp: "ほん を よみます", en: "I read a book" },
            { jp: "テレビ を みます", en: "I watch TV" },
        ]
    },
    {
        char: "に", name: "ni", func: "Destination / Time / Location", desc: "Marks destination, specific time, or existence location.", examples: [
            { jp: "がっこう に いきます", en: "I go to school" },
            { jp: "しちじ に おきます", en: "I wake up at 7:00" },
            { jp: "つくえ の うえ に あります", en: "It's on the desk" },
        ]
    },
    {
        char: "で", name: "de", func: "Location of Action / Means", desc: "Where action happens or tool/method used.", examples: [
            { jp: "がっこう で べんきょうします", en: "I study at school" },
            { jp: "バス で いきます", en: "I go by bus" },
            { jp: "にほんご で はなします", en: "I speak in Japanese" },
        ]
    },
    {
        char: "の", name: "no", func: "Possessive / Modifier", desc: "Connects nouns: possession, description, belonging.", examples: [
            { jp: "わたし の ともだち", en: "My friend" },
            { jp: "にほん の がくせい", en: "Japanese student" },
            { jp: "がっこう の せんせい", en: "School teacher" },
        ]
    },
    {
        char: "と", name: "to", func: "And / With / Quotation", desc: "Links nouns (and), companion (with), or quotes.", examples: [
            { jp: "パン と たまご", en: "Bread and egg" },
            { jp: "ともだち と はなします", en: "I talk with a friend" },
            { jp: "いい と おもいます", en: "I think it's good" },
        ]
    },
    {
        char: "も", name: "mo", func: "Also / Too / Both", desc: "Replaces は/が/を to mean 'also'.", examples: [
            { jp: "わたし も いきます", en: "I will also go" },
            { jp: "これ も おいしい です", en: "This is also delicious" },
            { jp: "にほんご も えいご も はなします", en: "I speak both Japanese and English" },
        ]
    },
    {
        char: "から", name: "kara", func: "From / Because", desc: "Starting point or reason.", examples: [
            { jp: "くじ から ごじ まで", en: "From 9 to 5" },
            { jp: "あつい から まど を あけます", en: "It's hot, so I open the window" },
            { jp: "にほん から きました", en: "I came from Japan" },
        ]
    },
    {
        char: "まで", name: "made", func: "Until / Up to", desc: "Ending point in time or space.", examples: [
            { jp: "ごじ まで べんきょうします", en: "I study until 5:00" },
            { jp: "えき まで あるきます", en: "I walk to the station" },
        ]
    },
    {
        char: "へ", name: "e", func: "Toward / Direction", desc: "Direction of movement. Often interchangeable with に.", examples: [
            { jp: "にほん へ いきます", en: "I go to Japan" },
            { jp: "きた へ いきます", en: "I go toward the north" },
        ]
    },
    {
        char: "よ", name: "yo", func: "Emphasis / New Info", desc: "Adds emphasis or tells listener something new.", examples: [
            { jp: "おいしい です よ", en: "It's delicious, you know!" },
            { jp: "あした テスト です よ", en: "There's a test tomorrow!" },
        ]
    },
    {
        char: "ね", name: "ne", func: "Confirmation / Agreement", desc: "Seeks agreement — 'right?' or 'isn't it?'", examples: [
            { jp: "いい てんき です ね", en: "Nice weather, isn't it?" },
            { jp: "おいしい です ね", en: "It's delicious, right?" },
        ]
    },
];
