"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronLeft, ChevronRight, Shuffle, X } from "lucide-react"
import { cn } from "@/lib/utils"

type Doushi = {
  type: "Doushi"
  level: "BEGINNER 1"
  chapter: 1 | 2 | 3
  word: string
  kana: string
  meaning: string
  group: 1 | 2 | 3
  example: string
}

type Meishi = {
  type: "Meishi"
  level: "BEGINNER 1"
  chapter: 1 | 2 | 3
  word: string
  kana: string
  meaning: string
  example: string
}

type VocabWord = Doushi | Meishi

// Create a unique ID for each word
const createWordId = (word: VocabWord): string => {
  return `${word.type}-${word.word}`
}

export default function JapaneseVocabulary() {
  const doushiFormatted: Doushi[] = [
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "思う",
      kana: "おもう",
      meaning: "to think",
      group: 1,
      example: "I think it's good.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "開く",
      kana: "あく",
      meaning: "to open",
      group: 1,
      example: "The door opens.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "閉まる",
      kana: "しまる",
      meaning: "to close",
      group: 1,
      example: "The shop closes.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "点く",
      kana: "つく",
      meaning: "to be lit",
      group: 1,
      example: "The light is on.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "貸す",
      kana: "かす",
      meaning: "to lend",
      group: 1,
      example: "I lend him a book.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "消える",
      kana: "きえる",
      meaning: "to disappear",
      group: 2,
      example: "The cat disappeared.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "決める",
      kana: "きめる",
      meaning: "to decide",
      group: 2,
      example: "She decides quickly.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "見える",
      kana: "みえる",
      meaning: "to be visible",
      group: 2,
      example: "The mountain is visible.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "聞こえる",
      kana: "きこえる",
      meaning: "to be heard",
      group: 2,
      example: "Music can be heard.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "借りる",
      kana: "かりる",
      meaning: "to borrow",
      group: 2,
      example: "Can I borrow this?",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "返す",
      kana: "かえす",
      meaning: "to return",
      group: 1,
      example: "Please return it.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "使う",
      kana: "つかう",
      meaning: "to use",
      group: 1,
      example: "I use this app daily.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "怒る",
      kana: "おこる",
      meaning: "to get angry",
      group: 1,
      example: "He gets angry easily.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "酔っ払う",
      kana: "よっぱらう",
      meaning: "to get drunk",
      group: 1,
      example: "He got drunk fast.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "運ぶ",
      kana: "はこぶ",
      meaning: "to carry",
      group: 1,
      example: "Carry this bag.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "払う",
      kana: "はらう",
      meaning: "to pay",
      group: 1,
      example: "I paid the bill.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "遊ぶ",
      kana: "あそぶ",
      meaning: "to play",
      group: 1,
      example: "Children play outside.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "歌う",
      kana: "うたう",
      meaning: "to sing",
      group: 1,
      example: "She sings well.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "曲がる",
      kana: "まがる",
      meaning: "to turn",
      group: 1,
      example: "Turn left here.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "曲げる",
      kana: "まげる",
      meaning: "to bend",
      group: 2,
      example: "Bend your knees.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "通る",
      kana: "とおる",
      meaning: "to pass through",
      group: 1,
      example: "I pass through the park.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "走る",
      kana: "はしる",
      meaning: "to run",
      group: 1,
      example: "He runs every day.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "飛ぶ",
      kana: "とぶ",
      meaning: "to fly",
      group: 1,
      example: "Birds fly high.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "渡る",
      kana: "わたる",
      meaning: "to cross",
      group: 1,
      example: "Cross the bridge.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "流れる",
      kana: "ながれる",
      meaning: "to flow",
      group: 2,
      example: "The river flows fast.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "思い出す",
      kana: "おもいだす",
      meaning: "to recall",
      group: 1,
      example: "I recall her face.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "始まる",
      kana: "はじまる",
      meaning: "to begin",
      group: 1,
      example: "Class begins now.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "なる",
      kana: "なる",
      meaning: "to become",
      group: 1,
      example: "He became famous.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "空く",
      kana: "あく",
      meaning: "to become vacant",
      group: 1,
      example: "A seat became vacant.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "渇く",
      kana: "かわく",
      meaning: "to be thirsty",
      group: 1,
      example: "I'm thirsty.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "治る",
      kana: "なおる",
      meaning: "to heal",
      group: 1,
      example: "The wound healed.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "治す",
      kana: "なおす",
      meaning: "to cure",
      group: 1,
      example: "The doctor cured me.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "咲く",
      kana: "さく",
      meaning: "to bloom",
      group: 1,
      example: "Flowers bloom in spring.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "ちる",
      kana: "ちる",
      meaning: "to fall (e.g., blossoms)",
      group: 1,
      example: "Petals fall gently.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "決まる",
      kana: "きまる",
      meaning: "to be decided",
      group: 1,
      example: "It was decided.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "覚える",
      kana: "おぼえる",
      meaning: "to memorize",
      group: 2,
      example: "I memorize words.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "忘れる",
      kana: "わすれる",
      meaning: "to forget",
      group: 2,
      example: "Don't forget this.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "始める",
      kana: "はじめる",
      meaning: "to start",
      group: 2,
      example: "Let's start now.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "終わる",
      kana: "おわる",
      meaning: "to end",
      group: 1,
      example: "The movie ended.",
    },
    {
      type: "Doushi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "終える",
      kana: "おえる",
      meaning: "to finish",
      group: 2,
      example: "I finished work.",
    },
  ]

  const meishiFormatted: Meishi[] = [
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '保育園',
      kana: 'ほいくえん',
      meaning: 'nursery school',
      example: 'My daughter goes to a nursery school.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '幼稚園',
      kana: 'ようちえん',
      meaning: 'kindergarten',
      example: 'I walked past a kindergarten today.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '小学校',
      kana: 'しょうがっこう',
      meaning: 'elementary school',
      example: 'He studies at an elementary school.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '初学生',
      kana: 'しょがくせい',
      meaning: 'elementary school student',
      example: 'The elementary school student was waiting at the bus stop.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '中学校',
      kana: 'ちゅうがっこう',
      meaning: 'junior high school',
      example: 'This is my local junior high school.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '中学生',
      kana: 'ちゅうがくせい',
      meaning: 'junior high school student',
      example: 'The junior high students played soccer.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '高校',
      kana: 'こうこう',
      meaning: 'high school',
      example: 'I visited my old high school.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '高校生',
      kana: 'こうこうせい',
      meaning: 'high school student',
      example: 'The high school students wore uniforms.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '大学',
      kana: 'だいがく',
      meaning: 'university',
      example: 'She goes to a famous university.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '大学生',
      kana: 'だいがくせい',
      meaning: 'university student',
      example: 'The university student studies economics.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '大学院',
      kana: 'だいがくいん',
      meaning: 'graduate school',
      example: 'He wants to enter graduate school.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '大学院生',
      kana: 'だいがくいんせい',
      meaning: 'graduate student',
      example: 'The graduate student is doing research.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '予備校',
      kana: 'よびこう',
      meaning: 'prep school',
      example: 'He studies at a prep school.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '予備校生',
      kana: 'よびこうせい',
      meaning: 'prep school student',
      example: 'The prep school student looked tired.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '音',
      kana: 'おと',
      meaning: 'sound',
      example: 'I heard a strange sound.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '音楽',
      kana: 'おんがく',
      meaning: 'music',
      example: 'I love listening to music.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '声',
      kana: 'こえ',
      meaning: 'voice',
      example: 'Her voice is beautiful.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '鳴き声',
      kana: 'なきごえ',
      meaning: 'animal cry',
      example: 'I heard a cat’s cry.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 1,
      word: '形',
      kana: 'かたち',
      meaning: 'shape',
      example: 'This shape is unusual.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '買い建て',
      kana: 'かいたて',
      meaning: 'newly bought building',
      example: 'We moved into a newly bought house.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'アパート',
      kana: 'あぱーと',
      meaning: 'apartment',
      example: 'She lives in a small apartment.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'マンション',
      kana: 'まんしょん',
      meaning: 'condominium',
      example: 'They bought a new condominium.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '地下',
      kana: 'ちか',
      meaning: 'basement',
      example: 'The basement is used for storage.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '屋上',
      kana: 'おくじょう',
      meaning: 'rooftop',
      example: 'We had lunch on the rooftop.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '階段',
      kana: 'かいだん',
      meaning: 'stairs',
      example: 'Take the stairs to the second floor.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '非常口',
      kana: 'ひじょうぐち',
      meaning: 'emergency exit',
      example: 'Please do not block the emergency exit.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '建物',
      kana: 'たてもの',
      meaning: 'building',
      example: 'That building is very old.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '柄',
      kana: 'がら',
      meaning: 'pattern',
      example: 'I like the pattern on your shirt.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '値段',
      kana: 'ねだん',
      meaning: 'price',
      example: 'What is the price of this bag?'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'サイズ',
      kana: 'さいず',
      meaning: 'size',
      example: 'Do you have this in my size?'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'ひげ',
      kana: 'ひげ',
      meaning: 'beard',
      example: 'He has a long beard.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'お客さん',
      kana: 'おきゃくさん',
      meaning: 'customer',
      example: 'The customer ordered sushi.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '酔っ払い',
      kana: 'よっぱらい',
      meaning: 'drunk person',
      example: 'A drunk person was singing loudly.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'メニュー',
      kana: 'めにゅー',
      meaning: 'menu',
      example: 'The menu has many options.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '生ビール',
      kana: 'なまびーる',
      meaning: 'draft beer',
      example: 'He ordered a draft beer.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '大ジョッキ',
      kana: 'だいじょっき',
      meaning: 'large beer mug',
      example: 'She drank from a large beer mug.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '中ジョッキ',
      kana: 'ちゅうじょっき',
      meaning: 'medium beer mug',
      example: 'I prefer a medium beer mug.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'お座敷',
      kana: 'おざしき',
      meaning: 'tatami room',
      example: 'We ate in a traditional tatami room.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '座布団',
      kana: 'ざぶとん',
      meaning: 'floor cushion',
      example: 'There was a cushion on the floor.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '畳',
      kana: 'たたみ',
      meaning: 'tatami mat',
      example: 'Tatami mats cover the floor.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '伝病',
      kana: 'でんびょう',
      meaning: 'infectious disease',
      example: 'We must avoid spreading infectious diseases.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'レジ',
      kana: 'れじ',
      meaning: 'cash register',
      example: 'The cashier is at the register.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'レシート',
      kana: 'れしーと',
      meaning: 'receipt',
      example: 'Keep the receipt for returns.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '領収書',
      kana: 'りょうしゅうしょ',
      meaning: 'invoice',
      example: 'He asked for an invoice.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '音楽会',
      kana: 'おんがくかい',
      meaning: 'concert',
      example: 'We went to a concert together.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '歌',
      kana: 'うた',
      meaning: 'song',
      example: 'That’s my favorite song.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'ピアノ',
      kana: 'ぴあの',
      meaning: 'piano',
      example: 'She plays the piano beautifully.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '近所',
      kana: 'きんじょ',
      meaning: 'neighborhood',
      example: 'I walk around the neighborhood.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '近く',
      kana: 'ちかく',
      meaning: 'nearby',
      example: 'There’s a café nearby.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '遠く',
      kana: 'とおく',
      meaning: 'far away',
      example: 'We saw mountains far away.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '化粧品',
      kana: 'けしょうひん',
      meaning: 'cosmetics',
      example: 'She bought cosmetics at the store.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '女性用',
      kana: 'じょせいよう',
      meaning: 'for women',
      example: 'This product is for women.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '大人用',
      kana: 'おとなよう',
      meaning: 'for adults',
      example: 'These masks are for adults.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '子供用',
      kana: 'こどもよう',
      meaning: 'for children',
      example: 'This toothpaste is for children.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'エレベーター',
      kana: 'えれべーたー',
      meaning: 'elevator',
      example: 'Take the elevator to the top floor.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'エスカレーター',
      kana: 'えすかれーたー',
      meaning: 'escalator',
      example: 'The escalator is on the left.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '角',
      kana: 'かど',
      meaning: 'corner',
      example: 'Turn at the next corner.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: 'すみ',
      kana: 'すみ',
      meaning: 'corner (inner)',
      example: 'He sat in the corner of the room.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '正面',
      kana: 'しょうめん',
      meaning: 'front',
      example: 'The entrance is at the front.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '突き当たり',
      kana: 'つきあたり',
      meaning: 'end of the street',
      example: 'Go straight to the end.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '真ん中',
      kana: 'まんなか',
      meaning: 'center',
      example: 'Stand in the center.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '間',
      kana: 'あいだ',
      meaning: 'between',
      example: 'He stood between the cars.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '先',
      kana: 'さき',
      meaning: 'ahead',
      example: 'The station is just ahead.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '手前',
      kana: 'てまえ',
      meaning: 'this side',
      example: 'The shop is on this side of the street.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '向こう',
      kana: 'むこう',
      meaning: 'over there',
      example: 'The school is over there.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '周り',
      kana: 'まわり',
      meaning: 'around',
      example: 'There are trees around the house.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '斜め',
      kana: 'ななめ',
      meaning: 'diagonal',
      example: 'It’s across diagonally from here.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '鳥',
      kana: 'とり',
      meaning: 'bird',
      example: 'A bird is singing in the tree.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '空',
      kana: 'そら',
      meaning: 'sky',
      example: 'The sky is blue today.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '町',
      kana: 'まち',
      meaning: 'town',
      example: 'I live in a quiet town.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '廊下',
      kana: 'ろうか',
      meaning: 'hallway',
      example: 'The hallway is long.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '橋',
      kana: 'はし',
      meaning: 'bridge',
      example: 'We crossed the bridge.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '海',
      kana: 'うみ',
      meaning: 'sea',
      example: 'The sea is calm today.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '山',
      kana: 'やま',
      meaning: 'mountain',
      example: 'We climbed a tall mountain.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '川',
      kana: 'かわ',
      meaning: 'river',
      example: 'There’s a river behind my house.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '観光地',
      kana: 'かんこうち',
      meaning: 'tourist spot',
      example: 'Kyoto is a famous tourist spot.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 2,
      word: '横断歩道',
      kana: 'おうだんほどう',
      meaning: 'pedestrian crossing',
      example: 'Use the pedestrian crossing.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '看護師',
      kana: 'かんごし',
      meaning: 'nurse',
      example: 'The nurse helped the patient.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '警察官',
      kana: 'けいさつかん',
      meaning: 'police officer',
      example: 'The police officer directed traffic.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '選手',
      kana: 'せんしゅ',
      meaning: 'athlete / player',
      example: 'The player scored a goal.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '歌手',
      kana: 'かしゅ',
      meaning: 'singer',
      example: 'My sister wants to be a singer.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '教師',
      kana: 'きょうし',
      meaning: 'teacher (formal)',
      example: 'The teacher explained the answer.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '社長',
      kana: 'しゃちょう',
      meaning: 'company president',
      example: 'The president gave a speech.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: 'ガイド',
      kana: 'がいど',
      meaning: 'guide',
      example: 'The guide spoke fluent English.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '通訳',
      kana: 'つうやく',
      meaning: 'interpreter',
      example: 'An interpreter helped us communicate.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '医者',
      kana: 'いしゃ',
      meaning: 'doctor',
      example: 'The doctor gave me medicine.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '美容院',
      kana: 'びよういん',
      meaning: 'beauty salon',
      example: 'She works at a beauty salon.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '涙',
      kana: 'なみだ',
      meaning: 'tears',
      example: 'Tears ran down her face.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '席',
      kana: 'せき',
      meaning: 'seat',
      example: 'Please take a seat.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '夜景',
      kana: 'やけい',
      meaning: 'night view',
      example: 'The night view was beautiful.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '大人',
      kana: 'おとな',
      meaning: 'adult',
      example: 'Only adults can enter this bar.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '玉葱',
      kana: 'たまねぎ',
      meaning: 'onion',
      example: 'I cut an onion for dinner.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '割引',
      kana: 'わりびき',
      meaning: 'discount',
      example: 'There’s a discount today.'
    },
    {
      type: 'Meishi',
      level: 'BEGINNER 1',
      chapter: 3,
      word: '屁',
      kana: 'おなら',
      meaning: 'fart',
      example: 'Someone farted in the elevator.'
    }
  ];
  const allWords = [...meishiFormatted, ...doushiFormatted]

  const [activeTab, setActiveTab] = useState<"meishi" | "doushi" | "all">("all")
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentWords, setCurrentWords] = useState<VocabWord[]>([])
  const [learnedWords, setLearnedWords] = useState<string[]>([])

  // Load learned words from localStorage on initial render
  useEffect(() => {
    const savedLearnedWords = localStorage.getItem("learnedWords")
    if (savedLearnedWords) {
      setLearnedWords(JSON.parse(savedLearnedWords))
    }
  }, [])

  // Save learned words to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("learnedWords", JSON.stringify(learnedWords))
  }, [learnedWords])

  // Initialize and update the filtered words based on the active tab
  useEffect(() => {
    let filteredWords: VocabWord[] = []

    if (activeTab === "meishi") {
      filteredWords = [...meishiFormatted]
    } else if (activeTab === "doushi") {
      filteredWords = [...doushiFormatted]
    } else {
      filteredWords = [...meishiFormatted, ...doushiFormatted]
    }

    setCurrentWords(filteredWords)
    setCurrentIndex(0) // Reset to first word when changing tabs
  }, [activeTab])

  const goToNext = () => {
    if (currentIndex < currentWords.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0) // Loop back to the beginning
    }
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(currentWords.length - 1) // Loop to the end
    }
  }

  const goToRandom = () => {
    const randomIndex = Math.floor(Math.random() * currentWords.length)
    setCurrentIndex(randomIndex)
  }

  const toggleLearnedStatus = (word: VocabWord, event: React.MouseEvent) => {
    event.stopPropagation() // Prevent card from expanding when clicking checkbox

    const wordId = createWordId(word)

    if (learnedWords.includes(wordId)) {
      setLearnedWords(learnedWords.filter((id) => id !== wordId))
    } else {
      setLearnedWords([...learnedWords, wordId])
    }
  }

  const removeFromLearned = (wordId: string, event: React.MouseEvent) => {
    event.stopPropagation() // Prevent navigating to the word when clicking the remove button
    setLearnedWords(learnedWords.filter((id) => id !== wordId))
  }

  const navigateToWord = (wordId: string) => {
    // Find the word in all words
    const wordIndex = allWords.findIndex((word) => createWordId(word) === wordId)

    if (wordIndex !== -1) {
      const word = allWords[wordIndex]

      // Set the appropriate tab
      if (word.type === "Meishi") {
        setActiveTab("meishi")
      } else if (word.type === "Doushi") {
        setActiveTab("doushi")
      }

      // Find the index in the current filtered list
      setTimeout(() => {
        const newIndex = currentWords.findIndex((w) => createWordId(w) === wordId)
        if (newIndex !== -1) {
          setCurrentIndex(newIndex)
        }
      }, 0)
    }
  }

  // Get the current word to display
  const currentWord = currentWords[currentIndex]

  return (
    <div className="p-4">
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-8">テストこわい</h1>

          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "meishi" | "doushi" | "all")}
          >
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="meishi">名詞 (Meishi)</TabsTrigger>
              <TabsTrigger value="doushi">動詞 (Doushi)</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>

            <TabsContent value="meishi" className="mt-0">
              {currentWord && (
                <VocabCard
                  className="bg-yellow-50 dark:bg-black"
                  word={currentWord}
                  totalCount={currentWords.length}
                  currentIndex={currentIndex}
                  isLearned={learnedWords.includes(createWordId(currentWord))}
                  onToggleLearned={(e) => toggleLearnedStatus(currentWord, e)}
                />
              )}
            </TabsContent>

            <TabsContent value="doushi" className="mt-0">
              {currentWord && (
                <VocabCard
                  className="bg-green-50 dark:bg-black"
                  word={currentWord}
                  totalCount={currentWords.length}
                  currentIndex={currentIndex}
                  isLearned={learnedWords.includes(createWordId(currentWord))}
                  onToggleLearned={(e) => toggleLearnedStatus(currentWord, e)}
                />
              )}
            </TabsContent>

            <TabsContent value="all" className="mt-0">
              {currentWord && (
                <VocabCard
                  word={currentWord}
                  totalCount={currentWords.length}
                  currentIndex={currentIndex}
                  isLearned={learnedWords.includes(createWordId(currentWord))}
                  onToggleLearned={(e) => toggleLearnedStatus(currentWord, e)}
                />
              )}
            </TabsContent>
          </Tabs>

          <div className="lg:flex justify-center space-y-2 lg:space-y-0 lg:space-x-2 mt-8">
            <Button className="w-full" onClick={goToPrevious} variant="outline" size="lg">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button className="w-full" onClick={goToRandom} variant="outline" size="lg">
              <Shuffle className="mr-2 h-4 w-4" />
              Random
            </Button>
            <Button className="w-full" onClick={goToNext} variant="outline" size="lg">
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      {/* Sidebar for learned words */}
        <div className="border rounded-md container mx-auto py-8 px-4 max-w-3xl">
        <h2 className="text-lg font-bold mb-4">Learned Words ({learnedWords.length})</h2>
        <ScrollArea className="flex-1">
          <ul className="space-y-2">
            {learnedWords.map((wordId) => {
              const word = allWords.find((w) => createWordId(w) === wordId)
              if (!word) return null

              return (
                <li
                  key={wordId}
                  className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer"
                  onClick={() => navigateToWord(wordId)}
                >
                  <div className="flex-1">
                    <div className="font-medium">{word.word}</div>
                    <div className="text-sm text-muted-foreground">{word.kana}</div>
                  </div>
                  <button
                    onClick={(e) => removeFromLearned(wordId, e)}
                    className="text-muted-foreground hover:text-destructive"
                    aria-label="Remove from learned"
                  >
                    <X size={16} />
                  </button>
                </li>
              )
            })}
            {learnedWords.length === 0 && (
              <li className="text-muted-foreground text-sm italic p-2">
                No learned words yet. Check the box on a card to mark it as learned.
              </li>
            )}
          </ul>
        </ScrollArea>
      </div>

    </div>
  )
}

