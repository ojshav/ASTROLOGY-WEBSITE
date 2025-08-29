"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { notFound } from 'next/navigation';
import { FaClock, FaStar, FaVideo, FaShoppingCart, FaShieldAlt, FaRegStar, FaRegLightbulb, FaRegSmile, FaRegHeart, FaRegComments, FaRegSun, FaRegGem } from 'react-icons/fa';
import { services, getServiceBySlug } from '@/data/services';
import { UniversalCartButton } from '@/app/components/UniversalCartButton';
import ProductAssuranceBar from '@/app/components/ProductAssuranceBar';
import ServiceCarousels from '@/app/components/ServiceCarousels';
import NakshatraGyaanBanner from '@/app/components/NakshatraGyaanBanner';
import SpiritualJourneyBanner from '@/app/components/SpiritualJourneyBanner';
import { Testimonials } from '@/app/components/Testimonials';
import { AboutSummary } from '@/app/components/AboutSummary';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/app/contexts/useLanguage';
import { CTASection } from '@/app/components/CTASection';
import RelatedServices from '@/app/components/RelatedServices';
import Link from 'next/link';

// Define Service interface
interface Service {
  id: string;
  title: string;
  description: string;
  slug: string;
  price: number;
  originalPrice?: number;
  duration: string;
  consultationType: string;
  features?: string[];
  images?: string[];
  category?: string;
}

