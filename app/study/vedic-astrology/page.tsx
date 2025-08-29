'use client';
import React, { useState, useEffect } from 'react';
import { AnimatedStars } from '../../components/AnimatedStars';
import { MysticBackground } from '../../components/MysticBackground';
import { motion } from 'framer-motion';
import { HelpCircle, Star, BookOpen } from 'lucide-react';
import { FAQSection } from '../../components/FAQSection';
import { CTASection } from '../../components/CTASection';
import { DrNarendraProfile } from '../../components/DrNarendraProfile';

const tabs = ['Overview', 'Key Components', 'Applications', 'FAQs'];

const faqs = [
  {
    q: 'What is Vedic astrology and how does it differ from Western astrology?',
    a: "Vedic astrology, or Jyotish, is an ancient Indian system that uses the sidereal zodiac and places emphasis on the Moon sign, planetary periods (dashas), and complex yogas. Unlike Western astrology, it focuses on karmic patterns and provides specific remedial measures."
  },
  {
    q: 'How accurate are Vedic astrology predictions?',
    a: "Vedic astrology provides insights based on planetary positions and karmic patterns. While it offers valuable guidance, its accuracy depends on the astrologer&apos;s expertise, the quality of birth data, and the individual&apos;s openness to the guidance provided."
  },
  {
    q: 'Can Vedic astrology provide guidance for remedial measures to mitigate planetary afflictions?',
    a: "Yes. Vedic astrology prescribes a range of remedial measures—such as mantras, gemstones, rituals, and charitable acts—tailored to an individual&apos;s birth chart to harmonize challenging planetary influences and foster personal growth."
  },
  {
    q: 'How is a birth chart (Kundali) constructed and interpreted in Vedic astrology?',
    a: "A Kundali is meticulously calculated using the exact date, time, and place of birth, mapping the positions of planets in the twelve houses and signs. Its interpretation involves a nuanced synthesis of planetary strengths, aspects, yogas, and dashas to reveal the native&apos;s life path."
  }
];