interface VocabCardProps {
  word: VocabWord
  totalCount: number
  currentIndex: number
  isLearned: boolean
  onToggleLearned: (event: React.MouseEvent) => void
  className?: string
}

function VocabCard({ className, word, totalCount, currentIndex, isLearned, onToggleLearned }: VocabCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    setIsExpanded(false)
  }, [word])

  return (
    <Card className={cn("w-full cursor-pointer transition-all duration-200 hover:shadow-md", className)} onClick={toggleExpand}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <CardTitle className="text-4xl font-bold">{word.word}</CardTitle>
            <div className="flex items-center space-x-2">
              <Checkbox id={`learned-${createWordId(word)}`} checked={isLearned} onClick={onToggleLearned} />
              <label
                htmlFor={`learned-${createWordId(word)}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                onClick={(e) => e.stopPropagation()}
              >
                Learned
              </label>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {totalCount}
          </span>
        </div>
        <div className="text-2xl text-muted-foreground mt-2">{word.kana}</div>
      </CardHeader>

      {isExpanded && (
        <>
          <CardContent className="space-y-4 pt-4 border-t">
            <div>
              <h3 className="font-semibold mb-1">Definition:</h3>
              <p>{word.meaning}</p>
            </div>

            {word.type === "Doushi" && (
              <div>
                <h3 className="font-semibold mb-1">Group:</h3>
                <p>Group {word.group}</p>
              </div>
            )}

            <div>
              <h3 className="font-semibold mb-1">Example:</h3>
              <p>{word.example}</p>
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground border-t pt-4">
            <div className="flex justify-between w-full">
              <span>Type: {word.type}</span>
              <span>Level: {word.level}</span>
              <span>Chapter: {word.chapter}</span>
            </div>
          </CardFooter>
        </>
      )}

      {!isExpanded && (
        <CardFooter className="text-sm text-muted-foreground pt-2">
          <p className="text-center w-full italic">Click to reveal details</p>
        </CardFooter>
      )}
    </Card>
  )
}
