'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star, Moon, Sun, HelpCircle, Users, Target, Award, Globe, Heart, Shield, Sparkles, Zap, Compass, Gem, Activity, TrendingUp, ArrowUpRight } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { DrNarendraProfile } from '../components/DrNarendraProfile';
import { ContactForm } from '../components/ContactForm';
import { useLanguage } from '../contexts/useLanguage';

const tabKeys = ['study.tabs.0', 'study.tabs.1', 'study.tabs.2']; // Overview, Benefits, FAQs

export default function StudyPage() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(tabKeys[0]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const studyTopics = [
    {
      title: "Vedic Astrology Fundamentals",
      titleHi: "वैदिक ज्योतिष के मूल सिद्धांत",
      description: "Learn the basics of Vedic astrology, including planets, houses, and zodiac signs.",
      icon: <Sun className="w-12 h-12 text-yellow-500" />,
      href: "/study/vedic-astrology"
    },
    {
      title: "Numerology Essentials",
      titleHi: "अंक ज्योतिष के आवश्यक तत्व",
      description: "Discover the mystical significance of numbers in your life and their impact on your destiny.",
      icon: <Star className="w-12 h-12 text-purple-500" />,
      href: "/study/numerology"
    },
    {
      title: "Palmistry Techniques",
      titleHi: "हस्तरेखा विज्ञान की तकनीकें",
      description: "Explore the art of reading palms and understanding the lines that shape our lives.",
      icon: <Moon className="w-12 h-12 text-blue-500" />,
      href: "/study/palmistry"
    },
    {
      title: "Tarot Card Reading",
      titleHi: "टैरो कार्ड रीडिंग",
      description: "Learn the meanings behind tarot cards and how to conduct insightful readings.",
      icon: <BookOpen className="w-12 h-12 text-green-500" />,
      href: "/study/tarot"
    }
  ];

  const benefits = [
    {
      title: 'Unlock Self-Knowledge',
      desc: 'Gain deep insights into your personality, strengths, and life path through the study of astrology, numerology, and spiritual sciences.'
    },
    {
      title: 'Navigate Life\'s Challenges',
      desc: 'Learn to interpret cosmic patterns and cycles, empowering you to make informed decisions and overcome obstacles with confidence.'
    },
    {
      title: 'Enhance Intuition',
      desc: 'Develop your intuitive abilities and inner wisdom, allowing you to trust your instincts and align with your higher purpose.'
    },
    {
      title: 'Foster Personal Growth',
      desc: 'Embrace a journey of self-discovery and transformation, cultivating resilience, mindfulness, and emotional balance.'
    },
    {
      title: 'Connect with Community',
      desc: 'Join a supportive network of like-minded seekers, sharing experiences, insights, and encouragement on your spiritual path.'
    },
    {
      title: 'Access Expert Guidance',
      desc: 'Learn from experienced mentors and practitioners who provide personalized support, feedback, and inspiration.'
    },
    {
      title: 'Practical Tools & Techniques',
      desc: 'Master practical methods for meditation, energy work, and self-healing that you can integrate into your daily life.'
    },
    {
      title: 'Lifelong Learning',
      desc: 'Enjoy a rich library of resources and courses designed for continuous growth, exploration, and spiritual evolution.'
    }
  ];

  const faqs = [
    {
      q: 'What is spiritual study and why is it important?',
      a: 'Spiritual study involves exploring mystical sciences such as astrology, numerology, tarot, and metaphysics to gain a deeper understanding of yourself and the universe. It is important because it empowers you to live with awareness, purpose, and harmony, helping you navigate life&apos;s challenges and unlock your highest potential.'
    },
    {
      q: 'Do I need any prior knowledge to begin?',
      a: 'No prior experience is required. Our courses are designed for all levels, from curious beginners to advanced practitioners. Each lesson builds foundational knowledge and gradually introduces more advanced concepts.'
    },
    {
      q: 'Are the courses interactive and practical?',
      a: 'Yes, our courses combine theoretical knowledge with practical exercises, guided meditations, and real-life applications to ensure a holistic and engaging learning experience.'
    },
    {
      q: 'Will I receive a certificate?',
      a: 'Yes, you will receive a certificate upon successful completion of each course, recognizing your dedication and achievement in spiritual studies.'
    },
    {
      q: 'Is there a fee for all courses?',
      a: 'Many of our introductory resources are free, while advanced courses and personalized mentorship may require a fee. We strive to make spiritual education accessible to all.'
    },
    {
      q: 'How do I ask questions or get support during my study?',
      a: 'You can join our community forums, attend live Q&amp;A sessions, or contact our mentors directly for personalized guidance and support.'
    }
  ];

  const sidebarFeatures = [
    {
      icon: <BookOpen className="w-6 h-6 text-indigo-500" />,
      title: "Comprehensive Courses",
      desc: "Structured learning paths from beginner to advanced levels"
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Expert Mentors",
      desc: "Learn from experienced practitioners and teachers"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      title: "Global Community",
      desc: "Connect with spiritual seekers worldwide"
    },
    {
      icon: <Heart className="w-6 h-6 text-indigo-500" />,
      title: "Personal Growth",
      desc: "Transform your life through spiritual wisdom"
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      title: "Safe Learning",
      desc: "Supportive environment for spiritual exploration"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
      title: "Ancient Wisdom",
      desc: "Traditional knowledge with modern applications"
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
            Spiritual Studies
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
            Embark on a profound journey of spiritual awakening and inner transformation as you step into the sacred world of the mystical arts.
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
                  {tabKey === 'study.tabs.0' ? 'Overview' : tabKey === 'study.tabs.1' ? 'Benefits' : 'FAQs'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'study.tabs.0' && (
              <motion.section 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.7 }} 
                className="mb-12 bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  The Value of Spiritual Study
                </h2>
                <div className="mb-8 text-lg leading-relaxed text-gray-700 space-y-6" style={{ fontFamily: 'Open Sans, Arial, sans-serif', textAlign: 'justify' }}>
                  <p>Spiritual study is the gateway to self-realization and conscious living. By delving into the mysteries of astrology, numerology, tarot, and other mystical sciences, you gain tools to understand your true nature, navigate life&apos;s challenges, and unlock your highest potential.</p>
                  <p>Our courses are designed to bridge ancient wisdom with modern life, offering practical insights and transformative practices that empower you to live with clarity, confidence, and purpose.</p>
                  <p>Through guided lessons, interactive exercises, and community support, you will learn to interpret cosmic patterns, harness universal energies, and cultivate a deeper connection with your inner self.</p>
                  <p>The journey of spiritual study is not just about acquiring knowledge— it&apos;s about awakening your intuition, expanding your consciousness, and embracing a life of meaning and fulfillment.</p>
                </div>
                
                {/* Study Topics Section */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Study Topics</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {studyTopics.map((topic, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-pointer"
                      >
                        {topic.icon}
                        <div>
                          <h4 className="font-bold text-indigo-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{topic.title}</h4>
                          {lang === 'hi' && <h5 className="text-sm text-indigo-700 mb-2">{topic.titleHi}</h5>}
                          <p className="text-gray-700 text-sm">{topic.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}

            {activeTab === 'study.tabs.1' && (
              <motion.section 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.7 }} 
                className="mb-12 bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Benefits of Spiritual Study
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-indigo-50 border border-indigo-100"
                    >
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-600 font-bold text-sm">{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-indigo-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{benefit.title}</h4>
                        <p className="text-gray-700 text-sm">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {activeTab === 'study.tabs.2' && (
              <motion.section 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.7 }} 
                className="mb-12 bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Frequently Asked Questions
                </h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5 }} 
                  className="space-y-6"
                >
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-indigo-900 mb-2 flex items-center">
                        <HelpCircle className="w-5 h-5 mr-2 text-indigo-400" />
                        {faq.q}
                      </h3>
                      <p className="text-gray-700">{faq.a}</p>
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
                  Study Highlights
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>4 main study topics</li>
                  <li>Beginner to advanced levels</li>
                  <li>Interactive learning materials</li>
                  <li>Expert mentorship available</li>
                  <li>Certificate upon completion</li>
                  <li>Community support forums</li>
                </ul>
              </div>

              {/* Featured Features */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <h3 className="text-lg font-bold text-indigo-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Learning Features
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

              {/* Get Started */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <h3 className="text-lg font-bold text-indigo-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Ready to Begin?
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>Start your spiritual journey today with our comprehensive study programs.</p>
                  <p>Choose from our four main topics and begin learning at your own pace.</p>
                  <button className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm mt-3">
                    Start Learning
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

