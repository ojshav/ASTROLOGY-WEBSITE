'use client'

import { useState, useEffect } from 'react';
import { User, Calendar, BookOpen, HelpCircle } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { CTASection } from '../../components/CTASection';
import { motion } from 'framer-motion';

const post = blogPosts['influence-of-planets'];
const tabs = ['Overview', 'Effects', 'Remedies', 'FAQs'];

export default function InfluenceOfPlanetsPage() {
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 leading-tight">
                {post.title.en}
              </h1>
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
                Discover how celestial bodies affect our daily lives and spiritual journey. The positions and movements of the planets, Sun, and Moon at the time of your birth create a unique cosmic blueprint—your birth chart. This chart reveals your strengths, challenges, and the lessons you are meant to learn in this lifetime.
              </p>
              <p>
                <span className="font-semibold text-indigo-700">Daily Influences:</span> Each day, planetary transits activate different areas of your life. For example, a strong Moon transit may heighten your emotions, while a favorable Jupiter aspect can bring opportunities for growth and wisdom. By understanding these influences, you can make better decisions and align your actions with the cosmic flow.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-4">
                <li><span className="font-semibold text-indigo-700">Relationships:</span> Venus and Mars play a key role in love, attraction, and harmony. Their positions can indicate periods of romance or the need for healing in relationships. When Venus is strong, you may experience deep affection, artistic inspiration, and harmonious partnerships. Mars brings passion and drive, but if afflicted, can cause conflicts or impulsive actions. Astrological analysis can reveal the best times for love, marriage, or resolving relationship issues.</li>
                <li><span className="font-semibold text-indigo-700">Career & Ambitions:</span> The Sun, Saturn, and Mercury influence your ambitions, discipline, and communication. The Sun represents your core purpose and leadership qualities, Saturn brings structure, perseverance, and lessons through challenges, while Mercury governs intellect, adaptability, and business acumen. Favorable alignments can signal promotions, new ventures, or recognition, while challenging periods may require patience, skill-building, or strategic planning.</li>
                <li><span className="font-semibold text-indigo-700">Health & Well-being:</span> The Moon and ascendant sign affect your physical and emotional health. The Moon governs your mind, moods, and habits, while the ascendant and its ruler influence your body type and vitality. Planetary afflictions may point to areas needing extra care, such as stress management, dietary changes, or spiritual remedies. Regularly tracking lunar cycles and planetary transits can help you maintain balance and well-being.</li>
                <li><span className="font-semibold text-indigo-700">Spiritual Growth:</span> Jupiter and Ketu are associated with wisdom, detachment, and spiritual evolution. Jupiter inspires learning, generosity, and faith, while Ketu encourages letting go of material attachments and seeking higher truths. Their influence can inspire meditation, study of sacred texts, and transformative spiritual practices. Times of strong Jupiter or Ketu influence are ideal for retreats, pilgrimages, or deepening your spiritual path.</li>
                <li><span className="font-semibold text-indigo-700">Financial Prosperity:</span> Jupiter and Venus can bring abundance, wealth, and opportunities for financial growth when well-placed in your chart. Jupiter&apos;s blessings may manifest as luck, expansion, or wise investments, while Venus attracts luxury, comfort, and creative income. Challenging placements may require prudent budgeting, charitable giving, or seeking expert advice to improve your financial situation.</li>
                <li><span className="font-semibold text-indigo-700">Family & Home:</span> The Moon and fourth house planets influence your sense of belonging, emotional security, and harmony at home. A strong Moon fosters nurturing relationships, a peaceful home environment, and supportive family ties. Malefic influences may bring misunderstandings or instability, but remedies such as family rituals, home blessings, or fostering open communication can restore harmony.</li>
                <li><span className="font-semibold text-indigo-700">Personal Transformation:</span> Rahu and Ketu drive major life changes, spiritual awakenings, and the breaking of old patterns for soul growth. Rahu pushes you toward new experiences, ambitions, and sometimes obsessions, while Ketu helps you release what no longer serves you. Their cycles often coincide with turning points, breakthroughs, or the need to embrace change and trust your inner guidance.</li>
              </ul>
              <p>
                <span className="font-semibold text-indigo-700">Spiritual Journey:</span> Astrology is not just about prediction—it&apos;s a tool for self-awareness and spiritual growth. By tuning into the rhythms of the cosmos, you can cultivate mindfulness, embrace change, and walk your path with greater confidence and peace.
              </p>
              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-lg">
                <span className="text-indigo-600 font-medium">Tip:</span> Keep a daily journal of your moods, experiences, and planetary transits. Over time, you&apos;ll notice patterns that help you harness positive energies and navigate challenges with wisdom.
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
                <span className="text-indigo-600 font-medium">Key Takeaway:</span> The nine planets (Navagraha) influence every aspect of our lives—understanding their effects can help you align with cosmic energies and find remedies for challenges.
              </p>
            </div>
            {/* Tab Content */}
            {activeTab === 'Overview' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Planetary Influences Explained</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    ['Sun (Surya)', 'Soul, ego, vitality, leadership', 'Leo'],
                    ['Moon (Chandra)', 'Mind, emotions, mother, peace', 'Cancer'],
                    ['Mars (Mangal)', 'Energy, courage, ambition, conflict', 'Aries, Scorpio'],
                    ['Mercury (Budha)', 'Intellect, communication, skills', 'Gemini, Virgo'],
                    ['Jupiter (Guru)', 'Wisdom, luck, expansion, spirituality', 'Sagittarius, Pisces'],
                    ['Venus (Shukra)', 'Love, beauty, luxury, creativity', 'Taurus, Libra'],
                    ['Saturn (Shani)', 'Discipline, karma, challenges, longevity', 'Capricorn, Aquarius'],
                    ['Rahu (North Node)', 'Ambition, obsession, foreign influences', 'Co-rules Aquarius'],
                    ['Ketu (South Node)', 'Detachment, spirituality, past karma', 'Co-rules Scorpio'],
                  ].map(([planet, qualities, signs]) => (
                    <div key={planet} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <h3 className="font-bold text-indigo-900 text-lg mb-2">{planet}</h3>
                      <p className="text-gray-700 text-sm mb-2"><strong>Qualities:</strong> {qualities}</p>
                      <p className="text-gray-600 text-sm"><strong>Rulership:</strong> {signs}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
            {activeTab === 'Effects' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">How Planets Affect Daily Life</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="font-bold text-blue-900 text-lg mb-3">Positive Planetary Effects</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Jupiter brings wisdom, opportunities, and spiritual growth</li>
                      <li>• Venus enhances love, creativity, and harmony</li>
                      <li>• Mercury improves communication and learning</li>
                      <li>• Sun boosts confidence and leadership abilities</li>
                      <li>• Moon provides emotional stability and intuition</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
                    <h3 className="font-bold text-red-900 text-lg mb-3">Challenging Planetary Effects</h3>
                    <ul className="text-red-800 space-y-2">
                      <li>• Saturn brings delays, lessons, and necessary challenges</li>
                      <li>• Mars can cause conflicts, impulsiveness, and accidents</li>
                      <li>• Rahu creates confusion, obsessions, and unexpected events</li>
                      <li>• Ketu brings detachment, losses, and spiritual tests</li>
                      <li>• Afflicted planets may cause health or relationship issues</li>
                    </ul>
                  </div>
                </div>
              </motion.section>
            )}
            {activeTab === 'Remedies' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Planetary Remedies and Solutions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-lg mb-3">Gemstone Remedies</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Ruby for Sun (confidence and vitality)</li>
                      <li>• Pearl for Moon (emotional balance)</li>
                      <li>• Red Coral for Mars (courage and energy)</li>
                      <li>• Emerald for Mercury (intellect and communication)</li>
                      <li>• Yellow Sapphire for Jupiter (wisdom and luck)</li>
                      <li>• Diamond for Venus (love and beauty)</li>
                      <li>• Blue Sapphire for Saturn (discipline and protection)</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-lg mb-3">Mantra and Prayer Remedies</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Chant planetary mantras daily</li>
                      <li>• Perform specific pujas and rituals</li>
                      <li>• Practice charity and service</li>
                      <li>• Fast on specific planetary days</li>
                      <li>• Meditate on planetary energies</li>
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
                    ['Can planets really affect my life?', 'Yes, planetary energies influence our thoughts, emotions, and life events. Understanding these influences helps us make better choices.'],
                    ['What if I have challenging planetary placements?', 'Every challenge is an opportunity for growth. Remedies, awareness, and conscious effort can help navigate difficult periods.'],
                    ['How do I know which planets are affecting me?', 'A birth chart analysis by a qualified astrologer can reveal your planetary influences and current transits.'],
                    ['Are planetary remedies effective?', 'When practiced with faith and consistency, remedies can help balance planetary energies and improve life circumstances.'],
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
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-all cursor-pointer">
                <Link href="/blog/understanding-vedic-astrology" className="block">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-indigo-100">
                      <Image src="/images/astrology.svg" alt="Vedic Astrology" fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-indigo-600 font-medium mb-1">Next in Series</p>
                      <h3 className="text-xl font-bold text-black mb-2">Understanding Vedic Astrology</h3>
                      <p className="text-gray-700 text-sm mb-3">Learn the fundamentals of Vedic astrology and its impact on life decisions. Discover how ancient wisdom can guide your modern choices.</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>15 April, 2024</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>8 min read</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-indigo-600">
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
            <div className="bg-indigo-50 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-indigo-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="text-indigo-700 font-medium">Astrological Review by</span> <br />
                    <span className="font-semibold text-indigo-900">{post.author.en}</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Updated on {post.date}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Newsletter */}
            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-green-900 mb-4">Get Weekly Astrology Insights</h3>
              <p className="text-gray-700 mb-4">Sign up for our newsletter and receive cosmic tips, remedies, and predictions every week.</p>
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
            {/* Common Myths */}
            <div className="bg-yellow-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-yellow-900 mb-4">Common Astrology Myths</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>All bad events are due to planets (karma matters too)</li>
                <li>Gemstones work for everyone (consult an expert)</li>
                <li>Astrology is only prediction (it&apos;s also guidance)</li>
                <li>Remedies are instant (patience is key)</li>
              </ul>
            </div>
            {/* Resources */}
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-indigo-900 mb-4">Recommended Resources</h3>
              <ul className="space-y-3">
                {[
                  ['Understanding Your Birth Chart', '/blog/understanding-your-birth-chart'],
                  ['Gemstones and Their Powers', '/blog/gemstones-and-powers'],
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