type Doushi =  {
				type: 'Doushi';
				level: 'BEGINNER 1';
				chapter: 1 | 2 | 3;
				word: string;
				kana: string;
				meaning: string;
				group: 1 | 2 | 3;
				example: string;
}

const doushiFormatted: Doushi[] = [
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 1, word: '思う', kana: 'おもう', meaning: 'to think', group: 1, example: "I think it's good." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 1, word: '開く', kana: 'あく', meaning: 'to open', group: 1, example: "The door opens." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 1, word: '閉まる', kana: 'しまる', meaning: 'to close', group: 1, example: "The shop closes." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 1, word: '点く', kana: 'つく', meaning: 'to be lit', group: 1, example: "The light is on." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 1, word: '貸す', kana: 'かす', meaning: 'to lend', group: 1, example: "I lend him a book." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 1, word: '消える', kana: 'きえる', meaning: 'to disappear', group: 2, example: "The cat disappeared." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 1, word: '決める', kana: 'きめる', meaning: 'to decide', group: 2, example: "She decides quickly." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 1, word: '見える', kana: 'みえる', meaning: 'to be visible', group: 2, example: "The mountain is visible." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 1, word: '聞こえる', kana: 'きこえる', meaning: 'to be heard', group: 2, example: "Music can be heard." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 1, word: '借りる', kana: 'かりる', meaning: 'to borrow', group: 2, example: "Can I borrow this?" },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 1, word: '返す', kana: 'かえす', meaning: 'to return', group: 1, example: "Please return it." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '使う', kana: 'つかう', meaning: 'to use', group: 1, example: "I use this app daily." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '怒る', kana: 'おこる', meaning: 'to get angry', group: 1, example: "He gets angry easily." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '酔っ払う', kana: 'よっぱらう', meaning: 'to get drunk', group: 1, example: "He got drunk fast." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '運ぶ', kana: 'はこぶ', meaning: 'to carry', group: 1, example: "Carry this bag." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '払う', kana: 'はらう', meaning: 'to pay', group: 1, example: "I paid the bill." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '遊ぶ', kana: 'あそぶ', meaning: 'to play', group: 1, example: "Children play outside." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '歌う', kana: 'うたう', meaning: 'to sing', group: 1, example: "She sings well." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '曲がる', kana: 'まがる', meaning: 'to turn', group: 1, example: "Turn left here." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '曲げる', kana: 'まげる', meaning: 'to bend', group: 2, example: "Bend your knees." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '通る', kana: 'とおる', meaning: 'to pass through', group: 1, example: "I pass through the park." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '走る', kana: 'はしる', meaning: 'to run', group: 1, example: "He runs every day." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '飛ぶ', kana: 'とぶ', meaning: 'to fly', group: 1, example: "Birds fly high." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '渡る', kana: 'わたる', meaning: 'to cross', group: 1, example: "Cross the bridge." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 2, word: '流れる', kana: 'ながれる', meaning: 'to flow', group: 2, example: "The river flows fast." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '思い出す', kana: 'おもいだす', meaning: 'to recall', group: 1, example: "I recall her face." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '始まる', kana: 'はじまる', meaning: 'to begin', group: 1, example: "Class begins now." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: 'なる', kana: 'なる', meaning: 'to become', group: 1, example: "He became famous." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '空く', kana: 'あく', meaning: 'to become vacant', group: 1, example: "A seat became vacant." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '渇く', kana: 'かわく', meaning: 'to be thirsty', group: 1, example: "I’m thirsty." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '治る', kana: 'なおる', meaning: 'to heal', group: 1, example: "The wound healed." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '治す', kana: 'なおす', meaning: 'to cure', group: 1, example: "The doctor cured me." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '咲く', kana: 'さく', meaning: 'to bloom', group: 1, example: "Flowers bloom in spring." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: 'ちる', kana: 'ちる', meaning: 'to fall (e.g., blossoms)', group: 1, example: "Petals fall gently." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '決まる', kana: 'きまる', meaning: 'to be decided', group: 1, example: "It was decided." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '覚える', kana: 'おぼえる', meaning: 'to memorize', group: 2, example: "I memorize words." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '忘れる', kana: 'わすれる', meaning: 'to forget', group: 2, example: "Don’t forget this." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '始める', kana: 'はじめる', meaning: 'to start', group: 2, example: "Let’s start now." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '終わる', kana: 'おわる', meaning: 'to end', group: 1, example: "The movie ended." },
  { type: 'Doushi', level: 'BEGINNER 1', chapter: 3, word: '終える', kana: 'おえる', meaning: 'to finish', group: 2, example: "I finished work." },
];
