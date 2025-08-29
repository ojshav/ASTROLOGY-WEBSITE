"use client"

import { useState, useEffect } from "react"
import { motion } from 'framer-motion';
import { Building, Handshake, TrendingUp, Shield, Lightbulb, Gem, Star, Zap, Users, Globe, Award, Compass, Target, BookOpen, Sparkles, DollarSign, Briefcase, Crown, Eye, Brain, Infinity, Clock, Gift, Lock, ArrowUpRight, TrendingDown } from 'lucide-react';
import { DrNarendraProfile } from '@/app/components/DrNarendraProfile';
import { ContactForm } from '@/app/components/ContactForm';

const tabs = ['Overview', 'Benefits', 'FAQs'];

const benefits = [
  {
    icon: <Building className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Auspicious Launch Timing',
    desc: 'Determine the most powerful astrological muhurta (timing) to launch your business for maximum success.'
  },
  {
    icon: <Handshake className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Partnership Compatibility',
    desc: 'Analyze the charts of business partners to ensure synergy, trust, and long-term profitable collaboration.'
  },
  {
    icon: <TrendingUp className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Financial Growth Strategies',
    desc: 'Identify planetary influences on your finances and get remedies to attract wealth and abundance.'
  },
  {
    icon: <Shield className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Risk Assessment',
    desc: 'Foresee potential challenges, market downturns, or internal conflicts and receive guidance to mitigate risks.'
  },
  {
    icon: <Lightbulb className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Business Name & Branding',
    desc: 'Use numerology and astrology to select a brand name that vibrates with success and attracts customers.'
  },
  {
    icon: <Gem className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Personalized Success Remedies',
    desc: 'Receive tailored mantras, yantras, and gemstone recommendations to energize your business ventures.'
  },
  {
    icon: <Star className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Strategic Planning',
    desc: 'Align your business decisions with favorable planetary energies for optimal timing and success.'
  },
  {
    icon: <Zap className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Energy Optimization',
    desc: 'Learn to work with cosmic energies rather than against them for maximum business efficiency.'
  },
  {
    icon: <Users className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Team Building',
    desc: 'Identify the right team members and understand team dynamics through astrological compatibility.'
  },
  {
    icon: <Globe className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Market Expansion',
    desc: 'Know the best times and directions for expanding your business into new markets or territories.'
  },
  {
    icon: <Award className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Recognition & Awards',
    desc: 'Identify periods when your business achievements will be recognized and celebrated.'
  },
  {
    icon: <Compass className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Business Direction',
    desc: 'Gain clarity about your business path and make confident decisions about future direction.'
  },
  {
    icon: <Target className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Goal Achievement',
    desc: 'Set and achieve business goals with the support of favorable planetary energies.'
  },
  {
    icon: <BookOpen className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Learning & Development',
    desc: 'Identify the best periods for business education, training, and skill development.'
  },
  {
    icon: <Sparkles className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Innovation & Creativity',
    desc: 'Unlock your creative potential and innovate in your business with cosmic inspiration.'
  }
];

const faqs = [
  {
    q: 'What is Business Astrology?',
    a: 'Business Astrology applies the principles of Vedic astrology to the world of commerce. It involves analyzing the founder\'s birth chart and the business\'s "birth" (launch date) to guide strategic decisions, forecast challenges, and maximize success.'
  },
  {
    q: 'How can astrology help my business?',
    a: 'It provides a strategic advantage by helping you align your business actions with favorable cosmic energies. This includes choosing the right time for key decisions, understanding partnership dynamics, and mitigating potential risks before they arise.'
  },
  {
    q: 'Is this only for new businesses?',
    a: 'No, it is valuable for both new and established businesses. For startups, we guide on launch timing and naming. For existing businesses, we provide insights for expansion, overcoming stagnation, and navigating challenging periods.'
  },
  {
    q: 'Can you help with choosing a business partner?',
    a: 'Yes, partnership compatibility is a key area. By comparing the horoscopes of potential partners, we can assess their complementary strengths, potential for conflict, and overall likelihood of a successful and harmonious venture.'
  },
  {
    q: 'What information is needed for a consultation?',
    a: 'We primarily need the date, time, and place of birth of the business owner(s). If the business is already established, the date and time of its official registration or launch are also very helpful.'
  }
];

