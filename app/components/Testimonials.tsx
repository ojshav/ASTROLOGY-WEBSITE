'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { useLanguage } from '../contexts/useLanguage'
import Link from 'next/link'

interface Testimonial {
  name: string;
  occupation: string;
  image: string;
  text: string;
  rating: number;
  type: 'quote_top' | 'avatar_top' | 'simple_with_stars' | 'large_avatar_quote';
  productUrl?: string;
}

const testimonialTypes: Array<'quote_top' | 'avatar_top' | 'simple_with_stars' | 'large_avatar_quote'> = [
  'quote_top',
  'avatar_top',
  'avatar_top',
  'simple_with_stars',
  'avatar_top',
  'large_avatar_quote',
  'simple_with_stars',
  'avatar_top',
  'quote_top'
];

const testimonialImages = [
  // Use a real product image from Cloudinary for the first testimonial
  "https://res.cloudinary.com/dxwspucxw/image/upload/v1752049127/gemstones_wztxzb.jpg",
  "/images/placeholder_female.webp",
  "/images/placeholder_couple.webp",
  "/images/placeholder_male.webp",
  "/images/placeholder_female.webp",
  "/images/placeholder_male.webp",
  "/images/placeholder_female.webp",
  "/images/placeholder_male.webp",
  "/images/placeholder_female.webp",
];

const testimonialRatings = [5, 5, 4, 5, 5, 4, 4, 5, 5];

// Add productUrl to the first testimonial as an example
const testimonialProductUrls = [
  "/shop/product/gemstone-1", // Example product URL for the first testimonial
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

export const pastelColors = [
  'bg-[#FDE2E4]', // light pink
  'bg-[#E4F0D0]', // mint green
  'bg-[#E0F4FD]', // baby blue
  'bg-[#F6EAC2]', // soft yellow
  'bg-[#F5E0FF]', // lavender
  'bg-[#E9F7EF]', // light teal
  'bg-[#FFF4E6]', // soft orange
  'bg-[#E8EAF6]', // lilac gray
]

export function Testimonials() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)

  // Restore getTestimonials function
  const getTestimonials = (): Testimonial[] => {
    const testimonialsData = [];
    for (let i = 0; i < 9; i++) {
      const testimonialKey = `testimonials.testimonials.${i}`;
      const name = t(`${testimonialKey}.name`);
      const occupation = t(`${testimonialKey}.occupation`);
      const text = t(`${testimonialKey}.text`);
      testimonialsData.push({
        name,
        occupation,
        image: testimonialImages[i],
        text,
        rating: testimonialRatings[i],
        type: testimonialTypes[i],
        productUrl: testimonialProductUrls[i],
      });
    }
    return testimonialsData;
  };

  const testimonials = getTestimonials();
  const total = testimonials.length;

  // Animation variants for slide/fade
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    }),
  };
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + total) % total);
  };

  const testimonial = testimonials[current];

  return (
    <section className="relative w-full min-h-[60vh] bg-white overflow-hidden py-10 md:py-12 lg:py-16 flex flex-col items-center justify-center px-4 md:px-6 lg:px-0">
      <div className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full mb-4 flex flex-col items-center"
        >
          <div className="w-full rounded-3xl py-7 md:py-8 lg:py-10 px-2 sm:px-4 md:px-8 lg:px-16 mb-8 md:mb-10 lg:mb-12 flex flex-col items-center justify-center shadow-md border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-black mb-3 md:mb-4 text-center drop-shadow-lg tracking-tight">
              {t('testimonials.heading') || 'Client Reviews'}
            </h1>
            <p className="text-base xs:text-lg md:text-xl lg:text-2xl text-center max-w-2xl md:max-w-3xl" style={{ color: '#166534' }}>
              {t('testimonials.subheading') || 'Read what our clients say about their experiences with our astrology services.'}
            </p>
          </div>
        </motion.div>
        <div className="relative w-full flex items-center justify-center">
          {/* Left Arrow for all views, styled for mobile/tablet/desktop */}
          <div className="absolute -left-12 md:-left-8 lg:-left-20 z-10 flex items-center h-full">
            <button
              aria-label="Previous testimonial"
              onClick={() => paginate(-1)}
              className="flex md:hidden h-10 w-10 rounded-full bg-gray-300 hover:bg-gray-400 shadow items-center justify-center transition-all mx-2"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              aria-label="Previous testimonial"
              onClick={() => paginate(-1)}
              className="hidden md:flex h-11 w-11 lg:h-12 lg:w-12 rounded-full bg-gray-300 hover:bg-gray-400 shadow items-center justify-center transition-all"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg width="26" height="26" className="lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
            </button>
          </div>
          {/* Testimonial Card with swipe enabled for mobile */}
          <div className="w-full md:w-[800px] lg:w-[1000px] min-h-[650px] md:min-h-[550px] lg:min-h-[650px] bg-[#f7f7f7] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden items-stretch mx-4 md:mx-2 lg:mx-0">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="flex-1 flex flex-col justify-center px-6 md:px-8 lg:px-10 py-24 md:py-16 lg:py-32 md:pr-0 md:pl-12 lg:pl-20"
                style={{ minWidth: 0 }}
                drag={typeof window !== 'undefined' && window.innerWidth < 768 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (window.innerWidth < 768) {
                    if (info.offset.x < -80) {
                      paginate(1);
                    } else if (info.offset.x > 80) {
                      paginate(-1);
                    }
                  }
                }}
              >
                <div className="flex flex-col h-full justify-center">
                  <div className="flex items-center mb-6">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-2xl md:text-2xl lg:text-3xl font-serif font-medium text-black leading-relaxed mb-8 md:mb-6 lg:mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-16 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-black text-lg md:text-base lg:text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>{testimonial.name}</div>
                      <div className="text-gray-600 font-medium text-sm md:text-sm lg:text-base">{testimonial.occupation}</div>
                    </div>
                  </div>
                  {testimonial.productUrl && (
                    <div className="mt-6">
                      <Link href={testimonial.productUrl} className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                        View Product →
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Right Arrow for all views, styled for mobile/tablet/desktop */}
          <div className="absolute -right-12 md:-right-8 lg:-right-20 z-10 flex items-center h-full">
            <button
              aria-label="Next testimonial"
              onClick={() => paginate(1)}
              className="flex md:hidden h-10 w-10 rounded-full bg-gray-300 hover:bg-gray-400 shadow items-center justify-center transition-all mx-2"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => paginate(1)}
              className="hidden md:flex h-11 w-11 lg:h-12 lg:w-12 rounded-full bg-gray-300 hover:bg-gray-400 shadow items-center justify-center transition-all"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg width="26" height="26" className="lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 md:mt-6 lg:mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${index === current ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
