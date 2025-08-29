"use client";

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Heart, Users, Star, Shield, Search, GitCompareArrows, Handshake, Sparkles, MessageCircle, HeartCrack, BookOpen, KeyRound, Link, Home, DollarSign, HeartHandshake, Users2, Undo2, Briefcase, TrendingUp, CalendarCheck } from 'lucide-react';
import { DrNarendraProfile } from '../components/DrNarendraProfile';
import { ContactForm } from '../components/ContactForm';

const tabs = ['Overview', 'Benefits', 'FAQs'];

const benefits = [
  {
    icon: <GitCompareArrows className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Comprehensive Compatibility Analysis', 
    desc: 'Get a detailed assessment of emotional, spiritual, psychological, and practical compatibility between partners using ancient Vedic wisdom.'
  },
  {
    icon: <Handshake className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Ashtakoota System Evaluation', 
    desc: 'Benefit from the classical eight-fold compatibility system that assesses mental connection, physical harmony, and long-term stability.'
  },
  {
    icon: <Sparkles className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Dosha Identification & Remedies', 
    desc: 'Identify potential challenges like Mangal Dosha and receive personalized remedies including rituals, mantras, and gemstones.'
  },
  {
    icon: <MessageCircle className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Emotional Bonding Insights', 
    desc: 'Understand how planetary placements affect communication styles and emotional needs for deeper relationship harmony.'
  },
  {
    icon: <HeartCrack className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Karmic Pattern Recognition', 
    desc: 'Discover how past life karma influences present relationships and receive guidance for conscious evolution.'
  },
  {
    icon: <Star className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Auspicious Marriage Timing', 
    desc: 'Learn the most favorable planetary periods for marriage and important relationship milestones.'
  },
  {
    icon: <Link className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Family Dynamics Understanding', 
    desc: 'Navigate family-related planetary influences and learn to manage them for harmonious relationships.'
  },
  {
    icon: <Home className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Long-term Relationship Planning', 
    desc: 'Plan your shared journey with insights into emotional, financial, and spiritual growth phases.'
  },
  {
    icon: <DollarSign className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Shared Life Goals Alignment', 
    desc: 'Discover common purposes and aspirations that create a more profound and meaningful connection.'
  },
  {
    icon: <HeartHandshake className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Intimacy Enhancement', 
    desc: 'Uncover astrological keys to emotional and physical intimacy for deeper, more passionate connections.'
  },
  {
    icon: <Users2 className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Parenting Compatibility', 
    desc: 'Understand how planetary influences affect parenting styles and work together harmoniously as future parents.'
  },
  {
    icon: <Undo2 className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Karmic Debt Resolution', 
    desc: 'Identify and understand karmic patterns from past lives that may affect your current relationship.'
  },
  {
    icon: <Briefcase className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Career Support Dynamics', 
    desc: 'Learn how to best support each other\'s professional ambitions based on career houses in your charts.'
  },
  {
    icon: <TrendingUp className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Personal Growth Catalyst', 
    desc: 'See how your partner acts as a mirror for your own evolution and areas where you can grow individually.'
  },
  {
    icon: <CalendarCheck className="text-indigo-400 w-8 h-8 mb-2" />, 
    title: 'Life Event Planning', 
    desc: 'Use astrological timing to plan major life events together when cosmic energies are most supportive.'
  },
];

const faqs = [
  {
    q: 'What is Kundali Matching and how does it work?',
    a: 'Kundali Matching is a detailed astrological process that compares two birth charts to evaluate compatibility for marriage. It uses the Ashtakoota system to assess eight critical aspects including mental connection, physical harmony, and long-term stability, providing a comprehensive compatibility score and analysis.'
  },
  {
    q: 'How accurate is the birth time for Kundali matching?',
  a: 'Birth time accuracy is crucial for precise Kundali matching. Even a few minutes&apos; difference can affect the ascendant and house positions. We recommend using the most accurate birth time available, preferably from hospital records or family documentation.'
  },
  {
    q: 'What if the Kundali doesn\'t match well?',
  a: 'If the match shows challenges, our astrologers recommend specific remedies and rituals (upayas) to help neutralize negative effects. We believe that no match is entirely doomed—through conscious effort, spiritual practices, and mutual understanding, many challenges can be overcome.'
  },
  {
    q: 'Can Kundali matching be done for same-sex couples?',
  a: 'Yes, Kundali matching can be adapted for same-sex couples. The fundamental principles of compatibility analysis remain the same—we evaluate emotional, spiritual, and practical harmony between two individuals, focusing on unique dynamics relevant to each couple&apos;s journey.'
  },
  {
    q: 'What information do I need for Kundali matching?',
  a: 'For accurate Kundali matching, we need the complete birth details of both individuals: full name, date of birth, exact time of birth, and place of birth (city and country). The more precise the birth time, the more accurate the analysis.'
  }
];

