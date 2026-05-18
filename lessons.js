// ============================================
// JLPT N5 Study Tracker — Daily Lessons Data
// ============================================

const DAILY_LESSONS = [
    // DAY 1
    {
        day: 1, title: "Hiragana & Katakana Mastery", phase: 1, subtitle: "Phase I: Orthographic Foundation",
        blocks: [
            {
                title: "あ Hiragana Mastery", items: [
                    "Master all 46 base Hiragana characters with instant recognition",
                    "Practice writing basic vowels: <span class='jp'>あ, い, う, え, お</span>",
                    "Practice confusing pairs: <span class='jp'>あ (a) vs お (o)</span>, <span class='jp'>さ (sa) vs き (ki)</span>, <span class='jp'>は (ha) vs ほ (ho)</span>",
                    "Write all Hiragana 3 times each from memory",
                ]
            },
            {
                title: "ア Katakana Mastery", items: [
                    "Master all 46 base Katakana characters with instant recognition",
                    "Practice confusing pairs: <span class='jp'>シ (shi) vs ツ (tsu)</span> — shi has horizontal strokes, tsu has vertical",
                    "Practice confusing pairs: <span class='jp'>ソ (so) vs ン (n)</span> — so starts from top-right, n from top-left",
                    "Practice: <span class='jp'>ノ (no) vs メ (me) vs ヌ (nu)</span>",
                    "Write all Katakana 3 times each from memory",
                ]
            },
            {
                title: "📝 Loanword Practice", items: [
                    "<span class='jp'>アパート</span> (apaato) — Apartment",
                    "<span class='jp'>レストラン</span> (resutoran) — Restaurant",
                    "<span class='jp'>コンピューター</span> (konpyuutaa) — Computer",
                    "<span class='jp'>テレビ</span> (terebi) — Television",
                    "<span class='jp'>コーヒー</span> (koohii) — Coffee",
                    "<span class='jp'>パン</span> (pan) — Bread",
                    "<span class='jp'>バス</span> (basu) — Bus",
                    "<span class='jp'>タクシー</span> (takushii) — Taxi",
                    "<span class='jp'>ホテル</span> (hoteru) — Hotel",
                    "<span class='jp'>スーパー</span> (suupaa) — Supermarket",
                ]
            },
            {
                title: "🎧 Listening (30 min)", items: [
                    "Listen to Katakana pronunciation audio — focus on long vowels (ー)",
                    "Shadow 10 loanwords aloud 5 times each",
                    "Watch one JapanesePod101 Katakana review video",
                ]
            },
        ]
    },
    // DAY 2
    {
        day: 2, title: "Numerical Kanji & Basic Sentences", phase: 1, subtitle: "Phase I: Orthographic Foundation",
        blocks: [
            {
                title: "漢 Kanji: Numbers 1-5", items: [
                    "<span class='jp'>一 (いち / ひとつ)</span> — One. Mnemonic: One horizontal stroke = one",
                    "<span class='jp'>二 (に / ふたつ)</span> — Two. Mnemonic: Two horizontal strokes",
                    "<span class='jp'>三 (さん / みっつ)</span> — Three. Mnemonic: Three horizontal strokes",
                    "<span class='jp'>四 (し・よん / よっつ)</span> — Four. Note: し is avoided (sounds like death 死)",
                    "<span class='jp'>五 (ご / いつつ)</span> — Five. Mnemonic: Looks like a person doing jumping jacks",
                ]
            },
            {
                title: "文 Grammar: Topic Marker は & Copula です", items: [
                    "Pattern: <span class='jp'>[Noun] は [Noun] です</span> — A is B",
                    "<span class='example'>わたし は がくせい です</span> <span class='hint'>I am a student</span>",
                    "<span class='example'>これ は ほん です</span> <span class='hint'>This is a book</span>",
                    "Pattern: <span class='jp'>[Noun] は [Noun] じゃないです</span> — A is not B",
                    "<span class='example'>わたし は せんせい じゃないです</span> <span class='hint'>I am not a teacher</span>",
                    "Question: <span class='jp'>[Noun] は [Noun] ですか</span> — Is A B?",
                ]
            },
            {
                title: "辞 Vocabulary: Self-introduction", items: [
                    "<span class='jp'>わたし</span> — I / Me",
                    "<span class='jp'>がくせい</span> — Student",
                    "<span class='jp'>せんせい</span> — Teacher",
                    "<span class='jp'>にほんじん</span> — Japanese person",
                    "<span class='jp'>はじめまして</span> — Nice to meet you",
                    "<span class='jp'>よろしくおねがいします</span> — Please treat me well",
                ]
            },
            {
                title: "🎧 Listening (30 min)", items: [
                    "Practice counting 1-5 in both On/Kun readings",
                    "Shadow 5 self-introduction sentences",
                ]
            },
        ]
    },
    // DAY 3
    {
        day: 3, title: "Large Numbers, Currency & Possession", phase: 1, subtitle: "Phase I: Orthographic Foundation",
        blocks: [
            {
                title: "漢 Kanji: Numbers 6-10, Hundred, Thousand, Ten-thousand, Yen", items: [
                    "<span class='jp'>六 (ろく / むっつ)</span> — Six",
                    "<span class='jp'>七 (しち・なな / ななつ)</span> — Seven",
                    "<span class='jp'>八 (はち / やっつ)</span> — Eight",
                    "<span class='jp'>九 (きゅう・く / ここのつ)</span> — Nine",
                    "<span class='jp'>十 (じゅう / とお)</span> — Ten",
                    "<span class='jp'>百 (ひゃく)</span> — Hundred. Sound changes: 300=さんびゃく, 600=ろっぴゃく, 800=はっぴゃく",
                    "<span class='jp'>千 (せん)</span> — Thousand. Sound change: 3000=さんぜん",
                    "<span class='jp'>万 (まん)</span> — Ten thousand. Key for Japanese currency!",
                    "<span class='jp'>円 (えん)</span> — Yen / Circle",
                ]
            },
            {
                title: "文 Grammar: Possessive の", items: [
                    "Pattern: <span class='jp'>[Noun A] の [Noun B]</span> — A's B",
                    "<span class='example'>わたし の ほん</span> <span class='hint'>My book</span>",
                    "<span class='example'>にほん の がくせい</span> <span class='hint'>Japanese student</span>",
                    "<span class='example'>がっこう の せんせい</span> <span class='hint'>School teacher</span>",
                ]
            },
            {
                title: "💴 Currency Practice", items: [
                    "Practice prices: <span class='jp'>ひゃくえん (100円)</span>, <span class='jp'>にひゃくごじゅうえん (250円)</span>",
                    "<span class='example'>これ は いくら ですか — How much is this?</span>",
                    "<span class='example'>さんぜんえん です — It's 3,000 yen</span>",
                ]
            },
        ]
    },
    // DAY 4
    {
        day: 4, title: "Temporal Kanji & Telling Time", phase: 1, subtitle: "Phase I: Orthographic Foundation",
        blocks: [
            {
                title: "漢 Kanji: Time Characters", items: [
                    "<span class='jp'>日 (にち・じつ / ひ・か)</span> — Day / Sun. Used in dates and days of week",
                    "<span class='jp'>月 (げつ・がつ / つき)</span> — Month / Moon. ~がつ for months, ~げつ for duration",
                    "<span class='jp'>年 (ねん / とし)</span> — Year. <span class='example'>2024年 = にせんにじゅうよねん</span>",
                    "<span class='jp'>時 (じ / とき)</span> — Hour / Time. Exceptions: 4時=よじ, 7時=しちじ, 9時=くじ",
                    "<span class='jp'>分 (ふん・ぶん / わける)</span> — Minute. Sound changes: 1分=いっぷん, 3分=さんぷん",
                ]
            },
            {
                title: "⏰ Time-telling Practice", items: [
                    "<span class='jp'>いま なんじ ですか — What time is it now?</span>",
                    "<span class='jp'>ごぜん — AM / ごご — PM</span>",
                    "<span class='jp'>はん — half past (e.g., 三時半 = さんじはん)</span>",
                    "Practice: 7:00 → <span class='jp'>しちじ</span>, 4:30 → <span class='jp'>よじはん</span>, 9:15 → <span class='jp'>くじじゅうごふん</span>",
                ]
            },
            {
                title: "辞 Vocabulary: Time Words", items: [
                    "<span class='jp'>きょう (今日)</span> — Today",
                    "<span class='jp'>あした (明日)</span> — Tomorrow",
                    "<span class='jp'>きのう (昨日)</span> — Yesterday",
                    "<span class='jp'>あさ (朝)</span> — Morning",
                    "<span class='jp'>ひる (昼)</span> — Noon",
                    "<span class='jp'>よる (夜)</span> — Night",
                    "<span class='jp'>まいにち (毎日)</span> — Every day",
                ]
            },
        ]
    },
    // DAY 5
    {
        day: 5, title: "Existential Structures & Spatial Relations", phase: 1, subtitle: "Phase I: Orthographic Foundation",
        blocks: [
            {
                title: "漢 Kanji: Spatial & Nature", items: [
                    "<span class='jp'>上 (うえ)</span> — Up / Above / On top",
                    "<span class='jp'>下 (した)</span> — Down / Below / Under",
                    "<span class='jp'>中 (なか)</span> — Inside / Middle",
                    "<span class='jp'>火 (ひ・か)</span> — Fire (Tuesday = 火曜日)",
                    "<span class='jp'>水 (みず・すい)</span> — Water (Wednesday = 水曜日)",
                    "<span class='jp'>木 (き・もく)</span> — Tree / Wood (Thursday = 木曜日)",
                ]
            },
            {
                title: "文 Grammar: あります vs います", items: [
                    "<span class='jp'>あります</span> — To exist (inanimate: books, buildings, events)",
                    "<span class='jp'>います</span> — To exist (animate: people, animals)",
                    "Pattern: <span class='jp'>[Location] に [Thing] が あります/います</span>",
                    "<span class='example'>つくえ の うえ に ほん が あります</span> <span class='hint'>There's a book on the desk</span>",
                    "<span class='example'>こうえん に こども が います</span> <span class='hint'>There are children in the park</span>",
                    "<span class='example'>へや に ねこ が います</span> <span class='hint'>There's a cat in the room</span>",
                ]
            },
            {
                title: "辞 Vocabulary: Position Words", items: [
                    "<span class='jp'>うえ・した・なか・そと・まえ・うしろ・みぎ・ひだり・となり・あいだ</span>",
                    "Up / Down / Inside / Outside / Front / Back / Right / Left / Next to / Between",
                ]
            },
        ]
    },
    // DAY 6
    {
        day: 6, title: "Subject Marker が & Interrogative 何", phase: 1, subtitle: "Phase I: Orthographic Foundation",
        blocks: [
            {
                title: "漢 Kanji: Identity & Days", items: [
                    "<span class='jp'>金 (きん・かね)</span> — Gold / Money (Friday = 金曜日)",
                    "<span class='jp'>土 (ど・つち)</span> — Earth / Soil (Saturday = 土曜日)",
                    "<span class='jp'>本 (ほん・もと)</span> — Book / Origin (日本 = Japan)",
                    "<span class='jp'>人 (じん・にん・ひと)</span> — Person",
                    "<span class='jp'>子 (し・す・こ)</span> — Child",
                ]
            },
            {
                title: "文 Grammar: は vs が Deep Dive", items: [
                    "<span class='jp'>は</span> marks the TOPIC (what we're talking about, often known info)",
                    "<span class='jp'>が</span> marks the SUBJECT (who does the action, often new info)",
                    "<span class='example'>わたし は がくせい です</span> <span class='hint'>As for me, I'm a student (topic)</span>",
                    "<span class='example'>だれ が きましたか</span> <span class='hint'>WHO came? (seeking new info → が)</span>",
                    "Rule: After question words (だれ, なに, どこ), always use が",
                    "Rule: With あります/います, the thing that exists takes が",
                ]
            },
            {
                title: "❓ Interrogatives Practice", items: [
                    "<span class='jp'>なに/なん (何)</span> — What. <span class='example'>これ は なん ですか</span>",
                    "<span class='jp'>だれ</span> — Who. <span class='example'>だれ の ほん ですか</span>",
                    "Practice forming 10 questions using これ/それ/あれ + は + なん + ですか",
                ]
            },
            {
                title: "辞 Vocabulary: Days of the Week", items: [
                    "<span class='jp'>げつようび (月)</span> Mon, <span class='jp'>かようび (火)</span> Tue, <span class='jp'>すいようび (水)</span> Wed",
                    "<span class='jp'>もくようび (木)</span> Thu, <span class='jp'>きんようび (金)</span> Fri",
                    "<span class='jp'>どようび (土)</span> Sat, <span class='jp'>にちようび (日)</span> Sun",
                ]
            },
        ]
    },
    // DAY 7
    {
        day: 7, title: "Weekly Synthesis & Auditory Baseline", phase: 1, subtitle: "Phase I: Review Day",
        blocks: [
            {
                title: "📊 Week 1 Review Checklist", items: [
                    "Can you read ALL 46 Katakana without hesitation?",
                    "Can you write Kanji 一 through 子 (first 27 kanji) from memory?",
                    "Can you form basic [A は B です] sentences?",
                    "Do you know the possessive particle の?",
                    "Can you tell time in Japanese?",
                    "Can you use あります and います correctly?",
                    "Do you know all 7 days of the week?",
                    "Can you count to 10,000 in Japanese?",
                ]
            },
            {
                title: "🧪 Mini Self-Test", items: [
                    "Write all Katakana from ア to ン without reference",
                    "Convert: 3,500円 → Japanese reading",
                    "Translate: There is a cat under the table",
                    "Say today's date in Japanese",
                    "Introduce yourself in 3 sentences",
                ]
            },
            {
                title: "🎧 Listening Baseline (45 min)", items: [
                    "Listen to a slow Japanese dialogue — note words you recognize",
                    "Count how many words you can identify per minute",
                    "This is your baseline — track improvement weekly",
                ]
            },
        ]
    },
    // DAY 8
    {
        day: 8, title: "Categorization of Japanese Verbs", phase: 2, subtitle: "Phase II: Verbal Mechanics",
        blocks: [
            {
                title: "漢 Kanji: Size & Space", items: [
                    "<span class='jp'>大 (おおきい / だい)</span> — Big / Large",
                    "<span class='jp'>小 (ちいさい / しょう)</span> — Small",
                    "<span class='jp'>外 (そと / がい)</span> — Outside",
                    "<span class='jp'>前 (まえ / ぜん)</span> — Front / Before",
                ]
            },
            {
                title: "文 Verb Groups Explained", items: [
                    "<strong>Group 1 (五段 Godan / U-verbs):</strong> End in う-row: く、ぐ、す、つ、ぬ、ぶ、む、る",
                    "Examples: <span class='jp'>のむ→のみます、いく→いきます、はなす→はなします</span>",
                    "<strong>Group 2 (一段 Ichidan / Ru-verbs):</strong> End in -える or -いる",
                    "Examples: <span class='jp'>たべる→たべます、みる→みます、おきる→おきます</span>",
                    "<strong>Group 3 (Irregular):</strong> Only two verbs!",
                    "<span class='jp'>する → します (to do) ・ くる → きます (to come)</span>",
                    "⚠️ Tricky: Some -る verbs are Group 1! <span class='jp'>かえる (帰る) → かえります</span>",
                ]
            },
            {
                title: "📝 Verb Conjugation Drill", items: [
                    "Convert to ～ます form: のむ、たべる、いく、かく、する、くる、よむ、はなす",
                    "Check: のみます、たべます、いきます、かきます、します、きます、よみます、はなします",
                ]
            },
        ]
    },
    // DAY 9
    {
        day: 9, title: "Present/Future Tense & Object Marker を", phase: 2, subtitle: "Phase II: Verbal Mechanics",
        blocks: [
            {
                title: "漢 Kanji: Directions", items: [
                    "<span class='jp'>後 (うしろ / ご)</span> — Behind / After",
                    "<span class='jp'>左 (ひだり / さ)</span> — Left",
                    "<span class='jp'>右 (みぎ / う)</span> — Right",
                ]
            },
            {
                title: "文 Grammar: ～ます & を", items: [
                    "～ます form = present/future tense (habitual or planned actions)",
                    "<span class='jp'>を (o)</span> = Object marker — marks what receives the action",
                    "<span class='example'>みず を のみます</span> <span class='hint'>I drink water</span>",
                    "<span class='example'>ほん を よみます</span> <span class='hint'>I read books</span>",
                    "<span class='example'>まいにち にほんご を べんきょうします</span> <span class='hint'>I study Japanese every day</span>",
                    "<span class='example'>あした えいが を みます</span> <span class='hint'>I will watch a movie tomorrow</span>",
                ]
            },
            {
                title: "辞 Vocabulary: Core Verbs (Group 1)", items: [
                    "<span class='jp'>のむ (飲む)</span> drink, <span class='jp'>かく (書く)</span> write, <span class='jp'>きく (聞く)</span> hear/ask",
                    "<span class='jp'>いく (行く)</span> go, <span class='jp'>はなす (話す)</span> speak, <span class='jp'>よむ (読む)</span> read",
                    "<span class='jp'>かう (買う)</span> buy, <span class='jp'>まつ (待つ)</span> wait, <span class='jp'>あるく (歩く)</span> walk",
                ]
            },
        ]
    },
    // DAY 10
    {
        day: 10, title: "Negative & Past Tense Paradigm", phase: 2, subtitle: "Phase II: Verbal Mechanics",
        blocks: [
            {
                title: "漢 Kanji: Time Precision", items: [
                    "<span class='jp'>午 (ご)</span> — Noon. 午前=AM, 午後=PM",
                    "<span class='jp'>半 (はん)</span> — Half. 三時半 = 3:30",
                    "<span class='jp'>間 (あいだ/かん)</span> — Interval / Between. 時間 = time/hours",
                ]
            },
            {
                title: "文 Complete Verb Conjugation Table", items: [
                    "<strong>Present+:</strong> <span class='jp'>たべます</span> (I eat)",
                    "<strong>Present−:</strong> <span class='jp'>たべません</span> (I don't eat)",
                    "<strong>Past+:</strong> <span class='jp'>たべました</span> (I ate)",
                    "<strong>Past−:</strong> <span class='jp'>たべませんでした</span> (I didn't eat)",
                    "Drill these 4 forms for: のむ、いく、する、くる、かく、みる、よむ",
                ]
            },
            {
                title: "📝 Translation Drill", items: [
                    "I didn't drink coffee → <span class='jp'>コーヒー を のみませんでした</span>",
                    "Did you eat breakfast? → <span class='jp'>あさごはん を たべましたか</span>",
                    "I don't read newspapers → <span class='jp'>しんぶん を よみません</span>",
                ]
            },
        ]
    },
    // DAY 11
    {
        day: 11, title: "Movement, Destination & Means", phase: 2, subtitle: "Phase II: Verbal Mechanics",
        blocks: [
            {
                title: "漢 Kanji: Motion Verbs", items: [
                    "<span class='jp'>行 (いく / こう)</span> — Go. <span class='example'>学校に行きます</span>",
                    "<span class='jp'>来 (くる / らい)</span> — Come. <span class='example'>日本に来ました</span>",
                    "<span class='jp'>休 (やすむ / きゅう)</span> — Rest. <span class='example'>日曜日に休みます</span>",
                ]
            },
            {
                title: "文 Grammar: に・へ・で Particles", items: [
                    "<span class='jp'>に (ni)</span> — Destination: <span class='example'>がっこう に いきます</span> <span class='hint'>I go to school</span>",
                    "<span class='jp'>へ (e)</span> — Direction: <span class='example'>にほん へ いきます</span> <span class='hint'>I'm heading to Japan</span>",
                    "<span class='jp'>で (de)</span> — Means: <span class='example'>バス で いきます</span> <span class='hint'>I go by bus</span>",
                    "<span class='jp'>で (de)</span> — Location of action: <span class='example'>としょかん で べんきょうします</span>",
                    "⚠️ に = where you GO TO. で = where you DO something",
                ]
            },
            {
                title: "辞 Vocabulary: Transport & Places", items: [
                    "<span class='jp'>でんしゃ (電車)</span> train, <span class='jp'>くるま (車)</span> car, <span class='jp'>バス</span> bus",
                    "<span class='jp'>タクシー</span> taxi, <span class='jp'>じてんしゃ (自転車)</span> bicycle, <span class='jp'>ひこうき (飛行機)</span> airplane",
                    "<span class='jp'>えき (駅)</span> station, <span class='jp'>くうこう (空港)</span> airport",
                ]
            },
        ]
    },
    // DAY 12
    {
        day: 12, title: "Invitation, Suggestion & Shared Action", phase: 2, subtitle: "Phase II: Verbal Mechanics",
        blocks: [
            {
                title: "漢 Kanji: Entry, Exit & Senses", items: [
                    "<span class='jp'>出 (でる / しゅつ)</span> — Exit / Put out",
                    "<span class='jp'>入 (はいる / にゅう)</span> — Enter",
                    "<span class='jp'>食 (たべる / しょく)</span> — Eat / Food",
                    "<span class='jp'>飲 (のむ / いん)</span> — Drink",
                ]
            },
            {
                title: "文 Grammar: ～ましょう & ～ませんか", items: [
                    "<span class='jp'>～ましょう</span> — Let's do ~",
                    "<span class='example'>ひるごはん を たべましょう</span> <span class='hint'>Let's eat lunch</span>",
                    "<span class='example'>いっしょに べんきょうしましょう</span> <span class='hint'>Let's study together</span>",
                    "<span class='jp'>～ませんか</span> — Won't you ~? (polite invitation)",
                    "<span class='example'>えいが を みませんか</span> <span class='hint'>Would you like to watch a movie?</span>",
                    "Note: ～ませんか is more polite than ～ましょう",
                ]
            },
            {
                title: "💬 Conversation Practice", items: [
                    "Practice inviting someone to: eat lunch, go to a park, study together, watch a movie",
                    "Shadow each invitation pattern 5 times aloud",
                ]
            },
        ]
    },
    // DAY 13
    {
        day: 13, title: "The Te-Form Breakthrough", phase: 2, subtitle: "Phase II: Critical Grammar",
        blocks: [
            {
                title: "漢 Kanji: Communication & Action", items: [
                    "<span class='jp'>買 (かう / ばい)</span> — Buy",
                    "<span class='jp'>立 (たつ / りつ)</span> — Stand",
                    "<span class='jp'>座 (すわる / ざ)</span> — Sit",
                ]
            },
            {
                title: "文 Te-Form Rules (MOST IMPORTANT DAY!)", items: [
                    "<strong>Group 2 (Ichidan):</strong> Drop る, add て → <span class='jp'>たべる → たべて</span>",
                    "<strong>Group 3:</strong> <span class='jp'>する → して, くる → きて</span>",
                    "<strong>Group 1 Rules (memorize the song!):</strong>",
                    "う・つ・る → <span class='jp'>って</span>: かう→かって, まつ→まって, かえる→かえって",
                    "む・ぶ・ぬ → <span class='jp'>んで</span>: のむ→のんで, あそぶ→あそんで",
                    "く → <span class='jp'>いて</span>: かく→かいて, きく→きいて",
                    "ぐ → <span class='jp'>いで</span>: およぐ→およいで",
                    "す → <span class='jp'>して</span>: はなす→はなして",
                    "⚠️ Exception: <span class='jp'>いく → いって</span> (not いいて!)",
                ]
            },
            {
                title: "📝 Te-Form Drill", items: [
                    "Convert all 25 known verbs to て form — write each one 3 times",
                    "This is THE most important grammar point at N5. Master it today!",
                ]
            },
        ]
    },
    // DAY 14
    {
        day: 14, title: "Requests & Present Continuous", phase: 2, subtitle: "Phase II: Review Day",
        blocks: [
            {
                title: "漢 Kanji: The Senses of Communication", items: [
                    "<span class='jp'>見 (みる / けん)</span> — See / Look",
                    "<span class='jp'>聞 (きく / ぶん)</span> — Hear / Listen / Ask",
                    "<span class='jp'>書 (かく / しょ)</span> — Write",
                    "<span class='jp'>読 (よむ / どく)</span> — Read",
                    "<span class='jp'>話 (はなす / わ)</span> — Talk / Story",
                ]
            },
            {
                title: "文 Grammar: ～てください & ～ています", items: [
                    "<span class='jp'>～てください</span> — Please do ~ (polite request)",
                    "<span class='example'>ここに すわってください</span> <span class='hint'>Please sit here</span>",
                    "<span class='example'>にほんご で はなしてください</span> <span class='hint'>Please speak in Japanese</span>",
                    "<span class='jp'>～ています</span> — Currently doing ~ (progressive)",
                    "<span class='example'>いま ほん を よんでいます</span> <span class='hint'>I am reading a book now</span>",
                    "<span class='example'>あめ が ふっています</span> <span class='hint'>It is raining</span>",
                ]
            },
            {
                title: "📊 Week 2 Review", items: [
                    "Can you conjugate all 3 verb groups in 4 forms? (ます/ません/ました/ませんでした)",
                    "Do you know the te-form rules perfectly?",
                    "Can you use に/で/を particles correctly?",
                    "Can you make invitations with ましょう and ませんか?",
                    "Total kanji so far: ~55. Review all of them!",
                ]
            },
        ]
    },
    // DAY 15
    {
        day: 15, title: "i-Adjective Conjugation", phase: 3, subtitle: "Phase III: Description & Awareness",
        blocks: [
            {
                title: "漢 Kanji: School", items: [
                    "<span class='jp'>学 (まなぶ / がく)</span> — Learn. 学校=school, 学生=student",
                    "<span class='jp'>校 (こう)</span> — School",
                    "<span class='jp'>生 (いきる / せい)</span> — Life / Birth. 先生=teacher, 学生=student",
                    "<span class='jp'>先 (さき / せん)</span> — Before / Previous. 先生=teacher (born before)",
                ]
            },
            {
                title: "文 i-Adjective Conjugation", items: [
                    "<strong>Present+:</strong> <span class='jp'>たかい</span> — expensive",
                    "<strong>Present−:</strong> Drop い, add くない → <span class='jp'>たかくない</span> — not expensive",
                    "<strong>Past+:</strong> Drop い, add かった → <span class='jp'>たかかった</span> — was expensive",
                    "<strong>Past−:</strong> Drop い, add くなかった → <span class='jp'>たかくなかった</span> — wasn't expensive",
                    "⚠️ Special: <span class='jp'>いい (good) → よくない / よかった / よくなかった</span>",
                ]
            },
            {
                title: "辞 i-Adjective Vocabulary", items: [
                    "<span class='jp'>おおきい</span> big, <span class='jp'>ちいさい</span> small, <span class='jp'>たかい</span> expensive/tall, <span class='jp'>やすい</span> cheap",
                    "<span class='jp'>あたらしい</span> new, <span class='jp'>ふるい</span> old, <span class='jp'>おいしい</span> delicious, <span class='jp'>たのしい</span> fun",
                    "<span class='jp'>あつい</span> hot, <span class='jp'>さむい</span> cold, <span class='jp'>むずかしい</span> difficult, <span class='jp'>やさしい</span> easy/kind",
                ]
            },
        ]
    },
    // DAY 16 - 30 (compact format)
    {
        day: 16, title: "na-Adjective Logic", phase: 3, subtitle: "Phase III: Description & Awareness",
        blocks: [
            { title: "漢 Kanji", items: ["<span class='jp'>友 (とも)</span> Friend, <span class='jp'>男 (おとこ)</span> Man, <span class='jp'>女 (おんな)</span> Woman"] },
            {
                title: "文 na-Adjective Rules", items: [
                    "な-adj + な + noun: <span class='example'>きれい な ひと</span> <span class='hint'>Beautiful person</span>",
                    "な-adj + です: <span class='example'>しずか です</span> <span class='hint'>It's quiet</span>",
                    "Negative: <span class='jp'>じゃないです</span>: <span class='example'>げんき じゃないです</span> <span class='hint'>I'm not well</span>",
                    "Past: <span class='jp'>でした</span>: <span class='example'>しずか でした</span> <span class='hint'>It was quiet</span>",
                    "⚠️ <span class='jp'>きれい</span> looks like i-adj but is NA-adj! Same with <span class='jp'>ゆうめい</span>",
                ]
            },
            { title: "辞 na-Adjectives", items: ["<span class='jp'>きれい・しずか・にぎやか・げんき・ひま・じょうず・へた・すき・きらい・べんり・ゆうめい・たいへん</span>"] },
        ]
    },
    {
        day: 17, title: "Interrogatives & Information Seeking", phase: 3, subtitle: "Phase III: Description & Awareness",
        blocks: [
            { title: "漢 Kanji", items: ["<span class='jp'>天 (てん)</span> Sky, <span class='jp'>気 (き)</span> Spirit/Energy, <span class='jp'>雨 (あめ)</span> Rain"] },
            {
                title: "文 Question Words + Places Vocabulary", items: [
                    "<span class='jp'>どこ</span> Where: <span class='example'>えき は どこ ですか</span>",
                    "<span class='jp'>だれ</span> Who: <span class='example'>あの ひと は だれ ですか</span>",
                    "<span class='jp'>いつ</span> When: <span class='example'>テスト は いつ ですか</span>",
                    "<span class='jp'>どうやって</span> How: <span class='example'>えき まで どうやって いきますか</span>",
                    "<span class='jp'>なぜ/どうして</span> Why: <span class='example'>どうして にほんご を べんきょうしますか</span>",
                ]
            },
            { title: "辞 Places Vocabulary", items: ["<span class='jp'>えき・びょういん・としょかん・ゆうびんきょく・ぎんこう・みせ・レストラン・デパート・スーパー・こうえん・ホテル</span>"] },
        ]
    },
    {
        day: 18, title: "Adverbs of Frequency & Degree", phase: 3, subtitle: "Phase III: Description & Awareness",
        blocks: [
            { title: "漢 Kanji", items: ["<span class='jp'>花 (はな)</span> Flower, <span class='jp'>国 (くに)</span> Country, <span class='jp'>語 (ご)</span> Language"] },
            {
                title: "文 Adverbs", items: [
                    "Degree: <span class='jp'>とても</span> very, <span class='jp'>あまり (+ neg)</span> not much, <span class='jp'>ぜんぜん (+ neg)</span> not at all",
                    "Frequency: <span class='jp'>いつも</span> always, <span class='jp'>よく</span> often, <span class='jp'>ときどき</span> sometimes",
                    "<span class='jp'>まいにち</span> every day, <span class='jp'>たくさん</span> a lot, <span class='jp'>すこし</span> a little",
                    "<span class='example'>わたし は いつも コーヒー を のみます</span> <span class='hint'>I always drink coffee</span>",
                    "<span class='example'>あまり テレビ を みません</span> <span class='hint'>I don't watch TV much</span>",
                ]
            },
        ]
    },
    {
        day: 19, title: "Grammar of Desire & Experience", phase: 3, subtitle: "Phase III: Description & Awareness",
        blocks: [
            { title: "漢 Kanji", items: ["<span class='jp'>父 (ちち)</span> Father, <span class='jp'>母 (はは)</span> Mother, <span class='jp'>山 (やま)</span> Mountain, <span class='jp'>川 (かわ)</span> River"] },
            {
                title: "文 Want to & Have done", items: [
                    "<span class='jp'>～たい です</span> — Want to do ~. Drop ます, add たい",
                    "<span class='example'>にほん に いきたい です</span> <span class='hint'>I want to go to Japan</span>",
                    "<span class='example'>すし を たべたい です</span> <span class='hint'>I want to eat sushi</span>",
                    "<span class='jp'>～たことがあります</span> — Have experienced ~.",
                    "<span class='example'>ふじさん に のぼったことがあります</span> <span class='hint'>I have climbed Mt. Fuji</span>",
                ]
            },
        ]
    },
    {
        day: 20, title: "Comparative & Superlative Structures", phase: 3, subtitle: "Phase III: Description & Awareness",
        blocks: [
            { title: "漢 Kanji", items: ["<span class='jp'>長 (ながい)</span>, <span class='jp'>高 (たかい)</span>, <span class='jp'>安 (やすい)</span>, <span class='jp'>新 (あたらしい)</span>, <span class='jp'>古 (ふるい)</span>"] },
            {
                title: "文 Comparison Grammar", items: [
                    "A のほうが B より ～: <span class='example'>にほんご のほうが えいご より むずかしい です</span>",
                    "一番 (いちばん) = the most: <span class='example'>すし が いちばん おいしい です</span>",
                    "<span class='jp'>どちら のほうが ～ですか</span> — Which is more ~?",
                    "<span class='example'>やま と うみ と、どちら のほうが すき ですか</span> <span class='hint'>Which do you like more, mountains or sea?</span>",
                ]
            },
        ]
    },
    {
        day: 21, title: "Counter Suffixes & Enumeration", phase: 3, subtitle: "Phase III: Review Day",
        blocks: [
            { title: "漢 Kanji", items: ["<span class='jp'>白 (しろい)</span> White, <span class='jp'>電 (でん)</span> Electricity, <span class='jp'>車 (くるま)</span> Car"] },
            {
                title: "文 Japanese Counters", items: [
                    "<span class='jp'>～つ</span> General counter: ひとつ、ふたつ、みっつ... (irregular 1-10!)",
                    "<span class='jp'>～人 (にん)</span> People: ひとり、ふたり、さんにん... (1 & 2 are irregular!)",
                    "<span class='jp'>～本 (ほん)</span> Long objects: いっぽん、にほん、さんぼん... (sound changes!)",
                    "<span class='jp'>～枚 (まい)</span> Flat objects: いちまい、にまい、さんまい (regular!)",
                    "<span class='jp'>～台 (だい)</span> Machines/vehicles, <span class='jp'>～杯 (はい)</span> Cups/glasses",
                ]
            },
            { title: "📊 Week 3 Review", items: ["Review all i/na-adj conjugations, question words, adverbs, counters. Total kanji: ~85"] },
        ]
    },
    // WEEK 4: Synthesis
    {
        day: 22, title: "Short Text Comprehension", phase: 4, subtitle: "Phase IV: Exam Readiness",
        blocks: [
            { title: "漢 Kanji", items: ["<span class='jp'>駅 (えき)</span> Station, <span class='jp'>店 (みせ)</span> Shop, <span class='jp'>道 (みち)</span> Road"] },
            {
                title: "📖 Reading Strategy", items: [
                    "Step 1: Read the QUESTION first — know what info to find",
                    "Step 2: Identify Subject + Main Verb in the passage",
                    "Step 3: Look for particles (は、が、を、に、で) to decode sentence structure",
                    "Step 4: Don't panic over unknown kanji — use context clues",
                    "Practice reading short notices, signs, and simple emails in Japanese",
                ]
            },
            { title: "📝 Reading Practice", items: ["Read 3 short Japanese paragraphs (50-100 chars each) and answer comprehension questions"] },
        ]
    },
    {
        day: 23, title: "Medium Passage Navigation", phase: 4, subtitle: "Phase IV: Exam Readiness",
        blocks: [
            { title: "漢 Kanji", items: ["<span class='jp'>名 (な)</span> Name, <span class='jp'>何 (なに)</span> What"] },
            {
                title: "📖 Cohesive Markers", items: [
                    "<span class='jp'>から</span> — because / from: <span class='example'>あつい から まど を あけます</span>",
                    "<span class='jp'>けど / が</span> — but / although: <span class='example'>むずかしい けど たのしい です</span>",
                    "<span class='jp'>そして</span> — and then, <span class='jp'>でも</span> — but, <span class='jp'>それから</span> — after that",
                    "Practice reading 250-word passages and identifying the main idea",
                ]
            },
        ]
    },
    {
        day: 24, title: "Listening Strategy: Task & Point Comprehension", phase: 4, subtitle: "Phase IV: Exam Readiness",
        blocks: [
            { title: "漢 Kanji", items: ["<span class='jp'>北 (きた)</span> North, <span class='jp'>南 (みなみ)</span> South, <span class='jp'>東 (ひがし)</span> East, <span class='jp'>西 (にし)</span> West"] },
            {
                title: "🎧 Listening Sections Breakdown", items: [
                    "<strong>Task Comprehension:</strong> What must the person do NEXT? Listen for verbs at the end",
                    "<strong>Point Comprehension:</strong> Extract specific info (dates, times, places, prices)",
                    "Listen to 10 practice dialogues focusing on extracting key details",
                    "Practice note-taking while listening — jot down numbers and places",
                ]
            },
        ]
    },
    {
        day: 25, title: "Listening: Utterance & Quick Response", phase: 4, subtitle: "Phase IV: Exam Readiness",
        blocks: [
            { title: "漢 Kanji", items: ["<span class='jp'>口 (くち)</span> Mouth, <span class='jp'>目 (め)</span> Eye, <span class='jp'>耳 (みみ)</span> Ear, <span class='jp'>手 (て)</span> Hand, <span class='jp'>足 (あし)</span> Foot"] },
            {
                title: "🎧 Quick Response Training", items: [
                    "<strong>Utterance:</strong> What would you say in this situation? Practice social expressions",
                    "<strong>Quick Response:</strong> Choose the correct reply — you only have 10 seconds!",
                    "Practice: Someone says ありがとう → You reply: いいえ、どういたしまして",
                    "Practice: Someone says いただきます → Context: before eating",
                    "Drill 20 situational responses",
                ]
            },
        ]
    },
    {
        day: 26, title: "Full Grammar & Particle Review", phase: 4, subtitle: "Phase IV: Exam Readiness",
        blocks: [
            { title: "漢 Kanji", items: ["<span class='jp'>言 (いう)</span>, <span class='jp'>会 (あう)</span>, <span class='jp'>社 (やしろ)</span>, <span class='jp'>早 (はやい)</span>, <span class='jp'>夕 (ゆう)</span>"] },
            {
                title: "📋 Grammar Checklist (All 40+ Points)", items: [
                    "✅ は vs が — topic vs subject",
                    "✅ を、に、で、の、と、も — all particle functions",
                    "✅ です/じゃないです — copula positive/negative",
                    "✅ ます/ません/ました/ませんでした — verb conjugation",
                    "✅ て-form + ください / ています",
                    "✅ i-adj / na-adj conjugation (all 4 forms each)",
                    "✅ ましょう / ませんか — suggestion/invitation",
                    "✅ たい / たことがある — want / experience",
                    "✅ Comparison: のほうが～より / いちばん",
                    "✅ から / けど — because / but",
                    "✅ Counters: つ / 人 / 本 / 枚",
                ]
            },
        ]
    },
    {
        day: 27, title: "Vocabulary Deep Dive & Compound Kanji", phase: 4, subtitle: "Phase IV: Exam Readiness",
        blocks: [
            { title: "漢 Kanji: Final Set", items: ["<span class='jp'>毎 (まい)</span>, <span class='jp'>今 (いま)</span>, <span class='jp'>週 (しゅう)</span>, <span class='jp'>多 (おおい)</span>, <span class='jp'>少 (すくない)</span>, <span class='jp'>力 (ちから)</span>"] },
            {
                title: "辞 Compound Kanji Review", items: [
                    "<span class='jp'>学校 (がっこう)</span> school, <span class='jp'>毎日 (まいにち)</span> every day, <span class='jp'>日本語 (にほんご)</span> Japanese",
                    "<span class='jp'>先生 (せんせい)</span> teacher, <span class='jp'>学生 (がくせい)</span> student, <span class='jp'>電車 (でんしゃ)</span> train",
                    "<span class='jp'>天気 (てんき)</span> weather, <span class='jp'>友達 (ともだち)</span> friend, <span class='jp'>来週 (らいしゅう)</span> next week",
                    "Review: Can you read all 120 kanji in context? Flash through all kanji cards",
                ]
            },
        ]
    },
    {
        day: 28, title: "Full Mock Examination 1", phase: 4, subtitle: "Phase IV: Mock Exam",
        blocks: [
            {
                title: "📝 Mock Exam Instructions", items: [
                    "Set a 90-minute timer — DO NOT go over time",
                    "Vocabulary & Grammar: 20 minutes (25-35 questions)",
                    "Reading: 40 minutes (25-30 questions)",
                    "Listening: 30 minutes (24 questions)",
                    "Find a free N5 practice test online (JLPT Sensei, japanesetest4you.com)",
                ]
            },
            {
                title: "📊 Gap Analysis", items: [
                    "Score each section out of 60",
                    "Identify: Was the error from vocabulary, grammar, or time pressure?",
                    "Make a list of every wrong answer and study the correct one",
                    "Target: Vocab/Grammar/Reading ≥ 38/60, Listening ≥ 19/60, Total ≥ 80/180",
                ]
            },
        ]
    },
    {
        day: 29, title: "Full Mock Examination 2 & Final Refinement", phase: 4, subtitle: "Phase IV: Mock Exam",
        blocks: [
            {
                title: "📝 Second Mock Exam", items: [
                    "Take a DIFFERENT mock test under the same 90-minute conditions",
                    "Focus on time management — don't spend more than 1 min per question",
                    "After: Review EVERY question you got wrong or guessed on",
                ]
            },
            {
                title: "🔧 Final Refinement", items: [
                    "Review your 'most-missed' words and grammar points",
                    "Do a final pass through all 120 kanji — read them in sentence context",
                    "Practice 10 listening quick-response drills",
                    "Read 5 short passages and answer questions within time limit",
                ]
            },
        ]
    },
    {
        day: 30, title: "Mental Consolidation & Preparation", phase: 4, subtitle: "Phase IV: Final Day",
        blocks: [
            {
                title: "🧘 Light Review Only", items: [
                    "NO intensive new learning today — trust what you've built",
                    "Review conversational phrases and self-introduction",
                    "Light look through your most-marked kanji and grammar cards",
                    "Review survival Japanese phrases for the homestay",
                ]
            },
            {
                title: "🎌 Preparation for Exchange", items: [
                    "Practice: <span class='jp'>はじめまして、[name] です。[country] から きました。よろしくおねがいします。</span>",
                    "Review polite expressions: ありがとうございます、すみません、おねがいします",
                    "Get good sleep tonight — your brain consolidates language during REM sleep!",
                    "You've studied 120 kanji, 800+ vocab, 40+ grammar points in 30 days. 頑張りました！(You did great!)",
                ]
            },
            {
                title: "🏆 Final Readiness Check", items: [
                    "✅ Can you read Hiragana and Katakana instantly?",
                    "✅ Can you recognize 120 kanji in context?",
                    "✅ Can you conjugate verbs in all 4 polite forms + te-form?",
                    "✅ Can you conjugate i-adj and na-adj?",
                    "✅ Can you use all 13 basic particles correctly?",
                    "✅ Can you tell time, count objects, and discuss daily activities?",
                    "✅ Did you score ≥ 80/180 on both mock exams?",
                ]
            },
        ]
    },
];
