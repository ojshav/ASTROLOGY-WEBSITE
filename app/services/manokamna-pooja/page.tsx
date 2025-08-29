'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Heart, Briefcase, Home, Shield, BookOpen, HeartHandshake, Star, Zap, Users, Globe, Award, Compass, Target, Lightbulb, Moon, Sun, Crown, Eye, Brain, Infinity, Calendar, Gift, Lock, ArrowUpRight } from 'lucide-react';
import { DrNarendraProfile } from '../../../app/components/DrNarendraProfile';
import { ContactForm } from '../../../app/components/ContactForm';

const tabs = ['Overview', 'Benefits', 'FAQs'];

const benefits = [
    {
        icon: <Sparkles className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Fulfill Core Desires',
        desc: 'Manifest your most cherished heartfelt wishes, whether for love, career, or personal well-being, through divine blessings.'
    },
    {
        icon: <TrendingUp className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Success in New Ventures',
        desc: 'Remove obstacles and attract good fortune for new businesses, projects, or important undertakings.'
    },
    {
        icon: <Heart className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Attract a Life Partner',
        desc: 'Enhance your magnetism and create favorable circumstances to meet a compatible and loving partner.'
    },
    {
        icon: <Briefcase className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Achieve Career Growth',
        desc: 'Overcome professional stagnation, gain recognition from superiors, and open doors for promotions.'
    },
    {
        icon: <Home className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Acquire Property & Vehicles',
        desc: 'Clear blockages related to the purchase of a new home, land, or vehicle, smoothing the path to acquisition.'
    },
    {
        icon: <Shield className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Protection from Negative Energies',
        desc: 'Create a shield of divine protection against jealousy, hidden enemies, and negative intentions.'
    },
    {
        icon: <BookOpen className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Success in Examinations',
        desc: 'Improve focus, memory, and confidence to achieve excellent results in academic and competitive exams.'
    },
    {
        icon: <HeartHandshake className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Resolve Family Disputes',
        desc: 'Foster love, understanding, and harmony within the family, helping to heal rifts and disagreements.'
    },
    {
        icon: <Star className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Spiritual Growth',
        desc: 'Deepen your spiritual connection and gain inner peace through divine blessings and sacred rituals.'
    },
    {
        icon: <Zap className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Energy Activation',
        desc: 'Activate your dormant energies and unlock your full potential for success and fulfillment.'
    },
    {
        icon: <Users className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Social Recognition',
        desc: 'Gain respect and recognition in your social circle and professional community.'
    },
    {
        icon: <Globe className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Travel Opportunities',
        desc: 'Open doors for travel, relocation, and new experiences that align with your desires.'
    },
    {
        icon: <Award className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Achievement Unlocked',
        desc: 'Break through limitations and achieve goals that previously seemed impossible.'
    },
    {
        icon: <Compass className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Life Direction',
        desc: 'Find clarity about your life path and make confident decisions about your future.'
    },
    {
        icon: <Target className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Goal Manifestation',
        desc: 'Transform your dreams into reality through focused intention and divine assistance.'
    }
];

const faqs = [
    {
        q: 'What is a Manokamna Siddhi Puja?',
        a: "Manokamna Siddhi Puja is a highly potent Vedic ritual performed to fulfill a specific, heartfelt desire ('Manokamna'). It involves invoking powerful deities associated with wish-fulfillment, making offerings, and chanting specific mantras to manifest the desired outcome."
    },
    {
        q: 'Can I request a puja for any desire?',
        a: "You can request a puja for any positive, ethical, and righteous desire. This includes wishes related to career, marriage, health, finances, and family well-being. The puja is an appeal for divine assistance, so the intention must be pure."
    },
    {
        q: 'Which deities are worshipped in this puja?',
        a: "The primary deities depend on the specific wish. Commonly, Lord Ganesha (remover of obstacles), Goddess Lakshmi (for prosperity), Goddess Durga (for power and protection), or Lord Shiva (for overall well-being) are invoked, often along with specific planetary deities."
    },
    {
        q: 'How is the puja personalized for my specific wish?',
        a: "The 'Sankalpa' (statement of intent) is the most crucial part. Before the puja begins, the priest will take a Sankalpa in your name, clearly stating your full name, birth details, and the specific desire you wish to fulfill. This directs the puja's energy towards your goal."
    },
    {
        q: 'Do I need to be physically present for the puja?',
        a: "No, physical presence is not mandatory. Our expert priests can perform the entire ritual on your behalf. The energetic benefits and blessings are transmitted to you through the power of the Sankalpa, regardless of your location."
    }
];