export default function VedicAstrology() {
  const [activeTab, setActiveTab] = useState('Overview');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-nebula-indigo via-cosmic-purple to-celestial-blue font-sans">
      <AnimatedStars />
      <MysticBackground>
        <div className="container mx-auto pt-32 px-4 py-16 relative z-10">
          {/* Banner Heading */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl bg-gradient-to-r from-[#fdf6f2] via-[#f3e8ff] to-[#e0f2fe] py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#f3e8ff]">
            <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg tracking-tight font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Vedic Astrology Fundamentals</h1>
            <h2 className="text-2xl font-semibold text-center mb-2 text-black font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>वैदिक ज्योतिष के मूल सिद्धांत</h2>
            <p className="text-lg md:text-2xl text-gray-700 text-center max-w-2xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>Explore the ancient science of Jyotish and discover how Vedic astrology can illuminate your life&apos;s journey.</p>
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
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 text-lg leading-relaxed text-gray-700 space-y-6 font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
              <p><span className="font-bold text-indigo-900">Vedic astrology</span>, also known as <span className="font-bold text-indigo-900">Jyotish</span>, is an ancient Indian science that provides insights into the past, present, and future through the positions of celestial bodies. It is based on the belief that the positions of the planets and stars at the time of a person&apos;s birth can influence their personality and life events.</p>
              <p>Rooted in the <span className="font-bold text-indigo-900">Vedas</span>—India&apos;s oldest sacred texts—Jyotish is regarded as the <span className="italic text-indigo-700">&quot;science of light.&quot;</span> It interprets the cosmic interplay of <span className="font-bold text-indigo-900">planets (grahas)</span>, <span className="font-bold text-indigo-900">zodiac signs (rashis)</span>, and <span className="font-bold text-indigo-900">houses (bhavas)</span> to reveal the karmic blueprint of an individual. Unlike Western astrology, Vedic astrology employs the <span className="font-bold text-indigo-900">sidereal zodiac</span>, which aligns with the actual constellations, and places significant emphasis on the <span className="font-bold text-indigo-900">Moon sign</span>, <span className="font-bold text-indigo-900">planetary periods (dashas)</span>, and intricate <span className="font-bold text-indigo-900">yogas</span> (planetary combinations) that shape one&apos;s destiny. The birth chart, or <span className="font-bold text-indigo-900">Kundali</span>, is meticulously calculated using the precise date, time, and place of birth, serving as a celestial map of one&apos;s life journey.</p>
              <p><span className="font-bold text-indigo-900">Vedic astrology</span> is not merely predictive; it is deeply philosophical, offering guidance for self-understanding, spiritual growth, and practical decision-making. It is widely used for personal guidance, relationship compatibility, career planning, health insights, and the timing of auspicious events (<span className="font-bold text-indigo-900">muhurta</span>). Moreover, it prescribes remedial measures—such as <span className="font-bold text-indigo-900">mantras</span>, <span className="font-bold text-indigo-900">rituals</span>, <span className="font-bold text-indigo-900">gemstones</span>, and <span className="font-bold text-indigo-900">charitable acts</span>—to harmonize challenging planetary influences and foster well-being. Through its holistic approach, Vedic astrology continues to illuminate the lives of millions, bridging the ancient wisdom of the cosmos with the realities of modern existence.</p>
              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-lg">
                <span className="text-indigo-600 font-medium">Key Takeaway:</span> <span className="font-bold text-indigo-900">Vedic astrology</span> offers a cosmic map to understand your strengths, challenges, and the timing of important events in your life.
              </div>
            </motion.div>
          )}
          {activeTab === 'Key Components' && (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 text-lg leading-relaxed text-gray-700 space-y-6 font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
              <h3 className="text-xl font-semibold mb-2 font-serif text-indigo-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Key Components of Vedic Astrology</h3>
              <p><span className="font-bold text-indigo-900">Vedic astrology</span> is a sophisticated system built upon several foundational elements that work in harmony to reveal the intricacies of an individual&apos;s life. At its core are the <span className="font-bold text-indigo-900">nine planets</span>, or <span className="font-bold text-indigo-900">grahas</span>, which include the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, and the two lunar nodes, Rahu and Ketu. Each planet is believed to govern specific aspects of human experience, influencing everything from intellect and emotions to ambition and spiritual growth. The dynamic interplay of these planets at the time of birth forms the basis for astrological interpretation.</p>
              <p>Equally vital are the <span className="font-bold text-indigo-900">twelve houses</span>, or <span className="font-bold text-indigo-900">bhavas</span>, which represent distinct domains of life such as career, relationships, health, wealth, and spirituality. The placement of planets within these houses at the moment of birth determines the areas of life that will be most prominently affected by planetary energies. The <span className="font-bold text-indigo-900">twelve zodiac signs</span>, or <span className="font-bold text-indigo-900">rashis</span>, further refine this analysis by imparting unique qualities and tendencies to the planets and houses they occupy. The combination of planets, houses, and signs creates a highly personalized and nuanced birth chart, or <span className="font-bold text-indigo-900">Kundali</span>.</p>
              <p>Beyond these primary components, <span className="font-bold text-indigo-900">Vedic astrology</span> employs advanced techniques such as <span className="font-bold text-indigo-900">yogas</span> (special planetary combinations), <span className="font-bold text-indigo-900">dashas</span> (planetary periods), and <span className="font-bold text-indigo-900">transits</span> (gochar) to provide deeper insights. Yogas can indicate exceptional talents, challenges, or life events, while dashas outline the unfolding of karma over time. Transits reveal how current planetary movements interact with the birth chart, offering guidance for present circumstances. Together, these components form a comprehensive framework for understanding destiny and making informed life choices.</p>
              <ul className="list-disc list-inside mb-4">
                <li><strong>Planets (Grahas):</strong> The nine planets in Vedic astrology include the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, and the two lunar nodes, Rahu and Ketu.</li>
                <li><strong>Houses (Bhavas):</strong> The twelve houses represent different areas of life, such as career, relationships, and health.</li>
                <li><strong>Zodiac Signs (Rashis):</strong> The twelve zodiac signs are used to interpret the positions of planets and their effects on individuals.</li>
              </ul>
              <p className="font-bold text-indigo-900">Understanding these components is essential for interpreting a birth chart (Kundali) and making predictions about an individual&apos;s life path.</p>
            </motion.div>
          )}
          {activeTab === 'Applications' && (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 text-lg leading-relaxed text-gray-700 space-y-6 font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
              <h3 className="text-xl font-semibold mb-2 font-serif text-indigo-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Applications of Vedic Astrology</h3>
              <p>The practical applications of <span className="font-bold text-indigo-900">Vedic astrology</span> are vast and deeply integrated into the fabric of Indian culture and daily life. One of its primary uses is <span className="font-bold text-indigo-900">personal guidance</span>, where individuals seek insights into their strengths, challenges, and life purpose. By analyzing the birth chart, astrologers can offer tailored advice on career choices, educational pursuits, financial planning, and personal development. This guidance is not only predictive but also prescriptive, helping individuals align with their highest potential.</p>
              <p><span className="font-bold text-indigo-900">Relationship compatibility</span>, or synastry, is another significant application. Vedic astrology provides detailed methods for assessing compatibility between partners, friends, or business associates by comparing their birth charts. Techniques such as <span className="font-bold text-indigo-900">Guna Milan</span> and <span className="font-bold text-indigo-900">Mangal Dosha</span> analysis are commonly used in matchmaking, especially in the context of marriage. These assessments help individuals make informed decisions about partnerships, fostering harmony and understanding.</p>
              <p>Additionally, <span className="font-bold text-indigo-900">Vedic astrology</span> is instrumental in determining <span className="font-bold text-indigo-900">auspicious timings</span>, known as <span className="font-bold text-indigo-900">muhurta</span>, for important life events such as weddings, business launches, and travel. It also offers <span className="font-bold text-indigo-900">remedies</span> for planetary afflictions, including the use of mantras, gemstones, rituals, and charitable acts to mitigate challenges and enhance well-being. Through its multifaceted applications, Vedic astrology serves as a timeless guide, empowering individuals to navigate life&apos;s uncertainties with clarity and confidence.</p>
              <ul className="list-disc list-inside mb-4">
                <li><span className="font-bold text-indigo-900">Personal guidance and self-discovery</span></li>
                <li><span className="font-bold text-indigo-900">Compatibility analysis for relationships</span></li>
                <li><span className="font-bold text-indigo-900">Timing of important life events (muhurta)</span></li>
                <li><span className="font-bold text-indigo-900">Remedies for planetary afflictions</span></li>
              </ul>
              <p className="font-bold text-indigo-900">By understanding the cosmic influences, individuals can make informed decisions and navigate their lives more effectively.</p>
            </motion.div>
          )}
          {activeTab === 'FAQs' && (
            <FAQSection faqs={faqs} />
          )}

          {/* Dr. Narendra Profile & Statistics */}
          <div className="mt-20 space-y-20">
            <DrNarendraProfile />
          </div>

          {/* CTA Section */}
          <div className="mt-20">
            <CTASection />
          </div>
        </div>
      </MysticBackground>
    </div>
  );
} 