"use client";

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { DrNarendraProfile } from "../components/DrNarendraProfile";
import { ContactForm } from "../components/ContactForm";

const tabs = ['Overview', 'Benefits', 'FAQs'];

const benefits = [
  {
    title: 'Authentic Vedic Rituals',
    desc: 'Every puja is performed by highly trained priests, following precise Vedic procedures, mantras, and offerings—ensuring spiritual efficacy and authenticity.'
  },
  {
    title: 'Personalized Intentions',
    desc: 'We tailor each ceremony to your specific goals—be it health, wealth, relationships, or spiritual progress—so your prayers are heard and honored.'
  },
  {
    title: 'Global Accessibility',
    desc: 'Participate in sacred rituals from anywhere in the world. Our online platform ensures you never miss an auspicious moment, regardless of distance.'
  },
  {
    title: 'Convenience & Comfort',
    desc: 'Join live ceremonies, interact with priests, and receive prasad—all from the comfort of your home, with flexible scheduling and seamless technology.'
  },
  {
    title: 'Transparent & Trustworthy',
    desc: 'Watch your puja live, receive detailed reports, and trust in our transparent process—your faith and satisfaction are our highest priorities.'
  },
  {
    title: 'Spiritual Transformation',
    desc: 'Experience deep inner peace, healing, and spiritual upliftment as you participate in time-honored rituals that connect you to the divine.'
  }
];

const faqs = [
  {
    q: 'What is an online puja and how does it work?',
    a: 'An online puja is a sacred Vedic ritual performed by expert priests on your behalf, streamed live so you can participate virtually. You provide your intentions and details, join the ceremony online, and receive prasad and blessings at home.'
  },
  {
    q: 'Is online puja as effective as in-person rituals?',
    a: 'Yes. The power of a puja lies in the intention, mantras, and ritual precision. Our priests follow authentic procedures, and your participation—whether physical or virtual—invokes the same divine blessings.'
  },
  {
    q: 'How do I prepare for my online puja?',
    a: 'We provide clear instructions before your ceremony. You may be asked to set up a sacred space, light a lamp, and join the live stream with an open heart and mind. Our team guides you every step of the way.'
  },
  {
    q: 'Can I request a specific puja or deity?',
    a: 'Absolutely. We offer a wide range of pujas for different deities and intentions. Let us know your needs, and we will recommend or arrange the most suitable ritual for you.'
  },
  {
    q: 'Is my information confidential?',
    a: 'Yes. Your privacy is our priority. All personal details and intentions shared for the puja are kept strictly confidential and used only for the purpose of your ceremony.'
  }
];

export default function OnlinePujaPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
      <div className="container mx-auto pt-8 px-4 pb-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Online Puja Services
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
            Experience the sacred power of Vedic rituals from the comfort of your home. Our online puja services connect you with expert priests, authentic traditions, and divine blessings—no matter where you are in the world.
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
            <p>Online Puja is a modern bridge to ancient Vedic rituals, allowing you to invoke divine blessings, remove obstacles, and align your life with cosmic energies—no matter your location. At Nakshatra Gyaan, we bring the sanctity of the temple to your home, with every ceremony performed by experienced, compassionate priests who honor tradition and your unique intentions.</p>
            <p>Whether you seek prosperity, health, peace, or spiritual growth, our online puja services are tailored to your needs. Each ritual is conducted live, with <span className="font-bold text-green-800">mantras</span>, <span className="font-bold text-green-800">offerings</span>, and <span className="font-bold text-green-800">sacred fire</span>, and you can participate virtually, receive prasad, and connect with the divine in real time. Our process is transparent, authentic, and deeply transformative.</p>
            <p>The essence of online puja lies in its ability to transcend physical boundaries while maintaining the spiritual potency of traditional ceremonies. Through advanced technology and ancient wisdom, we create a sacred space where you can participate in <span className="font-bold text-green-800">Vedic rituals</span> from anywhere in the world, receiving the same divine blessings and spiritual benefits as if you were physically present.</p>
            <p>Every puja is performed by highly trained <span className="font-bold text-green-800">Vedic priests</span> who follow precise procedures, recite authentic mantras, and conduct the ceremony with utmost devotion and precision. These priests are not just ritual performers but spiritual guides who understand the deeper meaning of each ceremony and can adapt it to your specific needs and intentions.</p>
            <p>The <span className="font-bold text-green-800">live streaming</span> technology allows you to witness every aspect of the ceremony in real-time, from the initial prayers to the final blessings. You can see the sacred fire, hear the mantras, and even interact with the priest during the ceremony, creating a truly immersive spiritual experience that bridges the gap between the physical and digital worlds.</p>
            <p>Beyond the ceremony itself, online puja includes comprehensive <span className="font-bold text-green-800">follow-up services</span> such as detailed reports, prasad delivery, and ongoing spiritual guidance. This holistic approach ensures that the benefits of the puja continue to manifest in your life long after the ceremony is complete, providing sustained spiritual support and transformation.</p>
            <p>Our online puja services are designed to be accessible, authentic, and deeply meaningful, allowing you to maintain your spiritual practices regardless of your location or circumstances. Whether you&apos;re seeking to remove obstacles, attract positive energies, or deepen your spiritual connection, these ceremonies provide a powerful and convenient way to access the transformative power of Vedic wisdom.</p>
          </motion.div>
        )}
        
        {activeTab === 'Benefits' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of Online Puja</h2>
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