export default function BusinessAstrologyPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
      <div className="container mx-auto pt-8 px-4 pb-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Business Astrology</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
            Navigate the corporate cosmos with divine insight. Unlock your business&apos;s true potential and align your strategy with the stars for unparalleled success.
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
            <p><span className="font-bold text-green-800">Business Astrology</span> is an invaluable strategic tool that applies the timeless wisdom of Vedic astrology to the modern marketplace. It recognizes that a business is a living entity with its own destiny, deeply connected to the cosmic energies of its founder. By analyzing the founder&apos;s birth chart alongside the business&apos;s launch chart (<span className="font-bold text-green-800">muhurta</span>), we can unlock a roadmap to success that transcends conventional business plans.</p>
            <p>Every entrepreneur dreams of success, but the path is often filled with uncertainty. Business Astrology provides clarity by illuminating the most favorable times (<span className="font-bold text-green-800">muhurta</span>) for critical actions like launching a company, signing a major deal, or releasing a new product. It helps in selecting a business name and brand identity that is not only catchy but also <span className="font-bold text-green-800">numerologically</span> and <span className="font-bold text-green-800">astrologically</span> aligned for prosperity. Furthermore, it offers profound insights into partnership compatibility, ensuring that your business relationships are built on a foundation of trust and synergistic energy.</p>
            <p>Our expert analysis delves into key houses in your chart—the <span className="font-bold text-green-800">10th house</span> of career, the <span className="font-bold text-green-800">11th house</span> of gains, the <span className="font-bold text-green-800">2nd house</span> of wealth, and the <span className="font-bold text-green-800">7th house</span> of partnerships. We examine the strength of planets like <span className="font-bold text-green-800">Jupiter</span> (for expansion), <span className="font-bold text-green-800">Mercury</span> (for commerce), and <span className="font-bold text-green-800">Saturn</span> (for longevity) to create a holistic strategy. This is not about leaving your success to fate; it is about making informed, divinely-guided decisions to steer your venture towards its highest potential.</p>
            <p>The <span className="font-bold text-green-800">10th House</span> represents your career, profession, and public reputation. When strong, it indicates natural leadership abilities and success in business. The <span className="font-bold text-green-800">11th House</span> governs income, gains, and fulfillment of desires. A well-placed 11th house suggests financial prosperity and the ability to achieve your business goals. The <span className="font-bold text-green-800">2nd House</span> represents wealth, family, and speech, while the <span className="font-bold text-green-800">7th House</span> governs partnerships, contracts, and business relationships.</p>
            <p>Beyond the houses, we analyze the <span className="font-bold text-green-800">planetary positions</span> and their influence on your business success. <span className="font-bold text-green-800">Jupiter</span> brings wisdom, expansion, and good fortune to business ventures. <span className="font-bold text-green-800">Mercury</span> governs communication, commerce, and intellectual pursuits, making it crucial for business success. <span className="font-bold text-green-800">Saturn</span> provides discipline, structure, and long-term planning abilities, while <span className="font-bold text-green-800">Venus</span> influences creativity, aesthetics, and customer relationships.</p>
            <p>Business Astrology also provides insights into <span className="font-bold text-green-800">timing</span> and <span className="font-bold text-green-800">cycles</span> that affect your business success. By understanding your <span className="font-bold text-green-800">Dasha</span> (planetary periods) and <span className="font-bold text-green-800">Gochara</span> (transits), we can identify the most auspicious periods for launching new initiatives, expanding operations, or making major investments. This knowledge allows you to work with cosmic energies rather than against them, maximizing your chances of success.</p>
            <p>Ultimately, Business Astrology is about empowerment through cosmic wisdom. It helps you understand the deeper purpose of your business, align your actions with favorable energies, and navigate challenges with greater confidence. By combining traditional business acumen with astrological insights, you create a powerful foundation for sustainable growth, meaningful success, and a business that serves not just your financial goals, but also your soul&apos;s purpose.</p>
          </motion.div>
        )}
        
        {activeTab === 'Benefits' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of Business Astrology</h2>
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