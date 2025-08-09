'use client'

import { useState, useEffect } from 'react';
import { User, Calendar, BookOpen, HelpCircle } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { CTASection } from '../../components/CTASection';
import { motion } from 'framer-motion';

const post = blogPosts['gemstones-and-powers'];
const tabs = ['Overview', 'Gemstone Guide', 'Remedies', 'FAQs'];

export default function GemstonesAndPowersPage() {
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg tracking-tight">Gemstones and Their Powers</h1>
          <p className="text-lg md:text-2xl text-gray-700 text-center max-w-2xl">Explore the mystical properties of gemstones and their astrological significance. Discover how the right stone can transform your energy and destiny.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full h-64 md:h-96 relative mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/ASTRO.webp" alt={post.title.en} fill className="object-cover" />
            </motion.div>
            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-8 text-lg leading-relaxed text-gray-700 space-y-6 text-justify">
              <p>
                {post.content.en.split('\n')[0]}
              </p>
              <p>
                <span className="font-semibold text-indigo-700">Ancient Wisdom:</span> For thousands of years, gemstones have been revered not just for their beauty, but for their profound metaphysical properties. Ancient civilizations understood that these crystalline formations hold unique vibrational frequencies that can influence our energy fields, chakras, and overall well-being.
              </p>
              <p>
                <span className="font-semibold text-indigo-700">Scientific Perspective:</span> Modern science recognizes that gemstones have piezoelectric properties - they can generate electrical charges when subjected to pressure. This scientific basis supports the ancient belief that gems can influence energy patterns and create positive changes in our lives.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-4">
                <li><span className="font-semibold text-indigo-700">Planetary Connection:</span> Each gemstone is associated with specific planets and their energies. When worn correctly, they can strengthen weak planetary influences in your birth chart and balance excessive ones, bringing harmony to your life.</li>
                <li><span className="font-semibold text-indigo-700">Chakra Alignment:</span> Gemstones work on different chakras, helping to clear blockages and enhance energy flow. This can lead to improved physical health, emotional stability, and spiritual growth.</li>
                <li><span className="font-semibold text-indigo-700">Protection & Healing:</span> Many stones offer protective qualities, shielding you from negative energies, electromagnetic radiation, and psychic attacks. They also promote healing on physical, emotional, and spiritual levels.</li>
                <li><span className="font-semibold text-indigo-700">Manifestation Power:</span> Certain gemstones can amplify your intentions and help manifest your desires. They work as catalysts, enhancing your natural abilities and attracting positive opportunities.</li>
                <li><span className="font-semibold text-indigo-700">Meditation & Spirituality:</span> Gems can deepen your meditation practice, enhance intuition, and accelerate spiritual development. They serve as tools for connecting with higher consciousness and divine energies.</li>
              </ul>
              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-lg">
                <span className="text-indigo-600 font-medium">Important:</span> Always consult a qualified astrologer before wearing gemstones. The wrong stone can sometimes amplify negative planetary influences, so proper guidance is essential for maximum benefit.
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
              <p className="text-gray-700">
                <span className="text-indigo-600 font-medium">Key Takeaway:</span> Gemstones are not just beautiful—they are powerful tools for healing, protection, and spiritual growth when chosen and worn with awareness.
              </p>
            </motion.div>
            {/* Tab Content */}
            {activeTab === 'Overview' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">How Gemstones Work in Astrology</h2>
                <ul className="space-y-3 text-gray-700 mb-8 text-justify">
                  <li><span className="text-indigo-500 mr-2">•</span>Gemstones act as cosmic amplifiers, channeling planetary energies into your aura and chakras.</li>
                  <li><span className="text-indigo-500 mr-2">•</span>Each stone has unique vibrations that can heal, protect, or enhance specific qualities.</li>
                  <li><span className="text-indigo-500 mr-2">•</span>Wearing a gemstone on the correct finger and metal is crucial for best results.</li>
                </ul>
              </motion.section>
            )}
            {activeTab === 'Gemstone Guide' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Gemstone Guide: Properties and Effects</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-4 px-4 border-b text-left font-bold text-black text-base">Gemstone</th>
                        <th className="py-4 px-4 border-b text-left font-bold text-black text-base">Planet</th>
                        <th className="py-4 px-4 border-b text-left font-bold text-black text-base">Benefits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Yellow Sapphire', 'Jupiter', 'Wisdom, prosperity, spiritual growth'],
                        ['Pearl', 'Moon', 'Emotional balance, peace, intuition'],
                        ['Ruby', 'Sun', 'Confidence, vitality, leadership'],
                        ['Emerald', 'Mercury', 'Intellect, communication, creativity'],
                        ['Blue Sapphire', 'Saturn', 'Discipline, focus, protection'],
                        ['Coral', 'Mars', 'Courage, energy, determination'],
                      ].map(([gem, planet, benefit], index) => (
                        <tr key={gem} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                          <td className="py-3 px-4 border-b font-medium text-black">{gem}</td>
                          <td className="py-3 px-4 border-b font-medium text-black">{planet}</td>
                          <td className="py-3 px-4 border-b font-medium text-black">{benefit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.section>
            )}
            {activeTab === 'Remedies' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Gemstone Remedies and Practices</h2>
                <div className="space-y-6">
                  {[
                    ['Can gemstones change my destiny?', 'They support your efforts and balance energies, but your actions are most important.'],
                    ['How long does it take for a gemstone to work?', 'Effects may be felt within weeks to months, depending on your chart and consistency.'],
                    ['Can I wear more than one gemstone?', 'Yes, but only after consulting an astrologer to avoid conflicting energies.'],
                    ['What if I feel discomfort after wearing a stone?', 'Remove it and consult your astrologer. Not every stone is suitable for everyone.'],
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
                <Link href="/blog/numerology-basics" className="block">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-purple-100">
                      <Image src="/images/Numerology.svg" alt="Numerology" fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-purple-600 font-medium mb-1">Next in Series</p>
                      <h3 className="text-xl font-bold text-black mb-2">Numerology Basics</h3>
                      <p className="text-gray-700 text-sm mb-3">Discover how numbers influence your life path and destiny. Learn the ancient science of numerology and unlock the secrets hidden in your birth date and name.</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>15 April, 2024</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>12 min read</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-purple-600">
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
                    <span className="text-indigo-700 font-medium">Astrological Review by</span> <br />
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
                <li>Gemstones work for everyone (consult an expert for personalized advice)</li>
                <li>Remedies are instant (patience and faith are key)</li>
                <li>All bad events are due to planets (karma and choices matter too)</li>
                <li>Gemstones are a substitute for effort (they are a support, not a replacement)</li>
              </ul>
            </div>
            {/* Resources */}
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-indigo-900 mb-4">Recommended Resources</h3>
              <ul className="space-y-3">
                {[
                  ['The Influence of Planets', '/blog/the-influence-of-planets'],
                  ['Understanding Vedic Astrology', '/blog/understanding-vedic-astrology'],
                  ['Numerology Basics', '/blog/numerology-basics'],
                  ['Guide to Crystal Healing', '/blog/crystal-healing'],
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