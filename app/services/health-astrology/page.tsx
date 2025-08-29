"use client"

import { useState, useEffect } from "react"
import { motion } from 'framer-motion';
import { Heart, Leaf, Shield, Sun, Apple, Star, Zap, Users, Globe, Award, Compass, Moon, Target, Lightbulb, Sparkles, BookOpen, TrendingUp, Activity, Brain, Gem } from 'lucide-react';
import { DrNarendraProfile } from '@/app/components/DrNarendraProfile';
import { ContactForm } from '@/app/components/ContactForm';

const tabs = ['Overview', 'Benefits', 'FAQs'];

const benefits = [
  {
    icon: <Heart className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Proactive Health Insights',
    desc: 'Identify potential health vulnerabilities in your chart before they manifest, allowing for preventative care.'
  },
  {
    icon: <Leaf className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Personalized Wellness',
    desc: 'Receive tailored advice on diet, exercise, and lifestyle that aligns with your unique cosmic constitution.'
  },
  {
    icon: <Brain className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Mental & Emotional Clarity',
    desc: 'Understand the astrological roots of stress and anxiety and learn remedies to foster mental peace.'
  },
  {
    icon: <Shield className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Strengthening Vitality',
    desc: 'Learn which planets govern your energy levels and how to enhance your overall vitality and immunity.'
  },
  {
    icon: <Apple className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Astrological Dietary Guidance',
    desc: 'Discover foods that are harmonious with your planetary makeup to promote better digestion and health.'
  },
  {
    icon: <Gem className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Holistic Healing Remedies',
    desc: 'Receive guidance on gemstones, mantras, and rituals to mitigate negative planetary influences on your health.'
  },
  {
    icon: <Star className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Constitutional Analysis',
    desc: 'Understand your unique body constitution and how planetary energies influence your physical makeup.'
  },
  {
    icon: <Zap className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Energy Balance',
    desc: 'Learn to balance your physical, mental, and spiritual energies for optimal health and well-being.'
  },
  {
    icon: <Users className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Lifestyle Optimization',
    desc: 'Get personalized recommendations for daily routines, exercise, and activities that align with your chart.'
  },
  {
    icon: <Globe className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Seasonal Health Guidance',
    desc: 'Understand how different seasons and planetary transits affect your health and how to adapt accordingly.'
  },
  {
    icon: <Award className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Preventive Care',
    desc: 'Identify health patterns and take proactive measures to maintain wellness and prevent illness.'
  },
  {
    icon: <Compass className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Health Timing',
    desc: 'Know the best times for medical procedures, treatments, and health-related decisions.'
  },
  {
    icon: <Moon className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Sleep & Rest Patterns',
    desc: 'Understand how lunar cycles and planetary positions affect your sleep quality and rest patterns.'
  },
  {
    icon: <Target className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Stress Management',
    desc: 'Learn astrological techniques for managing stress and maintaining emotional balance.'
  },
  {
    icon: <Sparkles className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Recovery & Healing',
    desc: 'Discover the best approaches for healing and recovery based on your planetary influences.'
  }
];

const faqs = [
  {
    q: 'What is Medical Astrology?',
    a: 'Medical Astrology is a specialized branch of Vedic astrology that analyzes the birth chart to understand health, diseases, and vitality. It examines the influence of planets and houses on different parts of the body to provide insights into wellness.'
  },
  {
    q: 'Can astrology predict specific diseases?',
    a: 'Astrology can indicate predispositions or vulnerabilities to certain types of health issues based on planetary placements. It serves as a guide for preventative care, not a definitive diagnosis of specific diseases.'
  },
  {
    q: 'Is this a replacement for a doctor\'s advice?',
    a: 'Absolutely not. Astrological guidance is a complementary tool for holistic well-being. It should never replace professional medical advice, diagnosis, or treatment from a qualified doctor.'
  },
  {
    q: 'How does my birth chart relate to my health?',
    a: 'Each house and planet in your birth chart corresponds to different parts of the body and bodily functions. For example, the 6th house governs health and illness. An analysis reveals your constitutional strengths and weaknesses.'
  },
  {
    q: 'What kind of remedies are suggested for health issues?',
  a: 'Remedies are holistic and can include dietary recommendations, lifestyle changes, specific mantras, gemstone therapy, and rituals designed to pacify malefic planetary influences and strengthen benefic ones.'
  }
];

