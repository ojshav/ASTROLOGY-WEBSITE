'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RadioGroup } from '@/components/ui/radio-group'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/useLanguage'
import { Sparkles, Lightbulb, Star, Puzzle } from 'lucide-react'
import * as React from 'react'

const staticRandomCardsData = [
  {
    icon: Sparkles,
    gradient: "bg-gradient-to-br from-purple-200 to-pink-200",
    position: { top: '10%', left: '5%', rotate: '-5deg' }
  },
  {
    icon: Lightbulb,
    gradient: "bg-gradient-to-br from-green-200 to-yellow-200",
    position: { bottom: '15%', right: '10%', rotate: '8deg' }
  },
  {
    icon: Star,
    gradient: "bg-gradient-to-br from-blue-200 to-purple-200",
    position: { top: '20%', right: '5%', rotate: '3deg' }
  },
  {
    icon: Puzzle,
    gradient: "bg-gradient-to-br from-orange-200 to-red-200",
    position: { bottom: '5%', left: '15%', rotate: '-10deg' }
  }
]

interface QuizData {
  moreQuizText: React.ReactNode
  tryAgainButton: React.ReactNode
  completedTitle: React.ReactNode
  title: string;
  subtitle: string;
  questionHeader: string;
  questions: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
  }[];
  randomCards: { title: string; description: string }[];
}

export function AstrologyQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  const { t } = useLanguage()

  // Demo quiz data fallback
  const demoQuizData: QuizData = {
    moreQuizText: 'Want more quizzes? Visit:',
    tryAgainButton: 'Try Again',
    completedTitle: 'Quiz Completed!',
    title: 'Astrology Demo Quiz',
    subtitle: 'Test your astrology knowledge with these fun questions!',
    questionHeader: 'Question',
    questions: [
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswerIndex: 1,
      },
      {
        question: 'What is the zodiac sign for late July?',
        options: ['Cancer', 'Leo', 'Virgo', 'Gemini'],
        correctAnswerIndex: 1,
      },
      {
        question: 'Which sign is symbolized by the scales?',
        options: ['Libra', 'Pisces', 'Sagittarius', 'Capricorn'],
        correctAnswerIndex: 0,
      },
    ],
    randomCards: [
      { title: 'Fun Fact', description: 'Astrology has 12 zodiac signs.' },
      { title: 'Did You Know?', description: 'The Sun spends about a month in each sign.' },
      { title: 'Quiz Tip', description: 'Read each question carefully!' },
      { title: 'Challenge', description: 'Try to get all answers correct!' },
    ],
  };

  let quizData: QuizData | null = null;
  try {
    quizData = t('astrologyQuiz') as unknown as QuizData;
  } catch {
    quizData = null;
  }
  if (!quizData || typeof quizData !== 'object' || !quizData.questions || quizData.questions.length === 0) {
    quizData = demoQuizData;
  }

  const { questions, randomCards } = quizData;
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (selectedIndex: number) => {
    setSelectedAnswer(selectedIndex)
    setShowFeedback(true)

    if (selectedIndex === currentQuestion.correctAnswerIndex) {
      setScore(score + 1)
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer(null)
        setShowFeedback(false)
      } else {
        setQuizCompleted(true)
      }
    }, 1500)
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setQuizCompleted(false)
    setShowFeedback(false)
  }

  const optionLetters = ['A', 'B', 'C', 'D']

  return (
    <section className="py-8 sm:py-12 md:py-8 lg:py-20 rounded-3xl relative bg-[#FEFBF2] min-h-fit sm:min-h-screen md:min-h-fit lg:min-h-screen sm:flex md:block lg:flex sm:items-center sm:justify-center overflow-hidden">

      {/* Floating cards, hidden on mobile and tablet for clarity */}
      <div className="hidden lg:block">
        {randomCards.map((cardContent: { title: string, description: string }, index: number) => (
          <motion.div
            key={index}
            className={`absolute rounded-xl shadow-lg p-5 text-black z-0 ${staticRandomCardsData[index].gradient}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: staticRandomCardsData[index].position.rotate || '0deg' }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            style={{
              top: staticRandomCardsData[index].position.top,
              left: staticRandomCardsData[index].position.left,
              right: staticRandomCardsData[index].position.right,
              bottom: staticRandomCardsData[index].position.bottom,
              maxWidth: '200px',
              minWidth: '140px',
            }}
          >
            {React.createElement(staticRandomCardsData[index].icon, { className: "w-8 h-8 mb-2 text-black" })}
            <h5 className="font-bold mb-1 text-base text-black">{cardContent.title}</h5>
            <p className="text-sm text-black">{cardContent.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-8 relative z-10 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-4xl">
        <div className="text-center mb-4 sm:mb-6 md:mb-4 lg:mb-8 flex flex-col items-center pt-2 sm:pt-0 md:pt-2 lg:pt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 text-[#6A0DAD]">
            {quizData.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-lg text-[#166534]">
            {quizData.subtitle}
          </p>
        </div>

        <Card className="bg-white rounded-2xl shadow-xl overflow-hidden mt-2 sm:mt-4 md:mt-6 max-w-full sm:max-w-2xl md:max-w-2xl mx-auto border-none mb-4 sm:mb-0">
          {/* Progress Indicator */}
          <div className="bg-gray-50 px-4 sm:px-6 md:px-8 py-3 md:py-4 border-b border-gray-200">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-600 text-center">
              Q{currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>

          {/* Question Container */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="bg-[#EFE6F7] rounded-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 border border-purple-100 mx-1 sm:mx-0">
              {currentQuestion && (
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 text-center leading-relaxed px-2 sm:px-4">
                  {currentQuestion.question}
                </p>
              )}
            </div>

            {/* Answer Options */}
            <div className="px-1 sm:px-0">
              {!quizCompleted ? (
                <RadioGroup onValueChange={(value) => setSelectedAnswer(parseInt(value))} value={selectedAnswer !== null ? selectedAnswer.toString() : ''}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                    {currentQuestion.options.map((option: string, index: number) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative"
                      >
                        <Button
                          variant="default"
                          className={`w-full justify-start text-left py-4 sm:py-5 md:py-6 px-3 sm:px-4 md:px-5 rounded-xl text-base sm:text-lg md:text-xl font-semibold transition-all duration-200
                            ${selectedAnswer === index
                              ? (index === currentQuestion.correctAnswerIndex ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                              : 'bg-[#EFE6F7] text-[#6A0DAD] hover:bg-[#E0CCF5]'}
                            ${showFeedback && index === currentQuestion.correctAnswerIndex && 'bg-green-500 text-white'}
                          `}
                          onClick={() => handleAnswer(index)}
                          disabled={showFeedback}
                        >
                          <span className="absolute left-3 sm:left-4 md:left-5 top-1/2 -translate-y-1/2 font-bold text-base sm:text-lg md:text-xl">{optionLetters[index]}.</span>
                          <span className="ml-7 sm:ml-8 md:ml-10">{option}</span>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </RadioGroup>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6A0DAD] mb-3 sm:mb-4 md:mb-6">
                    {quizData.completedTitle}
                  </h4>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 sm:mb-6 md:mb-8">
                    {t('astrologyQuiz.scoreText').replace('{{score}}', score.toString()).replace('{{total}}', questions.length.toString())}
                  </p>
                  <Button onClick={resetQuiz} className="bg-gradient-to-r from-[#6A0DAD] to-[#FF8C00] text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl rounded-lg hover:opacity-90 transition-all duration-200">
                    {quizData.tryAgainButton}
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}