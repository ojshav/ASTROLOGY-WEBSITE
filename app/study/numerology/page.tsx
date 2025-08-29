'use client';
import React, { useState, useEffect } from 'react';
import { AnimatedStars } from '../../components/AnimatedStars';
import { MysticBackground } from '../../components/MysticBackground';
import { motion } from 'framer-motion';
import { FAQSection } from '../../components/FAQSection';
import { DrNarendraProfile } from '../../components/DrNarendraProfile';
import { ContactForm } from '../../components/ContactForm';
import { FaRegLightbulb, FaRegStar, FaRegGem } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const tabs = ['Overview', 'Benefits', 'FAQs', 'Purchase'];

const benefits = [
  {
    icon: <FaRegLightbulb className="text-indigo-400 w-8 h-8 mb-2" />, title: 'Name Correction', desc: 'Unlock the power of your name with numerology-based corrections for greater harmony and success.'
  },
  {
    icon: <FaRegStar className="text-yellow-400 w-8 h-8 mb-2" />, title: 'Lucky Number Discovery', desc: 'Discover your personal lucky numbers and use them to enhance opportunities in life.'
  },
  {
    icon: <FaRegGem className="text-purple-400 w-8 h-8 mb-2" />, title: 'Numerology Remedies', desc: 'Receive personalized remedies and guidance based on your unique numerology chart.'
  },
];

const faqs = [
  {
    q: 'What is numerology and how does it work?',
    a: 'Numerology is the ancient science of numbers that reveals your life path, strengths, and challenges by analyzing your birth date and name. Each number carries a unique vibration that influences your destiny.'
  },
  {
    q: 'How can a numerology reading help me?',
    a: 'A numerology reading provides deep insight into your personality, relationships, career, and spiritual growth. It helps you make informed decisions and align with your true purpose.'
  },
  {
    q: 'What are numerology remedies?',
    a: 'Numerology remedies include name corrections, lucky numbers, affirmations, and rituals designed to harmonize your energy and attract positive outcomes.'
  },
];

export default function NumerologyPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
      <div className="container mx-auto pt-32 px-4 py-16 relative z-10">
        {/* Glassmorphic Banner */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl bg-gradient-to-r from-[#fdf6f2] via-[#f3e8ff] to-[#e0f2fe] py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#f3e8ff]">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Numerology Analysis</h1>
          <p className="text-xl md:text-2xl text-center text-gray-700 max-w-2xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
            Discover the power of numbers in your life with personalized numerology reading.
          </p>
        </motion.div>

        {/* Tabs */}
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

        {/* Tab Content */}
        {activeTab === 'Overview' && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 text-lg leading-relaxed text-gray-700 space-y-6 font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', textAlign: 'justify' }}>
            <p><span className="font-bold text-indigo-900">Numerology</span> is the ancient metaphysical science of numbers, rooted in the belief that numbers carry unique vibrations and energies that influence every aspect of our lives. By analyzing the numbers present in your birth date and name, numerology reveals profound insights into your personality, strengths, challenges, and destiny.</p>
            <p>Originating in ancient civilizations such as Egypt, Babylon, and India, numerology has evolved into a sophisticated system for self-discovery and spiritual growth. Each number, from 1 to 9, as well as the master numbers 11, 22, and 33, is associated with specific qualities and archetypes. These numbers form the foundation of your numerology chart, offering a cosmic blueprint for your life&apos;s journey.</p>
            <p>Numerology is not just about prediction—it is a tool for empowerment. By understanding your core numbers, you can make informed decisions, align with your true purpose, and navigate life&apos;s transitions with greater clarity and confidence. Whether you seek guidance in relationships, career, or personal growth, numerology provides a timeless key to unlocking your highest potential.</p>
                          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-lg">
                <span className="text-indigo-600 font-medium">Key Takeaway:</span> <span className="font-bold text-indigo-900">Numerology</span> offers a unique lens to understand yourself and your life&apos;s path through the power of numbers.
              </div>
          </motion.div>
        )}
        {activeTab === 'Benefits' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of Numerology</h2>
            <div className="grid md:grid-cols-2 gap-8">
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
                  <h3 className="font-bold text-lg mb-2 text-indigo-900" style={{ fontFamily: 'Playfair Display, serif' }}>{benefit.title}</h3>
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
        {activeTab === 'Purchase' && (
          <section className="mb-12">
            <div className="rounded-3xl bg-gradient-to-r from-[#e0f7fa] via-[#f3e8ff] to-[#e0f2fe] p-10 shadow-xl border border-indigo-100 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-indigo-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Book Your Numerology Session</h2>
              <p className="text-lg text-center mb-6" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
                Ready to unlock the secrets of your numbers? Book a personalized numerology session and discover your true potential.
              </p>
              <Button className="bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
                Book Your Session Now!
              </Button>
            </div>
          </section>
        )}

        {/* Dr. Narendra Profile & Statistics */}
        <div className="mt-20 space-y-20">
          <DrNarendraProfile />
        </div>

        {/* Contact Form CTA */}
        <div className="mt-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
} 