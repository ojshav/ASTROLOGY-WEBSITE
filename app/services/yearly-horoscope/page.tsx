'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, KeyRound, TrendingUp, HeartHandshake, Landmark, HeartPulse, BookUser, Milestone, Star, Zap, Users, Globe, Award, Compass, Moon, Sun, Crown, Eye, Brain, Infinity, Clock, Gift, Lock, ArrowUpRight, BookOpen, Heart, Target, Lightbulb } from 'lucide-react';
import { DrNarendraProfile } from '@/app/components/DrNarendraProfile';
import { ContactForm } from '@/app/components/ContactForm';

const tabs = ['Overview', 'Benefits', 'FAQs'];

const benefits = [
    {
        icon: <ClipboardList className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Long-Term Strategic Planning',
        desc: "Receive a high-level overview of the year's energies, perfect for setting major goals and life direction."
    },
    {
        icon: <KeyRound className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Timing for Major Life Decisions',
        desc: "Identify the most auspicious periods for significant life events like marriage, relocation, or career changes."
    },
    {
        icon: <TrendingUp className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Career Progression Path',
        desc: "Understand your professional trajectory for the year, including potential promotions, challenges, and opportunities."
    },
    {
        icon: <HeartHandshake className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Relationship Milestones',
        desc: "Forecast the key developments in your relationships, highlighting periods for harmony or potential conflict."
    },
    {
        icon: <Landmark className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Financial Planning & Investment',
        desc: "Get a yearly outlook on your finances, helping you identify favorable times for investment and wealth growth."
    },
    {
        icon: <HeartPulse className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Health & Wellness Themes',
        desc: "Become aware of potential health vulnerabilities and periods where you need to focus on well-being."
    },
    {
        icon: <BookUser className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Identifying Karmic Lessons',
        desc: "Understand the main karmic lessons Saturn and Jupiter have in store for you for the year."
    },
    {
        icon: <Milestone className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Spiritual Growth Roadmap',
        desc: "See how the year's transits will influence your spiritual journey and personal evolution."
    },
    {
        icon: <Star className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Jupiter Transit Insights',
    desc: 'Understand how Jupiter&apos;s movement through your chart affects wisdom, expansion, and spiritual growth.'
    },
    {
        icon: <Zap className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Saturn Return Guidance',
    desc: 'Navigate Saturn&apos;s return and its lessons about responsibility, discipline, and life structure.'
    },
    {
        icon: <Users className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Social & Network Expansion',
        desc: 'Identify periods for building new connections and expanding your social and professional network.'
    },
    {
        icon: <Globe className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Travel & Relocation Timing',
        desc: 'Know the best times for international travel, moving to new places, or expanding your horizons.'
    },
    {
        icon: <Award className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Recognition & Achievement',
        desc: 'Identify periods when your talents and efforts will be recognized and rewarded.'
    },
    {
        icon: <Compass className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Life Purpose Clarity',
        desc: 'Gain deeper understanding of your life mission and how to align your actions with your higher purpose.'
    },
    {
        icon: <Target className="text-indigo-400 w-8 h-8 mb-2" />,
        title: 'Goal Achievement Strategy',
        desc: 'Develop a strategic approach to achieving your major life goals based on cosmic timing.'
    }
];

const faqs = [
    {
        q: "What is a Yearly Horoscope (Varshaphala)?",
        a: "A Yearly Horoscope, or Varshaphala, is a detailed astrological forecast for a twelve-month period, typically from one birthday to the next. It's based on a solar return chart, which is a snapshot of the planets at the exact moment the Sun returns to its natal position."
    },
    {
        q: 'How is it different from a birth chart reading?',
        a: "A birth chart is the permanent blueprint of your entire life's potential. A yearly horoscope is a temporary, time-sensitive forecast that shows how the current planetary transits for a specific year will activate and influence that permanent blueprint."
    },
    {
        q: 'Which planets are most important in a yearly forecast?',
        a: "The transits of slow-moving planets like Jupiter and Saturn are most significant as they define the major, long-lasting themes of the year. The movements of Mars, Venus, and Mercury provide detail on a month-to-month basis."
    },
    {
        q: 'Can it predict specific events with exact dates?',
        a: "Astrology highlights probabilities and themes, not absolute certainties. A yearly horoscope can predict periods of high or low potential for certain events (like marriage or job change) but cannot predict the exact outcome, as your free will is always the deciding factor."
    },
    {
        q: 'How often should I get a yearly reading done?',
        a: "It is most beneficial to get a yearly reading done once a year, ideally around your birthday, as this is when your personal solar new year begins. This allows you to plan and align your goals for the coming twelve months."
    }
];

