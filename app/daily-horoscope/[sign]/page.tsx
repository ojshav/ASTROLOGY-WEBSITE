'use client'

import { useState, useEffect } from 'react';
import { User, Calendar, Heart, Briefcase, ShieldCheck, HelpCircle } from 'lucide-react';
import { horoscopeData } from '../../data/horoscopeData';
import Image from 'next/image';
import { CTASection } from '../../components/CTASection';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { DrNarendraProfile } from '../../components/DrNarendraProfile';

const tabs = ["Today's Forecast", 'Love & Career', 'Health & Remedies', 'FAQs'];

export default function DailyHoroscopePage({ params }: { params: { sign: string } }) {
  const [activeTab, setActiveTab] = useState("Today's Forecast");
  const [email, setEmail] = useState('');

  const horoscope = horoscopeData[params.sign];

  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  if (!horoscope) {
    notFound();
  }

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white pt-16 md:pt-10">
      <div className="max-w-7xl mx-auto px-4 pt-2 pb-4">
        {/* Banner Heading */}
        <div className="w-full rounded-3xl bg-gradient-to-r from-[#fdf6f2] via-[#f3e8ff] to-[#e0f2fe] py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#f3e8ff]">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg tracking-tight">Daily Horoscope: {horoscope.sign}</h1>
          <p className="text-lg md:text-2xl text-gray-700 text-center max-w-2xl">Your daily astrological forecast for love, career, and wellness. Discover what the stars have in store for {horoscope.sign} today.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full h-64 md:h-96 relative mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image src={horoscope.image} alt={`${horoscope.sign} zodiac sign`} fill className="object-cover" />
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
                <span className="text-indigo-600 font-medium">Key Takeaway:</span> {horoscope.overview.takeaway}
              </p>
            </motion.div>
            
            {/* Tab Content */}
            {activeTab === "Today's Forecast" && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16 text-lg leading-relaxed text-gray-700 space-y-6">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">{horoscope.overview.title}</h2>
                {horoscope.overview.content.map((paragraph, index) => (
                    <p key={index} className="text-justify">{paragraph}</p>
                ))}
              </motion.section>
            )}

            {activeTab === 'Love & Career' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b pb-2 flex items-center"><Heart className="w-6 h-6 mr-3 text-rose-500"/>{horoscope.tabs.love.title}</h2>
                    <p className="text-lg leading-relaxed text-gray-700 text-justify">{horoscope.tabs.love.content}</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b pb-2 flex items-center"><Briefcase className="w-6 h-6 mr-3 text-amber-600"/>{horoscope.tabs.career.title}</h2>
                    <p className="text-lg leading-relaxed text-gray-700 text-justify">{horoscope.tabs.career.content}</p>
                </div>
              </motion.section>
            )}

            {activeTab === 'Health & Remedies' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                 <div className="mb-8">
                    <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b pb-2 flex items-center"><ShieldCheck className="w-6 h-6 mr-3 text-emerald-500"/>{horoscope.tabs.health.title}</h2>
                    <p className="text-lg leading-relaxed text-gray-700 text-justify">{horoscope.tabs.health.content}</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b pb-2">{horoscope.remedies.title}</h2>
                    <ul className="list-disc list-inside ml-4 text-lg text-gray-700 space-y-3">
                        {horoscope.remedies.items.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
              </motion.section>
            )}

            {activeTab === 'FAQs' && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-2">Frequently Asked Questions for {horoscope.sign}</h2>
                <div className="space-y-6">
                  {horoscope.faqs.map((faq, i) => (
                    <div key={i} className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-indigo-900 mb-2 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-indigo-400" />{faq.q}</h3>
                      <p className="text-gray-700">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Newsletter */}
            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-orange-900 mb-4">Get Daily Horoscope Insights</h3>
              <p className="text-gray-700 mb-4">Sign up for our newsletter to get your daily horoscope delivered straight to your inbox.</p>
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
              <h3 className="text-lg font-bold text-yellow-900 mb-4">Common {horoscope.sign} Myths</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {horoscope.sidebar.myths.map((myth, index) => (
                    <li key={index}>{myth}</li>
                ))}
              </ul>
            </div>
            {/* Resources */}
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-indigo-900 mb-4">Recommended Resources</h3>
              <ul className="space-y-3">
                {horoscope.sidebar.resources.map((resource, i) => (
                  <li key={i}>
                    <a href={resource.link} className="text-indigo-700 hover:underline flex items-start">
                      <span className="text-indigo-500 mr-2">→</span>
                      <span>{resource.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <DrNarendraProfile />
      </div>
      <CTASection />
    </div>
  );
}