export default function ManokamnaPujaPage() {
    const [activeTab, setActiveTab] = useState('Overview');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
            <div className="container mx-auto pt-8 px-4 pb-16 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Manokamna Siddhi Puja</h1>
                    <p className="text-xl md:text-2xl text-center max-w-3xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
                        Invoke Divine Blessings to Manifest Your Deepest, Heartfelt Desires with the Sacred Wish-Fulfillment Puja.
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
                        <p>Every human heart holds a garden of secret wishes and profound desires—aspirations for love, success, health, and happiness. In the Vedic tradition, it is believed that sincere, righteous desires are a divine spark within us, guiding us toward our life&apos;s purpose. The <span className="font-bold text-green-800">Manokamna Siddhi Puja</span> is a sacred and powerful ritual specifically designed to bridge the gap between human aspiration and divine grace. &apos;Manokamna&apos; means &apos;heart&apos;s desire&apos; and &apos;Siddhi&apos; means &apos;fulfillment&apos; or &apos;attainment&apos;. This puja is a direct appeal to the cosmos, a concentrated prayer to manifest a specific, heartfelt wish.</p>
                        <p>The principle behind this puja is the concentration of cosmic energy towards a singular, focused goal. It operates on the law of attraction, amplified by sacred Vedic technology. The process begins with a <span className="font-bold text-green-800">Sankalpa</span>, a sacred vow taken by the priest on behalf of the individual. In this Sankalpa, your name, gotra (lineage), and the specific wish are clearly articulated. This act of intention-setting is crucial, as it directs the energy of the entire ritual towards your personal goal. It is like programming a divine computer with the explicit details of your request, ensuring the universal energies know exactly where to deliver the blessings.</p>
                        <p>The puja involves the worship of specific deities known for their ability to grant boons and remove obstacles. <span className="font-bold text-green-800">Lord Ganesha</span> is almost always invoked first to clear any impediments in the path of the desire&apos;s fulfillment. Depending on the nature of the wish, other deities like <span className="font-bold text-green-800">Goddess Lakshmi</span> (for wealth and prosperity), <span className="font-bold text-green-800">Goddess Durga</span> or <span className="font-bold text-green-800">Lord Hanuman</span> (for courage and protection), <span className="font-bold text-green-800">Saraswati</span> (for knowledge and success in exams), or <span className="font-bold text-green-800">Shiva and Parvati</span> (for marital harmony) are worshipped with their specific mantras, stotras, and offerings.</p>
                        <p>A Manokamna Siddhi Puja is not merely a passive request; it is an active process of aligning your own energy with your desire. The <span className="font-bold text-green-800">faith</span>, <span className="font-bold text-green-800">devotion</span>, and <span className="font-bold text-green-800">sincerity</span> of the person for whom the puja is being performed are paramount. While the priests perform the intricate rituals, your own focused intention and belief create a powerful magnetic field that helps draw the desired outcome into your reality. It is a co-creative process between you, the priest, and the divine, working in synergy to turn a deeply held wish into a tangible reality.</p>
                        <p>The effectiveness of the puja depends on several factors, including the <span className="font-bold text-green-800">timing</span> chosen for the ritual, the <span className="font-bold text-green-800">purity of intention</span>, and the <span className="font-bold text-green-800">karmic alignment</span> of the desire. We carefully select auspicious timings based on your birth chart and the nature of your wish, ensuring that the cosmic energies are most favorable for manifestation. The ritual is performed with complete devotion and precision, following ancient Vedic protocols that have been perfected over thousands of years.</p>
                        <p>Beyond the immediate ritual, the puja creates a lasting <span className="font-bold text-green-800">energetic shift</span> in your life. It removes obstacles, clears negative karma, and opens new pathways for your desires to manifest. The effects are not limited to the specific wish mentioned in the Sankalpa; they often extend to related areas of life, creating a ripple effect of positive change. For example, a puja for career success might also improve relationships, health, and overall life satisfaction as the positive energies flow through all aspects of your being.</p>
                        <p>Our experienced priests have performed countless Manokamna Siddhi Pujas with remarkable success rates. They understand the subtle nuances of intention-setting and can guide you in formulating your wish in the most effective way. Whether your desire is related to <span className="font-bold text-green-800">love and relationships</span>, <span className="font-bold text-green-800">career and business</span>, <span className="font-bold text-green-800">health and well-being</span>, or <span className="font-bold text-green-800">spiritual growth</span>, this powerful ritual can help you manifest your deepest aspirations and create the life you truly desire.</p>
                    </motion.div>
                )}

                {activeTab === 'Benefits' && (
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of Manokamna Siddhi Puja</h2>
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