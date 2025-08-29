"use client"

import { useState, useEffect } from "react"
import { motion } from 'framer-motion';
import { Baby, Moon, School, Heart, Users, Star, Zap, Shield, Globe, Award, Compass, Target, BookOpen, Sparkles, Gem, Activity, TrendingUp } from 'lucide-react';
import { DrNarendraProfile } from '@/app/components/DrNarendraProfile';
import { ContactForm } from '@/app/components/ContactForm';

const tabs = ['Overview', 'Benefits', 'FAQs'];

const benefits = [
  {
    icon: <Heart className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Timing of Childbirth',
    desc: 'Analyze planetary periods to identify the most favorable times for conception and childbirth.'
  },
  {
    icon: <Baby className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Remedies for Progeny Issues',
    desc: 'Receive powerful and compassionate remedies to overcome obstacles related to childbirth.'
  },
  {
    icon: <Moon className="text-indigo-400 w-8 h-8 mb-2" />,
    title: "Child's Horoscope Analysis",
    desc: "Understand your child's potential, personality, and life path from their birth chart."
  },
  {
    icon: <School className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Educational Path Guidance',
    desc: "Identify your child's innate talents and the most suitable educational streams for them."
  },
  {
    icon: <Star className="text-indigo-400 w-8 h-8 mb-2" />,
    title: "Insights into Child's Health",
    desc: 'Gain knowledge about potential health vulnerabilities and preventative wellness strategies.'
  },
  {
    icon: <Users className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Parent-Child Relationship',
    desc: 'Foster a deeper, more harmonious bond by understanding the astrological dynamics between you and your child.'
  },
  {
    icon: <Gem className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Personality Development',
    desc: 'Understand your child\'s innate nature and help them develop their unique personality traits.'
  },
  {
    icon: <Zap className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Energy Balance',
    desc: 'Learn to balance your child\'s physical, mental, and spiritual energies for optimal development.'
  },
  {
    icon: <Shield className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Protection & Safety',
    desc: 'Identify potential health vulnerabilities and receive remedies for protection and longevity.'
  },
  {
    icon: <Globe className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Life Path Guidance',
    desc: 'Understand your child\'s destined path and guide them towards their highest potential.'
  },
  {
    icon: <Award className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Talent Recognition',
    desc: 'Discover your child\'s hidden talents and natural abilities for optimal nurturing.'
  },
  {
    icon: <Compass className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Career Direction',
    desc: 'Identify suitable career paths and professional directions based on astrological analysis.'
  },
  {
    icon: <Target className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Goal Setting',
    desc: 'Help your child set and achieve goals aligned with their cosmic blueprint.'
  },
  {
    icon: <BookOpen className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Learning Enhancement',
    desc: 'Optimize your child\'s learning abilities and academic performance through astrological insights.'
  },
  {
    icon: <Activity className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Spiritual Development',
    desc: 'Nurture your child\'s spiritual growth and connection to higher consciousness.'
  }
];

const faqs = [
  {
    q: 'What is Progeny and Child Astrology?',
    a: "It is a specialized field of Vedic astrology that focuses on childbirth, conception, and the well-being of a child. It analyzes the 5th house in the parents' charts to provide insights and remedies related to having children."
  },
  {
    q: 'Can astrology help if we are facing delays in having a child?',
    a: 'Yes. By examining the horoscopes of both partners, we can identify planetary afflictions causing delays and suggest powerful, spiritually-grounded remedies to mitigate these challenges.'
  },
  {
    q: 'Can you create a horoscope for my newborn?',
    a: "Absolutely. A newborn's horoscope, or Janma Kundli, is a precious map of their life. It reveals their core personality, strengths, potential challenges, and destiny, providing a guide for conscious parenting."
  },
  {
    q: "What can my child's chart reveal about their future?",
    a: "It can indicate their natural talents, suitable career paths, health predispositions, and overall life patterns. This knowledge empowers parents to nurture their child's unique potential effectively."
  },
  {
    q: 'Are the suggested remedies safe?',
    a: 'Yes, all our remedies are spiritual in nature. They are safe, positive, and designed to harmonize planetary energies. They typically include mantras, pujas, and gemstone recommendations, and never interfere with medical treatments.'
  }
];

