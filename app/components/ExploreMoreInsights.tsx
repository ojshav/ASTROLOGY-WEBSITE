'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '../contexts/useLanguage'
import { CTASection } from './CTASection'

export function ExploreMoreInsights() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-white text-black font-sans">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Explore More Astrological Insights Section */}
        <div>
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-black">{t('lifeChangingSolutions.exploreMoreTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Continue Learning Content Card */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 h-full min-h-[400px] md:min-h-[450px]"
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              whileTap={{ scale: 0.98, rotate: 0 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-48 md:h-52 w-full bg-gray-200 flex-shrink-0">
                <Image
                  src="https://res.cloudinary.com/dxwspucxw/image/upload/v1752042871/continue-learning_mtpgqr.jpg"
                  alt={t('lifeChangingSolutions.continueLearningAlt')}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardContent className="p-4 md:p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg md:text-lg font-bold mb-3 text-black leading-tight">{t('lifeChangingSolutions.continueLearningTitle')}</h3>
                  <p className="text-sm md:text-sm text-gray-700 mb-4 leading-relaxed tracking-wide font-serif">
                    {t('lifeChangingSolutions.continueLearningDescription')}
                    <br />
                    Explore guides on birth charts, planetary influences, and practical remedies.
                    <br />
                    Access exclusive articles, video lessons, and tools to help you unlock the wisdom of the stars.
                  </p>
                </div>
                <div className="flex items-end flex-1 pt-2">
                  <Link href="/study" passHref>
                    <button
                      className="bg-black text-white font-semibold py-2 md:py-2.5 px-6 md:px-7 rounded-full shadow-lg hover:bg-gray-800 border border-[#E0E0E0] transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      {t('lifeChangingSolutions.exploreMoreButton')}
                    </button>
                  </Link>
                </div>
              </CardContent>
            </motion.div>

            {/* CTA Section Card */}
            <div className="flex items-stretch w-full h-full min-h-[400px] md:min-h-[450px]">
              <CTASection />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}