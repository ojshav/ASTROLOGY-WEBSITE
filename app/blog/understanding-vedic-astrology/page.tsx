'use client'

import { useState, useEffect } from 'react';
import { User, Calendar, BookOpen, HelpCircle } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { CTASection } from '../../components/CTASection';
import { motion } from 'framer-motion';

const post = blogPosts['understanding-vedic-astrology'];
const tabs = ['Overview', 'Principles', 'Remedies', 'FAQs'];

export default function UnderstandingVedicAstrologyPage() {
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg tracking-tight">Understanding Vedic Astrology</h1>
          <p className="text-lg md:text-2xl text-gray-700 text-center max-w-2xl">Explore the ancient science of Jyotish, decode your birth chart, and discover how Vedic astrology can guide your life&apos;s
          journey.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author.en}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {post.category}</span>
              </div>
            </div>
            {/* Hero Image */}
            <div className="w-full h-64 md:h-96 relative mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image src={post.imageUrl} alt={post.title.en} fill className="object-cover" />
            </div>
            {/* Intro */}
            <div className="mb-8 text-lg leading-relaxed text-gray-700 space-y-6 text-justify">
              <p>
                {post.content.en.split('\n')[0]}
              </p>
              <p>
                <span className="font-semibold text-indigo-700">What is Vedic Astrology?</span> Vedic astrology, or Jyotish Shastra, is an ancient Indian science that studies the positions and movements of celestial bodies to interpret their influence on human life. It uses the birth chart (Janam Kundli) as a map of your destiny, revealing your personality, relationships, career, and spiritual path.
              </p>
              <p>
                <span className="font-semibold text-indigo-700">History & Origins:</span> Vedic astrology has its roots in the Vedas, the oldest scriptures of India, dating back thousands of years. Ancient sages observed the skies and developed a sophisticated system to understand cosmic rhythms and their impact on earthly life. This wisdom has been passed down through generations and remains relevant today.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-4">
                <li><span className="font-semibold text-indigo-700">Birth Chart:</span> The foundation of Vedic astrology, showing the positions of planets at your birth and their impact on your life&apos;s journey. Each house and sign represents a different aspect of your experience. A detailed chart analysis can reveal your strengths, weaknesses, and karmic lessons.</li>
                <li><span className="font-semibold text-indigo-700">Zodiac Signs:</span> The twelve signs (Rashis) color your personality, preferences, and approach to life. Each sign is ruled by a planet and has unique strengths and challenges. Understanding your Moon sign and ascendant is especially important in Vedic astrology.</li>
                <li><span className="font-semibold text-indigo-700">Planetary Periods (Dasha):</span> Dashas are cycles that highlight the influence of specific planets over time, shaping your opportunities, challenges, and growth. The Vimshottari Dasha system is most widely used, and knowing your current Dasha can help you plan important life events.</li>
                <li><span className="font-semibold text-indigo-700">Yogas:</span> Special planetary combinations that can bring blessings, talents, or challenges. Understanding yogas helps you harness your unique gifts. Some yogas bring fame, wealth, or spiritual insight, while others may indicate obstacles to overcome.</li>
                <li><span className="font-semibold text-indigo-700">Remedies:</span> Vedic astrology offers practical solutions—mantras, rituals, gemstones, and charity—to balance planetary influences and promote well-being. Remedies are personalized and can help you align with your highest potential.</li>
              </ul>
              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-lg">
                <span className="text-indigo-600 font-medium">Tip:</span> Consult a qualified astrologer to interpret your chart and recommend personalized remedies for your goals and challenges. Keep a journal of your experiences to notice how planetary cycles affect your life.
              </div>
            </div>

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
            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-8 rounded-lg">
              <p className="text-gray-700">
                <span className="text-indigo-600 font-medium">Key Takeaway:</span> Vedic astrology is a profound science that reveals your life&apos;s blueprint, helping you understand your strengths, challenges, and the timing of important events.
              </p>
            </div>
            {/* Tab Content */}
            {activeTab === 'Overview' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Core Principles of Vedic Astrology</h2>
                <div className="space-y-6 text-gray-700 mb-8 text-justify">
                  <p>
                    At the heart of Vedic Astrology lies the profound principle of karma, the universal law of cause and effect. Your birth chart is not a random assortment of planetary positions but a precise map of your accumulated karmas from past lives. It reveals the karmic baggage you carry—both positive and negative—and illustrates the life path your soul has chosen to experience for its evolution. This perspective shifts the focus from simple fortune-telling to a deeper understanding of your life&apos;s purpose. It empowers you to see challenges not as punishments, but as opportunities to resolve old patterns, and to recognize your blessings as the fruits of past positive actions.
                  </p>
                  <p>
                    The nine planets, or Navagrahas, are the celestial agents that deliver the results of your karma. Each planet embodies a specific divine energy and governs different facets of human existence. The Sun (Surya) represents your soul and ego; the Moon (Chandra) governs your mind and emotions; Mars (Mangal) dictates your energy and drive. These celestial bodies are not seen as malevolent forces but as cosmic teachers, guiding you through various life lessons. Their placement in your chart—whether strong, weak, exalted, or debilitated—indicates the areas of life where you will experience ease or face challenges, providing a roadmap for conscious living.
                  </p>
                  <p>
                    The Ascendant (Lagna) is the cornerstone of the birth chart, representing the zodiac sign that was rising on the eastern horizon at your exact moment of birth. It defines your physical self, your core personality, and your overall approach to the world. The entire framework of the twelve houses (Bhavas) is built upon the Lagna. Each house signifies a specific domain of life, such as the 1st house for self, the 7th for marriage, and the 10th for career. Analyzing which planets occupy or influence these houses provides a detailed and nuanced picture of your life&apos;s potential, opportunities, and learning curves.
                  </p>
                  <p>
                    Vedic Astrology&apos;s predictive power comes from its sophisticated system of planetary time periods, known as Dashas. The most prominent is the Vimshottari Dasha system, a 120-year cycle that reveals when the karmic potential of each planet will be activated. Your life unfolds in chapters, each ruled by a different planet, bringing its unique themes and experiences to the forefront. Superimposed on this are the continuous movements of planets, or transits (Gochara). When a transiting planet interacts with a sensitive point in your birth chart during a relevant Dasha period, significant life events are triggered, making this dual system a powerful tool for timing and preparation.
                  </p>
                  <p>
                    The concept of Karma and Dharma forms the ethical foundation of Vedic Astrology. Your birth chart doesn&apos;t just predict events; it reveals your dharma—your righteous duty and life purpose. Understanding your chart helps you align with your dharma, making choices that serve your soul&apos;s evolution. This perspective transforms astrology from a passive tool of prediction into an active guide for conscious living, helping you navigate life&apos;s challenges with wisdom and grace.
                  </p>
                </div>
              </motion.section>
            )}
            {activeTab === 'Principles' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Key Principles and Concepts</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-lg mb-3">The Five Elements</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Fire (Agni): Sun, Mars - Energy and transformation</li>
                      <li>• Earth (Prithvi): Mercury, Venus - Stability and material world</li>
                      <li>• Air (Vayu): Saturn, Rahu - Movement and change</li>
                      <li>• Water (Jal): Moon, Venus - Emotions and intuition</li>
                      <li>• Ether (Akash): Jupiter, Ketu - Spirituality and wisdom</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-lg mb-3">The Three Gunas</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Sattva (Purity): Jupiter, Moon - Wisdom and harmony</li>
                      <li>• Rajas (Activity): Sun, Mars - Energy and passion</li>
                      <li>• Tamas (Inertia): Saturn, Rahu - Stability and challenges</li>
                    </ul>
                  </div>
                </div>
              </motion.section>
            )}
            {activeTab === 'Remedies' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Vedic Remedies and Solutions</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <h3 className="font-bold text-green-900 text-lg mb-3">Spiritual Remedies</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• Chanting planetary mantras daily</li>
                      <li>• Performing specific pujas and rituals</li>
                      <li>• Practicing meditation and yoga</li>
                      <li>• Visiting sacred temples and pilgrimage sites</li>
                      <li>• Reading and studying sacred texts</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="font-bold text-blue-900 text-lg mb-3">Material Remedies</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Wearing appropriate gemstones</li>
                      <li>• Using specific colors and metals</li>
                      <li>• Following dietary recommendations</li>
                      <li>• Practicing charity and service</li>
                      <li>• Fasting on specific days</li>
                    </ul>
                  </div>
                </div>
              </motion.section>
            )}
            {activeTab === 'FAQs' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    ['What is the difference between Vedic and Western astrology?', 'Vedic astrology uses the sidereal zodiac and focuses on karma and spiritual growth, while Western astrology uses the tropical zodiac and emphasizes personality traits.'],
                    ['How accurate is Vedic astrology?', 'Vedic astrology is highly accurate when practiced by qualified astrologers. Its predictive power comes from thousands of years of observation and refinement.'],
                    ['Can Vedic astrology predict the future?', 'Vedic astrology reveals probabilities and tendencies based on karmic patterns, but free will always plays a role in shaping your destiny.'],
                    ['How often should I consult an astrologer?', 'Major life events, annual charts, and during challenging periods are good times for consultation. Regular check-ins help you stay aligned with cosmic energies.'],
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
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all cursor-pointer">
                <Link href="/blog/gemstones-and-their-powers" className="block">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-purple-100">
                      <Image src="/images/gemstones.jpg" alt="Gemstones" fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-purple-600 font-medium mb-1">Next in Series</p>
                      <h3 className="text-xl font-bold text-black mb-2">Gemstones and Their Powers</h3>
                      <p className="text-gray-700 text-sm mb-3">Discover the mystical properties of gemstones and how they can enhance your life through their planetary connections.</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>12 April, 2024</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>6 min read</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </section>
            
            {/* Resources Section */}
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-black mb-6">Additional Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Birth Chart Calculator',
                    description: 'Calculate your Vedic birth chart to understand your planetary positions.',
                    link: '/astrology-calculator',
                    icon: '📊'
                  },
                  {
                    title: 'Daily Horoscope',
                    description: 'Get your daily horoscope based on Vedic astrology principles.',
                    link: '/daily-horoscope',
                    icon: '🌟'
                  },
                  {
                    title: 'Consultation Services',
                    description: 'Book a consultation with our expert Vedic astrologers.',
                    link: '/services/astrology',
                    icon: '🔮'
                  },
                  {
                    title: 'Astrology Courses',
                    description: 'Learn Vedic astrology through our comprehensive courses.',
                    link: '/courses',
                    icon: '📚'
                  }
                ].map((resource) => (
                  <Link key={resource.title} href={resource.link} className="block bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{resource.icon}</div>
                      <div>
                        <h3 className="font-bold text-black text-lg mb-2">{resource.title}</h3>
                        <p className="text-gray-700 text-sm">{resource.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Author Info */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-black text-lg mb-4">About the Author</h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image src="/images/astrologer.jpg" alt="Vedic Astrologer" width={64} height={64} className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Dr. Narendra Kumar</p>
                    <p className="text-gray-600 text-sm">Expert Vedic Astrologer</p>
                    <p className="text-gray-600 text-sm">20+ years of experience</p>
                  </div>
                </div>
              </div>
              
              {/* Related Topics */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-black text-lg mb-4">Related Topics</h3>
                <div className="space-y-3">
                  <Link href="/blog/numerology-basics" className="block text-indigo-600 hover:text-indigo-800 transition-colors">
                    Numerology Basics
                  </Link>
                  <Link href="/blog/gemstones-and-their-powers" className="block text-indigo-600 hover:text-indigo-800 transition-colors">
                    Gemstones and Their Powers
                  </Link>
                  <Link href="/blog/understanding-your-birth-chart" className="block text-indigo-600 hover:text-indigo-800 transition-colors">
                    Understanding Your Birth Chart
                  </Link>
                  <Link href="/blog/astrology-remedies-for-life" className="block text-indigo-600 hover:text-indigo-800 transition-colors">
                    Astrology Remedies for Life
                  </Link>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                <h3 className="font-bold text-black text-lg mb-3">Stay Updated</h3>
                <p className="text-gray-700 text-sm mb-4">Get the latest insights on Vedic astrology and cosmic wisdom.</p>
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 