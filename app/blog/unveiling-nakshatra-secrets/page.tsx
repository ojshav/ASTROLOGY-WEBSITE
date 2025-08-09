"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FaUser, FaCompass, FaHeart, FaCalendarAlt, FaHeartbeat, FaInfinity, FaPrayingHands, FaRocket, FaBalanceScale, FaChild, FaBrain, FaSeedling } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { DrNarendraProfile } from '../../components/DrNarendraProfile';
import { Statistics } from '../../components/Statistics';
import { ContactForm } from '../../components/ContactForm';

const tabs = ['Overview', 'Benefits', 'FAQs', 'Book a Reading'];

const benefits = [
  {
    icon: <FaUser className="text-teal-400 w-8 h-8 mb-2" />, title: 'Discover Your Cosmic Identity', desc: 'Understand your core personality, strengths, and weaknesses through your Janma Nakshatra (Birth Star).'
  },
  {
    icon: <FaHeart className="text-rose-400 w-8 h-8 mb-2" />, title: 'Enhance Relationship Compatibility', desc: 'Use Nakshatra matching (Kuta system) to assess compatibility for marriage and partnerships, ensuring long-term harmony.'
  },
  {
    icon: <FaCalendarAlt className="text-cyan-400 w-8 h-8 mb-2" />, title: 'Optimize Your Timing (Muhurta)', desc: 'Learn to select the most auspicious Nakshatras for important life events like starting a business, buying a home, or getting married.'
  },
  {
    icon: <FaCompass className="text-sky-400 w-8 h-8 mb-2" />, title: 'Navigate Life&apos;s Cycles', desc: 'Gain insight into your planetary periods (Dashas) and how your Nakshatras influence them, helping you prepare for opportunities and challenges.'
  },
  {
    icon: <FaRocket className="text-indigo-400 w-8 h-8 mb-2" />, title: 'Unlock Your Career Potential', desc: 'Identify career paths that align with your Nakshatra&apos;s inherent energies and talents for greater fulfillment and success.'
  },
  {
    icon: <FaPrayingHands className="text-orange-400 w-8 h-8 mb-2" />, title: 'Personalized Remedial Measures', desc: 'Receive tailored recommendations for mantras and rituals specific to your Nakshatras to pacify malefic influences.'
  },
  {
    icon: <FaInfinity className="text-fuchsia-400 w-8 h-8 mb-2" />, title: 'Deepen Spiritual Understanding', desc: 'Connect with your soul&apos;s purpose by exploring the deeper spiritual and mythological meanings associated with your Nakshatra.'
  },
  {
    icon: <FaBalanceScale className="text-amber-400 w-8 h-8 mb-2" />, title: 'Predictive Insights', desc: 'Utilize the power of Nakshatras for more precise predictions in various areas of life, from finance to health.'
  },
  {
    icon: <FaHeartbeat className="text-red-400 w-8 h-8 mb-2" />, title: 'Holistic Health Insights', desc: 'Connect your mental and physical well-being by understanding your Nakshatra&apos;s link to specific Ayurvedic doshas (Vata, Pitta, Kapha).'
  },
  {
    icon: <FaChild className="text-pink-400 w-8 h-8 mb-2" />, title: 'Auspicious Child Naming', desc: 'Follow the sacred tradition of naming your child based on the phonetic sounds associated with their birth Nakshatra for lifelong blessings.'
  },
  {
    icon: <FaBrain className="text-purple-400 w-8 h-8 mb-2" />, title: 'Reveal Psychological Depths', desc: 'Uncover your subconscious motivations, hidden fears, and innate emotional responses that are intricately defined by your lunar mansion.'
  },
  {
    icon: <FaSeedling className="text-green-400 w-8 h-8 mb-2" />, title: 'Identify Karmic Lessons', desc: 'Recognize the specific karmic lessons your soul aims to learn in this lifetime, as indicated by challenging placements within your Nakshatra chart.'
  }
];

