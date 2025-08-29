'use client';
import React, { useState, useEffect } from 'react';
import { AnimatedStars } from '../../components/AnimatedStars';
import { MysticBackground } from '../../components/MysticBackground';
import { motion } from 'framer-motion';
import { FAQSection } from '../../components/FAQSection';
import { DrNarendraProfile } from '../../components/DrNarendraProfile';
import { ContactForm } from '../../components/ContactForm';

const tabs = ['Overview', 'Key Features', 'How to Read Palms', 'FAQs'];

const faqs = [
  {
    q: 'What is palmistry and how does it work?',
    a: "Palmistry, or chiromancy, is the ancient art of interpreting the lines, shapes, and features of the hands to gain insights into a person's character, experiences, and potential future. It works on the belief that the hands reflect both inherited traits and life experiences."
  },
  {
    q: 'Which hand should be read in palmistry?',
    a: "Traditionally, the dominant hand (right for right-handed, left for left-handed) is read for current and future tendencies, while the non-dominant hand reveals inherited traits and the past. Both hands are considered for a holistic reading."
  },
  {
    q: 'What do the major lines on the palm signify?',
    a: "The major lines—Heart Line, Head Line, Life Line, and Fate Line—represent emotional nature, intellect, vitality, and life path, respectively. Their length, depth, and intersections provide nuanced insights into an individual's journey."
  },
  {
    q: 'Can palmistry predict specific events?',
    a: "Palmistry is not about predicting exact events, but rather about understanding tendencies, strengths, and challenges. It offers guidance for self-awareness and personal growth."
  },
  {
    q: 'Is palmistry recognized as a science?',
    a: "Palmistry is considered a metaphysical art rather than a science. While it has ancient roots and is respected in many cultures, its interpretations are subjective and best used as a tool for reflection and guidance."
  }
];