// Generic FAQs for services
const getServiceFaqs = (service: Service) => [
  {
    question: `What is ${service.title} and what are its benefits?`,
    answer: `${service.title} is ${service.description}. This consultation provides personalized guidance based on ancient Vedic astrology principles to help you make informed decisions about your life.`,
  },
  {
    question: `How long is the ${service.title} session?`,
    answer: `The session duration is ${service.duration}. This gives our expert astrologers enough time to thoroughly analyze your birth chart and provide comprehensive guidance.`,
  },
  {
    question: `What type of consultation is this?`,
    answer: `This is a ${service.consultationType} session. You can choose the format that's most convenient for you, and our astrologers will provide the same quality of guidance regardless of the medium.`,
  },
  {
    question: "What information do I need to provide?",
    answer: "You'll need your exact birth date, time, and place of birth for accurate chart calculation. If you don't have your birth time, our astrologers can work with available information to provide guidance.",
  },
  {
    question: "How accurate are the predictions?",
    answer: "Vedic astrology is highly accurate when performed by experienced astrologers. The accuracy depends on precise birth data and the astrologer's expertise. Our predictions are based on time-tested techniques and deep spiritual knowledge.",
  },
  {
    question: `What makes this ${service.title} special?`,
    answer: `Our ${service.title} combines traditional Vedic wisdom with modern insights. Each session is personalized and designed to provide practical guidance that you can implement in your daily life for positive transformation.`,
  },
  {
    question: "Can I ask follow-up questions?",
    answer: "Yes, our sessions are interactive. You can ask questions and seek clarification during the consultation. Our goal is to ensure you leave with complete understanding and actionable guidance.",
  },
];

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Move all hooks to the top before any conditional returns
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  // Helper function for default detailed description
  const getDefaultDetailedDescription = (service: Service) => {
    return `
      <div style="color: #374151; line-height: 1.8;">
        <h3 style="font-size: 1.5rem; font-weight: 600; color: #23244a; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">About ${service.title}</h3>
        <p style="margin-bottom: 1rem; color: #4b5563;">${service.description}</p>
        
        <h4 style="font-size: 1.25rem; font-weight: 600; color: #23244a; margin-top: 1.5rem; margin-bottom: 0.75rem;">What You'll Get:</h4>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          ${service.features?.map((feature: string) => `<li style="margin-bottom: 0.5rem; color: #4b5563;">${feature}</li>`).join('') || '<li style="margin-bottom: 0.5rem; color: #4b5563;">Personalized consultation based on your birth chart</li><li style="margin-bottom: 0.5rem; color: #4b5563;">Expert guidance from experienced astrologers</li><li style="margin-bottom: 0.5rem; color: #4b5563;">Practical remedies and solutions</li>'}
        </ul>
        
        <h4 style="font-size: 1.25rem; font-weight: 600; color: #23244a; margin-top: 1.5rem; margin-bottom: 0.75rem;">Benefits:</h4>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem; color: #4b5563;">Clear insights into your life path and purpose</li>
          <li style="margin-bottom: 0.5rem; color: #4b5563;">Guidance for important life decisions</li>
          <li style="margin-bottom: 0.5rem; color: #4b5563;">Understanding of karmic patterns and challenges</li>
          <li style="margin-bottom: 0.5rem; color: #4b5563;">Spiritual remedies for harmony and success</li>
          <li style="margin-bottom: 0.5rem; color: #4b5563;">Personalized recommendations for growth</li>
        </ul>
        
        <h4 style="font-size: 1.25rem; font-weight: 600; color: #23244a; margin-top: 1.5rem; margin-bottom: 0.75rem;">Consultation Process:</h4>
        <p style="margin-bottom: 1rem; color: #4b5563;">Our consultation is conducted through ${service.consultationType} and lasts ${service.duration}. You'll receive personalized insights based on your birth chart analysis and can ask questions throughout the session.</p>
      </div>
    `;
  };

  // Create service images array
  const serviceImages = service.images && service.images.length > 0 
    ? service.images 
    : ['/images/placeholder.jpg', '/images/placeholder.jpg', '/images/placeholder.jpg'];

  // Calculate discount percentage
  const getDiscountPercentage = () => {
    if (!service.originalPrice || service.originalPrice <= service.price) return null;
    return Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100);
  };

  const discount = getDiscountPercentage();

  const serviceFaqs = getServiceFaqs(service);

  return (
    <>
      <style jsx global>{`
        *::-webkit-scrollbar {
          display: none !important;
          height: 0 !important;
          width: 0 !important;
          background: transparent !important;
        }
        * {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
      `}</style>
      <div className="min-h-screen bg-white flex flex-col items-center justify-start py-6 px-2 md:px-0 mt-8">
        {/* Main Service Section with Fixed Left and Scrollable Right */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 relative">
          {/* Left: Fixed Image Section */}
          <div className="lg:w-1/2 lg:sticky lg:top-8 lg:self-start flex flex-col items-center">
            <div className="w-full rounded-xl overflow-hidden bg-[#f7f5ed] flex items-center justify-center mb-3" style={{ aspectRatio: '1/1', maxWidth: 400 }}>
              <Image
                src={serviceImages[selectedImage]}
                alt={service.title}
                width={380}
                height={380}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-row gap-2 w-full overflow-x-auto pb-2 justify-center">
              {serviceImages.map((img, idx) => (
                <button
                  key={`${img}-${idx}`}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg border-2 ${selectedImage === idx ? 'border-black' : 'border-transparent'} overflow-hidden focus:outline-none`}
                  style={{ minWidth: 64, minHeight: 64 }}
                >
                  <Image src={img} alt={service.title} width={64} height={64} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Scrollable Service Info Section */}
          <div className="lg:w-1/2 flex flex-col gap-4 lg:max-h-screen lg:overflow-y-auto lg:pr-4" style={{ scrollbarWidth: 'thin' }}>
            <h1 className="text-2xl md:text-3xl font-semibold text-[#23244a]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>{service.title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#FFD700] text-lg">&#9733;</span>
              <span className="text-base font-medium text-[#23244a]">{service.rating}</span>
              <span className="text-sm text-[#23244a]">({service.reviewsCount} reviews)</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{service.category}</span>
              <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">{service.consultationType}</span>
              <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">{service.duration}</span>
            </div>
            <div className="flex items-end gap-3 mt-3">
              <span className="text-xl font-bold text-black" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>₹{service.price}</span>
              {service.originalPrice && service.originalPrice > service.price && (
                <>
                  <span className="text-base text-gray-400 line-through">₹{service.originalPrice}</span>
                  {discount && <span className="text-base font-semibold text-green-700">{discount}% OFF</span>}
                </>
              )}
            </div>
            {service.discount && service.discount !== 'Free' && (
              <div className="text-red-600 font-medium text-sm mt-1">
                {service.discount} - Limited time offer!
              </div>
            )}
            
            <div className="text-xs text-gray-600 mt-1">
              {service.ordersCount} consultations booked • Highly rated astrologers
            </div>
            
            {/* Service Stats */}
            <div className="mt-3 bg-gray-100 rounded-lg p-3 flex flex-col gap-2">
              <span className="text-xs font-medium text-[#23244a]">SERVICE DETAILS</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <FaClock className="text-purple-500" />
                  <span>Duration: {service.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaVideo className="text-green-500" />
                  <span>{service.consultationType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  <span>Rating: {service.rating}/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaShoppingCart className="text-blue-500" />
                  <span>{service.ordersCount} bookings</span>
                </div>
              </div>
            </div>
            
            {/* Book Now Button */}
            <div className="flex gap-3 mt-5">
              <UniversalCartButton
                productId={service.id}
                productName={service.title}
                price={service.price}
                className="flex-1 bg-black text-white py-3 rounded-md font-semibold text-base hover:bg-[#23244a] transition"
              >
                BOOK CONSULTATION
              </UniversalCartButton>
              <button className="flex-1 bg-yellow-400 text-black py-3 rounded-md font-semibold text-base hover:bg-yellow-500 transition">BOOK NOW</button>
            </div>

            {/* Service Description Dropdown */}
            <div className="mt-6 border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-4 font-medium text-[#23244a] cursor-pointer text-base focus:outline-none flex justify-between items-center hover:bg-gray-50"
                onClick={() => setDescriptionOpen(!descriptionOpen)}
                aria-expanded={descriptionOpen}
              >
                <span className="font-semibold">Service Description</span>
                <span className={`ml-2 transition-transform text-lg ${descriptionOpen ? 'rotate-90' : ''}`}>▶</span>
              </button>
              <AnimatePresence initial={false}>
                {descriptionOpen && (
                  <motion.div
                    key="description-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 border-t border-gray-100">
                      <div 
                        className="service-description"
                        style={{
                          fontSize: '14px',
                          lineHeight: '1.6',
                          color: '#374151'
                        }}
                        dangerouslySetInnerHTML={{ 
                          __html: service.detailedDescription || getDefaultDetailedDescription(service)
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Service Sections and Additional Content */}
        <div className="max-w-7xl w-full mt-12 space-y-8">
          {/* Service Assurance Bar */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-500" />
                <span>Quick & Expert Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                <span>5-Star Rated Astrologers</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-green-500" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <FaVideo className="text-purple-500" />
                <span>Online & Offline Available</span>
              </div>
            </div>
          </div>

          {/* ProductAssuranceBar */}
          <div className="w-full flex justify-center px-2 md:px-0 my-8">
            <div className="max-w-5xl w-full bg-[#F9F6F2] rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="py-8 md:py-12 px-4 md:px-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-10 text-black text-center tracking-wide uppercase" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.08em' }}>
                  OUR CONSULTATION PROMISE
                </h2>
                <div className="flex flex-col md:flex-row w-full justify-between items-stretch gap-4 md:gap-8">
                  {/* CONSULTATION */}
                  <div className="flex flex-col items-center flex-1 min-w-0 mb-8 md:mb-0">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-6 h-6 md:w-8 md:h-8">
                        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" stroke="#FFD600" strokeWidth="1.5" fill="none"/><path d="M10 22h12M16 10v12" stroke="#FFD600" strokeWidth="1.2"/></svg>
                      </div>
                      <div className="mt-2 md:mt-3 text-base md:text-lg font-bold text-black tracking-wide uppercase" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.08em' }}>CONSULTATION</div>
                      <div className="mt-2 mb-4 text-black w-full text-sm md:text-base">
                        <ul className="list-disc ml-6 text-base" style={{fontFamily: 'Lora, Georgia, serif', color: 'black'}}>
                          <li>Expert Vedic astrologers</li>
                          <li>Personalized guidance</li>
                        </ul>
                      </div>
                      <a href="/about" className="mt-auto px-4 md:px-6 py-2 border border-black text-black rounded transition hover:bg-black hover:text-white text-xs md:text-sm font-medium" style={{minWidth:100, fontFamily: 'Inter, Montserrat, Playfair Display, Arial, sans-serif'}}>
                        Learn More
                      </a>
                    </div>
                  </div>
                  {/* Separator */}
                  <div className="hidden md:flex items-center" style={{height:180, width:0}}>
                    <div className="h-32 border-r" style={{borderColor: '#FFD600'}} />
                  </div>
                  {/* PRIVACY */}
                  <div className="flex flex-col items-center flex-1 min-w-0 mb-8 md:mb-0">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-6 h-6 md:w-8 md:h-8">
                        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" stroke="#FFD600" strokeWidth="1.5" fill="none"/><rect x="12" y="12" width="8" height="8" stroke="#FFD600" strokeWidth="1.2" fill="none"/></svg>
                      </div>
                      <div className="mt-2 md:mt-3 text-base md:text-lg font-bold text-black tracking-wide uppercase" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.08em' }}>PRIVACY</div>
                      <div className="mt-2 mb-4 text-black w-full text-sm md:text-base">
                        <ul className="list-disc ml-6 text-base" style={{fontFamily: 'Lora, Georgia, serif', color: 'black'}}>
                          <li>100% Confidential sessions</li>
                          <li>Secure data protection</li>
                        </ul>
                      </div>
                      <a href="/privacy-policy" className="mt-auto px-4 md:px-6 py-2 border border-black text-black rounded transition hover:bg-black hover:text-white text-xs md:text-sm font-medium" style={{minWidth:100, fontFamily: 'Inter, Montserrat, Playfair Display, Arial, sans-serif'}}>
                        Learn More
                      </a>
                    </div>
                  </div>
                  {/* Separator */}
                  <div className="hidden md:flex items-center" style={{height:180, width:0}}>
                    <div className="h-32 border-r" style={{borderColor: '#FFD600'}} />
                  </div>
                  {/* SUPPORT */}
                  <div className="flex flex-col items-center flex-1 min-w-0 mb-8 md:mb-0">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-6 h-6 md:w-8 md:h-8">
                        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" stroke="#FFD600" strokeWidth="1.5" fill="none"/><path d="M10 18l3.5 3.5L22 13" stroke="#FFD600" strokeWidth="1.5" fill="none"/></svg>
                      </div>
                      <div className="mt-2 md:mt-3 text-base md:text-lg font-bold text-black tracking-wide uppercase" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.08em' }}>SUPPORT</div>
                      <div className="mt-2 mb-4 text-black w-full text-sm md:text-base">
                        <ul className="list-disc ml-6 text-base" style={{fontFamily: 'Lora, Georgia, serif', color: 'black'}}>
                          <li>24/7 customer support</li>
                          <li>Follow-up guidance</li>
                        </ul>
                      </div>
                      <a href="/contact" className="mt-auto px-4 md:px-6 py-2 border border-black text-black rounded transition hover:bg-black hover:text-white text-xs md:text-sm font-medium" style={{minWidth:100, fontFamily: 'Inter, Montserrat, Playfair Display, Arial, sans-serif'}}>
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Quality Assurance */}
          <div className="w-full flex justify-center px-2 md:px-0 my-8">
            <div className="max-w-5xl w-full bg-[#F9F6F2] rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="py-8 md:py-12 px-4 md:px-8">
                {/* Mobile: 2 rows (3+2), Desktop: 1 row */}
                <div className="w-full">
                  {/* Mobile layout */}
                  <div className="flex flex-col gap-6 md:hidden">
                    <div className="flex w-full justify-between items-center">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <FaRegStar className="text-2xl text-[#FFD600]" />
                        </div>
                        <span className="mt-3 text-sm font-bold text-black tracking-wide uppercase text-center" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>EXPERT<br/>GUIDANCE</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <FaShieldAlt className="text-2xl text-[#FFD600]" />
                        </div>
                        <span className="mt-3 text-sm font-bold text-black tracking-wide uppercase text-center" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>AUTHENTIC<br/>VEDIC</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <FaRegHeart className="text-2xl text-[#FFD600]" />
                        </div>
                        <span className="mt-3 text-sm font-bold text-black tracking-wide uppercase text-center" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>PERSONALIZED<br/>APPROACH</span>
                      </div>
                    </div>
                    <div className="flex w-full justify-center gap-16">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <FaClock className="text-2xl text-[#FFD600]" />
                        </div>
                        <span className="mt-3 text-sm font-bold text-black tracking-wide uppercase text-center" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>TIMELY<br/>SESSIONS</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <FaVideo className="text-2xl text-[#FFD600]" />
                        </div>
                        <span className="mt-3 text-sm font-bold text-black tracking-wide uppercase text-center" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>ONLINE &<br/>OFFLINE</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop layout - consistent with mobile */}
                  <div className="hidden md:flex w-full justify-between items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <FaRegStar className="text-2xl text-[#FFD600]" />
                      </div>
                      <span className="mt-3 text-sm font-bold text-black tracking-wide uppercase text-center" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>EXPERT<br/>GUIDANCE</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <FaShieldAlt className="text-2xl text-[#FFD600]" />
                      </div>
                      <span className="mt-3 text-sm font-bold text-black tracking-wide uppercase text-center" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>AUTHENTIC<br/>VEDIC</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <FaRegHeart className="text-2xl text-[#FFD600]" />
                      </div>
                      <span className="mt-3 text-sm font-bold text-black tracking-wide uppercase text-center" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>PERSONALIZED<br/>APPROACH</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <FaClock className="text-2xl text-[#FFD600]" />
                      </div>
                      <span className="mt-3 text-sm font-bold text-black tracking-wide uppercase text-center" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>TIMELY<br/>SESSIONS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <FaVideo className="text-2xl text-[#FFD600]" />
                      </div>
                      <span className="mt-3 text-sm font-bold text-black tracking-wide uppercase text-center" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>ONLINE &<br/>OFFLINE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          {serviceFaqs.length > 0 && (
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#23244a] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {serviceFaqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      className="w-full text-left p-4 font-medium text-[#23244a] cursor-pointer focus:outline-none flex justify-between items-center hover:bg-gray-50"
                      onClick={() => {
                        const newOpenFaqs = new Set(openFaqs);
                        if (newOpenFaqs.has(index)) {
                          newOpenFaqs.delete(index);
                        } else {
                          newOpenFaqs.add(index);
                        }
                        setOpenFaqs(newOpenFaqs);
                      }}
                      aria-expanded={openFaqs.has(index)}
                    >
                      <span>{faq.question}</span>
                      <span className={`ml-2 transition-transform ${openFaqs.has(index) ? 'rotate-90' : ''}`}>▶</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaqs.has(index) && (
                        <motion.div
                          key="faq-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 border-t border-gray-100">
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Services */}
          <RelatedServices 
            currentServiceId={service.id}
            category={service.category}
            title="Related Services"
            maxItems={4}
            className="mt-8"
          />
        </div>
      </div>
    </>
  );
}
