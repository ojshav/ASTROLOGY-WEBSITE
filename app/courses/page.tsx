'use client';

import Link from 'next/link';
import { GraduationCap, BookOpen, Star, BarChart, Users, Zap, ShieldCheck } from 'lucide-react';
import { DrNarendraProfile } from '../components/DrNarendraProfile';
import { FAQSection } from '../components/FAQSection';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/useLanguage';
import { motion } from 'framer-motion';

export default function CoursesPage() {
  const { t } = useLanguage();

  const courses = [
    {
      title: t('courses.courses.0.title'),
      slug: 'vedic-astrology-mastery',
      description: t('courses.courses.0.description'),
      icon: BookOpen,
      iconBg: 'bg-purple-400',
      tags: [t('courses.courses.0.tags.0'), t('courses.courses.0.tags.1'), t('courses.courses.0.tags.2')],
    },
    {
      title: t('courses.courses.1.title'),
      slug: 'numerology-cosmic-codes',
      description: t('courses.courses.1.description'),
      icon: BarChart,
      iconBg: 'bg-purple-400',
      tags: [t('courses.courses.1.tags.0')],
    },
    {
      title: t('courses.courses.2.title'),
      slug: 'art-of-palmistry',
      description: t('courses.courses.2.description'),
      icon: Zap,
      iconBg: 'bg-purple-400',
      tags: [t('courses.courses.2.tags.0'), t('courses.courses.2.tags.1')],
    },
    {
      title: t('courses.courses.3.title'),
      slug: 'tarot-reading-modern-mystic',
      description: t('courses.courses.3.description'),
      icon: Star,
      iconBg: 'bg-purple-400',
      tags: [t('courses.courses.3.tags.0')],
    },
    {
      title: t('courses.courses.4.title'),
      slug: 'advanced-predictive-astrology',
      description: t('courses.courses.4.description'),
      icon: GraduationCap,
      iconBg: 'bg-purple-400',
      tags: [t('courses.courses.4.tags.0')],
    },
    {
      title: t('courses.courses.5.title'),
      slug: 'vaastu-shastra-harmony',
      description: t('courses.courses.5.description'),
      icon: ShieldCheck,
      iconBg: 'bg-purple-400',
      tags: [t('courses.courses.5.tags.0')],
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: t('courses.benefits.0.title'),
      description: t('courses.benefits.0.description')
    },
    {
      icon: BookOpen,
      title: t('courses.benefits.1.title'),
      description: t('courses.benefits.1.description')
    },
    {
      icon: Star,
      title: t('courses.benefits.2.title'),
      description: t('courses.benefits.2.description')
    },
    {
      icon: Zap,
      title: t('courses.benefits.3.title'),
      description: t('courses.benefits.3.description')
    }
  ];

  return (
    <div style={{ background: '#F8FAF5', minHeight: '100vh' }} className="pt-8">
      {/* New Banner */}
      <div className="w-full rounded-3xl bg-white py-12 px-4 md:px-16 mb-12 flex flex-col items-center justify-center shadow-md border border-amber-200 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 text-center drop-shadow-lg tracking-tight">
          Our Astrology Courses
        </h1>
        <p className="text-lg md:text-2xl text-black text-center max-w-3xl leading-relaxed">
          Learn from the best astrologers and master the science of the stars.
        </p>
      </div>

      {/* Courses Grid */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-black text-4xl font-bold text-center mb-12 text-black">Course Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-3xl bg-white shadow-md p-8 flex flex-col items-start justify-between min-h-[340px]`}
              >
                <div className="relative w-full aspect-[16/9] rounded-t-3xl overflow-hidden mb-6">
                  <img src="/placeholder.jpg" alt={course.title} className="w-full h-full object-cover rounded-t-3xl" />
                </div>
                <div className="mb-4 p-3 rounded-full bg-[#F6F5EF]">
                  <course.icon className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-black">{course.title}</h3>
                <p className="text-black mb-4 flex-grow">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-gray-200 text-gray-800 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <Link href={`/courses/${course.slug}`} className="w-full">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="w-full relative"
                  >
                    <button 
                      className="w-full relative text-white font-semibold py-3 px-6 rounded-lg cursor-pointer border-2 border-transparent bg-clip-padding transition-all duration-200 group"
                      style={{
                        background: `
                          linear-gradient(#000000, #000000),
                          linear-gradient(#000000 50%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0)),
                          linear-gradient(90deg, #FF6D1B, #FFEE55, #5BFF89, #4D8AFF, #6B5FFF, #FF64F9, #FF6565)
                        `,
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box, border-box',
                        backgroundSize: '100%, 100%, 200%',
                        animation: 'gradientShift 3s infinite linear'
                      }}
                    >
                      <span className="relative z-10">
                        {t('courses.courses.enrollButton')}
                      </span>
                      
                      {/* Glowing effect */}
                      <div 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3/5 h-2 z-0 rounded-full opacity-60 blur-md group-hover:opacity-80 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(90deg, #FF6D1B, #FFEE55, #5BFF89, #4D8AFF, #6B5FFF, #FF64F9, #FF6565)',
                          backgroundSize: '200%',
                          animation: 'gradientShift 3s infinite linear'
                        }}
                      />
                    </button>
                    
                    <style jsx>{`
                      @keyframes gradientShift {
                        0% { background-position: 0% 50%; }
                        100% { background-position: 200% 50%; }
                      }
                      
                      button:hover {
                        animation: gradientShift 0.8s infinite linear !important;
                      }
                      
                      button:hover div {
                        animation: gradientShift 0.8s infinite linear !important;
                      }
                    `}</style>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn With Us Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-black text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Georgia, serif' }}>{t('courses.why.heading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.button
                key={index}
                type="button"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.04, y: -4, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
                className="text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-lg flex flex-col items-center cursor-pointer focus:outline-none transition-transform"
                tabIndex={0}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#F6F5EF] rounded-full">
                    <benefit.icon className="w-8 h-8 text-gray-800" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Profile */}
      <section className="py-20">
        <DrNarendraProfile />
      </section>
      
      {/* FAQ Section */}
       <section className="py-20">
        <div className="container mx-auto px-4">
           <FAQSection />
        </div>
      </section>

    </div>
  );
}