const faqs = [
    {
    q: 'What are Nakshatras?',
    a: 'Nakshatras, also known as lunar mansions, are 27 divisions of the zodiac in Vedic astrology. The Moon&apos;s position in a specific Nakshatra at the time of your birth is highly significant, acting as a detailed lens into your personality and destiny.'
  },
  {
    q: 'How do Nakshatras differ from Sun Signs?',
    a: 'While your Sun Sign gives a broad overview of your personality, your Nakshatra (based on the Moon&apos;s position) provides a much more detailed, nuanced, and predictive layer of insight into your character, emotional tendencies, and karmic path.'
  },
  {
    q: 'What is a &ldquo;Birth Star&rdquo; or &ldquo;Janma Nakshatra&rdquo;?',
    a: 'It is the Nakshatra where the Moon was located at the moment of your birth. It is considered one of the most important points in the birth chart for understanding your individual nature, core motivations, and life&apos;s journey.'
  },
  {
    q: 'How many Nakshatras are there?',
    a: 'There are 27 Nakshatras, each spanning 13 degrees and 20 minutes of the zodiac. A 28th Nakshatra, Abhijit, is sometimes used for specific Muhurta (electional astrology) calculations to ensure success.'
  },
  {
    q: 'Can understanding my Nakshatra help in my practical life?',
    a: 'Absolutely. From choosing a compatible partner and a fulfilling career to selecting auspicious timings for major decisions, Nakshatra analysis provides a practical and profound toolkit for navigating life consciously and successfully.'
  },
  {
    q: 'Is Nakshatra analysis only for those who know Vedic astrology?',
    a: 'Not at all. Our expert astrologers translate the complex symbolism of the Nakshatras into clear, practical, and actionable guidance that anyone can understand and apply to their life, regardless of their prior astrological knowledge.'
  },
  {
    q: 'What is the difference between a Nakshatra&apos;s planetary ruler and its deity?',
    a: 'This is a crucial distinction. The planetary ruler (like Mars for Mrigashira) governs the Vimshottari Dasha sequence, determining the timing of life events. The deity (Soma, the Moon God, for Mrigashira) represents the &ldquo;Shakti&rdquo; or inherent power and consciousness of the Nakshatra. The deity reveals the core spiritual lesson and the nature of the results the planetary ruler will deliver during its period. Understanding both is key to a complete analysis.'
  },
  {
    q: 'Can a Nakshatra be &ldquo;bad&rdquo; or &ldquo;unlucky&rdquo;?',
    a: 'No Nakshatra is inherently &ldquo;bad.&rdquo; Vedic astrology views each one as a unique field of cosmic energy with its own strengths and challenges. Some Nakshatras, like Mula (ruled by the goddess of destruction, Nirriti), are termed &ldquo;gandanta&rdquo; or &ldquo;fierce&rdquo; and can present more intense life lessons. However, these same Nakshatras often bestow immense resilience, profound spiritual insight, and the power to overcome great obstacles. The key is to understand and consciously work with the energy, not to fear it.'
  },
  {
    q: 'How do I find my Nakshatra and what&apos;s the first step to understanding it?',
    a: 'The first step is to have a precise birth chart calculated by a professional astrologer, as it requires your exact birth time, date, and location. Your primary Nakshatra is your Janma Nakshatra (where your Moon is placed). Once you know it, begin by researching its ruling deity, its symbol, and its primary motivation (Dharma, Artha, Kama, Moksha). This will give you a foundational understanding of the core energies that drive your emotional nature and subconscious mind.'
  },
  {
    q: 'What does it mean if I have many planets in one Nakshatra?',
    a: 'Having a cluster of three or more planets in a single Nakshatra (a stellium) makes that Nakshatra&apos;s energy exceptionally powerful and focused in your life. The themes, lessons, and characteristics of that lunar mansion will become a dominant force in your personality and life story. It indicates that your soul has a very specific and concentrated karmic agenda to work through in this lifetime, related to the nature of that Nakshatra and the planets involved.'
  },
  {
    q: 'How are Nakshatras used in compatibility beyond the basic point system?',
    a: 'While the Ashtakoota (36-point) system is a popular starting point, a deep compatibility analysis goes further. An astrologer will examine the Nakshatra of the Ascendant for life path compatibility, the Moon&apos;s Nakshatra for emotional connection, and the Sun&apos;s for soul-level alignment. We also analyze how the planetary rulers of each person&apos;s Nakshatras interact and if there are any challenging placements between the two charts, providing a much more nuanced view of the relationship&apos;s strengths and weaknesses.'
  }
];

