'use client';

import { useState, useEffect } from 'react';
import { User, Calendar, Star, HelpCircle, Users, Target, Quote, Award, Globe, Heart, Shield, BookOpen, Sparkles, Zap, Compass, Gem, Activity, TrendingUp, Clock, Gift, Lock, ArrowUpRight, Brain, Eye, Crown, Infinity } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CTASection } from '../components/CTASection';
import { DrNarendraProfile } from '../components/DrNarendraProfile';
import { ContactForm } from '../components/ContactForm';
import { useLanguage } from '../contexts/useLanguage';

const tabKeys = ['about.tabs.0', 'about.tabs.2', 'about.tabs.3']; // Removed 'about.tabs.1' (Our Team)

export default function AboutPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(tabKeys[0]);
  const router = useRouter();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sidebarFeatures = [
    {
      icon: <Award className="w-6 h-6 text-indigo-500" />,
      title: "20+ Years of Excellence",
      desc: "Two decades of dedicated astrological guidance and spiritual wisdom"
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "10,000+ Consultations",
      desc: "Life-changing guidance delivered to seekers worldwide"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      title: "Global Reach",
      desc: "Serving clients from over 30 countries across the globe"
    },
    {
      icon: <Heart className="w-6 h-6 text-indigo-500" />,
      title: "Compassionate Approach",
      desc: "Ethical, confidential, and empowering guidance for all"
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      title: "Trusted & Reliable",
      desc: "Built on integrity, authenticity, and proven results"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-indigo-500" />,
      title: "500+ Workshops",
      desc: "Educational programs empowering spiritual seekers"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
      title: "Ancient Wisdom",
      desc: "Traditional Vedic astrology blended with modern insights"
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
      title: "Life Transformation",
      desc: "Real solutions for real challenges in life"
    }
  ];

  const coreValues = [
    {
      icon: <Compass className="w-8 h-8 text-indigo-400" />,
      title: "Authenticity",
      desc: "Genuine Vedic wisdom, free from superstition and fear-mongering"
    },
    {
      icon: <Gem className="w-8 h-8 text-indigo-400" />,
      title: "Empowerment",
      desc: "Tools and insights to help you take control of your destiny"
    },
    {
      icon: <Activity className="w-8 h-8 text-indigo-400" />,
      title: "Compassion",
      desc: "Understanding and support through life's challenges"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-400" />,
      title: "Growth",
      desc: "Continuous learning and spiritual development"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
      <div className="container mx-auto pt-8 px-4 pb-16 relative z-10">
        {/* Banner Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="w-full rounded-3xl py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" 
          style={{ backgroundColor: '#FEFBF2' }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {t('about.banner.heading')}
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
            {t('about.banner.text')}
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
              {tabKeys.map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors font-sans ${activeTab === tabKey ? 'border-indigo-500 text-indigo-600 font-bold' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
                  style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}
                >
                  {t(tabKey)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'about.tabs.0' && (
              <motion.section 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.7 }} 
                className="mb-12 bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t('about.journey.heading')}
                </h2>
                <div className="mb-8 text-lg leading-relaxed text-gray-700 space-y-6" style={{ fontFamily: 'Open Sans, Arial, sans-serif', textAlign: 'justify' }}>
                  {/* Reduced to 4 paragraphs for perfect sidebar alignment */}
                  {[0, 1, 2, 3].map(i => (
                    <p key={i}>{t(`about.journey.story.${i}`)}</p>
                  ))}
                </div>
                
                {/* Core Values Section */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Our Core Values</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {coreValues.map((value, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-indigo-50 border border-indigo-100"
                      >
                        {value.icon}
                        <div>
                          <h4 className="font-bold text-indigo-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{value.title}</h4>
                          <p className="text-gray-700 text-sm">{value.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}

            {activeTab === 'about.tabs.2' && (
              <motion.section 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.7 }} 
                className="mb-12 bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t('about.mission.heading')}
                </h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
                    <h3 className="font-bold text-indigo-900 text-lg mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      {t('about.mission.missionTitle')}
                    </h3>
                    <p className="text-indigo-800 leading-relaxed">{t('about.mission.missionText')}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
                    <h3 className="font-bold text-purple-900 text-lg mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      {t('about.mission.visionTitle')}
                    </h3>
                    <p className="text-purple-800 leading-relaxed">{t('about.mission.visionText')}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
                    <span className="text-green-800 font-bold text-lg">{t('about.mission.impactTitle')}</span> 
                    <span className="text-gray-800 font-semibold ml-2">{t('about.mission.impactText')}</span>
                  </div>
                </div>
              </motion.section>
            )}

            {activeTab === 'about.tabs.3' && (
              <motion.section 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.7 }} 
                className="mb-12 bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t('about.faq.heading')}
                </h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5 }} 
                  className="space-y-6"
                >
                  {/* Reduced to 6 FAQs for better proportion */}
                  {[0, 1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-indigo-900 mb-2 flex items-center">
                        <HelpCircle className="w-5 h-5 mr-2 text-indigo-400" />
                        {t(`about.faq.q${i}`)}
                      </h3>
                      <p className="text-gray-700">{t(`about.faq.a${i}`)}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.section>
            )}

            <CTASection />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <h3 className="text-lg font-bold text-indigo-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t('about.quickfacts.heading')}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {[0, 1, 2, 3, 4, 5].map(i => (
                    <li key={i}>{t(`about.quickfacts.fact${i}`)}</li>
                  ))}
                </ul>
              </div>

              {/* Featured Services */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <h3 className="text-lg font-bold text-indigo-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Featured Services
                </h3>
                <div className="space-y-4">
                  {sidebarFeatures.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 transition-colors"
                    >
                      {feature.icon}
                      <div>
                        <h4 className="font-semibold text-indigo-900 text-sm mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-xs">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <h3 className="text-lg font-bold text-indigo-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t('about.resources.heading')}
                </h3>
                <ul className="space-y-3">
                  {[0, 1, 2, 3].map(i => (
                    <li key={i}>
                      <a href={t(`about.resources.link${i}.url`)} className="text-indigo-700 hover:text-indigo-900 hover:underline flex items-start transition-colors">
                        <ArrowUpRight className="w-4 h-4 mr-2 mt-1 text-indigo-500" />
                        <span className="text-sm">{t(`about.resources.link${i}.title`)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <h3 className="text-lg font-bold text-indigo-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Get in Touch
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>Ready to begin your spiritual journey?</p>
                  <p>Our expert astrologers are here to guide you with personalized insights and remedies.</p>
                  <button 
                    onClick={() => router.push('/contact')}
                    className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm mt-3"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Components */}
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
