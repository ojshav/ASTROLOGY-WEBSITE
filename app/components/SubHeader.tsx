'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScrollText, Home, Gem, Sun, Gift, Edit3, Heart } from 'lucide-react'

const subHeaderItems = [
  {
    label: "Today's Panchang",
    icon: ScrollText,
    href: '/panchang',
    isNew: false,
  },
  {
    label: 'Kundali Matching',
    icon: Home,
    href: '/kundali-matching',
    isNew: false,
  },
  {
    label: 'Buy Products',
    icon: Gem,
    href: '/shop',
    isNew: true,
  },
  {
    label: 'Free Daily Horoscope',
    icon: Sun,
    href: '/daily-horoscope',
    isNew: false,
  },
  {
    label: 'Online Puja',
    icon: Heart,
    href: '/online-puja',
    isNew: true,
  },
  {
    label: 'Astrology',
    icon: Edit3,
    href: '/astrology',
    isNew: false,
  },
]

export function SubHeader() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#f8fafc] via-[#f3e8ff] to-[#f8fafc] py-1 rounded-xl shadow border border-[#E0E0E0] mx-auto mt-24">
      <div className="w-full px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {subHeaderItems.map((item) => (
            <Link key={item.label} href={item.href} className="flex-shrink-0">
              <motion.div
                className="flex flex-col items-center w-20 text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-16 h-16 bg-[#F0F2F5] rounded-full flex items-center justify-center shadow-[4px_4px_8px_#D1D9E6,_-4px_-4px_8px_#FFFFFF] transition-all duration-200 group-hover:shadow-[inset_2px_2px_4px_#D1D9E6,_inset_-2px_-2px_4px_#FFFFFF] border border-[#E0E0E0]">
                  <item.icon className="w-7 h-7 text-[#6A0DAD] group-hover:text-[#FF8C00] transition-colors duration-200" />
                  {item.isNew && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#6A0DAD] to-[#FF8C00] text-white text-[10px] px-2 py-0.5 rounded-full font-semibold shadow">
                      New
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm font-semibold text-gray-800 group-hover:text-[#6A0DAD] transition-colors duration-200 leading-tight">
                  {item.label}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      {/* Hide scrollbar for all browsers */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}
