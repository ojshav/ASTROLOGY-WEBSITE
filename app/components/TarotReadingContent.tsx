"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { FaYinYang, FaRegStar, FaRegGem, FaUsers, FaProjectDiagram, FaHeartbeat } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { DrNarendraProfile } from '../../app/components/DrNarendraProfile';
import { ContactForm } from '../../app/components/ContactForm';

const tabs = ['Overview', 'Benefits', 'FAQs', 'Purchase'];

const benefits = [
  {
    icon: <FaYinYang className="text-purple-400 w-8 h-8 mb-2" />, title: 'Gain Clarity', desc: 'Tarot readings cut through confusion, offering clear insights into your current situation and future possibilities.'
  },
  {
    icon: <FaRegStar className="text-yellow-400 w-8 h-8 mb-2" />, title: 'Empower Decisions', desc: 'Receive guidance that empowers you to make confident, informed choices aligned with your highest good.'
  },
  {
    icon: <FaRegGem className="text-pink-400 w-8 h-8 mb-2" />, title: 'Spiritual Growth', desc: 'Connect with your intuition and explore your spiritual path, fostering personal growth and self-awareness.'
  },
  {
    icon: <FaUsers className="text-blue-400 w-8 h-8 mb-2" />, title: 'Relationship Insights', desc: 'Understand the dynamics of your personal and professional relationships, fostering deeper connections.'
  },
  {
    icon: <FaProjectDiagram className="text-green-400 w-8 h-8 mb-2" />, title: 'Uncover Hidden Patterns', desc: 'Identify recurring life patterns and subconscious beliefs that may be holding you back.'
  },
  {
    icon: <FaHeartbeat className="text-red-400 w-8 h-8 mb-2" />, title: 'Emotional Healing', desc: 'Gain closure on past events and find a safe space to process emotions, allowing you to move forward.'
  }
];

const faqs = [
  {
    q: 'What is a Tarot reading?',
    a: 'A Tarot reading is a form of divination that uses a deck of cards to gain insights into the past, present, or future. Each card holds a specific meaning, and their combination tells a story that can offer guidance and clarity.'
  },
  {
    q: 'How can a Tarot reading help me?',
    a: 'A reading can provide perspective on your life, help you understand your challenges, and highlight opportunities you may not have seen. It is a tool for self-reflection and empowerment.'
  },
  {
    q: 'Are Tarot readings accurate?',
    a: 'Tarot readings are not about predicting a fixed future, but about exploring potential outcomes and influences. Their accuracy lies in the reader&apos;s ability to interpret the cards and the querent&apos;s openness to the insights provided.'
  },
  {
    q: 'How should I prepare for my reading?',
    a: 'Come with an open mind and a general idea of the areas in your life you&apos;d like to explore. It&apos;s helpful to think about a specific question, but not necessary. Being in a calm, quiet space during the reading can also enhance the experience.'
  },
  {
    q: 'Can Tarot predict specific events like lottery numbers?',
    a: 'Tarot is a tool for guidance and insight, not for predicting specific, random events. It reveals potential paths and energies, helping you make empowered choices rather than providing definitive predictions of chance.'
  },
  {
    q: 'How often should I get a Tarot reading?',
    a: 'The frequency is personal. Some people seek readings during major life transitions, while others have them monthly or quarterly for general guidance. It is best to seek a reading when you feel you need clarity or a new perspective.'
  }
];

