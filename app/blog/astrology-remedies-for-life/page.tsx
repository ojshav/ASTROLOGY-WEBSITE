"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FaPrayingHands, FaGem, FaBurn, FaHandsHelping, FaSeedling, FaShieldAlt, FaSun, FaDonate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { DrNarendraProfile } from '../../components/DrNarendraProfile';
import { Statistics } from '../../components/Statistics';
import { ContactForm } from '../../components/ContactForm';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const tabs = ['Overview', 'Benefits', 'FAQs', 'Book a Consultation'];

export default function AstrologicalRemediesPage() {
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-green-50 to-white font-sans pt-2 md:pt-4">
      <div className="container mx-auto pb-16 px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl bg-gradient-to-r from-[#f0fff4] via-[#f5fff5] to-[#f0fff9] py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-green-100">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Astrological Remedies for Life</h1>
          <p className="text-xl md:text-2xl text-center text-gray-700 max-w-2xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
            Harmonize planetary energies and overcome life&apos;s challenges with time-tested Vedic solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-3xl font-bold text-green-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Understanding Astrological Remedies</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                  Astrological remedies are ancient Vedic practices designed to harmonize planetary energies and mitigate life&apos;s challenges. These time-tested solutions work by creating specific energetic vibrations that counteract negative planetary influences or amplify positive ones.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                  Based on your unique birth chart, remedies can include wearing specific gemstones, chanting mantras, performing rituals, practicing charity, and making lifestyle adjustments. The key is personalization - what works for one person may not work for another.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                  These remedies don&apos;t change your destiny but provide you with the wisdom and strength to navigate your karmic path more gracefully, transforming challenges into opportunities for growth.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-lg">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.7 }}
                    className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl border border-green-200"
                  >
                    <img 
                      src="https://res.cloudinary.com/dxwspucxw/image/upload/v1754641601/astrology_remedy_jsighf.jpg" 
                      alt="Astrological Remedies" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-green-900 mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Why Choose Our Remedies?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaShieldAlt className="text-green-600 w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-green-900 mb-2">Personalized Approach</h4>
                  <p className="text-gray-700">Every remedy is tailored to your unique birth chart and specific life challenges.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaSun className="text-green-600 w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-green-900 mb-2">Ancient Wisdom</h4>
                  <p className="text-gray-700">Based on thousands of years of Vedic astrological knowledge and practice.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaHandsHelping className="text-green-600 w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-green-900 mb-2">Proven Results</h4>
                  <p className="text-gray-700">Time-tested solutions that have helped countless individuals overcome life&apos;s obstacles.</p>
                </div>
              </div>
            </div>

            <Statistics />
          </motion.div>
        )}

        {activeTab === 'Benefits' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-green-400 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">Mitigate Malefic Influences</h3>
                <p className="text-gray-700">Pacify challenging planetary placements in your chart to reduce obstacles and promote smoother life progress.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <FaSun className="text-yellow-400 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">Strengthen Benefic Planets</h3>
                <p className="text-gray-700">Amplify the positive effects of well-placed planets to enhance luck, opportunities, and overall well-being.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <FaHandsHelping className="text-rose-400 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">Resolve Specific Life Issues</h3>
                <p className="text-gray-700">Receive targeted remedies for specific problems related to career, relationships, health, or finances.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <FaGem className="text-cyan-400 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">Harness Gemstone Power</h3>
                <p className="text-gray-700">Learn which specific gemstones can be worn to balance your energies, protect you from negativity, and attract prosperity.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <FaPrayingHands className="text-indigo-400 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">Empower with Mantras</h3>
                <p className="text-gray-700">Utilize the vibrational power of personalized mantras to connect with planetary deities and align your intentions with cosmic forces.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <FaDonate className="text-orange-400 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">Karmic Healing through Charity</h3>
                <p className="text-gray-700">Understand how specific acts of charity (Daan) related to different planets can help resolve past karmic imbalances.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <FaBurn className="text-red-500 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">Purify with Rituals (Yagyas)</h3>
                <p className="text-gray-700">Leverage ancient fire ceremonies and rituals to cleanse your aura and create a sacred space for positive transformation.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <FaSeedling className="text-lime-500 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">Improve Health & Vitality</h3>
                <p className="text-gray-700">Apply astrological remedies related to diet, lifestyle, and herbs to support your physical and mental health based on your chart.</p>
              </div>
            </div>
          </motion.div>
        )}
        {activeTab === 'FAQs' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-green-700 text-left">What are astrological remedies?</AccordionTrigger>
                <AccordionContent className="pt-4 text-gray-600 text-base md:text-lg" style={{ fontFamily: 'Lora, serif' }}>
                  Astrological remedies are a set of ancient practices prescribed in Vedic texts designed to pacify or strengthen planetary energies in one&apos;s life. They are therapeutic measures used to alleviate challenges and enhance positive outcomes based on an individual&apos;s unique birth chart.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-green-700 text-left">How do remedies work?</AccordionTrigger>
                <AccordionContent className="pt-4 text-gray-600 text-base md:text-lg" style={{ fontFamily: 'Lora, serif' }}>
                  Remedies work on the principle of resonance and karmic adjustment. Practices like chanting mantras, wearing gemstones, or performing charity create specific energetic vibrations that counteract negative planetary influences or amplify positive ones. They are tools to help consciously re-align your energy with a more favorable cosmic flow.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-green-700 text-left">Is it necessary to spend a lot of money on remedies?</AccordionTrigger>
                <AccordionContent className="pt-4 text-gray-600 text-base md:text-lg" style={{ fontFamily: 'Lora, serif' }}>
                  Not at all. While some remedies like high-quality gemstones or elaborate Yagyas can be an investment, many of the most powerful remedies are free. These include chanting specific mantras, fasting on certain days, offering water to celestial bodies, and performing simple acts of service and charity. The sincerity and consistency of the practice are more important than the cost.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-green-700 text-left">Can anyone perform these remedies?</AccordionTrigger>
                <AccordionContent className="pt-4 text-gray-600 text-base md:text-lg" style={{ fontFamily: 'Lora, serif' }}>
                  Yes, most simple remedies can be performed by anyone. However, it is crucial that they are recommended by a qualified astrologer based on a thorough analysis of your birth chart. Performing the wrong remedy can be ineffective or, in some cases, even counterproductive. Personalization is key.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-md px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-green-700 text-left">Can I perform remedies for future problems?</AccordionTrigger>
                <AccordionContent className="pt-4 text-gray-600 text-base md:text-lg" style={{ fontFamily: 'Lora, serif' }}>
                  Absolutely. One of the primary purposes of Vedic astrology is proactive guidance. By identifying potential future challenges in the birth chart, an astrologer can prescribe preemptive remedies to mitigate their impact long before they manifest, allowing for a smoother life journey.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-lg shadow-md px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-green-700 text-left">Can I do remedies for someone else, like my child or spouse?</AccordionTrigger>
                <AccordionContent className="pt-4 text-gray-600 text-base md:text-lg" style={{ fontFamily: 'Lora, serif' }}>
                  Yes, certain remedies, especially prayers, pujas, and acts of charity (Daan), can be performed by close family members on behalf of another. The intention (Sankalpa) is key. However, remedies involving wearing something on the body, like a gemstone or Rudraksha, must be done by the individual themselves.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-lg shadow-md px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-green-700 text-left">What if I can&apos;t afford expensive gemstones? Are there effective, low-cost remedies?</AccordionTrigger>
                <AccordionContent className="pt-4 text-gray-600 text-base md:text-lg" style={{ fontFamily: 'Lora, serif' }}>
                  Definitely. Vedic astrology offers a vast range of remedies for every budget. Mantra chanting, fasting on specific days, offering water (Arghya), selfless service (Seva), and lifestyle changes are incredibly powerful and completely free. The sincerity and consistency of the practice are more important than the monetary cost.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-white rounded-lg shadow-md px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-green-700 text-left">How do I know if a remedy is working?</AccordionTrigger>
                <AccordionContent className="pt-4 text-gray-600 text-base md:text-lg" style={{ fontFamily: 'Lora, serif' }}>
                  The effects are often subtle at first. Look for signs of inner change: increased mental peace, a more positive outlook, and feeling more &apos;in flow&apos;. Externally, you may notice that obstacles seem to dissolve more easily, and new opportunities begin to appear. It&apos;s a gradual shift, not an overnight miracle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9" className="bg-white rounded-lg shadow-md px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-green-700 text-left">Can remedies change my destiny completely?</AccordionTrigger>
                <AccordionContent className="pt-4 text-gray-600 text-base md:text-lg" style={{ fontFamily: 'Lora, serif' }}>
                  Remedies don&apos;t erase karma, but they can significantly change how you experience it. They provide the wisdom and strength to navigate your karmic path gracefully. Think of it like this: you can&apos;t change the cards you were dealt, but remedies teach you how to play your hand masterfully, drastically improving the outcome of the game.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10" className="bg-white rounded-lg shadow-md px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-green-700 text-left">Why is a qualified astrologer necessary for prescribing remedies?</AccordionTrigger>
                <AccordionContent className="pt-4 text-gray-600 text-base md:text-lg" style={{ fontFamily: 'Lora, serif' }}>
                  A birth chart is a complex document. An experienced astrologer can analyze the intricate planetary relationships to pinpoint the true source of a problem. Prescribing the wrong remedy, like strengthening a planet that should be pacified, can be ineffective or even counterproductive. Professional guidance ensures the remedy is safe, appropriate, and powerful.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        )}
        {activeTab === 'Book a Consultation' && (
          <section className="mb-12">
            <div className="rounded-3xl bg-gradient-to-r from-[#f0fff4] via-[#f5fff5] to-[#f0fff9] p-10 shadow-xl border border-green-100 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-green-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Get Your Personalized Remedies</h2>
              <p className="text-lg text-center mb-6 text-gray-700" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
                Consult with our expert astrologer to receive a personalized remedy plan based on your birth chart.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-green-900 block mb-2 font-semibold">Name</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-white/80 text-green-900 border border-green-200 rounded-lg px-4 py-2 w-full" required />
                  </div>
                  <div>
                    <label className="text-green-900 block mb-2 font-semibold">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-white/80 text-green-900 border border-green-200 rounded-lg px-4 py-2 w-full" required />
                  </div>
                   <div>
                    <label className="text-green-900 block mb-2 font-semibold">Phone Number</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="bg-white/80 text-green-900 border border-green-200 rounded-lg px-4 py-2 w-full" required />
                  </div>
                  <div>
                    <label className="text-green-900 block mb-2 font-semibold">Date of Birth</label>
                    <input type="date" value={formData.dateOfBirth} onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})} className="bg-white/80 text-green-900 border border-green-200 rounded-lg px-4 py-2 w-full" required />
                  </div>
                  <div className="md:col-span-2">
                     <label className="text-green-900 block mb-2 font-semibold">Time of Birth (e.g., 03:45 PM)</label>
                    <input type="time" value={formData.timeOfBirth} onChange={(e) => setFormData({...formData, timeOfBirth: e.target.value})} className="bg-white/80 text-green-900 border border-green-200 rounded-lg px-4 py-2 w-full" required />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-green-900 block mb-2 font-semibold">Place of Birth (City, Country)</label>
                    <input type="text" value={formData.placeOfBirth} onChange={(e) => setFormData({...formData, placeOfBirth: e.target.value})} className="bg-white/80 text-green-900 border border-green-200 rounded-lg px-4 py-2 w-full" required />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-green-900 block mb-2 font-semibold">Message (Optional)</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="bg-white/80 text-green-900 border border-green-200 rounded-lg px-4 py-2 w-full h-32 resize-none" placeholder="Tell us about your specific concerns or questions..." />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg">
                  Book Consultation
                </Button>
              </form>
            </div>
          </section>
        )}
      </div>
      <ContactForm />
    </div>
  );
} 