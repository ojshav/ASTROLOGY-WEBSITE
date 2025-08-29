'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UniversalZodiacBanner from './UniversalZodiacBanner';
import ZodiacInfoNavigation from './ZodiacInfoNavigation';
import ReusableProductGrid from './ReusableProductGrid';
import { useZodiacProducts } from '@/hooks/useZodiacProducts';

interface ZodiacPageTemplateProps {
  zodiacSlug: string;
  signKey: string;
  theme?: {
    gradient?: string;
    glowColor?: string;
    animationColor?: string;
  };
}

export default function ZodiacPageTemplate({ 
  zodiacSlug, 
  signKey, 
  theme = {
    gradient: 'from-orange-50/30 via-white to-yellow-50/40',
    glowColor: 'rgba(249, 115, 22, 0.15)',
    animationColor: 'rgba(249, 115, 22, 0.12)'
  }
}: ZodiacPageTemplateProps) {
  const [isPageEntering, setIsPageEntering] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Use the custom hook to fetch zodiac products
  const { products, loading, error, refetch } = useZodiacProducts(zodiacSlug);

  // PAGE ENTRANCE EFFECT
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsPageEntering(false);
      setIsLoaded(true);
      document.body.style.overflow = 'auto';
    }, 100);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {/* CINEMATIC PAGE ENTRANCE OVERLAY */}
      <AnimatePresence mode="wait">
        {isPageEntering && (
          <motion.div
            className="fixed inset-0 z-50 bg-gradient-to-r from-red-100 via-white to-orange-100 shadow-2xl"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
      </AnimatePresence>

      {/* MAIN PAGE CONTENT */}
      <motion.div 
        className={`min-h-screen bg-gradient-to-br ${theme.gradient} overflow-x-hidden overflow-y-hidden`}
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        
        {/* UNIVERSAL ZODIAC BANNER */}
        <UniversalZodiacBanner signKey={signKey} />

        {/* HORIZONTAL DROPDOWN NAVIGATION */}
        <ZodiacInfoNavigation zodiacSign={signKey as 'aquarius' | 'libra' | 'aries' | 'capricorn' | 'gemini' | 'leo' | 'cancer' | 'pisces' | 'sagittarius' | 'scorpio' | 'taurus' | 'virgo'} />

        {/* MAIN CONTENT AREA - FULL WIDTH */}
        <motion.div 
          className="w-full bg-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto p-4 pt-8 sm:p-8 sm:pt-12 w-full">
            {/* Error state */}
            {error && (
              <div className="text-center py-8">
                <div className="text-red-600 mb-4">
                  <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <p className="text-lg font-semibold">Error Loading Products</p>
                  <p className="text-sm text-gray-600">{error}</p>
                </div>
                <button 
                  onClick={refetch} 
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Products Grid */}
            {!error && (
              <ReusableProductGrid 
                products={products} 
                columns={4} 
                mobileColumns={2} 
                gap="md" 
                loading={loading}
                emptyMessage={`No products found for ${zodiacSlug.charAt(0).toUpperCase() + zodiacSlug.slice(1)}. Check back soon for new arrivals!`}
              />
            )}
          </div>
        </motion.div>

        {/* GLOBAL STYLES FOR ZODIAC THEME */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&display=swap');
          
          .zodiac-glow {
            box-shadow: 0 0 25px ${theme.glowColor};
          }
          
          .zodiac-warm-animation {
            position: relative;
            overflow: hidden;
          }
          
          .zodiac-warm-animation::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, ${(theme.glowColor ?? 'rgba(249, 115, 22, 0.15)').replace('0.15', '0.05')} 0%, transparent 70%);
            animation: warmGlow 6s ease-in-out infinite alternate;
          }
          
          @keyframes warmGlow {
            0% { transform: scale(0.95) rotate(0deg); opacity: 0.3; }
            100% { transform: scale(1.05) rotate(180deg); opacity: 0.6; }
          }
          
          .zodiac-energy-pulse {
            animation: zodiacEnergy 4s ease-in-out infinite;
          }
          
          @keyframes zodiacEnergy {
            0%, 100% { 
              box-shadow: 0 0 20px ${theme.animationColor};
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 0 35px ${(theme.animationColor ?? 'rgba(249, 115, 22, 0.12)').replace('0.12', '0.25')};
              transform: scale(1.008);
            }
          }
          
          /* Rich typography and sophisticated styling */
          .font-serif {
            font-family: 'Playfair Display', serif;
          }
          
          .backdrop-blur-glass {
            background: rgba(255, 255, 255, 0.90);
            backdrop-filter: blur(16px);
            border: 1px solid ${(theme.glowColor ?? 'rgba(249, 115, 22, 0.15)').replace('0.15', '0.08')};
          }
          
          .warm-gradient {
            background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%);
          }
          
          .text-shadow-soft {
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </motion.div>
    </>
  );
}