export default function PalmistryPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-nebula-indigo via-cosmic-purple to-celestial-blue font-sans">
      <AnimatedStars />
      <MysticBackground>
        <div className="container mx-auto pt-32 px-4 py-16 relative z-10">
          {/* Banner Heading */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl bg-gradient-to-r from-[#fdf6f2] via-[#f3e8ff] to-[#e0f2fe] py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#f3e8ff]">
            <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg tracking-tight font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Palmistry Techniques</h1>
            <h2 className="text-2xl font-semibold text-center mb-2 text-black font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>हस्तरेखा विज्ञान की तकनीकें</h2>
            <p className="text-lg md:text-2xl text-gray-700 text-center max-w-2xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>Explore the ancient art of palmistry and discover how the lines of your hand reveal your story, strengths, and destiny.</p>
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
              <p><span className="font-bold text-indigo-900">Palmistry</span>, also known as <span className="font-bold text-indigo-900">chiromancy</span>, is the ancient metaphysical art of interpreting the lines, shapes, and mounts of the hands to gain insights into a person&apos;s character, experiences, and potential. It is believed that the hands are a mirror of the soul, reflecting both inherited traits and the impact of life events.</p>
              <p>With roots in India, China, and Greece, palmistry has been practiced for thousands of years as a tool for self-discovery and guidance. The study of the hand encompasses not only the major lines but also the shape of the fingers, the mounts at the base of each finger, and the texture of the skin. Each feature is thought to hold clues about an individual&apos;s temperament, talents, and destiny.</p>
              <p>Palmistry is not about fortune-telling, but about understanding tendencies, strengths, and challenges. By reading the hands, one can gain valuable self-awareness and make more conscious choices in life. Whether used for personal growth or to help others, palmistry remains a fascinating and insightful practice.</p>
              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-lg">
                <span className="text-indigo-600 font-medium">Key Takeaway:</span> <span className="font-bold text-indigo-900">Palmistry</span> offers a unique perspective on your life journey through the wisdom written in your hands.
              </div>
            </motion.div>
          )}
          {activeTab === 'Key Features' && (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 text-lg leading-relaxed text-gray-700 space-y-6 font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
              <h3 className="text-xl font-semibold mb-2 font-serif text-indigo-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Key Features in Palmistry</h3>
              <p><span className="font-bold text-indigo-900">Palmistry</span> is a multifaceted discipline that examines a variety of features on the hand, each offering unique insights into an individual&apos;s personality and destiny. The four major lines—<span className="font-bold text-indigo-900">Heart Line</span>, <span className="font-bold text-indigo-900">Head Line</span>, <span className="font-bold text-indigo-900">Life Line</span>, and <span className="font-bold text-indigo-900">Fate Line</span>—are the primary focus, but the mounts, finger shapes, and even skin texture are also significant.</p>
              <ul className="list-disc list-inside mb-4">
                <li><span className="font-bold text-indigo-900">Heart Line:</span> Indicates emotional stability, romantic perspectives, and the capacity for love. A deep, clear Heart Line suggests a warm, open-hearted nature, while breaks or chains may indicate emotional complexity or past wounds.</li>
                <li><span className="font-bold text-indigo-900">Head Line:</span> Reflects intellect, creativity, and decision-making abilities. A long, straight Head Line points to logical thinking, while a curved line suggests creativity and intuition.</li>
                <li><span className="font-bold text-indigo-900">Life Line:</span> Represents vitality, health, and major life experiences. Contrary to popular belief, its length does not determine lifespan, but rather the quality and vibrancy of life.</li>
                <li><span className="font-bold text-indigo-900">Fate Line:</span> Suggests life path, career direction, and the influence of external circumstances. Not everyone has a Fate Line, and its presence or absence can be telling in itself.</li>
              </ul>
              <p>The <span className="font-bold text-indigo-900">mounts</span>—the raised, fleshy areas at the base of each finger—are named after planets and reveal qualities such as ambition (Mount of Jupiter), creativity (Mount of Apollo), and intuition (Mount of Luna). The relative prominence of these mounts adds nuance to a reading, highlighting dominant traits and potential challenges.</p>
              <p>Finger shapes and lengths also play a crucial role. Long, slender fingers may indicate sensitivity and attention to detail, while short, thick fingers suggest practicality and decisiveness. The thumb, in particular, is associated with willpower and logic, and its flexibility can reveal adaptability or stubbornness.</p>
              <p className="font-bold text-indigo-900">A holistic palmistry reading synthesizes all these features, offering a comprehensive portrait of the individual and their life journey.</p>
            </motion.div>
          )}
          {activeTab === 'How to Read Palms' && (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 text-lg leading-relaxed text-gray-700 space-y-6 font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
              <h3 className="text-xl font-semibold mb-2 font-serif text-indigo-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>How to Read Palms</h3>
              <p>Reading palms is both an intuitive art and a systematic practice. The process begins with observation—taking note of the hand&apos;s overall shape, size, and flexibility. The four basic hand shapes (earth, air, fire, water) correspond to different personality archetypes and set the stage for a more detailed analysis.</p>
              <ol className="list-decimal list-inside mb-4">
                <li><span className="font-bold text-indigo-900">Examine the dominant hand:</span> This hand reveals present tendencies and future possibilities, while the non-dominant hand shows inherited traits and the past.</li>
                <li><span className="font-bold text-indigo-900">Identify the major lines:</span> Observe the Heart Line, Head Line, Life Line, and Fate Line for their characteristics and intersections. Note the clarity, length, and any breaks or markings, as these details provide deeper meaning.</li>
                <li><span className="font-bold text-indigo-900">Assess the mounts:</span> The raised areas at the base of the fingers provide additional insights into personality and potential. A well-developed Mount of Venus, for example, suggests warmth and sociability.</li>
                <li><span className="font-bold text-indigo-900">Consider finger shapes and lengths:</span> These features add nuance to the reading, indicating qualities such as logic, creativity, or leadership. The relative length of the index and ring fingers, for instance, can hint at confidence or risk-taking tendencies.</li>
              </ol>
              <p>Beyond the basics, advanced palmists look for minor lines (such as the Sun Line, Mercury Line, and Marriage Lines), special markings (stars, crosses, triangles), and the texture of the skin. These subtle features can reveal hidden talents, challenges, and turning points in life.</p>
              <p className="font-bold text-indigo-900">With practice and intuition, anyone can learn to read palms and unlock the wisdom written in their hands, fostering greater self-awareness and empathy for others.</p>
            </motion.div>
          )}
          {activeTab === 'FAQs' && (
            <FAQSection faqs={faqs} />
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
      </MysticBackground>
    </div>
  );
} 