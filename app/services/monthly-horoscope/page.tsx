'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, TrendingUp, HeartHandshake, Briefcase, Shield, DollarSign, Target, Lightbulb, Star, Zap, Users, Globe, Award, Compass, Moon, Sun, Crown, Eye, Brain, Infinity, Clock, Gift, Lock, ArrowUpRight, BookOpen, Heart } from 'lucide-react';
import { DrNarendraProfile } from '../../../app/components/DrNarendraProfile';
import { ContactForm } from '../../../app/components/ContactForm';

const tabs = ['Overview', 'Benefits', 'FAQs'];

const benefits = [
    {
        icon: <CalendarDays className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Strategic Monthly Planning',
        desc: 'Gain a cosmic roadmap for the month ahead, allowing you to plan your actions for maximum success and impact.'
    },
    {
        icon: <TrendingUp className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Identify Opportunities & Trends',
        desc: 'Understand the key planetary transits and how you can leverage them to seize opportunities for growth.'
    },
    {
        icon: <HeartHandshake className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Relationship Guidance',
        desc: 'Get insights into the emotional currents of the month, helping you navigate your personal and professional relationships.'
    },
    {
        icon: <Briefcase className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Career Forecast',
        desc: 'Receive guidance on your professional life, including favorable times for projects, meetings, and career moves.'
    },
    {
        icon: <Shield className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Navigate Challenges',
        desc: 'Be forewarned about potential challenging periods or planetary conflicts, allowing you to prepare and mitigate risks.'
    },
    {
        icon: <DollarSign className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Financial Insights',
        desc: 'Understand the financial energies of the month, highlighting periods for investment, caution, and gains.'
    },
    {
        icon: <Target className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Focus on Key Life Areas',
        desc: 'Discover which areas of your life (love, work, health) will be most active, helping you direct your energy effectively.'
    },
    {
        icon: <Lightbulb className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Gain Deeper Self-Awareness',
        desc: 'Use the monthly themes as a tool for self-reflection and personal development, aligning with your spiritual path.'
    },
    {
        icon: <Star className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Planetary Transit Insights',
        desc: 'Understand how major planetary movements affect your personal chart and life areas for better decision-making.'
    },
    {
        icon: <Zap className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Energy Management',
        desc: 'Learn to work with cosmic energies rather than against them, optimizing your productivity and well-being.'
    },
    {
        icon: <Users className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Social Timing',
        desc: 'Know the best times for networking, meetings, and social interactions to maximize positive outcomes.'
    },
    {
        icon: <Globe className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Travel & Movement',
        desc: 'Identify auspicious periods for travel, relocation, and important journeys in your life.'
    },
    {
        icon: <Award className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Achievement Timing',
        desc: 'Time your goals and projects to align with favorable planetary energies for maximum success.'
    },
    {
        icon: <Compass className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Life Direction',
        desc: 'Gain clarity about your life path and make confident decisions about your future direction.'
    },
    {
        icon: <BookOpen className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Learning & Growth',
        desc: 'Identify the best periods for education, skill development, and personal growth activities.'
    }
];

const faqs = [
    {
    q: "What&apos;s the difference between a daily and monthly horoscope?",
    a: "A daily horoscope focuses on very short-term planetary movements, like the Moon&apos;s transit, offering immediate guidance. A monthly horoscope provides a broader, more strategic view, analyzing slower-moving planetary transits to identify the major themes, opportunities, and challenges for the entire month."
    },
    {
    q: 'How is a monthly horoscope calculated?',
    a: "It&apos;s based on the major planetary transits (like the Sun, Mercury, Venus, Mars) through the zodiac signs and how they interact with the placements in your personal birth chart. This provides a more in-depth and impactful forecast than generic sun-sign horoscopes."
    },
    {
    q: 'Can a monthly horoscope help me make better decisions?',
    a: 'Absolutely. By understanding the energetic landscape of the month, you can time your decisions more effectively. It helps you know when to push forward, when to wait, when to focus on career, and when to nurture relationships, leading to more conscious and successful choices.'
    },
    {
    q: 'Is this a generic or personalized report?',
    a: 'The service offered here is for a detailed, personalized monthly report. While general horoscopes exist, a personalized report is created by analyzing the monthly transits in direct relation to your unique birth chart, offering far more accurate and relevant guidance.'
    },
    {
    q: 'What information do you need for a personalized report?',
    a: "To create a personalized report, we need your full name, and your accurate date, time, and place of birth. This allows us to cast your unique birth chart, which is the foundation of the analysis."
    }
];

