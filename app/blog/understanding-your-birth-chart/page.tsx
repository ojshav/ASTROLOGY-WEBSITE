'use client'

import { useState, useEffect } from 'react';
import { User, Calendar, Map, BookOpen, HelpCircle, Star, Compass } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { CTASection } from '../../components/CTASection';
import { motion } from 'framer-motion';

const post = blogPosts['understanding-your-birth-chart'];
const tabs = ['Overview', 'Chart Components', 'Houses', 'FAQs'];

export default function UnderstandingYourBirthChartPage() {
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>Understanding Your Birth Chart</h1>
          <p className="text-lg md:text-2xl text-gray-700 text-center max-w-3xl leading-relaxed">Your birth chart is a cosmic blueprint—a snapshot of the heavens at the moment you took your first breath. Discover how this celestial map reveals your personality, potential, and life&apos;s journey.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full h-64 md:h-96 relative mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image src="https://res.cloudinary.com/dxwspucxw/image/upload/v1752049127/birth-chart_zqq2nn.jpg" alt={post.title.en} fill className="object-cover" />
            </motion.div>
            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-8 text-lg leading-relaxed text-gray-700 space-y-6 text-justify">
              <p className="text-xl leading-relaxed">
                {post.content.en.split('\n')[0]}
              </p>
              <p className="text-lg leading-relaxed">
                <span className="font-bold text-indigo-700 text-xl">What is a Birth Chart?</span> A birth chart, also known as a natal chart or horoscope, is a celestial map that captures the exact positions of the Sun, Moon, and planets at the precise moment of your birth. This cosmic snapshot serves as your personal blueprint, revealing your innate characteristics, life purpose, and the unique energies that influence your journey.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 text-lg mb-3 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  The Cosmic Blueprint
                </h3>
                <p className="text-blue-800 leading-relaxed">
                  Think of your birth chart as a cosmic fingerprint—no two charts are exactly alike, even for twins born minutes apart. This unique configuration of celestial bodies creates your personal energy signature, influencing everything from your personality traits to your life&apos;s major themes and challenges.
                </p>
              </div>
              <h3 className="font-bold text-black text-2xl mt-8 mb-4" style={{ fontFamily: 'Georgia, serif' }}>Key Components of Your Birth Chart</h3>
              <ul className="list-disc list-inside ml-4 space-y-4 text-lg">
                <li><span className="font-bold text-indigo-700">Ascendant (Rising Sign):</span> Your personal identity and how you present yourself to the world. This is the sign that was rising on the eastern horizon at your birth time.</li>
                <li><span className="font-bold text-indigo-700">Sun Sign:</span> Your core essence, ego, and the fundamental qualities that make you who you are. This represents your conscious self and life purpose.</li>
                <li><span className="font-bold text-indigo-700">Moon Sign:</span> Your emotional nature, inner world, and subconscious patterns. This reveals your deepest needs and how you process feelings.</li>
                <li><span className="font-bold text-indigo-700">Planetary Positions:</span> Each planet&apos;s placement in specific signs and houses reveals different aspects of your personality and life areas.</li>
                <li><span className="font-bold text-indigo-700">Houses:</span> The twelve divisions of your chart, each representing different life areas from career to relationships to spirituality.</li>
                <li><span className="font-bold text-indigo-700">Aspects:</span> The geometric relationships between planets, showing how different energies interact and influence each other.</li>
                <li><span className="font-bold text-indigo-700">Nodes:</span> The North and South Nodes reveal your soul&apos;s evolutionary path and karmic lessons.</li>
                <li><span className="font-bold text-indigo-700">Midheaven:</span> Your career path, public image, and highest aspirations in this lifetime.</li>
                <li><span className="font-bold text-indigo-700">Part of Fortune:</span> Indicates areas of natural luck and where you can find joy and fulfillment.</li>
              </ul>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400 p-6 rounded-lg">
                <span className="text-orange-700 font-bold text-lg">Pro Tip:</span> <span className="text-black font-semibold">Your birth chart is most accurate when you have your exact birth time. Even a few minutes difference can change your Ascendant and house positions significantly.</span>
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
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-400 p-6 mb-8 rounded-lg shadow-sm">
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                <span className="text-indigo-600 font-bold text-xl">Key Takeaway:</span> Your birth chart is not a fixed destiny but a cosmic instruction manual. It reveals your natural talents, challenges, and the unique path you&apos;re designed to walk in this lifetime.
              </p>
            </motion.div>
            {/* Tab Content */}
            {activeTab === 'Overview' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-b pb-2" style={{ fontFamily: 'Georgia, serif' }}>How to Read Your Birth Chart</h2>
                <div className="space-y-6 mb-8 text-justify">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-xl mb-3 flex items-center"><Compass className="w-5 h-5 mr-2 text-indigo-600" />Step 1: Identify Your Big Three</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">Start with your Sun, Moon, and Ascendant signs. These three form the foundation of your personality:</p>
                    <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                      <li><span className="font-semibold text-indigo-700">Sun Sign:</span> Your core identity and life purpose</li>
                      <li><span className="font-semibold text-indigo-700">Moon Sign:</span> Your emotional nature and inner world</li>
                      <li><span className="font-semibold text-indigo-700">Ascendant:</span> Your outer personality and first impressions</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-xl mb-3 flex items-center"><Map className="w-5 h-5 mr-2 text-indigo-600" />Step 2: Explore Your Houses</h3>
                    <p className="text-gray-700 leading-relaxed">Each house represents a different area of life. Planets in these houses show where your energy is focused. The first house, for instance, relates to your self and appearance, while the seventh house governs partnerships.</p>
                  </div>
                </div>
                <section className="mb-12">
                  <h3 className="font-bold text-black text-2xl mb-4" style={{ fontFamily: 'Georgia, serif' }}>Case Study: Discovering Life Purpose</h3>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 text-justify">
                    <p className="text-gray-700 mb-4 leading-relaxed text-lg">Sarah, a 32-year-old marketing manager, felt unfulfilled despite her success. Her birth chart revealed a strong 10th house (career) with Jupiter, indicating natural leadership abilities, but her North Node in the 5th house (creativity) suggested her true calling lay in creative expression. This insight led her to start a side business in graphic design, which eventually became her full-time passion and brought her greater satisfaction than her corporate role.</p>
                  </div>
                </section>
              </motion.section>
            )}
            {activeTab === 'Chart Components' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-b pb-2" style={{ fontFamily: 'Georgia, serif' }}>Essential Birth Chart Components</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    ['Ascendant', 'Rising Sign', 'Your outer personality and first impressions'],
                    ['Sun Sign', 'Core Identity', 'Your fundamental essence and life purpose'],
                    ['Moon Sign', 'Emotional Nature', 'Your inner world and emotional patterns'],
                    ['Midheaven', 'Career Path', 'Your public image and highest aspirations'],
                    ['North Node', 'Soul Purpose', 'Your evolutionary path and life lessons'],
                    ['Part of Fortune', 'Natural Luck', 'Areas of joy and natural talent'],
                  ].map(([name, title, description]) => (
                    <div key={name as string} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all cursor-pointer border">
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{name}</h4>
                      <p className="text-indigo-700 font-semibold mb-2">{title}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
                    </div>
                  ))}
                </div>
                 <div className="space-y-6 text-justify">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-blue-900 text-xl mb-3">Planetary Aspects</h3>
                      <p className="text-blue-800 leading-relaxed mb-4">Aspects are the geometric relationships between planets that show how different energies interact:</p>
                      <ul className="list-disc list-inside text-blue-800 space-y-2">
                        <li><span className="font-semibold">Conjunction (0°):</span> Planets work together, intensifying their combined energy</li>
                        <li><span className="font-semibold">Trine (120°):</span> Harmonious flow of energy, natural talents</li>
                        <li><span className="font-semibold">Square (90°):</span> Challenges that promote growth and development</li>
                      </ul>
                    </div>
                  </div>
              </motion.section>
            )}
            {activeTab === 'Houses' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-b pb-2" style={{ fontFamily: 'Georgia, serif' }}>The Twelve Houses Explained</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">Each house represents a different area of life experience. Planets in these houses show where your energy is focused and what themes dominate those life areas.</p>
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                    <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                      <tr>
                        <th className="py-4 px-4 border-b text-left font-bold text-base">House</th>
                        <th className="py-4 px-4 border-b text-left font-bold text-base">Life Area</th>
                        <th className="py-4 px-4 border-b text-left font-bold text-base">Key Themes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['1st', 'Self & Identity', 'Personality, appearance, first impressions'],
                        ['2nd', 'Values & Money', 'Finances, possessions, self-worth'],
                        ['3rd', 'Communication', 'Siblings, short trips, learning'],
                        ['4th', 'Home & Family', 'Family, roots, emotional foundation'],
                        ['5th', 'Creativity & Romance', 'Love affairs, children, self-expression'],
                        ['6th', 'Work & Health', 'Daily work, health, service'],
                        ['7th', 'Partnerships', 'Marriage, business partners, open enemies'],
                        ['8th', 'Transformation', 'Shared resources, death, rebirth'],
                        ['9th', 'Higher Learning', 'Philosophy, travel, higher education'],
                        ['10th', 'Career & Reputation', 'Public image, career, authority'],
                        ['11th', 'Friends & Groups', 'Social circles, hopes, dreams'],
                        ['12th', 'Spirituality', 'Subconscious, spirituality, hidden things'],
                      ].map(([house, area, themes]) => (
                        <tr key={house} className="bg-gray-50">
                          <td className="py-3 px-4 border-b font-bold text-indigo-700">{house}</td>
                          <td className="py-3 px-4 border-b font-semibold text-gray-800">{area}</td>
                          <td className="py-3 px-4 border-b text-gray-700">{themes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.section>
            )}
            {activeTab === 'FAQs' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-b pb-2" style={{ fontFamily: 'Georgia, serif' }}>Frequently Asked Questions</h2>
                <div className="space-y-6 text-justify">
                  {[
                    ['How accurate is my birth chart if I don\'t know my exact birth time?', 'While you can still get valuable insights from your Sun and Moon signs, your Ascendant and house positions require an exact birth time. An accurate Ascendant is crucial for a detailed reading.'],
                    ['Can my birth chart change over time?', 'Your natal chart is fixed, but transiting planets continuously interact with it, activating different potentials and bringing new themes into your life.'],
                    ['What if I don\'t relate to my Sun sign?', 'This is common! Your personality is a complex blend of your Sun, Moon, and Ascendant signs, along with other planetary placements. A dominant Moon or Ascendant can sometimes feel more prominent than your Sun sign.'],
                    ['Can I change my birth chart?', 'No, your birth chart is a map of the sky at your birth. However, understanding it gives you the free will to work with its energies consciously, navigate challenges, and maximize your strengths.'],
                  ].map(([q, a]) => (
                    <div key={q} className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-indigo-600" />{q}</h3>
                      <p className="text-gray-700 leading-relaxed ml-7">{a}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
            <CTASection />
            
            {/* Next Blog Section */}
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-black mb-6">Continue Your Astrological Journey</h2>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100 hover:shadow-lg transition-all cursor-pointer">
                <Link href="/blog/power-of-meditation" className="block">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-teal-100">
                      <Image src="/images/astrology.svg" alt="Meditation" fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-teal-600 font-medium mb-1">Next in Series</p>
                      <h3 className="text-xl font-bold text-black mb-2">The Power of Meditation</h3>
                      <p className="text-gray-700 text-sm mb-3">Meditation is an ancient practice that brings peace to mind and body. Discover how spiritual practices can enhance your astrological journey.</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>15 April, 2024</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>10 min read</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-teal-600">
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
            <a href="/about" className="block bg-indigo-50 rounded-lg p-6 mb-8 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-indigo-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="text-indigo-700 font-medium">Astrological Analysis by</span> <br />
                    <span className="font-semibold text-indigo-900">Dr. Narendra Kumar Sharma</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Updated on 15 April, 2024</span>
                  </p>
                </div>
              </div>
            </a>
            {/* Newsletter */}
            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-orange-900 mb-4">Get Weekly Astrology Insights</h3>
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
              <h3 className="text-lg font-bold text-yellow-900 mb-4">Common Astrology Myths</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Birth charts determine your fate (you have free will)</li>
                <li>Only your Sun sign matters (all components work together)</li>
                <li>Astrology is just superstition (it&apos;s based on mathematical patterns)</li>
                <li>Charts can predict exact events (they show tendencies and potentials)</li>
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
                  ['Numerology Basics', '/blog/numerology-basics'],
                ].map(([title, link], i) => (
                  <li key={title}>
                    <a href={link} className="text-indigo-700 hover:underline flex items-start">
                      <span className="text-indigo-500 mr-2">→</span>
                      <span>{title}</span>
                    </a>
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