export default function NakshatraSecretsPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans pt-8 md:pt-12">
      <div className="container mx-auto pb-16 px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl bg-gradient-to-r from-[#f5f3ff] via-[#f0f5ff] to-[#eef9ff] py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-indigo-100">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Unveiling Nakshatra Secrets</h1>
          <p className="text-xl md:text-2xl text-center text-gray-700 max-w-2xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
            Explore the 27 lunar mansions that define your destiny and personality.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors font-sans ${activeTab === tab ? 'border-indigo-500 text-indigo-600 font-bold' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Overview' && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 text-lg leading-relaxed text-gray-800 space-y-6" style={{ fontFamily: 'Lora, serif', textAlign: 'justify' }}>
            <p><span className="font-bold text-indigo-900">Nakshatras</span>, the 27 lunar mansions of Vedic astrology, are the secret keys to understanding your soul&apos;s blueprint. While most are familiar with their sun sign, it is the Nakshatra in which your Moon was placed at birth that holds the most profound insights into your personality, karmic patterns, and life&apos;s purpose. This is your <span className="font-bold">Janma Nakshatra</span>, the true star of your astrological story.</p>
            <p>Each Nakshatra has its own ruling deity, planetary ruler, symbol, and set of characteristics, creating a rich tapestry of meaning that is far more specific than the twelve zodiac signs. They are the celestial markers that define the subconscious energies shaping your emotional responses, innate talents, and the very course of your destiny. To understand your Nakshatra is to understand the core programming of your mind and spirit.</p>
            <p>This page serves as your gateway to exploring these powerful cosmic forces. We delve into the significance of key Nakshatras like Ashwini, the star of healing and new beginnings, and Bharani, the star of transformation. We explore how this ancient knowledge is practically applied in critical life areas such as determining marriage compatibility through the Kuta system and selecting auspicious timings (Muhurta) for your most important endeavors.</p>
            <p>For even greater precision, each of the 27 Nakshatras is further divided into four quarters, or <span className="font-bold">Padas</span>. This creates a total of 108 padas, each linking the Nakshatra&apos;s energy to a specific sign in the Navamsha (D9) chart—the crucial divisional chart for marriage and a deeper look at one&apos;s spiritual path. Your Nakshatra Pada fine-tunes the interpretation of your chart, explaining why two people born in the same Nakshatra can have markedly different personalities and life experiences. It is this level of detail that makes Nakshatra astrology so uniquely precise.</p>
            <p>The symbolism and mythology of each Nakshatra are keys to its power. The ruling deity, or <span className="font-bold">Devata</span>, of a Nakshatra embodies its core essence and lessons. For example, Ashwini, the first Nakshatra, is ruled by the Ashvini Kumaras, the divine physicians of the gods, which is why it is associated with speed, initiation, and miraculous healing. The symbol of the Nakshatra, such as the horse&apos;s head for Ashwini, offers a visual and intuitive key to understanding its fundamental nature—in this case, signifying swift action and vitality.</p>
            <p>Nakshatras are also classified according to various universal principles, linking Vedic astrology to other ancient Indian sciences. They are categorized by the three <span className="font-bold">Gunas</span> (Sattva, Rajas, Tamas), which describe their spiritual quality and motivation. Furthermore, they are linked to the three Ayurvedic <span className="font-bold">Doshas</span> (Vata, Pitta, Kapha), connecting your astrological makeup directly to your physical and mental health constitution. This holistic framework allows for a multi-layered analysis of your psycho-physical temperament.</p>
            <p>In predictive astrology, Nakshatras are indispensable. The most widely used predictive system, the <span className="font-bold">Vimshottari Dasha</span>, is calculated directly from the position of the Moon in a specific Nakshatra at birth. This system maps out the timing of planetary periods throughout your life, predicting when specific themes will be activated and when key life events are likely to occur with astonishing accuracy. Understanding your Dasha sequence is like having a personalized timeline of your life&apos;s unfolding chapters.</p>
            <p>The practical application of Nakshatras shines brightest in the field of electional astrology, or <span className="font-bold">Muhurta</span>. Choosing the right Nakshatra for an event is paramount to its success. Some Nakshatras are classified as &ldquo;fierce&rdquo; (Ugra) and are ideal for competitive or destructive actions, while others are &ldquo;gentle&rdquo; (Mridu) and perfectly suited for artistic pursuits or romantic occasions. By aligning your actions with the cosmic energy of the prevailing Nakshatra, you can harness the universal flow to support your endeavors.</p>
            <p>Vedic astrology also identifies certain sensitive transition points in the zodiac known as <span className="font-bold">Gandanta</span>. These are junctions, particularly between water and fire signs, where a Nakshatra ends and a new one begins. Having a planet, especially the Moon or the Ascendant, placed in a Gandanta degree signifies a deep-seated karmic knot or spiritual challenge that the soul has chosen to work through in this lifetime. Identifying a Gandanta position in a chart points to an area of profound transformation and growth.</p>
            <p>Finally, Nakshatras offer a direct path to remedial measures. When a planet is afflicted in a challenging Nakshatra, Vedic wisdom provides specific remedies to harmonize its energy. These can include chanting mantras dedicated to the Nakshatra&apos;s ruling deity, worshiping the Nakshatra&apos;s symbolic tree, wearing specific colors, or performing pujas. These practices are not superstitions but are prescribed energetic tools designed to help you consciously work with and pacify difficult planetary influences, turning obstacles into opportunities for spiritual evolution.</p>
            <p>A deeper layer of compatibility analysis in relationships involves the <span className="font-bold">Yoni Kuta</span>, which assigns an animal totem to each Nakshatra. This system assesses the primal, sexual, and psychological compatibility between two individuals. A harmonious Yoni match suggests a deep, instinctual connection, while a challenging match can point to underlying friction in a partnership. It is a powerful tool for understanding the subconscious dynamics that attract or repel us from others.</p>
            <p>Beyond personality, Nakshatras are fundamental to health astrology. In the traditional eight-point compatibility test for marriage (<span className="font-bold">Ashtakoota Milan</span>), the Nadi Kuta holds the highest number of points. It classifies Nakshatras into three basic physiological types—Vata (Adi), Pitta (Madhya), and Kapha (Antya). A proper match is crucial for ensuring the health and progeny of the couple, making it a vital component of astrological matchmaking.</p>
            <p>For daily planning, Vedic astrology employs the concept of <span className="font-bold">Tarabala</span>, or &ldquo;stellar strength.&rdquo; This calculates the strength of any given day by counting the position of the transiting Moon&apos;s Nakshatra from your own birth Nakshatra. The resulting number indicates whether the day is favorable (like Sampat, wealth-giving) or unfavorable (like Vipat, dangerous) for your activities, providing a personalized daily guide to success.</p>
            <p>Within the Nakshatra belt lie hidden points of immense spiritual power known as <span className="font-bold">Pushkara Navamsha</span> and <span className="font-bold">Pushkara Bhaga</span>. These are specific degrees within certain Nakshatras that are considered exceptionally auspicious. A planet placed in a Pushkara degree in the birth chart is believed to be blessed, capable of overcoming afflictions and delivering highly positive results related to its significations. These are points where the soul receives divine nourishment and grace.</p>
            <p>While there are 27 primary Nakshatras, ancient texts speak of a 28th, intercalary Nakshatra known as <span className="font-bold">Abhijit</span>. Located between Uttara Ashadha and Shravana, it is considered a powerful, &ldquo;victorious&rdquo; constellation associated with Lord Brahma. Though not used for natal analysis, it is highly prized in Muhurta for ensuring success in critical undertakings, acting as a divine wild card to overcome obstacles.</p>
            <p>The influence of Nakshatras extends beyond personal horoscopy into <span className="font-bold">Mundane Astrology</span>—the astrology of world events. Astrologers use Nakshatras to predict weather patterns, agricultural outcomes, economic trends, and political shifts. For instance, the transit of a major malefic planet like Saturn through a particular Nakshatra can indicate periods of strife or natural calamities for the regions associated with it, showcasing the vast and versatile application of this ancient system.</p>
            <p>Each Nakshatra is also part of a larger temperament group known as <span className="font-bold">Gana</span>—Deva (divine), Manushya (human), and Rakshasa (demonic). This classification does not imply good or evil, but rather describes a person&apos;s inherent nature and worldview. Deva Gana individuals are benevolent and spiritual, Manushya Gana are pragmatic and worldly, and Rakshasa Gana possess powerful intuition and the will to challenge societal norms. Understanding your Gana provides insight into your fundamental temperament and is crucial for compatibility matching.</p>
            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-lg">
              <span className="text-indigo-600 font-medium">Key Insight:</span> Your Nakshatra is your personal lunar mansion, offering a highly detailed and accurate map to your inner world and life path.
            </div>
          </motion.div>
        )}
        {activeTab === 'Benefits' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Why Explore Your Nakshatras?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-white/70 backdrop-blur-md shadow-lg p-8 flex flex-col items-center border border-indigo-100 hover:scale-105 transition-transform duration-200"
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
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
                  <div className="flex items-start mb-2">
                    <span className="text-indigo-600 mr-3 text-2xl font-bold">&#x3f;</span>
                    <span className="font-bold text-lg text-indigo-900" style={{ fontFamily: 'Playfair Display, serif' }}>{faq.q}</span>
                  </div>
                  <p className="text-gray-800 text-justify pl-9" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        {activeTab === 'Book a Reading' && (
          <section className="mb-12">
            <div className="rounded-3xl bg-gradient-to-r from-[#eef9ff] via-[#f0f5ff] to-[#f5f3ff] p-10 shadow-xl border border-indigo-100 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-indigo-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Book a Nakshatra Reading</h2>
              <p className="text-lg text-center mb-6 text-gray-700" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
                Go beyond your sun sign. Unlock the profound wisdom of your personal Nakshatra.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl">
                {/* Form fields remain the same as they are generic for a reading */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-indigo-900 block mb-2 font-semibold">Name</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-white/80 text-indigo-900 border border-indigo-200 rounded-lg px-4 py-2 w-full" required />
                  </div>
                  <div>
                    <label className="text-indigo-900 block mb-2 font-semibold">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-white/80 text-indigo-900 border border-indigo-200 rounded-lg px-4 py-2 w-full" required />
                  </div>
                   <div>
                    <label className="text-indigo-900 block mb-2 font-semibold">Phone Number</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="bg-white/80 text-indigo-900 border border-indigo-200 rounded-lg px-4 py-2 w-full" required />
                  </div>
                  <div>
                    <label className="text-indigo-900 block mb-2 font-semibold">Date of Birth</label>
                    <input type="date" value={formData.dateOfBirth} onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})} className="bg-white/80 text-indigo-900 border border-indigo-200 rounded-lg px-4 py-2 w-full" required />
                  </div>
                  <div className="md:col-span-2">
                     <label className="text-indigo-900 block mb-2 font-semibold">Time of Birth (e.g., 03:45 PM)</label>
                    <input type="time" value={formData.timeOfBirth} onChange={(e) => setFormData({...formData, timeOfBirth: e.target.value})} className="bg-white/80 text-indigo-900 border border-indigo-200 rounded-lg px-4 py-2 w-full" required />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-indigo-900 block mb-2 font-semibold">Place of Birth (City, Country)</label>
                    <input type="text" value={formData.placeOfBirth} onChange={(e) => setFormData({...formData, placeOfBirth: e.target.value})} className="bg-white/80 text-indigo-900 border border-indigo-200 rounded-lg px-4 py-2 w-full" required />
                  </div>
                </div>
                <div>
                  <label className="text-indigo-900 block mb-2 font-semibold">Your Message or Specific Questions (Optional)</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="bg-white/80 text-indigo-900 border border-indigo-200 rounded-lg px-4 py-2 w-full h-32" />
                </div>
                <Button type="submit" className="w-full bg-indigo-700 text-white hover:bg-indigo-800 text-lg px-8 py-4 font-bold rounded-full shadow-lg transition-transform transform hover:scale-105">
                  Book Your Nakshatra Reading
                </Button>
              </form>
            </div>
          </section>
        )}

        <div className="mt-20 space-y-20">
          <DrNarendraProfile />
          <Statistics />
        </div>

        <div className="mt-20">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}