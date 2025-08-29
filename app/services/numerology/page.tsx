"use client";

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Calculator, Hash, Star, Clock, Target, Lightbulb, Heart, Users, Globe, BookOpen, Award, Zap, Shield, Compass, TrendingUp, Calendar, Sparkles, Crown, Eye, Brain, Infinity } from 'lucide-react';
import { DrNarendraProfile } from "../../components/DrNarendraProfile";
import { ContactForm } from "../../components/ContactForm";

const tabs = ['Overview', 'Benefits', 'FAQs'];

const benefits = [
  {
    icon: <Calculator className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Life Path Number',
    desc: 'Discover your primary life purpose and the central theme of your existence through your birth date calculations.'
  },
  {
    icon: <Hash className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Expression Number',
    desc: 'Understand your natural talents and how you express yourself to the world through your full name analysis.'
  },
  {
    icon: <Star className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Soul Urge Number',
    desc: 'Reveal your deepest desires, inner motivations, and what truly makes your soul happy and fulfilled.'
  },
  {
    icon: <Clock className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Personal Year Numbers',
    desc: 'Navigate life cycles and understand the energy themes for each year to make optimal decisions.'
  },
  {
    icon: <Target className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Career Guidance',
    desc: 'Identify your ideal career paths and professional strengths based on your numerological profile.'
  },
  {
    icon: <Lightbulb className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Relationship Compatibility',
    desc: 'Understand relationship dynamics and find compatible partners through numerological matching.'
  },
  {
    icon: <Heart className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Emotional Patterns',
    desc: 'Gain insights into your emotional nature and learn how to navigate feelings more effectively.'
  },
  {
    icon: <Users className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Social Interactions',
    desc: 'Learn how to improve your social skills and build better relationships with others.'
  },
  {
    icon: <Globe className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Life Timing',
    desc: 'Understand the best periods for important decisions, changes, and new beginnings.'
  },
  {
    icon: <BookOpen className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Learning Style',
    desc: 'Discover your optimal learning methods and educational paths for personal growth.'
  },
  {
    icon: <Award className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Achievement Patterns',
    desc: 'Identify your natural talents and the best ways to achieve success in your chosen field.'
  },
  {
    icon: <Zap className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Energy Management',
    desc: 'Learn how to work with your natural energy cycles for maximum productivity and well-being.'
  },
  {
    icon: <Shield className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Personal Protection',
    desc: 'Understand your vulnerabilities and learn protective measures for better life balance.'
  },
  {
    icon: <Compass className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Life Direction',
    desc: 'Get clear guidance on your life\'s direction and the steps needed to reach your goals.'
  },
  {
    icon: <TrendingUp className="text-indigo-400 w-8 h-8 mb-2" />,
    title: 'Personal Growth',
    desc: 'Identify areas for personal development and the best strategies for continuous improvement.'
  }
];

const faqs = [
  {
    q: 'What is Numerology and how does it work?',
    a: 'Numerology is the ancient metaphysical science of numbers that reveals your life path, personality traits, and destiny by analyzing your birth date and name. Each number carries unique vibrations that influence every aspect of your life, from relationships to career choices.'
  },
  {
    q: 'What are the main numbers in Numerology?',
    a: 'The key numbers include Life Path Number (from birth date), Expression Number (from full name), Soul Urge Number (from vowels), Personality Number (from consonants), and Birthday Number. Each reveals different aspects of your character and life purpose.'
  },
  {
    q: 'How can Numerology help me in life?',
    a: 'Numerology provides deep insights into your personality, relationships, career potential, and life purpose. It helps you make informed decisions, understand your strengths and challenges, and align with your true calling for greater fulfillment.'
  },
  {
    q: 'What is a Life Path Number?',
    a: 'Your Life Path Number is the most important number in Numerology, calculated from your birth date. It reveals your primary life purpose, the central theme of your existence, and the major lessons you\'re here to learn in this lifetime.'
  },
  {
    q: 'Can Numerology predict the future?',
    a: 'Numerology doesn\'t predict fixed future events, but it reveals life patterns, timing of opportunities, and personal cycles. It helps you understand your natural rhythms and make choices aligned with your destiny.'
  }
];

export default function NumerologyPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
      <div className="container mx-auto pt-8 px-4 pb-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Numerology Analysis
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
            Unlock the hidden meanings of numbers and discover your life&apos;s blueprint through the ancient science of Numerology.
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
            <p>Numerology is the ancient metaphysical science that reveals the hidden meanings and influences of numbers in our lives. Based on the principle that everything in the universe vibrates at specific frequencies, numerology teaches us that numbers are not just mathematical symbols but carriers of cosmic energy that shape our personality, relationships, career, and life purpose. By analyzing your birth date and name, we can unlock the secrets of your soul&apos;s journey and understand the divine blueprint that guides your existence.</p>
            <p>At the heart of numerology lies the <span className="font-bold text-green-800">Life Path Number</span>, calculated from your birth date. This is the most significant number in your numerological profile, representing your primary life purpose and the central theme of your existence. It reveals the major lessons you&apos;re here to learn, the challenges you&apos;ll face, and the ultimate destination of your soul&apos;s journey. Understanding your Life Path Number helps you align your actions with your true calling and navigate life&apos;s twists and turns with greater clarity and purpose.</p>
            <p>The <span className="font-bold text-green-800">Expression Number</span>, derived from your full name, reveals your natural talents, abilities, and how you express yourself to the world. This number represents the person you are becoming and the unique gifts you bring to humanity. It shows your communication style, creative potential, and the ways in which you can make your mark in the world. When you align your career and life choices with your Expression Number, you experience greater fulfillment and success.</p>
            <p>Your <span className="font-bold text-green-800">Soul Urge Number</span>, calculated from the vowels in your name, represents your deepest desires, inner motivations, and what truly makes your soul happy. This number reveals the emotional and spiritual yearnings that drive your decisions and shape your relationships. Understanding your Soul Urge Number helps you make choices that align with your heart&apos;s true desires, leading to greater happiness and inner peace.</p>
            <p>Numerology also provides powerful insights into <span className="font-bold text-green-800">timing and cycles</span> through Personal Year Numbers. Each year of your life carries a specific energy theme that influences your experiences and opportunities. By understanding these cycles, you can make better decisions about when to start new ventures, make important changes, or focus on specific areas of your life. This cosmic timing ensures that you act when the universe is most supportive of your goals.</p>
            <p>The <span className="font-bold text-green-800">compatibility aspects</span> of numerology help you understand relationship dynamics and find compatible partners. By comparing numerological profiles, we can identify areas of natural harmony and potential challenges in relationships. This knowledge empowers you to build stronger, more fulfilling connections and navigate relationship challenges with greater understanding and compassion.</p>
            <p>Beyond personal insights, numerology offers practical guidance for <span className="font-bold text-green-800">career choices</span>, <span className="font-bold text-green-800">business decisions</span>, and <span className="font-bold text-green-800">life planning</span>. Whether you&apos;re choosing a career path, starting a business, or making major life decisions, numerology provides a framework for understanding your natural strengths and the best ways to achieve your goals. This ancient wisdom serves as a compass, guiding you toward choices that align with your soul&apos;s purpose and bring you the greatest fulfillment.</p>
          </motion.div>
        )}
        
        {activeTab === 'Benefits' && (
            <section className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of Numerology Analysis</h2>
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
                  <p className="text-black text-justify pl-8" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>{faq.a.replace(/'/g, '&apos;')}</p>
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

