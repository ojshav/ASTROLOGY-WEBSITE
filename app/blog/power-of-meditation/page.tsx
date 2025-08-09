'use client'

import { useState, useEffect } from 'react';
import { User, Calendar, Heart, BookOpen, HelpCircle, Sparkles, Moon } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { CTASection } from '../../components/CTASection';
import { motion } from 'framer-motion';

const post = blogPosts['power-of-meditation'];
const tabs = ['Overview', 'Techniques', 'Benefits', 'FAQs'];

export default function PowerOfMeditationPage() {
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>The Power of Meditation</h1>
          <p className="text-lg md:text-2xl text-gray-700 text-center max-w-3xl leading-relaxed">Discover the ancient practice that brings peace to mind and body. Learn how meditation can transform your life, enhance your spiritual journey, and unlock your inner potential.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full h-64 md:h-96 relative mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image src="https://res.cloudinary.com/dxwspucxw/image/upload/c_crop,w_1000,h_563,ar_16:9,g_auto/v1752049127/meditation_b2qe9b.jpg" alt={post.title.en} fill className="object-cover" />
            </motion.div>
            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-8 text-lg leading-relaxed text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                {post.content.en.split('\n')[0]}
              </p>
              <p className="text-lg leading-relaxed">
                <span className="font-bold text-indigo-700 text-xl">What is Meditation?</span> Meditation is an ancient spiritual practice that has been used for thousands of years to cultivate inner peace, mental clarity, and spiritual awareness. It&apos;s a journey inward—a way to connect with your true self and the divine energy that flows through all of creation.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 text-lg mb-3 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  The Essence of Meditation
                </h3>
                <p className="text-blue-800 leading-relaxed">
                  At its core, meditation is about presence—being fully aware of the present moment without judgment. It&apos;s not about stopping your thoughts, but about observing them with detachment and returning to your center. This practice helps you develop mindfulness, reduce stress, and access higher states of consciousness.
                </p>
              </div>
              <h3 className="font-bold text-black text-2xl mt-8 mb-4" style={{ fontFamily: 'Georgia, serif' }}>Types of Meditation Practices</h3>
              <ul className="list-disc list-inside ml-4 space-y-4 text-lg">
                <li><span className="font-bold text-indigo-700">Mindfulness Meditation:</span> Focus on the present moment, observing thoughts and sensations without judgment. Perfect for beginners and stress reduction.</li>
                <li><span className="font-bold text-indigo-700">Transcendental Meditation:</span> Use of mantras to transcend ordinary thinking and access pure awareness. Promotes deep relaxation and spiritual growth.</li>
                <li><span className="font-bold text-indigo-700">Loving-Kindness Meditation:</span> Cultivate compassion and love for yourself and others. Enhances emotional well-being and relationships.</li>
                <li><span className="font-bold text-indigo-700">Vipassana Meditation:</span> Insight meditation that develops wisdom through self-observation. Helps understand the true nature of reality.</li>
                <li><span className="font-bold text-indigo-700">Zen Meditation:</span> Focus on breath and posture to achieve enlightenment. Emphasizes simplicity and direct experience.</li>
                <li><span className="font-bold text-indigo-700">Chakra Meditation:</span> Focus on energy centers in the body to balance and align your spiritual energy. Enhances vitality and spiritual awareness.</li>
                <li><span className="font-bold text-indigo-700">Mantra Meditation:</span> Repetition of sacred sounds or phrases to focus the mind and connect with divine energy. Deepens spiritual practice.</li>
                <li><span className="font-bold text-indigo-700">Body Scan Meditation:</span> Progressive relaxation through awareness of different body parts. Excellent for stress relief and body awareness.</li>
                <li><span className="font-bold text-indigo-700">Walking Meditation:</span> Mindful walking with awareness of each step and breath. Combines movement with meditation practice.</li>
              </ul>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400 p-6 rounded-lg">
                <span className="text-orange-700 font-bold text-lg">Pro Tip:</span> <span className="text-black font-semibold">Start with just 5-10 minutes daily. Consistency is more important than duration. Choose a technique that resonates with you and practice regularly.</span>
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
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="text-indigo-600 font-bold text-xl">Key Takeaway:</span> Meditation is not about emptying your mind, but about becoming aware of your thoughts and finding inner peace. Even 10 minutes of daily practice can transform your mental clarity, emotional balance, and spiritual connection.
              </p>
            </motion.div>
            {/* Tab Content */}
            {activeTab === 'Overview' && (
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-b pb-2" style={{ fontFamily: 'Georgia, serif' }}>Getting Started with Meditation</h2>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-xl mb-3 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-indigo-600" />
                      Step 1: Create Your Sacred Space
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">Find a quiet, comfortable place where you won&apos;t be disturbed. You can enhance the atmosphere with:</p>
                    <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                      <li>Soft lighting or candles</li>
                      <li>Comfortable cushion or chair</li>
                      <li>Calming music or nature sounds</li>
                      <li>Essential oils like lavender or sandalwood</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-xl mb-3 flex items-center">
                      <Moon className="w-5 h-5 mr-2 text-indigo-600" />
                      Step 2: Choose Your Technique
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">Begin with simple techniques like:</p>
                    <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                      <li><strong>Breath Awareness:</strong> Focus on your natural breath</li>
                      <li><strong>Body Scan:</strong> Gradually relax each part of your body</li>
                      <li><strong>Loving-Kindness:</strong> Send positive thoughts to yourself and others</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-xl mb-3 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2 text-indigo-600" />
                      Step 3: Establish a Routine
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">Consistency is key. Start with 5-10 minutes daily and gradually increase. The best times are:</p>
                    <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                      <li>Early morning (before the day&apos;s activities begin)</li>
                      <li>Evening (to unwind and reflect)</li>
                      <li>During breaks (for quick stress relief)</li>
                    </ul>
                  </div>
                </motion.div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h3 className="font-bold text-green-900 text-lg mb-3">Remember</h3>
                  <p className="text-green-800 leading-relaxed">
                    &ldquo;Meditation is not about stopping thoughts, but recognizing that we are more than our thoughts and our feelings.&rdquo; - Arianna Huffington
                  </p>
                  <p className="text-green-700 mt-3">
                    Don&apos;t worry if your mind wanders—this is normal. Simply notice the thought and gently return to your focus. Each time you do this, you&apos;re strengthening your mindfulness muscle.
                  </p>
                </div>
              </section>
            )}
            {activeTab === 'Techniques' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Meditation Techniques for Beginners</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-lg mb-3">Breath Awareness</h3>
                    <p className="text-gray-700 mb-4">Focus on your natural breath without trying to change it. Notice the sensation of air entering and leaving your nostrils.</p>
                    <p className="text-sm text-gray-600"><strong>Duration:</strong> 5-10 minutes</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-lg mb-3">Body Scan</h3>
                    <p className="text-gray-700 mb-4">Systematically focus on each part of your body, from toes to head, releasing tension as you go.</p>
                    <p className="text-sm text-gray-600"><strong>Duration:</strong> 10-15 minutes</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-lg mb-3">Loving-Kindness</h3>
                    <p className="text-gray-700 mb-4">Send positive wishes to yourself, loved ones, and even difficult people in your life.</p>
                    <p className="text-sm text-gray-600"><strong>Duration:</strong> 10-20 minutes</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-black text-lg mb-3">Mantra Meditation</h3>
                    <p className="text-gray-700 mb-4">Repeat a sacred word or phrase silently, such as &ldquo;Om&rdquo; or &ldquo;Peace&rdquo; to focus your mind.</p>
                    <p className="text-sm text-gray-600"><strong>Duration:</strong> 15-30 minutes</p>
                  </div>
                </div>
              </motion.section>
            )}
            {activeTab === 'Benefits' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Benefits of Regular Meditation</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="font-bold text-blue-900 text-lg mb-3">Mental Benefits</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Reduced stress and anxiety</li>
                      <li>• Improved focus and concentration</li>
                      <li>• Better emotional regulation</li>
                      <li>• Enhanced creativity</li>
                      <li>• Clearer thinking</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <h3 className="font-bold text-green-900 text-lg mb-3">Physical Benefits</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• Lower blood pressure</li>
                      <li>• Improved sleep quality</li>
                      <li>• Reduced inflammation</li>
                      <li>• Enhanced immune function</li>
                      <li>• Better pain management</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
                    <h3 className="font-bold text-purple-900 text-lg mb-3">Spiritual Benefits</h3>
                    <ul className="text-purple-800 space-y-2">
                      <li>• Deeper self-awareness</li>
                      <li>• Connection to higher consciousness</li>
                      <li>• Inner peace and contentment</li>
                      <li>• Enhanced intuition</li>
                      <li>• Greater compassion</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
                    <h3 className="font-bold text-orange-900 text-lg mb-3">Life Benefits</h3>
                    <ul className="text-orange-800 space-y-2">
                      <li>• Better relationships</li>
                      <li>• Improved decision-making</li>
                      <li>• Increased resilience</li>
                      <li>• Greater life satisfaction</li>
                      <li>• Enhanced personal growth</li>
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
                    ['How long should I meditate?', 'Start with 5-10 minutes daily and gradually increase. Consistency is more important than duration.'],
                    ['What if I can\'t stop thinking?', 'This is normal! Don\'t try to stop thoughts. Simply observe them and gently return to your focus.'],
                    ['Do I need to sit in lotus position?', 'No, any comfortable position works. Sit, lie down, or even walk mindfully.'],
                    ['When is the best time to meditate?', 'Early morning or evening are ideal, but any time that works for you is perfect.'],
                    ['How long until I see benefits?', 'Some benefits like reduced stress can be felt immediately. Deeper changes develop over weeks and months.'],
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
              <h2 className="text-2xl font-bold text-black mb-6">Continue Your Spiritual Journey</h2>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100 hover:shadow-lg transition-all cursor-pointer">
                <Link href="/blog" className="block">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-emerald-100">
                      <Image src="/images/astrology.svg" alt="Astrology Blog" fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-emerald-600 font-medium mb-1">Explore More</p>
                      <h3 className="text-xl font-bold text-black mb-2">Astrology Blog Collection</h3>
                      <p className="text-gray-700 text-sm mb-3">Discover our complete collection of astrology articles, from planetary influences to birth chart analysis and spiritual practices.</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>15 April, 2024</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>Complete Series</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-emerald-600">
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
                    <span className="text-indigo-700 font-medium">Spiritual Guide by</span> <br />
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
              <h3 className="text-lg font-bold text-orange-900 mb-4">Get Weekly Spiritual Insights</h3>
              <p className="text-gray-700 mb-4">Sign up for our newsletter and receive meditation tips, spiritual guidance, and cosmic wisdom every week.</p>
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
              <h3 className="text-lg font-bold text-yellow-900 mb-4">Meditation Myths Debunked</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You need to stop all thoughts (observe them instead)</li>
                <li>Only spiritual people can meditate (benefits everyone)</li>
                <li>You need hours of practice (5-10 minutes works)</li>
                <li>Lotus position is required (any comfortable position)</li>
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