'use client'

import { useState, useEffect } from 'react';
import { User, Calendar, BookOpen, HelpCircle } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { CTASection } from '../../components/CTASection';
import { motion } from 'framer-motion';

const post = blogPosts['numerology-basics'];
const tabs = ['Overview', 'Number Guide', 'Calculations', 'FAQs'];

export default function NumerologyBasicsPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [email, setEmail] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white pt-0 md:pt-2">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Banner Heading */}
        <div className="w-full rounded-3xl bg-gradient-to-r from-[#fdf6f2] via-[#f3e8ff] to-[#e0f2fe] py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#f3e8ff]">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg tracking-tight">Numerology Basics</h1>
          <p className="text-lg md:text-2xl text-gray-700 text-center max-w-2xl">Discover how numbers influence your life path and destiny. Learn the ancient science of numerology and unlock the secrets hidden in your birth date and name.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full h-64 md:h-96 relative mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image src="https://res.cloudinary.com/dxwspucxw/image/upload/v1752049129/numerology_yl4ss6.jpg" alt={post.title.en} fill className="object-cover" />
            </motion.div>
            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-8 text-lg leading-relaxed text-gray-700 space-y-6 text-justify">
              <p>
                {post.content.en.split('\n')[0]}
              </p>
              <p>
                <span className="font-semibold text-indigo-700">What is Numerology?</span> Numerology is the mystical study of numbers and their influence on human life. It&apos;s based on the belief that numbers have vibrational frequencies that affect our personality, relationships, career, and life path. By understanding these numerical patterns, we can gain insights into our strengths, challenges, and purpose.
              </p>
              <p>
                <span className="font-semibold text-indigo-700">Ancient Origins:</span> Numerology has roots in various ancient civilizations including Babylonian, Egyptian, Greek, and Hebrew cultures. The modern system is largely based on the work of Pythagoras, the Greek mathematician and philosopher, who believed that numbers were the foundation of all reality.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-4">
                <li><span className="font-semibold text-indigo-700">Life Path Number:</span> Derived from your birth date, reveals your life&apos;s purpose and the lessons you&apos;re here to learn. This is considered the most important number in your numerological profile.</li>
                <li><span className="font-semibold text-indigo-700">Destiny Number:</span> Calculated from your full name, indicates your natural talents and the path you&apos;re destined to follow. It shows what you&apos;re meant to accomplish in this lifetime.</li>
                <li><span className="font-semibold text-indigo-700">Soul Number:</span> Based on the vowels in your name, represents your inner desires and spiritual aspirations. It reveals what truly motivates you at a soul level.</li>
                <li><span className="font-semibold text-indigo-700">Personality Number:</span> Derived from consonants in your name, shows how others perceive you. It&apos;s like your social mask or the first impression you make.</li>
                <li><span className="font-semibold text-indigo-700">Birth Day Number:</span> Your day of birth reveals your natural talents and abilities. It shows the tools you came into this life with.</li>
                <li><span className="font-semibold text-indigo-700">Maturity Number:</span> Shows the person you&apos;ll become in the latter part of your life. It&apos;s calculated by adding your Life Path and Destiny numbers.</li>
                <li><span className="font-semibold text-indigo-700">Personal Year Number:</span> Changes annually, indicating the theme and opportunities for each year. It helps you understand the energy and focus for any given year.</li>
                <li><span className="font-semibold text-indigo-700">Karmic Debt Numbers:</span> Reveal past-life lessons and challenges to overcome. These are 13, 14, 16, and 19, indicating specific karmic patterns to resolve.</li>
                <li><span className="font-semibold text-indigo-700">Master Numbers:</span> 11, 22, and 33 carry special spiritual significance and higher vibrations. They represent enhanced spiritual potential but also greater challenges.</li>
              </ul>
              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-lg">
                <span className="text-indigo-600 font-medium">Tip:</span> Numerology works best when combined with self-awareness and conscious effort. Numbers provide guidance, but your choices and actions shape your destiny. Start by calculating your Life Path Number to understand your core purpose.
              </div>
            </motion.div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Key Takeaway */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-8 rounded-lg">
              <p className="text-gray-700 text-justify">
                <span className="text-indigo-600 font-medium">Key Takeaway:</span> Numbers are not just mathematical symbols—they carry vibrational energies that influence every aspect of your life, from personality traits to life purpose and destiny.
              </p>
            </motion.div>
            {/* Tab Content */}
            {activeTab === 'Overview' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">How Numerology Works</h2>
                <ul className="space-y-3 text-gray-700 mb-8 text-justify">
                  <li><span className="text-indigo-500 mr-2">•</span>Numbers vibrate at specific frequencies that influence our energy and experiences.</li>
                  <li><span className="text-indigo-500 mr-2">•</span>Your birth date and name create a unique numerical blueprint for your life.</li>
                  <li><span className="text-indigo-500 mr-2">•</span>Each number (1-9) has distinct characteristics, strengths, and challenges.</li>
                  <li><span className="text-indigo-500 mr-2">•</span>Master numbers (11, 22, 33) carry higher spiritual vibrations and potential.</li>
                </ul>
                <section className="mb-12">
                  <h3 className="font-bold text-black text-xl mb-4">Case Study: Discovering Life Purpose Through Numbers</h3>
                  <div className="text-gray-700 mb-4 text-justify">
                    <p>Priya, a 28-year-old marketing professional, felt unfulfilled despite her success. Her Life Path Number 7 revealed her natural inclination toward analysis and spirituality. This insight led her to pursue a career in market research and start a meditation practice. Within a year, she felt more aligned with her true purpose and experienced greater satisfaction in both work and personal life.</p>
                  </div>
                </section>
                <section>
                  <h3 className="font-bold text-black text-xl mb-4">Common Misconceptions</h3>
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2 mb-4 text-justify">
                    <li>Numerology is just superstition—it&apos;s actually based on mathematical patterns and vibrational frequencies.</li>
                    <li>All people with the same number are identical—numbers show tendencies, but individual choices matter.</li>
                    <li>Numbers can predict exact events—they reveal patterns and potential, not specific outcomes.</li>
                    <li>Changing your name will solve all problems—it&apos;s one tool among many for personal growth.</li>
                  </ul>
                </section>
              </motion.section>
            )}
            {activeTab === 'Number Guide' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Number Meanings and Characteristics</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { number: 1, title: 'The Pioneer', traits: 'Leadership, independence, innovation', challenges: 'Impatience, ego, stubbornness' },
                    { number: 2, title: 'The Diplomat', traits: 'Cooperation, intuition, harmony', challenges: 'Oversensitivity, indecision, dependency' },
                    { number: 3, title: 'The Communicator', traits: 'Creativity, expression, optimism', challenges: 'Scattered energy, superficiality, moodiness' },
                    { number: 4, title: 'The Builder', traits: 'Stability, organization, reliability', challenges: 'Rigidity, stubbornness, lack of flexibility' },
                    { number: 5, title: 'The Adventurer', traits: 'Freedom, change, versatility', challenges: 'Restlessness, impulsiveness, inconsistency' },
                    { number: 6, title: 'The Nurturer', traits: 'Responsibility, compassion, service', challenges: 'Martyrdom, worry, over-protectiveness' },
                    { number: 7, title: 'The Seeker', traits: 'Analysis, spirituality, wisdom', challenges: 'Isolation, skepticism, perfectionism' },
                    { number: 8, title: 'The Achiever', traits: 'Power, success, material mastery', challenges: 'Workaholism, materialism, control issues' },
                    { number: 9, title: 'The Humanitarian', traits: 'Compassion, idealism, universal love', challenges: 'Detachment, impracticality, emotional distance' },
                  ].map(({ number, title, traits, challenges }) => (
                    <div key={number} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-indigo-900 mb-2">{number} - {title}</h3>
                      <p className="text-gray-700 mb-3"><span className="font-semibold">Strengths:</span> {traits}</p>
                      <p className="text-gray-700"><span className="font-semibold">Challenges:</span> {challenges}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
            {activeTab === 'Calculations' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">How to Calculate Your Numbers</h2>
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-indigo-900 mb-3">Life Path Number</h3>
                    <p className="text-gray-700 mb-4">Add all digits of your birth date until you get a single digit (except for master numbers 11, 22, 33).</p>
                    <p className="text-sm text-gray-600">Example: 15-03-1990 = 1+5+0+3+1+9+9+0 = 28 = 2+8 = 10 = 1+0 = 1</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-900 mb-3">Destiny Number</h3>
                    <p className="text-gray-700 mb-4">Convert each letter of your full name to its numerical value and add until you get a single digit.</p>
                    <p className="text-sm text-gray-600">A=1, B=2, C=3... I=9, J=1, K=2... Example: JOHN DOE = 1+6+8+5+4+6+5 = 35 = 3+5 = 8</p>
                  </div>
                </div>
              </motion.section>
            )}
            {activeTab === 'FAQs' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    ['Can numerology predict my future?', 'Numerology reveals patterns and potential, but your choices determine your path. It&apos;s a tool for guidance, not fortune-telling.'],
                    ['Should I change my name based on numerology?', 'Name changes can be beneficial, but consult a professional numerologist first. Consider the impact on your identity and legal documents.'],
                    ['Do master numbers always bring good luck?', 'Master numbers (11, 22, 33) carry higher vibrations but also greater challenges. They require more effort to manifest their potential.'],
                    ['How accurate is numerology?', 'Numerology&apos;s accuracy depends on the practitioner&apos;s skill and your willingness to work with the insights. It&apos;s most effective when combined with self-awareness.'],
                  ].map(([q, a]) => (
                    <div key={q} className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-indigo-900 mb-2 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-indigo-400" />{q}</h3>
                      <p className="text-gray-700">{a}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
            <CTASection />
            
            {/* Next Blog Section */}
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-black mb-6">Continue Your Astrological Journey</h2>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-all cursor-pointer">
                <Link href="/blog/understanding-your-birth-chart" className="block">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-orange-100">
                      <Image src="https://res.cloudinary.com/dxwspucxw/image/upload/v1752049129/numerology_yl4ss6.jpg" alt="Birth Chart" fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-orange-600 font-medium mb-1">Next in Series</p>
                      <h3 className="text-xl font-bold text-black mb-2">Understanding Your Birth Chart</h3>
                      <p className="text-gray-700 text-sm mb-3">A birth chart is a vital map of your life, showing the position of planets at the time of your birth. Learn to read your cosmic blueprint.</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>15 April, 2024</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>15 min read</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-orange-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </section>
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <Link href="/about" className="block bg-indigo-50 rounded-lg p-6 mb-8 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-indigo-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="text-indigo-700 font-medium">Numerological Review by</span> <br />
                    <span className="font-semibold text-indigo-900">Dr. Narendra Kumar Sharma</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Updated on 15 April, 2024</span>
                  </p>
                </div>
              </div>
            </Link>
            {/* Newsletter */}
            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-orange-900 mb-4">Get Weekly Numerology Insights</h3>
              <p className="text-gray-700 mb-4">Sign up for our newsletter and receive cosmic tips, remedies, and predictions every week.</p>
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
            {/* Common Myths */}
            <div className="bg-yellow-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-yellow-900 mb-4">Common Numerology Myths</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Numbers control your destiny (you have free will)</li>
                <li>All calculations are the same (methods vary)</li>
                <li>Numbers can predict exact events (they show patterns)</li>
                <li>Changing your name fixes everything (it&apos;s one tool among many)</li>
              </ul>
            </div>
            {/* Resources */}
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-indigo-900 mb-4">Recommended Resources</h3>
              <ul className="space-y-3">
                {[
                  ['The Influence of Planets', '/blog/the-influence-of-planets'],
                  ['Understanding Vedic Astrology', '/blog/understanding-vedic-astrology'],
                  ['Gemstones and Their Powers', '/blog/gemstones-and-their-powers'],
                  ['Understanding Your Birth Chart', '/blog/understanding-your-birth-chart'],
                ].map(([title, link]) => (
                  <li key={title}>
                    <Link href={link} className="text-indigo-700 hover:underline flex items-start">
                      <span className="text-indigo-500 mr-2">→</span>
                      <span>{title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 