export default function MonthlyHoroscopePage() {
    const [activeTab, setActiveTab] = useState('Overview');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
            <div className="container mx-auto pt-8 px-4 pb-16 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Monthly Horoscope Analysis</h1>
                    <p className="text-xl md:text-2xl text-center max-w-3xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
                        Plan your month ahead with detailed astrological insights and cosmic guidance for every zodiac sign.
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
                        <p>While a daily horoscope offers a snapshot, a <span className="font-bold text-green-800">Monthly Horoscope</span> provides a panoramic view of the cosmic landscape ahead. It is an invaluable strategic tool for anyone looking to navigate their life with greater foresight and wisdom. By analyzing the slower and more impactful planetary transits over the course of the month, this analysis reveals the overarching themes, dominant energies, and significant opportunities that will shape your coming weeks. It moves beyond the immediate to give you a framework for proactive and conscious living.</p>
                        <p>Our personalized Monthly Horoscope goes deep into how major planetary movements—such as the <span className="font-bold text-green-800">Sun&apos;s journey</span> through a new sign, <span className="font-bold text-green-800">Mercury&apos;s communication cycles</span> (including retrogrades), and the dynamic shifts of <span className="font-bold text-green-800">Venus and Mars</span>—will interact with your unique birth chart. This creates a highly relevant and practical guide. We identify which houses (areas of life) in your chart will be activated, helping you understand where to focus your energy: be it career, relationships, health, or personal projects. This is not generic advice; it is a tailored cosmic weather report for your soul.</p>
                        <p>Our personalized Monthly Horoscope goes deep into how major planetary movements—such as the <span className="font-bold text-green-800">Sun&apos;s journey</span> through a new sign, <span className="font-bold text-green-800">Mercury&apos;s communication cycles</span> (including retrogrades), and the dynamic shifts of <span className="font-bold text-green-800">Venus and Mars</span>—will interact with your unique birth chart. This creates a highly relevant and practical guide. We identify which houses (areas of life) in your chart will be activated, helping you understand where to focus your energy: be it career, relationships, health, or personal projects. This is not generic advice; it is a tailored cosmic weather report for your soul.</p>
                        <p>Understanding the flow of the month empowers you to make aligned decisions. A Monthly Horoscope can highlight <span className="font-bold text-green-800">auspicious periods</span> for launching a new project, having important conversations, or making financial investments. Conversely, it can warn you of potential periods of conflict, misunderstanding, or low energy, advising you to act with more caution and patience. This knowledge transforms you from a passive recipient of fate into an active co-creator of your reality, allowing you to work with the planetary energies, not against them.</p>
                        <p>The <span className="font-bold text-green-800">planetary transits</span> that form the foundation of monthly analysis include the Sun&apos;s movement through zodiac signs (changing approximately every 30 days), Mercury&apos;s communication cycles and retrograde periods, Venus&apos;s influence on love and relationships, and Mars&apos;s impact on energy and action. Each of these planetary movements creates specific energetic themes that affect different areas of your life based on your birth chart.</p>
                        <p>The <span className="font-bold text-green-800">planetary transits</span> that form the foundation of monthly analysis include the Sun&apos;s movement through zodiac signs (changing approximately every 30 days), Mercury&apos;s communication cycles and retrograde periods, Venus&apos;s influence on love and relationships, and Mars&apos;s impact on energy and action. Each of these planetary movements creates specific energetic themes that affect different areas of your life based on your birth chart.</p>
                        <p>Beyond the major planets, we also analyze the <span className="font-bold text-green-800">lunar phases</span> and their influence on your emotional landscape throughout the month. The New Moon represents new beginnings and setting intentions, while the Full Moon brings illumination and completion. Understanding these lunar cycles helps you align your personal rhythms with the cosmic flow, enhancing your ability to manifest your desires and achieve your goals.</p>
                        <p>A Monthly Horoscope also provides insights into <span className="font-bold text-green-800">karmic lessons</span> and spiritual growth opportunities that may arise during the month. By understanding the deeper meaning behind challenging transits, you can approach difficulties with wisdom and grace, transforming obstacles into stepping stones for personal evolution. This perspective helps you maintain a positive outlook even during challenging periods.</p>
                        <p>Ultimately, a Monthly Horoscope is a guide for personal growth and empowerment. It provides a rhythm and a narrative to the month, helping you to understand the &apos;why&apos; behind the events and feelings you experience. By seeing the bigger picture, you can handle challenges with more grace, seize opportunities with more confidence, and ensure that your actions are in harmony with the celestial tides. It is an essential tool for anyone serious about living a conscious, purposeful, and successful life.</p>
                    </motion.div>
                )}

                {activeTab === 'Benefits' && (
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of a Monthly Horoscope</h2>
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