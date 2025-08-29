"use client";

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Shield, Moon, Sun, Star, Zap, Heart, Users, Globe, BookOpen, Award, Compass, TrendingUp, Clock, Target, Lightbulb, Sparkles, Crown, Eye, Brain, Infinity } from 'lucide-react';
import { DrNarendraProfile } from "../components/DrNarendraProfile";
import { ContactForm } from "../components/ContactForm";

const tabs = ['Overview', 'Benefits', 'FAQs'];

const benefits = [
  {
    icon: <Shield className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Remove Planetary Obstacles',
    desc: 'Eliminate the negative effects of Rahu and Ketu placements that cause delays, obstacles, and challenges in your life.'
  },
  {
    icon: <Moon className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Balance Shadow Planets',
    desc: 'Harmonize the energy of Rahu and Ketu to restore balance and positive flow in your astrological chart.'
  },
  {
    icon: <Sun className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Career Growth',
    desc: 'Remove professional obstacles and unlock new opportunities for advancement and success in your career.'
  },
  {
    icon: <Star className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Relationship Harmony',
    desc: 'Resolve relationship conflicts and attract positive, harmonious connections in your personal life.'
  },
  {
    icon: <Zap className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Health & Vitality',
    desc: 'Improve physical and mental well-being by removing negative planetary influences that affect health.'
  },
  {
    icon: <Heart className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Emotional Balance',
    desc: 'Achieve inner peace and emotional stability by pacifying the disruptive energies of shadow planets.'
  },
  {
    icon: <Users className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Social Success',
    desc: 'Improve social interactions and build better relationships with family, friends, and colleagues.'
  },
  {
    icon: <Globe className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Travel & Movement',
    desc: 'Remove obstacles related to travel, relocation, and physical movement in your life.'
  },
  {
    icon: <BookOpen className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Learning & Education',
    desc: 'Enhance learning abilities and overcome mental blocks that hinder educational progress.'
  },
  {
    icon: <Award className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Recognition & Fame',
    desc: 'Gain recognition for your talents and achieve the fame and respect you deserve.'
  },
  {
    icon: <Compass className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Life Direction',
    desc: 'Find clarity about your life path and make confident decisions about your future.'
  },
  {
    icon: <TrendingUp className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Financial Prosperity',
    desc: 'Remove financial obstacles and attract wealth and abundance into your life.'
  },
  {
    icon: <Clock className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Timing & Opportunities',
    desc: 'Identify the right timing for important decisions and seize opportunities at the perfect moment.'
  },
  {
    icon: <Target className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Goal Achievement',
    desc: 'Overcome obstacles that prevent you from reaching your goals and dreams.'
  },
  {
    icon: <Lightbulb className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Mental Clarity',
    desc: 'Gain mental clarity and remove confusion that clouds your judgment and decision-making.'
  }
];

const faqs = [
  {
    q: 'What is Grahan Dosh and why is it significant?',
    a: 'Grahan Dosh occurs when Rahu and Ketu (shadow planets) are unfavorably placed in your birth chart, causing obstacles, delays, and negative influences. This dosh can affect career, relationships, health, and overall life progress.'
  },
  {
    q: 'How do I know if I have Grahan Dosh?',
    a: 'Grahan Dosh is identified through detailed astrological analysis of your birth chart. Common symptoms include persistent obstacles, unexpected delays, health issues, relationship problems, and feeling stuck despite efforts.'
  },
  {
    q: 'What is included in the Grahan Dosh Shanti Pooja?',
    a: 'Our comprehensive pooja includes Rahu-Ketu pacification rituals, sacred mantras, specific offerings, priest fees, detailed astrological consultation, and personalized remedies for ongoing protection.'
  },
  {
    q: 'How long does the Grahan Dosh Shanti Pooja take?',
    a: 'The complete Grahan Dosh Shanti Pooja typically takes 2-3 hours, including preparation, main rituals, and conclusion. We perform it during auspicious timings for maximum effectiveness.'
  },
  {
    q: 'Can this pooja be performed remotely?',
  a: 'Yes, our expert priests can perform the pooja on your behalf. You&apos;ll receive live updates and can participate mentally from anywhere. The spiritual benefits and positive energy will reach you regardless of location.'
  }
];

export default function GrahanDoshShantiPoojaPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
      <div className="container mx-auto pt-8 px-4 pb-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Grahan Dosh Shanti Pooja
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
            Remove planetary obstacles and restore harmony in your life through powerful Vedic rituals that pacify Rahu and Ketu.
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
            <p>Grahan Dosh, also known as Rahu-Ketu Dosha, is one of the most significant astrological challenges that can affect every aspect of your life. This dosh occurs when the shadow planets <span className="font-bold text-green-800">Rahu</span> and <span className="font-bold text-green-800">Ketu</span> are unfavorably placed in your birth chart, creating a complex web of obstacles, delays, and negative influences that can persist throughout your lifetime. Understanding and addressing this dosh is crucial for achieving harmony and success in all areas of life.</p>
            <p>The <span className="font-bold text-green-800">Rahu-Ketu axis</span> represents the lunar nodes where the Moon&apos;s path intersects with the Sun&apos;s apparent path around the Earth. Rahu, the North Node, symbolizes our desires, ambitions, and material pursuits, while Ketu, the South Node, represents detachment, spirituality, and past-life karma. When these planets are afflicted or placed in challenging houses, they create Grahan Dosh, which manifests as persistent obstacles, unexpected delays, and a feeling of being stuck despite your best efforts.</p>
            <p>Grahan Dosh can affect multiple areas of life simultaneously. In your <span className="font-bold text-green-800">career</span>, it may cause job instability, missed promotions, or difficulty in achieving professional goals. In <span className="font-bold text-green-800">relationships</span>, it can lead to misunderstandings, conflicts, and difficulty in forming lasting bonds. Health-wise, it may manifest as chronic issues, mental stress, or unexplained ailments. The dosh can also affect your <span className="font-bold text-green-800">financial stability</span>, <span className="font-bold text-green-800">travel plans</span>, and overall sense of well-being.</p>
            <p>The <span className="font-bold text-green-800">Grahan Dosh Shanti Pooja</span> is a powerful Vedic ritual specifically designed to pacify and harmonize the energies of Rahu and Ketu. This sacred ceremony involves elaborate rituals, specific mantras, and offerings that directly address the root causes of the dosh. Our expert Vedic priests perform this pooja with utmost precision, following ancient traditions that have been passed down through generations of spiritual masters.</p>
            <p>During the pooja, we use specific <span className="font-bold text-green-800">mantras</span> and <span className="font-bold text-green-800">rituals</span> that resonate with the energy of Rahu and Ketu. These include the Rahu Stotra, Ketu Stotra, and other powerful Vedic hymns that help balance the planetary energies. We also perform specific <span className="font-bold text-green-800">offerings</span> and <span className="font-bold text-green-800">sacred fire ceremonies</span> (Havan) that purify the negative influences and create positive energy flow.</p>
            <p>The timing of the pooja is crucial for its effectiveness. We perform it during <span className="font-bold text-green-800">auspicious planetary hours</span> when the cosmic energies are most favorable for such rituals. This ensures maximum impact and lasting results. The pooja typically takes 2-3 hours to complete, during which you can participate mentally and receive the spiritual benefits regardless of your physical location.</p>
            <p>Beyond the immediate ritual, we provide comprehensive <span className="font-bold text-green-800">follow-up remedies</span> and guidance to maintain the positive effects. This includes personalized mantras for daily practice, recommendations for gemstones that can further support the healing process, and lifestyle adjustments that align with the harmonized planetary energies. Our holistic approach ensures that the benefits of the pooja continue to manifest in your life long after the ceremony is complete.</p>
          </motion.div>
        )}
        
        {activeTab === 'Benefits' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of Grahan Dosh Shanti Pooja</h2>
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