export default function HealthAstrologyPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
      <div className="container mx-auto pt-8 px-4 pb-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Medical & Health Astrology</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
            Align your well-being with the cosmos. Discover how Vedic astrology can illuminate your path to physical vitality and emotional balance.
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
            <p><span className="font-bold text-green-800">Medical Astrology</span> is a profound branch of Vedic science that offers deep insights into your physical and mental well-being. It operates on the principle that the celestial bodies—planets, stars, and zodiac signs—exert a tangible influence on our bodies. By creating and analyzing your birth chart, we can map out your unique constitutional strengths, identify potential health vulnerabilities, and understand the cosmic timing of health-related events in your life.</p>
            <p>Your birth chart serves as a divine blueprint for your health. The <span className="font-bold text-green-800">6th house</span> is paramount, as it is the house of diseases, debts, and obstacles. The condition of this house and its lord reveals much about your susceptibility to illness. Similarly, the <span className="font-bold text-green-800">Ascendant (Lagna)</span> and its lord represent your overall physical body and vitality. The <span className="font-bold text-green-800">8th house</span> indicates longevity and chronic conditions, while the <span className="font-bold text-green-800">12th house</span> can signify issues like hospitalization or hidden ailments. Each planet also governs specific parts of the body and health matters.</p>
            <p>The <span className="font-bold text-green-800">Sun</span> rules vitality and bones, the <span className="font-bold text-green-800">Moon</span> governs the mind and emotions, <span className="font-bold text-green-800">Mars</span> relates to blood and energy, and <span className="font-bold text-green-800">Saturn</span> influences chronic diseases and longevity. Understanding these planetary influences helps us identify which areas of your health may need attention and which planets are supporting your well-being. This knowledge allows for a more targeted approach to health management.</p>
            <p>Our approach to Health Astrology is not about fatalistic prediction; it is about empowerment. By understanding your astrological predispositions, you can take proactive steps to safeguard your health. This ancient wisdom provides personalized guidance on <span className="font-bold text-green-800">diet</span>, <span className="font-bold text-green-800">lifestyle</span>, and <span className="font-bold text-green-800">daily routines</span> that are in harmony with your planetary energies. It helps you understand the &quot;why&quot; behind recurring health issues, offering a spiritual perspective on physical challenges. It is a powerful tool for preventative care, helping you cultivate balance and resilience long before problems arise.</p>
            <p>A crucial aspect of a health reading involves analyzing <span className="font-bold text-green-800">planetary periods (Dashas)</span> and <span className="font-bold text-green-800">transits (Gochar)</span>. These cycles indicate when certain health themes may become more prominent in your life. Knowing that a challenging planetary period is approaching allows you to be more vigilant and adopt supportive practices. Conversely, a favorable period can be harnessed for rejuvenation and strengthening your well-being. This predictive insight allows for strategic health management, aligning your actions with the natural cosmic rhythm for optimal wellness.</p>
            <p>Beyond the major houses and planets, we also examine the <span className="font-bold text-green-800">Nakshatras</span> (lunar mansions) and their influence on your health. Each Nakshatra has specific health associations and can indicate particular strengths or vulnerabilities. We also analyze the <span className="font-bold text-green-800">divisional charts</span>, especially the Saptamsha (D7) chart, which provides detailed insights into health matters. This multi-layered approach ensures a comprehensive understanding of your health profile.</p>
            <p>Health Astrology also provides guidance on <span className="font-bold text-green-800">remedial measures</span> and <span className="font-bold text-green-800">healing practices</span> that can support your well-being. This includes recommendations for specific gemstones, mantras, and rituals that can help balance planetary energies affecting your health. We also provide guidance on the best times for medical procedures, treatments, and health-related decisions, ensuring that you work in harmony with cosmic energies for optimal results.</p>
          </motion.div>
        )}
        
        {activeTab === 'Benefits' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of Health Astrology</h2>
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
  )
} 