export function TarotReadingContent() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    specificQuestion: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900 text-white font-sans">
      <div className="container mx-auto pt-32 px-4 py-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-black/50 py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-2xl border border-purple-700/50 backdrop-blur-sm">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
             Tarot Reading
          </h1>
          <p className="text-xl md:text-2xl text-center text-purple-200 max-w-2xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
            Unlock the mystical secrets of the cards and gain profound insight into your life&apos;s journey.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-purple-700/50">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-300 font-sans ${activeTab === tab ? 'border-yellow-400 text-yellow-300 font-bold' : 'border-transparent text-purple-200 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Overview' && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 text-lg leading-relaxed text-purple-100 space-y-6 font-sans" style={{ textAlign: 'justify' }}>
             <p><span className="font-bold text-yellow-300">Tarot Reading</span> is the art of using cards to gain insight into the past, present, and future. Each card in the deck is rich with symbolism and meaning, representing different aspects of the human experience. A reading interprets the cards you draw to tell a story about your life path, challenges, and opportunities.</p>
            <p>Rooted in medieval Europe, Tarot has evolved from a simple card game into a powerful tool for divination and self-discovery. It serves as a mirror to your soul, reflecting your innermost thoughts, feelings, and desires. The cards do not predict a fixed fate, but rather illuminate potential paths and outcomes, empowering you to make conscious choices.</p>
            <p>Whether you are seeking answers about love, career, or your spiritual journey, a Tarot reading can provide profound clarity and guidance. It helps you connect with your intuition, understand the energies at play in your life, and navigate your journey with greater wisdom and confidence.</p>
            <div className="bg-purple-900/50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <span className="text-yellow-300 font-medium">Key Takeaway:</span> <span className="font-bold text-white">Tarot</span> is a powerful tool for self-reflection that offers guidance by tapping into universal archetypes and your own intuition.
            </div>
          </motion.div>
        )}
        {activeTab === 'Benefits' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-purple-700/50 pb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Benefits of Tarot Reading</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-black/30 backdrop-blur-md shadow-lg p-8 flex flex-col items-center border border-purple-700/50 hover:border-yellow-400 hover:scale-105 transition-all duration-300"
                >
                  {benefit.icon}
                  <h3 className="font-bold text-lg mb-2 text-yellow-300" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{benefit.title}</h3>
                  <p className="text-purple-200 text-center text-base">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}
        {activeTab === 'FAQs' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-purple-700/50 pb-2 text-left" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-black/20 p-4 rounded-lg border border-purple-800/50">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 mr-3 text-xl font-bold">?</span>
                    <span className="font-bold text-lg text-yellow-300" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{faq.q}</span>
                  </div>
                  <p className="text-purple-200 text-justify pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        {activeTab === 'Purchase' && (
          <section className="mb-12">
            <div className="rounded-3xl bg-gradient-to-br from-black/50 via-purple-900/60 to-black/50 p-10 shadow-2xl border border-purple-700/50 flex flex-col items-center backdrop-blur-md">
              <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Book Your Tarot Reading</h2>
              <p className="text-lg text-center text-purple-200 mb-6">
                Ready to unveil the wisdom of the cards? Book a personalized Tarot reading today.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-yellow-300 block mb-2 font-semibold">Name</label>
                    <input 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-purple-900/50 text-white border border-purple-600 rounded-lg px-4 py-2 w-full focus:ring-yellow-400 focus:border-yellow-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-yellow-300 block mb-2 font-semibold">Email</label>
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-purple-900/50 text-white border border-purple-600 rounded-lg px-4 py-2 w-full focus:ring-yellow-400 focus:border-yellow-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-yellow-300 block mb-2 font-semibold">Phone Number</label>
                    <input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-purple-900/50 text-white border border-purple-600 rounded-lg px-4 py-2 w-full focus:ring-yellow-400 focus:border-yellow-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-yellow-300 block mb-2 font-semibold">Date of Birth</label>
                    <input 
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                      className="bg-purple-900/50 text-white border border-purple-600 rounded-lg px-4 py-2 w-full focus:ring-yellow-400 focus:border-yellow-400"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-yellow-300 block mb-2 font-semibold">Your Specific Question</label>
                  <textarea 
                    value={formData.specificQuestion}
                    onChange={(e) => setFormData({...formData, specificQuestion: e.target.value})}
                    placeholder="e.g., What should I focus on in my career?"
                    className="bg-purple-900/50 text-white border border-purple-600 rounded-lg px-4 py-2 w-full h-32 focus:ring-yellow-400 focus:border-yellow-400"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 py-4 font-bold rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                  Request Reading
                </Button>
              </form>
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