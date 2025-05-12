"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react"
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
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "保育園",
      kana: "ほいくえん",
      meaning: "nursery school",
      example: "My daughter goes to a nursery school.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "幼稚園",
      kana: "ようちえん",
      meaning: "kindergarten",
      example: "I walked past a kindergarten today.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "小学校",
      kana: "しょうがっこう",
      meaning: "elementary school",
      example: "He studies at an elementary school.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "初学生",
      kana: "しょがくせい",
      meaning: "elementary school student",
      example: "The elementary school student was waiting at the bus stop.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "中学校",
      kana: "ちゅうがっこう",
      meaning: "junior high school",
      example: "This is my local junior high school.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "中学生",
      kana: "ちゅうがくせい",
      meaning: "junior high school student",
      example: "The junior high students played soccer.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "高校",
      kana: "こうこう",
      meaning: "high school",
      example: "I visited my old high school.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "高校生",
      kana: "こうこうせい",
      meaning: "high school student",
      example: "The high school students wore uniforms.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "大学",
      kana: "だいがく",
      meaning: "university",
      example: "She goes to a famous university.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "大学生",
      kana: "だいがくせい",
      meaning: "university student",
      example: "The university student studies economics.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "大学院",
      kana: "だいがくいん",
      meaning: "graduate school",
      example: "He wants to enter graduate school.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "大学院生",
      kana: "だいがくいんせい",
      meaning: "graduate student",
      example: "The graduate student is doing research.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "予備校",
      kana: "よびこう",
      meaning: "prep school",
      example: "He studies at a prep school.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "予備校生",
      kana: "よびこうせい",
      meaning: "prep school student",
      example: "The prep school student looked tired.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "音",
      kana: "おと",
      meaning: "sound",
      example: "I heard a strange sound.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "音楽",
      kana: "おんがく",
      meaning: "music",
      example: "I love listening to music.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "声",
      kana: "こえ",
      meaning: "voice",
      example: "Her voice is beautiful.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "鳴き声",
      kana: "なきごえ",
      meaning: "cry (animal sound)",
      example: "I heard a cat's cry.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 1,
      word: "形",
      kana: "かたち",
      meaning: "shape",
      example: "This shape is unusual.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "買い建て",
      kana: "かいたて",
      meaning: "newly bought building",
      example: "We moved into a newly bought house.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 2,
      word: "アパート",
      kana: "あぱーと",
      meaning: "apartment",
      example: "She lives in a small apartment.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "看護師",
      kana: "かんごし",
      meaning: "nurse",
      example: "The nurse helped the patient.",
    },
    {
      type: "Meishi",
      level: "BEGINNER 1",
      chapter: 3,
      word: "警察官",
      kana: "けいさつかん",
      meaning: "police officer",
      example: "The police officer directed traffic.",
    },
  ]

  const [activeTab, setActiveTab] = useState<"meishi" | "doushi" | "all">("all")
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentWords, setCurrentWords] = useState<VocabWord[]>([])

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

  // Get the current word to display
  const currentWord = currentWords[currentIndex]

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">Japanese Vocabulary Study</h1>

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
          {currentWord && <VocabCard className="bg-yellow-100" word={currentWord} totalCount={currentWords.length} currentIndex={currentIndex} />}
        </TabsContent>

        <TabsContent value="doushi" className="mt-0">
          {currentWord && <VocabCard className="bg-green-100" word={currentWord} totalCount={currentWords.length} currentIndex={currentIndex} />}
        </TabsContent>

        <TabsContent value="all" className="mt-0">
          {currentWord && <VocabCard word={currentWord} totalCount={currentWords.length} currentIndex={currentIndex} />}
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
  )
}

interface VocabCardProps {
  word: VocabWord
  totalCount: number
  currentIndex: number
  className?: string
}

function VocabCard({ word, totalCount, currentIndex, className }: VocabCardProps) {
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
          <CardTitle className="text-4xl font-bold">{word.word}</CardTitle>
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
