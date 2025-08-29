"use client";


import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const credentials = [
  {
    title: 'Vedic Astrology Expert',
    description: 'Dr. Narendra is a renowned Vedic Astrologer with over 15 years of experience in traditional Indian astrology. He specializes in birth chart analysis, planetary remedies, and life guidance through ancient Vedic wisdom.',
    image: 'https://res.cloudinary.com/dxwspucxw/image/upload/v1752042880/astro_ca0pkb.jpg',
    icon: '🔮',
    highlights: ['Birth Chart Analysis', 'Planetary Remedies', 'Life Guidance']
  },
  {
    title: 'PhD in Astrology & Philosophy',
    description: 'With a PhD in Astrology and Philosophy, Dr. Narendra combines traditional knowledge with modern understanding to provide comprehensive astrological consultations and spiritual guidance.',
    image: 'https://res.cloudinary.com/dxwspucxw/image/upload/v1752042876/phd_klwwvl.jpg',
    icon: '🎓',
    highlights: ['Traditional Knowledge', 'Modern Understanding', 'Spiritual Guidance']
  },
]

export function AstrologerProfile() {
  // Track if mobile/tablet view
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const swiperRef = useRef<{ swiper: import('swiper').Swiper } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 767);
      setIsTablet(width >= 768 && width <= 1366); // Updated to include iPad Pro, Nest Hub, Nest Hub Max
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);
  useEffect(() => {
    if (!isMobile) return;
    const swiper = swiperRef.current && swiperRef.current.swiper;
    if (swiper) {
      const onSlideChange = () => setActiveIndex(swiper.activeIndex);
      swiper.on('slideChange', onSlideChange);
      setActiveIndex(swiper.activeIndex);
      return () => {
        swiper.off('slideChange', onSlideChange);
      };
    }
  }, [isMobile]);
  <style jsx>{`
        @media (max-width: 767px) {
          .astro-heading {
            font-size: 1.75rem !important;
            line-height: 2.2rem !important;
          }
          .astro-subheading {
            margin-bottom: 0.1rem !important;
          }
          .testimonial-mobile {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
          }
          .testimonial-mobile .testimonial-quotes {
            font-size: 0.95rem !important;
            line-height: 1.5rem !important;
            margin-bottom: 0.5rem !important;
          }
        }
      `}</style>
  return (
    <>
      {/* Custom style for Swiper pagination dots position on mobile */}
      <style jsx global>{`
        @media (max-width: 767px) {
          .astro-swiper .swiper-pagination {
            display: none !important;
          }
        }
      `}</style>
      <style jsx>{`
        @keyframes ring {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(10deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(10deg); }
          40% { transform: rotate(-8deg); }
          50% { transform: rotate(6deg); }
          60% { transform: rotate(-6deg); }
          70% { transform: rotate(4deg); }
          80% { transform: rotate(-4deg); }
          90% { transform: rotate(2deg); }
        }
        @media (max-width: 767px) {
          .astro-heading {
            font-size: 1.75rem !important;
            line-height: 2.2rem !important;
          }
          .astro-subheading {
            margin-bottom: 0.1rem !important;
          }
        }
      `}</style>
      <section className="py-16 relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-orange-50/20">
        <div className="absolute inset-0">
          {/* Subtle decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          {/* Heading section restyled to match BestServices/BestProducts */}
          <div className="relative rounded-3xl p-10 mb-12 text-center shadow-xl overflow-hidden border border-[#e6c77e]" style={{ backgroundColor: '#FEFBF2' }}>
            <div className="absolute inset-0 z-0 opacity-70" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.05) 0%, transparent 10%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.08) 0%, transparent 15%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 10%), radial-gradient(circle at 30% 70%, rgba(255,255,255,0.06) 0%, transparent 12%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.04) 0%, transparent 10%)', backgroundSize: '300px 300px, 400px 400px, 200px 200px, 350px 350px, 250px 250px' }}></div>
            <h1 className="astro-heading relative z-10 text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-black">
              <span className="block md:inline">Meet Dr. Narendra</span>
              <span className="block md:inline">- Your Trusted Astrologer</span>
            </h1>
            <p className="astro-subheading relative z-10 text-lg md:text-xl mb-6 opacity-90" style={{ color: '#166534' }}>
              Expert Vedic Astrologer with Decades of Experience
            </p>
          </div>

          {/* Mobile/Tablet astrologer image - only visible on mobile and tablet */}
          <div className="block lg:hidden mb-8 md:mb-12">
            <div className="relative w-full max-w-md md:max-w-lg mx-auto aspect-square rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://res.cloudinary.com/dxwspucxw/image/upload/v1752042880/astro_ca0pkb.jpg"
                alt="Dr. Narendra - Vedic Astrologer"
                fill
                className="object-cover"
              />

            </div>
          </div>

          {/* Modern credentials layout: Swiper for mobile, 2-column grid for tablet, alternating layout for desktop */}
          {isMobile ? (
            <>
              <div className="mb-6">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={16}
                  slidesPerView={1}
                  style={{ paddingBottom: 24 }}
                  className="astro-swiper"
                  ref={swiperRef}
                >
                  {credentials.map((credential, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative">
                        <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                          <CardContent className="p-0">
                            <div className="min-h-[300px] flex flex-col justify-center">
                              {/* No image for mobile swiper */}
                              {/* Content section */}
                              <div className="p-8 flex flex-col justify-center">
                                <div className="space-y-6">
                                  {/* Title with decorative element */}
                                  <div className="relative">
                                    <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-orange-500 rounded-full"></div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 pl-4">
                                      {credential.title}
                                    </h3>
                                  </div>
                                  {/* Description */}
                                  <p className="text-gray-600 text-lg leading-relaxed">
                                    {credential.description}
                                  </p>
                                  {/* Highlights */}
                                  <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Specializations</h4>
                                    {index === 0 ? (
                                      <div className="flex flex-col gap-2">
                                        {credential.highlights.map((highlight, idx) => (
                                          <span key={idx} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-orange-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200/50">
                                            {highlight}
                                          </span>
                                        ))}
                                      </div>
                                    ) : (
                                      <div className="flex flex-wrap gap-2">
                                        {credential.highlights.map((highlight, idx) => (
                                          <span key={idx} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-orange-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200/50">
                                            {highlight}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Custom pagination dots below Swiper, above testimonial */}
              <div className="flex justify-center mt-6 mb-12">
                {credentials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`mx-1 w-3 h-3 rounded-full border-2 border-purple-300 transition-all duration-200 focus:outline-none ${activeIndex === idx ? 'bg-purple-500 border-purple-500' : 'bg-white'}`}
                    onClick={() => {
                      if (swiperRef.current && swiperRef.current.swiper) {
                        swiperRef.current.swiper.slideTo(idx);
                      }
                    }}
                  />
                ))}
              </div>
            </>
          ) : isTablet ? (
            /* Tablet View - 2 Column Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
              {credentials.map((credential, index) => (
                <Card key={index} className="group overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="flex flex-col min-h-[350px]">
                      {/* Content section - no image for tablet */}
                      <div className="p-6 flex flex-col flex-1 justify-between">
                        <div className="space-y-4">
                          {/* Title with decorative element */}
                          <div className="relative">
                            <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-orange-500 rounded-full"></div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 pl-4">
                              {credential.title}
                            </h3>
                          </div>
                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {credential.description}
                          </p>
                        </div>
                        {/* Highlights */}
                        <div className="space-y-3 mt-6">
                          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Specializations</h4>
                          <div className="flex flex-wrap gap-2">
                            {credential.highlights.map((highlight, idx) => (
                              <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-orange-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200/50">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-12 lg:gap-16">
              {credentials.map((credential, index) => (
                <div key={index} className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[500px] ${index % 2 === 1 ? 'lg:grid-cols-[1fr_0.8fr]' : 'lg:grid-cols-[0.8fr_1fr]'}`}>
                        {/* Image section */}
                        <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                        >
                          {/* Only show image on mobile if NOT the first card (Vedic Astrology Expert) */}
                          {!(index === 0) && (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10 z-10"></div>
                              <Image
                                src={credential.image}
                                alt={credential.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                            </>
                          )}
                          {/* On desktop, always show image. On mobile, hide image for first card. */}
                          {index === 0 && (
                            <div className="hidden md:block">
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10 z-10"></div>
                              <Image
                                src={credential.image}
                                alt={credential.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                          )}
                        </div>
                        {/* Content section */}
                        <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                          <div className="space-y-6">
                            {/* Title with decorative element */}
                            <div className="relative">
                              <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-orange-500 rounded-full"></div>
                              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 pl-4">
                                {credential.title}
                              </h3>
                            </div>
                            {/* Description */}
                            <p className="text-gray-600 text-lg leading-relaxed">
                              {credential.description}
                            </p>
                            {/* Highlights */}
                            <div className="space-y-3">
                              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Specializations</h4>
                              <div className="flex flex-wrap gap-2">
                                {credential.highlights.map((highlight, idx) => (
                                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-orange-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200/50">
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}

          {/* Subtle testimonial/experience section */}
          <div className="mt-12 md:mt-16">
            <Card className="bg-gradient-to-r from-slate-100/80 to-gray-100/80 border border-gray-200/50 text-gray-700 overflow-hidden relative backdrop-blur-sm testimonial-mobile">
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23888888' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat'
                }}></div>
              </div>
              <CardContent className="p-6 md:p-8 lg:p-10 text-center relative z-10">
                <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="testimonial-quotes space-y-2 md:space-y-3 max-w-xs sm:max-w-xl md:max-w-3xl text-center">
                      <p className="italic font-light text-gray-600 text-sm md:text-base lg:text-lg">
                        मैं मानता हूं कि हर व्यक्ति का जीवन अनोखा है और हर समस्या का समाधान संभव है।
                      </p>
                      <p className="italic font-light text-gray-600 text-sm md:text-base lg:text-lg">
                        I believe that every individual&apos;s life is unique and every problem has a solution.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 md:pt-6">
                    <div className="flex justify-center">
                      <div className="relative inline-block w-full sm:w-auto max-w-sm md:max-w-md lg:max-w-none">
                        <Link href="/contact">
                          <Button className="bg-black border border-gray-800 text-white text-sm md:text-base lg:text-xl px-6 md:px-12 lg:px-16 py-3 md:py-6 lg:py-8 rounded-full font-bold shadow-lg hover:bg-gray-900 hover:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out group relative overflow-hidden w-full">
                            <span className="relative z-10 flex items-center justify-center">
                              <span className="group-hover:animate-[ring_0.5s_ease-in-out_infinite] transition-transform duration-200 mr-2 inline-block origin-center">📞</span>
                              <span className="text-center whitespace-nowrap">Book Your Consultation Now</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-3 md:mt-4 space-y-1 px-4">
                      <p className="text-xs md:text-sm lg:text-base text-green-700 font-medium">Transform your life with ancient wisdom</p>
                      <p className="text-xs md:text-sm text-green-600">⭐ Trusted by thousands • Available 24/7 • Instant booking</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}