export default function ChildAstrologyPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
      <div className="container mx-auto pt-8 px-4 pb-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Progeny & Child Astrology</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
            Illuminate the path of parenthood and understand the cosmic blueprint of your child&apos;s destiny with divine astrological guidance.
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
            <p><span className="font-bold text-green-800">Progeny Astrology</span> is a deeply compassionate and specialized field of Vedic astrology dedicated to the journey of parenthood. It addresses one of life&apos;s most profound desires: the blessing of having a child. By analyzing the horoscopes of the prospective parents, particularly the <span className="font-bold text-green-800">5th house</span> (the house of children, creativity, and intellect), we can gain invaluable insights into the timing, health, and destiny related to progeny.</p>
            <p>For couples dreaming of starting a family, this science offers a guiding light. It helps identify the most fertile and astrologically supportive periods for conception, increasing the chances of a healthy pregnancy. If there are delays or obstacles, Progeny Astrology can pinpoint the specific planetary afflictions responsible—such as the influence of malefic planets like <span className="font-bold text-green-800">Saturn</span>, <span className="font-bold text-green-800">Mars</span>, or <span className="font-bold text-green-800">Ketu</span> on the 5th house—and provide powerful, time-tested remedies to pacify these energies and clear the path to parenthood.</p>
            <p>Beyond conception, creating a <span className="font-bold text-green-800">Child&apos;s Horoscope (Janma Kundli)</span> at birth is one of the greatest gifts a parent can give. This celestial blueprint reveals the child&apos;s innate nature (<span className="font-bold text-green-800">Prakriti</span>), their intellectual and emotional strengths, potential health issues, and their destined path in life. Understanding your child&apos;s astrological makeup from the very beginning allows for conscious parenting—nurturing their natural talents, supporting them through challenges, and guiding them towards a future that is in true alignment with their soul&apos;s purpose.</p>
            <p>The analysis extends beyond just the 5th house. The strength of <span className="font-bold text-green-800">Jupiter</span>, the primary significator (karaka) for children and wisdom, is paramount. We assess its placement, aspects, and dignity in the chart. A well-placed Jupiter can bless a couple with virtuous and fortunate children, while an afflicted Jupiter may require specific remedial measures like chanting mantras or performing pujas to strengthen its positive influence.</p>
            <p>Furthermore, the <span className="font-bold text-green-800">Saptamsha (D7)</span> divisional chart is meticulously examined. This chart is a microscopic view of the 5th house and provides highly specific details about children. It can indicate the number of children, their gender, their relationship with the parents, and their overall well-being. Analyzing the D7 chart allows for a much deeper and more accurate level of prediction and guidance regarding all matters of progeny.</p>
            <p>Child-rearing in the modern world presents unique challenges. A child&apos;s horoscope acts as a divine manual, helping parents understand their child&apos;s psychological and emotional needs. For instance, a child with a prominent <span className="font-bold text-green-800">Moon</span> may be highly sensitive and require a nurturing environment, whereas a child with a strong <span className="font-bold text-green-800">Mars</span> may be energetic and competitive, needing constructive outlets for their dynamism. Astrological guidance helps tailor parenting styles to the child&apos;s innate personality.</p>
            <p>Ultimately, Child Astrology is a holistic and empowering tool. It provides a spiritual perspective on the entire journey of parenthood, from the desire for a child to raising them into a well-rounded, successful, and happy adult. It transforms parenting from a series of guesses and anxieties into a conscious, guided, and deeply fulfilling spiritual practice, ensuring the best possible future for the next generation.</p>
          </motion.div>
        )}
        
        {activeTab === 'Benefits' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of Progeny & Child Astrology</h2>
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