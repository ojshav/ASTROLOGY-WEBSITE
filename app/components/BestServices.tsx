'use client'

import { useLanguage } from '../contexts/useLanguage'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { services as servicesData } from '../../data/services.js'
import { ReusableServiceCard } from './ReusableServiceCard'

export function BestServices() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsiveCardsPerView, setResponsiveCardsPerView] = useState(5);
  const desktopContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollStep = 1;

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setResponsiveCardsPerView(2); // Mobile: 2 cards
      } else if (width < 1024) {
        setResponsiveCardsPerView(2); // Tablet: 2 cards
      } else if (width < 1280) {
        setResponsiveCardsPerView(3); // Small desktop: 3 cards
      } else if (width < 1536) {
        setResponsiveCardsPerView(4); // Medium desktop: 4 cards
      } else {
        setResponsiveCardsPerView(5); // Large desktop: 5 cards
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);


  // Use imported services data and select the first 6 services for display
  const displayServices = servicesData.slice(0, 6);
  const totalCards = displayServices.length;
  const maxIndex = Math.max(0, totalCards - responsiveCardsPerView);
  // Desktop scroll logic
  const canScrollLeftDesktop = currentIndex > 0;
  const canScrollRightDesktop = currentIndex < maxIndex;

  // Mobile scroll logic
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeftMobile, setCanScrollLeftMobile] = useState(false);
  const [canScrollRightMobile, setCanScrollRightMobile] = useState(true);

  const checkScrollButtonsMobile = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const isMobile = window.innerWidth < 768; // md breakpoint

      // More sensitive threshold for tablet to allow scrolling when even 1 card is partially hidden
      const threshold = isMobile ? 1 : 50; // 50px threshold for tablet, 1px for mobile

      setCanScrollLeftMobile(scrollLeft > 0);
      setCanScrollRightMobile(scrollLeft < scrollWidth - clientWidth - threshold);
    }
  };

  const scrollLeftMobile = () => {
    if (scrollContainerRef.current) {
      // Responsive scroll distance: mobile shows ~2 cards, tablet shows ~4 cards
      const isMobile = window.innerWidth < 768; // md breakpoint
      const scrollDistance = isMobile
        ? scrollContainerRef.current.clientWidth / 2  // Scroll by half width on mobile
        : scrollContainerRef.current.clientWidth / 3; // Scroll by third width on tablet
      scrollContainerRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
    }
  };

  const scrollRightMobile = () => {
    if (scrollContainerRef.current) {
      // Responsive scroll distance: mobile shows ~2 cards, tablet shows ~4 cards
      const isMobile = window.innerWidth < 768; // md breakpoint
      const scrollDistance = isMobile
        ? scrollContainerRef.current.clientWidth / 2  // Scroll by half width on mobile
        : scrollContainerRef.current.clientWidth / 3; // Scroll by third width on tablet
      scrollContainerRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScrollButtonsMobile();
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && canScrollLeftDesktop) {
      setCurrentIndex(Math.max(0, currentIndex - scrollStep));
    } else if (direction === 'right' && canScrollRightDesktop) {
      setCurrentIndex(Math.min(maxIndex, currentIndex + scrollStep));
    }
  };

  return (
    <section className="min-h-[400px] py-0 bg-white font-sans overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl p-10 mb-12 text-center shadow-xl overflow-hidden border border-[#e6c77e]"
          style={{ backgroundColor: '#FEFBF2' }}
        >
          <div className="absolute inset-0 z-0 opacity-70" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.05) 0%, transparent 10%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.08) 0%, transparent 15%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 10%), radial-gradient(circle at 30% 70%, rgba(255,255,255,0.06) 0%, transparent 12%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.04) 0%, transparent 10%)', backgroundSize: '300px 300px, 400px 400px, 200px 200px, 350px 350px, 250px 250px' }}></div>

          <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-black">
            {t('bestServices.bannerHeading')}
          </h2>
          <p className="relative z-10 text-lg md:text-xl mb-6 opacity-90" style={{ color: '#166534' }}>
            {t('bestServices.bannerDescription')}
          </p>
        </motion.div>

        {/* Services Section */}
        <div className="mb-12" ref={desktopContainerRef}>
          {/* Header with controls (desktop: includes nav arrows) */}
          <div className="mb-6 flex justify-end">
            <div className="flex items-center gap-0">
              {/* View All Button */}
              <Link href="/services/all">
                <button className="px-6 py-3 text-black font-semibold rounded-xl hover:text-green-800 transition-colors duration-200 flex items-center gap-2">
                  View All
                </button>
              </Link>
              {/* Desktop navigation arrows (lg and up) */}
              <div className="hidden lg:flex items-center gap-2 ml-1">
                <button
                  onClick={() => handleScroll('left')}
                  disabled={!canScrollLeftDesktop}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-700 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 hover:text-black shadow-sm transition-all duration-200"
                  aria-label="Scroll left"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleScroll('right')}
                  disabled={!canScrollRightDesktop}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-700 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 hover:text-black shadow-sm transition-all duration-200"
                  aria-label="Scroll right"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* Responsive Carousel: Desktop (unchanged), Mobile (scrollable) */}
          {/* Desktop: show as before, but nav arrows are now in header */}
          <div className="hidden lg:block">
            <div
              className="relative overflow-hidden cursor-grab active:cursor-grabbing"
              style={{
                width: `${responsiveCardsPerView * (288 + 24) - 24}px`,
                maxWidth: '100%',
                minHeight: '1px',
              }}
              onWheel={(e) => {
                if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                  e.preventDefault();
                  const scrollDirection = (e.deltaX || e.deltaY) > 0 ? 'right' : 'left';
                  handleScroll(scrollDirection);
                }
              }}
            >
              <motion.div
                className="flex gap-6"
                animate={{
                  x: `-${currentIndex * (288 + 24)}px`,
                }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 300,
                }}
                style={{
                  width: `${displayServices.length * (288 + 24)}px`,
                }}
                drag="x"
                dragConstraints={{
                  left: -maxIndex * (288 + 24),
                  right: 0,
                }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  const dragOffset = info.offset.x;
                  const dragThreshold = 100;
                  if (Math.abs(dragOffset) > dragThreshold) {
                    if (dragOffset > 0 && canScrollLeftDesktop) {
                      handleScroll('left');
                    } else if (dragOffset < 0 && canScrollRightDesktop) {
                      handleScroll('right');
                    }
                  }
                }}
              >
                {displayServices.map((service, index) => (
                  <div key={service.slug} className="w-72 flex-shrink-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.05,
                        type: 'spring',
                        stiffness: 300
                      }}
                    >
                      <ReusableServiceCard
                        service={service}
                        viewMode="grid"
                        className="h-full"
                      />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          {/* Mobile/Tablet: scrollable flexbox, snap, responsive card width, overlay arrows */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={scrollLeftMobile}
                disabled={!canScrollLeftMobile}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity border border-gray-300 ${canScrollLeftMobile ? 'opacity-100 hover:bg-gray-50' : 'opacity-50 cursor-not-allowed'
                  }`}
                style={{ marginLeft: '-20px' }}
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-4 h-4 text-gray-700" />
              </button>
              <button
                onClick={scrollRightMobile}
                disabled={!canScrollRightMobile}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity border border-gray-300 ${canScrollRightMobile ? 'opacity-100 hover:bg-gray-50' : 'opacity-50 cursor-not-allowed'
                  }`}
                style={{ marginRight: '-20px' }}
                aria-label="Scroll right"
              >
                <ArrowRight className="w-4 h-4 text-gray-700" />
              </button>
              {/* Scrollable Container */}
              <div
                ref={scrollContainerRef}
                onScroll={checkScrollButtonsMobile}
                className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-2"
                style={{
                  scrollSnapType: 'x mandatory',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {displayServices.map((service, index) => (
                  <div
                    key={service.slug}
                    className="flex-none w-[calc(52%-6px)] md:w-[calc(26%-9px)] min-w-[170px] md:min-w-[190px] snap-start"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.05,
                        type: 'spring',
                        stiffness: 300,
                      }}
                    >
                      <ReusableServiceCard
                        service={service}
                        viewMode="grid"
                        className="h-full"
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
