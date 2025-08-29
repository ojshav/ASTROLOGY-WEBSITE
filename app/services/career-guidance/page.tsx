"use client"

import { useState, useEffect } from "react"
import { FaRegLightbulb, FaRegStar, FaRegGem, FaRegSmile, FaRegHeart, FaRegComments, FaRegSun } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { DrNarendraProfile } from '@/app/components/DrNarendraProfile';
import { ContactForm } from '@/app/components/ContactForm';

const tabs = ['Overview', 'Benefits', 'FAQs'];

const benefits = [
  {
    icon: <FaRegLightbulb className="text-blue-400 w-8 h-8 mb-2" />, title: 'Clarity on Career Path', desc: 'Discover your true calling and the most auspicious fields for your growth.'
  },
  {
    icon: <FaRegStar className="text-yellow-400 w-8 h-8 mb-2" />, title: 'Timing of Job Changes', desc: 'Know the best periods for switching jobs, promotions, or business launches.'
  },
  {
    icon: <FaRegSmile className="text-green-400 w-8 h-8 mb-2" />, title: 'Overcoming Obstacles', desc: 'Get remedies and strategies to break through professional stagnation.'
  },
  {
    icon: <FaRegHeart className="text-pink-400 w-8 h-8 mb-2" />, title: 'Workplace Harmony', desc: 'Improve relationships with colleagues, bosses, and teams.'
  },
  {
    icon: <FaRegComments className="text-indigo-400 w-8 h-8 mb-2" />, title: 'Communication Skills', desc: 'Enhance your leadership and communication abilities.'
  },
  {
    icon: <FaRegSun className="text-orange-400 w-8 h-8 mb-2" />, title: 'Material & Spiritual Success', desc: 'Achieve both financial prosperity and inner fulfillment.'
  },
  {
    icon: <FaRegGem className="text-purple-400 w-8 h-8 mb-2" />, title: 'Personalized Remedies', desc: 'Receive mantras, rituals, and astrological solutions tailored to your chart.'
  },
  {
    icon: <FaRegLightbulb className="text-blue-400 w-8 h-8 mb-2" />, title: 'Confidence & Empowerment', desc: 'Step into your power and make bold, conscious career moves.'
  },
];

const faqs = [
  {
    q: 'How can astrology help my career?',
    a: 'Astrology reveals your natural talents, ideal career paths, and the timing of key opportunities. It helps you make informed decisions, avoid pitfalls, and maximize your professional growth.'
  },
  {
    q: 'Can you predict the best time for a job change?',
    a: 'Yes. By analyzing your planetary periods (Dashas) and transits, we can identify the most auspicious windows for job changes, promotions, or business launches.'
  },
  {
    q: 'What if I am facing repeated setbacks at work?',
    a: 'We identify the astrological causes of stagnation or obstacles and provide practical remedies—mantras, rituals, and mindset shifts—to help you break through.'
  },
  {
    q: 'Is this guidance suitable for entrepreneurs?',
    a: 'Absolutely. We offer specialized insights for business owners, including timing for launches, partnership compatibility, and strategies for sustainable growth.'
  },
  {
    q: 'Will my session be confidential?',
    a: 'Yes. All consultations are private and your information is kept strictly confidential.'
  },
  {
    q: 'Can I get remedies for career problems?',
    a: 'Yes. We provide personalized remedies—mantras, gemstones, rituals, and affirmations—based on your unique chart.'
  },
  {
    q: 'Do you offer guidance for students or career starters?',
    a: 'Yes. We help students and young professionals choose the right field, prepare for exams, and plan their career trajectory.'
  },
  {
    q: 'How do I book a session?',
    a: 'Simply click the "Book Your Session" button in the Purchase tab or contact us for a personalized consultation.'
  },
];

export default function CareerGuidancePage() {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
      <div className="container mx-auto pt-8 px-4 pb-16 relative z-10">
        {/* Glassmorphic Banner */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Career & Job Guidance</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
            Unlock your professional destiny with cosmic clarity. Our Vedic astrologers offer deep, actionable insights for every stage of your career journey.
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
            <p>In today&apos;s fast-paced, hyper-competitive world, choosing and navigating a career path can feel overwhelming. Amidst external expectations and internal doubts, how do you find the work that truly resonates with your soul? At Nakshatra Gyaan, we believe your profession is not just a means of livelihood—it is a sacred expression of your <span className="font-bold text-green-800">dharma</span>, your higher purpose in this lifetime. Through the ancient science of Vedic astrology, we help you uncover your divine professional blueprint and align it with real-world opportunities and inner fulfillment.</p>
            <p>Conventional career advice often falls short because it ignores the cosmic design encoded in your birth chart. Your <span className="font-bold text-green-800">Janma Kundli</span> is a celestial map of your karma, potential, and soul journey. It reveals the ideal environments, industries, and roles where your energy naturally thrives, as well as the karmic challenges that may appear along the way. With the precision of Vedic astrology, combined with insights from modern psychology and spiritual counseling, we offer a comprehensive roadmap that answers questions your heart has been asking all along.</p>
            <p>What sets our service apart is its deeply integrative approach—a blend of classical Vedic astrology, karmic insight, and modern career psychology. We begin by analyzing your birth chart, which acts as a divine blueprint of your professional inclinations, talents, lessons, and dharma (life purpose). We examine <span className="font-bold text-green-800">planetary placements</span>, your <span className="font-bold text-green-800">10th and 6th houses</span>, <span className="font-bold text-green-800">nakshatras</span>, <span className="font-bold text-green-800">dashas</span> (planetary periods), and current transits to understand not just what you can do—but what you are destined to thrive in.</p>
            <p>Our mission is not to fit you into a box, but to help you break free from limitations—be it stagnation, self-doubt, job dissatisfaction, or confusion about your path. Whether you are a student trying to choose a stream, a young professional navigating early career choices, a seasoned employee facing burnout, or an entrepreneur looking for divine timing to launch a business—our guidance meets you where you are and helps you realign with your true calling.</p>
            <p>The <span className="font-bold text-green-800">10th House</span> in your birth chart represents your career, profession, and public reputation. The <span className="font-bold text-green-800">6th House</span> governs your work environment, daily routines, and service to others. By analyzing these houses and their ruling planets, we can identify the most suitable career paths, optimal work environments, and the timing for career transitions that will bring you the greatest success and satisfaction.</p>
            <p>Timing is everything in career success, and Vedic astrology provides precise guidance through <span className="font-bold text-green-800">Dasha sequences</span> and <span className="font-bold text-green-800">planetary transits</span>. We can identify the most auspicious periods for job changes, promotions, business launches, and career milestones. This cosmic timing ensures that you act when the universe is most supportive of your professional goals, maximizing your chances of success.</p>
            <p>Beyond career choice and timing, we also provide practical remedies and strategies to overcome professional obstacles. Whether it&apos;s workplace conflicts, lack of recognition, or career stagnation, we offer personalized solutions including <span className="font-bold text-green-800">mantras</span>, <span className="font-bold text-green-800">gemstones</span>, and <span className="font-bold text-green-800">rituals</span> that can help you navigate challenges and unlock your full professional potential. Our guidance empowers you to create a career that is not only financially rewarding but also spiritually fulfilling.</p>
          </motion.div>
        )}
        {activeTab === 'Benefits' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of Career & Job Guidance</h2>
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
  )
} 