export default function YearlyHoroscopePage() {
    const [activeTab, setActiveTab] = useState('Overview');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white font-sans">
            <div className="container mx-auto pt-8 px-4 pb-16 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full rounded-3xl py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Yearly Horoscope Analysis</h1>
                    <p className="text-xl md:text-2xl text-center max-w-3xl font-sans" style={{ fontFamily: 'Open Sans, Arial, sans-serif', color: '#166534' }}>
                        Unlock your year&apos;s potential with a comprehensive astrological forecast and personalized guidance.
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
                        <p>A <span className="font-bold text-green-800">Yearly Horoscope</span>, also known in Vedic Astrology as Varshaphala, is your personal cosmic blueprint for the next twelve months. It offers a bird&apos;s-eye view of the entire year, focusing on the major life-altering transits of slow-moving planets like <span className="font-bold text-green-800">Jupiter</span> and <span className="font-bold text-green-800">Saturn</span>. Unlike daily or monthly forecasts that track immediate energies, a yearly analysis helps you understand the grand themes, major chapters, and pivotal lessons the universe has in store for you, empowering you with unparalleled strategic foresight.</p>
                        <p>This powerful forecast is based on a technique called the <span className="font-bold text-green-800">Solar Return chart</span>. This chart is cast for the exact moment the Sun returns to the precise degree it occupied at your birth, an event that happens once every year around your birthday. This &apos;solar birthday&apos; chart provides a map of your potential for the coming year. By comparing this annual chart to your natal birth chart, our astrologers can reveal which areas of your life will be highlighted for growth, which will present challenges, and where your greatest opportunities for success lie.</p>
                        <p>The calculation is an intricate process. Beyond the Solar Return chart, Vedic astrology employs the <span className="font-bold text-green-800">Tajika system</span>, which includes unique elements like the <span className="font-bold text-green-800">Muntha</span> (a point that progresses one sign per year from your Ascendant), and the Year Lord (<span className="font-bold text-green-800">Varsha Pravesh</span>). Our analysis meticulously synthesizes these elements, examining the planetary positions in the annual chart, their relationship to your natal chart, and the <span className="font-bold text-green-800">dasha</span> (planetary period) you are running. This creates a multi-layered, dynamic forecast that is far more personalized and precise than generic sun-sign predictions.</p>
                        <p>With a yearly analysis, you can confidently plan your most important life decisions. Whether you are considering a career change, getting married, starting a family, investing in property, or moving to a new country, this forecast will identify the most <span className="font-bold text-green-800">auspicious</span> and challenging periods for these significant steps. It provides you with a timeline of cosmic green lights and red flags, so you can align your ambitions with the supportive flow of planetary energy, a strategy that dramatically increases your chances of success and fulfillment.</p>
                        <p>The <span className="font-bold text-green-800">Jupiter transit</span> is particularly significant in yearly forecasts, as this planet takes approximately one year to move through each zodiac sign. When Jupiter transits through different houses in your chart, it brings expansion, wisdom, and opportunities in those life areas. Similarly, <span className="font-bold text-green-800">Saturn&apos;s movement</span> brings lessons, structure, and sometimes challenges that are essential for your growth and maturity. Understanding these major transits helps you prepare for the year ahead.</p>
                        <p>The <span className="font-bold text-green-800">Jupiter transit</span> is particularly significant in yearly forecasts, as this planet takes approximately one year to move through each zodiac sign. When Jupiter transits through different houses in your chart, it brings expansion, wisdom, and opportunities in those life areas. Similarly, <span className="font-bold text-green-800">Saturn&apos;s movement</span> brings lessons, structure, and sometimes challenges that are essential for your growth and maturity. Understanding these major transits helps you prepare for the year ahead.</p>
                        <p>Beyond the major planets, we also analyze the <span className="font-bold text-green-800">Rahu and Ketu</span> transits, which can bring sudden changes and karmic lessons. The <span className="font-bold text-green-800">Mars transit</span> influences your energy levels and action-oriented activities, while <span className="font-bold text-green-800">Venus transits</span> affect your relationships and creative pursuits. By understanding how all these planetary movements interact, we create a comprehensive picture of your year&apos;s potential.</p>
                        <p>Ultimately, the Yearly Horoscope is the ultimate tool for conscious co-creation. It is a guide that illuminates your path, revealing the mountains you will be asked to climb and the green valleys where you can rest and prosper. Armed with this knowledge, you can navigate challenges with wisdom and grace, seize opportunities with confidence, and live the year with a profound sense of purpose and alignment. It is your strategic advantage for making the next twelve months your most successful and transformative year yet.</p>
                    </motion.div>
                )}

                {activeTab === 'Benefits' && (
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-indigo-900 mb-8 border-b pb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of a Yearly Horoscope</h2>
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