export default function KundaliMatchingPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
      <div className="container mx-auto pt-8 px-4 pb-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Kundali Matching
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
            Discover the science and sacred art of Vedic compatibility. Our expert astrologers blend tradition and modern insight to guide you toward a harmonious, blessed union.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors font-sans ${activeTab === tab ? 'border-indigo-500 text-indigo-600 font-bold' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
              style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Overview' && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 text-lg leading-relaxed text-gray-700 space-y-6 font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', textAlign: 'justify' }}>
            <p>Kundali Matching, or Horoscope Matching, is a revered tradition rooted deeply in the ancient wisdom of Vedic astrology. At Nakshatra Gyaan, we honor this sacred practice by offering a comprehensive and thoughtful approach to compatibility analysis between two individuals preparing for the commitment of marriage. Our methodology is not limited to point-based systems; instead, we focus on delivering a holistic perspective that takes into account the emotional, spiritual, psychological, and practical dimensions of a potential union.</p>
            <p>Our expert astrologers begin by evaluating the birth charts of both individuals through the lens of the <span className="font-bold text-green-800">Ashtakoota system</span>—a classical framework that assigns a score based on eight distinct aspects of compatibility. These include mental and emotional connection, physical and sexual harmony, genetic compatibility, temperament alignment, and long-term relationship stability. The cumulative score out of 36 points offers a general indication of compatibility, but at Nakshatra Gyaan, we believe in going beyond numbers.</p>
            <p>A critical part of our analysis involves identifying the presence of <span className="font-bold text-green-800">doshas</span>—such as Mangal Dosha, Nadi Dosha, and Bhakoot Dosha—that can significantly impact married life if left unaddressed. Rather than viewing these as inescapable flaws, we provide carefully considered remedies and insights to mitigate their effects. These may include recommended rituals, mantras, gemstones, or changes in timing, all aligned with the individual&apos;s karmic framework and spiritual evolution.</p>
            <p>What sets our approach apart is our dedication to <span className="font-bold text-green-800">personalized interpretation</span>. Unlike automated tools that generate impersonal scores, our astrologers invest time in understanding the complete astrological profile of both individuals. We aim to provide context, not just data—guiding couples toward self-awareness, mutual understanding, and conscious decision-making.</p>
            <p>For deeper insights, we meticulously analyze the <span className="font-bold text-green-800">Navamsha (D9) chart</span>, considered the single most important divisional chart for marriage. If the main birth chart is the tree, the D9 chart is the fruit, revealing the ultimate promise and inner reality of your relationships. Strong compatibility seen in the Navamsha can often overcome challenges present in the main birth chart, indicating a powerful, destined connection.</p>
            <p>A key element of our analysis is the often-misunderstood <span className="font-bold text-green-800">\&apos;Kuja Dosha\&apos; or Mars affliction</span>. Specific placements of Mars can introduce excess fire, anger, or competition into a relationship. However, a proper analysis goes beyond simply identifying this placement. We assess its true intensity and, crucially, look for numerous cancellation factors that can completely nullify its negative effects, providing a clear and fear-free perspective.</p>
            <p>Finally, our analysis is not about a deterministic judgment but about empowerment through understanding. By illuminating the cosmic forces at play, we provide you with a roadmap. This map shows you the smoothest paths, the potential roadblocks, and the scenic routes. Armed with this knowledge, you can make conscious choices, appreciate your partner&apos;s perspective, and co-create a relationship filled with more love, compassion, and understanding.</p>
          </motion.div>
        )}
        
        {activeTab === 'Benefits' && (
            <section className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of Kundali Matching</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-white/70 backdrop-blur-md shadow-lg p-8 flex flex-col items-center border border-indigo-100 hover:scale-105 transition-transform duration-200"
                  style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}
                >
                  {benefit.icon}
                  <h3 className="font-bold text-lg mb-2 text-indigo-900 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>{benefit.title}</h3>
                  <p className="text-gray-700 text-center text-base">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'FAQs' && (
           <section className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2 text-left" style={{ fontFamily: 'Playfair Display, serif' }}>Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqs.map((faq, idx) => (
                <div key={idx}>
                  <div className="flex items-center mb-2">
                    <span className="text-indigo-600 mr-2 text-xl">&#x3f;</span>
                    <span className="font-bold text-lg text-indigo-900" style={{ fontFamily: 'Playfair Display, serif' }}>{faq.q}</span>
                  </div>
                  <p className="text-black text-justify pl-8" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        <div className="mt-20 space-y-20">
          <DrNarendraProfile />
        </div>

        <div className="mt-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}