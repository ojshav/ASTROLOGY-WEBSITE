"use client";

import { ShoppingCart, Package, Globe2 } from "lucide-react";
import { useState, useEffect, useRef, FormEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { useLanguage } from "../contexts/useLanguage";
import { SupportedLang, LANGUAGE_NAMES } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Search,
  Menu,
  X,
  User,
  LogIn,
  LogOut,
} from "lucide-react";
import CartIcon from "./CartIcon";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const servicesMegaMenu = {
  consultations: {
    href: "/services/astrology",
    items: [
      { href: "/services/astrology", key: "astrology" },
      { href: "/kundali-matching", key: "kundali_matching" },
      { href: "/panchang", key: "panchang" },
      { href: "/services/love-relationship", key: "love_relationship" },
      { href: "/services/career-guidance", key: "career_guidance" },
      { href: "/services/numerology", key: "numerology" },
    ],
  },
  puja_rituals: {
    href: "/online-puja",
    items: [
      { href: "/online-puja", key: "online_puja" },
      { href: "/services/grah-shanti", key: "grah_shanti" },
      { href: "/services/manokamna-pooja", key: "manokamna_pooja" },
    ],
  },
  horoscopes: {
    href: "/daily-horoscope",
    items: [
      { href: "/services/daily-horoscope", key: "daily_horoscope" },
      { href: "/daily-horoscope", key: "free_daily_horoscope" },
      { href: "/services/monthly-horoscope", key: "monthly_horoscope" },
      { href: "/services/yearly-horoscope", key: "yearly_horoscope" },
    ],
  },
};

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileStudyDropdownOpen, setIsMobileStudyDropdownOpen] = useState(false);
  const [isMobileConsultationsDropdownOpen, setIsMobileConsultationsDropdownOpen] = useState(false);
  const [isMobileLangMenuOpen, setIsMobileLangMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isStudyDropdownOpen, setIsStudyDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  // Add state for mobile nav bar consultations dropdown
  const [isConsultationBarOpen, setIsConsultationBarOpen] = useState(false);
  // Add state for mobile menu Study dropdown
  const [isStudyOpen, setIsStudyOpen] = useState(false);

  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => signOut({ callbackUrl: "/" });

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  const handlePopularSearch = (term: string) => {
    router.push(`/search?q=${encodeURIComponent(term)}`);
    setIsSearchOpen(false);
  };

  const languageList: SupportedLang[] = [
    "en",
    "hi",
    "bn",
    "ta",
    "te",
    "mr",
    "gu",
    "ml",
    "kn",
    "or",
    "pa",
    "es",
    "fr",
    "de",
    "zh",
    "ar",
    "ru",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      )
        setIsServicesOpen(false);
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      )
        setIsUserMenuOpen(false);
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      )
        setIsLangDropdownOpen(false);
      const hamburgerButton = document.getElementById("hamburger-button");
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerButton &&
        !hamburgerButton.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <div
  className="flex items-center justify-between w-full px-4 py-2 md:hidden"
  style={{ background: '#F3F1EB' }}
>
  {/* Left: Logo */}
  <Link
    href="/"
    className="font-bold text-xl tracking-tight"
    style={{
      fontFamily: 'Playfair Display, serif',
      color: '#000',
      letterSpacing: '-0.01em',
    }}
  >
    NG
  </Link>

  {/* Right: Search + Cart + Hamburger */}
  <div className="flex items-center gap-3">
    {/* Search Input (now inside a form, triggers search on Enter) */}
    <form onSubmit={handleSearchSubmit} className="w-full max-w-[150px]">
      <input
        type="text"
        placeholder="Search"
        className="px-3 py-1 w-full text-sm text-black rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>

    {/* Cart Icon */}
    <Link href="/cart">
  <button
    className="relative w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 hover:bg-gray-100"
    aria-label="Cart"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-black"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 8M17 13l1.6 8M6 21a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  </button>
</Link>

    {/* Hamburger Icon */}
    <button
      id="hamburger-button"
      onClick={() => setIsMobileMenuOpen(true)}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white/80 hover:bg-gray-100 transition-colors focus:outline-none"
      aria-label={t('header.nav.menu') || 'Open menu'}
    >
      <Menu className="h-6 w-6 text-black" />
    </button>
  </div>
</div>
{/* Mobile horizontal nav bar (below top bar) */}
<div className="md:hidden w-full flex justify-center items-center gap-2 px-2 py-2 relative" style={{ background: '#FDF9EF' }}>
  {/* Consultations dropdown trigger */}
  <button
    type="button"
    className="text-sm font-bold text-black px-2 py-1 rounded transition-colors flex items-center gap-1"
    style={{ fontFamily: 'Playfair Display, serif', color: '#000', fontWeight: 700 }}
    onClick={() => setIsConsultationBarOpen((prev) => !prev)}
  >
    {t("header.nav.consultations")}
    <span className={`transition-transform duration-300 ${isConsultationBarOpen ? 'rotate-180' : ''}`}>▼</span>
  </button>
  <Link
    href="/talk-to-astrologer"
    className="text-sm font-bold text-black px-2 py-1 rounded transition-colors"
    style={{ fontFamily: 'Playfair Display, serif', color: '#000', fontWeight: 700 }}
  >
    {t("header.nav.talk_to_astrologer")}
  </Link>
  <Link
    href="/shop"
    className="text-sm font-bold text-black px-2 py-1 rounded transition-colors"
    style={{ fontFamily: 'Playfair Display, serif', color: '#000', fontWeight: 700 }}
  >
    {t("header.nav.buy_products")}
  </Link>
  <Link
    href="/services"
    className="text-sm font-bold text-black px-2 py-1 rounded transition-colors"
    style={{ fontFamily: 'Playfair Display, serif', color: '#000', fontWeight: 700 }}
  >
    {t("header.nav.our_services")}
  </Link>
  {/* Dropdown below nav bar */}
  <div className={`absolute left-0 top-full w-full z-40 transition-all duration-300 ${isConsultationBarOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`} style={{ background: '#FDF9EF', borderRadius: '0 0 1rem 1rem', boxShadow: isConsultationBarOpen ? '0 4px 24px 0 rgba(36,34,68,0.08)' : 'none', overflow: 'hidden' }}>
    <div className="py-2 px-2 flex flex-col gap-2">
      {/* Consultations group */}
      <div>
        <div className="text-base font-bold mb-1" style={{ color: '#77A656', fontFamily: 'Playfair Display, serif' }}>{t('header.mega_menu.consultations.title')}</div>
        <ul className="flex flex-col gap-1">
          {servicesMegaMenu.consultations.items.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={() => setIsConsultationBarOpen(false)}
                className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-[#e9eafc] transition-all"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t(`header.mega_menu.consultations.items.${item.key}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Puja & Rituals group */}
      <div>
        <div className="text-base font-bold mb-1" style={{ color: '#77A656', fontFamily: 'Playfair Display, serif' }}>{t('header.mega_menu.puja_rituals.title')}</div>
        <ul className="flex flex-col gap-1">
          {servicesMegaMenu.puja_rituals.items.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={() => setIsConsultationBarOpen(false)}
                className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-[#e9eafc] transition-all"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t(`header.mega_menu.puja_rituals.items.${item.key}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Horoscopes group */}
      <div>
        <div className="text-base font-bold mb-1" style={{ color: '#77A656', fontFamily: 'Playfair Display, serif' }}>{t('header.mega_menu.horoscopes.title')}</div>
        <ul className="flex flex-col gap-1">
          {servicesMegaMenu.horoscopes.items.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={() => setIsConsultationBarOpen(false)}
                className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-[#e9eafc] transition-all"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t(`header.mega_menu.horoscopes.items.${item.key}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

      {/* 2. Desktop header/nav: Only show on md+ screens */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 left-0 right-0 w-full z-50 shadow-lg hidden md:block"
        style={{
          background: "#FEFBF2",
          boxShadow: "0 4px 24px 0 rgba(36, 34, 68, 0.08)",
        }}
      >
        {/* Subtle star/cosmic effect removed for solid background color */}
        {/*
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%">
            <defs>
              <radialGradient id="star-gradient" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#e9eafc" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="20%" cy="30%" r="1.5" fill="#fff" opacity="0.7" />
            <circle cx="60%" cy="10%" r="1" fill="#fff" opacity="0.5" />
            <circle cx="80%" cy="60%" r="1.2" fill="#fff" opacity="0.6" />
            <circle cx="40%" cy="80%" r="1.1" fill="#fff" opacity="0.4" />
            <rect x="0" y="0" width="100%" height="100%" fill="url(#star-gradient)" />
          </svg>
        </div>
        */}
        <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto px-8 py-3 gap-x-8 z-10">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl md:text-3xl tracking-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#000', letterSpacing: '-0.01em' }}>
            {t('header.logo.line2')}
          </Link>
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="flex-1 flex justify-center">
            <div className="flex w-full max-w-xl items-center bg-[#F3F1EB] rounded-full shadow-md border border-gray-200 px-4 py-2 gap-x-3">
              <input
                type="text"
                placeholder={t('header.search_placeholder') || t('header.search') || 'Find product, service, or article...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none px-2 py-2 text-base text-black font-medium"
                style={{ fontFamily: 'Playfair Display, serif' }}
              />
              {/* Desktop search button */}
              <button type="submit" className="px-6 py-2 rounded-full font-semibold shadow transition-colors text-base" style={{ fontFamily: 'Playfair Display, serif', background: '#77A656', color: '#fff' }}>
                {t('header.search_button') || t('header.search') || 'Search'}
              </button>
            </div>
          </form>
          {/* Right: Icons & Buttons */}
          <div className="flex items-center gap-x-6">
            {/* Orders Icon */}
            <Link href="/orders" className="flex flex-col items-center group font-bold">
              <Package className="h-6 w-6 text-black group-hover:scale-110 transition-transform font-bold" style={{ fontWeight: 700 }} />
              <span className="text-xs text-black mt-1 font-bold" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>{t('header.nav.orders') || t('header.orders') || 'Orders'}</span>
            </Link>
            {/* Cart Icon */}
            <Link href="/cart" className="flex flex-col items-center group font-bold">
              <ShoppingCart className="h-6 w-6 text-black group-hover:scale-110 transition-transform font-bold" style={{ fontWeight: 700 }} />
              <span className="text-xs text-black mt-1 font-bold" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>{t('header.cart')}</span>
            </Link>
            {/* Join Us Button */}
            <a
              href="/astrologer/auth/"
              className="px-5 py-2 rounded-full font-semibold shadow transition-colors text-base"
              style={{ fontFamily: 'Playfair Display, serif', background: '#77A656', color: '#fff' }}
            >
              {t('header.nav.join_us') || t('header.join_us') || 'Join Us'}
            </a>
            {/* Sign In Button */}
            <button
              onClick={() => signIn()}
              className="px-5 py-2 rounded-full font-semibold transition-colors text-base"
              style={{ fontFamily: 'Playfair Display, serif', background: '#77A656', color: '#fff', border: 'none' }}
            >
              {t('header.auth.signin') || 'Sign In'}
            </button>
          </div>
        </div>
        {/* Navigation Bar */}
        <nav className="w-full flex justify-center gap-x-8 py-2 bg-transparent">
          {/* Desktop nav links */}
          <Link
            href="/"
            className="text-base font-bold text-black px-2 py-1 relative group transition-colors"
            style={{ fontFamily: 'Playfair Display, serif', color: '#000', fontWeight: 700 }}
          >
            <span className="relative z-10">{t("header.nav.home")}</span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#77A656] to-[#77A656] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 z-0" />
          </Link>
          <Link
            href="/about"
            className="text-base font-bold text-black px-2 py-1 relative group transition-colors"
            style={{ fontFamily: 'Playfair Display, serif', color: '#000', fontWeight: 700 }}
          >
            <span className="relative z-10">{t("header.nav.about")}</span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#77A656] to-[#77A656] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 z-0" />
          </Link>
          {/* Consultation Dropdown (keep yellow) */}
          <div
            className="relative"
            ref={servicesMenuRef}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setTimeout(() => setIsServicesOpen(false), 120)}
          >
            {/* Consultations Button: Yellow */}
            <button
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className="flex items-center text-base font-bold px-2 py-1 relative group transition-colors focus:outline-none"
              style={{ fontFamily: 'Playfair Display, serif', color: '#77A656', background: 'transparent', fontWeight: 700 }}
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              aria-controls="consultation-menu"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Escape') setIsServicesOpen(false);
                if (e.key === 'Enter' || e.key === ' ') setIsServicesOpen(v => !v);
              }}
            >
              <span className="relative z-10">{t("header.nav.consultations")}</span>
              <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} style={{ color: '#77A656' }} />
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#77A656] to-[#77A656] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 z-0" />
            </button>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  id="consultation-menu"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-[700px] max-w-[96vw] rounded-2xl shadow-2xl border border-[#e6c77e] z-50 px-8 py-6 flex flex-row gap-10 justify-between items-start card-floating"
                  tabIndex={-1}
                  onKeyDown={e => { if (e.key === 'Escape') setIsServicesOpen(false); }}
                  style={{ pointerEvents: isServicesOpen ? 'auto' : 'none', borderWidth: 1.5, background: '#FEFBF2' }}
                >
                  {Object.entries(servicesMegaMenu).map(([sectionKey, sectionValue]) => (
                    <div key={sectionKey} className="flex-1 min-w-[140px] max-w-[220px]">
                      <div className="text-[1.08rem] font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#77A656', letterSpacing: '0.04em' }}>{t(`header.mega_menu.${sectionKey}.title`)}</div>
                      <ul className="space-y-1">
                        {sectionValue.items.map((item) => (
                          <li key={item.key}>
                            <Link
                              href={item.href}
                              className="block text-[1rem] text-black px-2 py-2 rounded-md transition-all duration-150 group focus:bg-[#f7f7fa] focus:outline-none relative hover:bg-[#e9eafc] hover:text-black"
                              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, letterSpacing: '0.01em', color: '#000' }}
                              tabIndex={0}
                              onClick={() => setIsServicesOpen(false)}
                              onKeyDown={e => { if (e.key === 'Enter') setIsServicesOpen(false); }}
                            >
                              <span className="group-hover:underline group-hover:decoration-[#b89c6a] group-hover:decoration-2 transition-all duration-150">{t(`header.mega_menu.${sectionKey}.items.${item.key}`)}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/study"
            className="text-base font-bold text-black px-2 py-1 relative group transition-colors"
            style={{ fontFamily: 'Playfair Display, serif', color: '#000', fontWeight: 700 }}
          >
            <span className="relative z-10">{t("header.nav.study")}</span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#77A656] to-[#77A656] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 z-0" />
          </Link>
          <Link
            href="/blog"
            className="text-base font-bold text-black px-2 py-1 relative group transition-colors"
            style={{ fontFamily: 'Playfair Display, serif', color: '#000', fontWeight: 700 }}
          >
            <span className="relative z-10">{t("header.nav.blog")}</span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#77A656] to-[#77A656] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 z-0" />
          </Link>
          <Link
            href="/talk-to-astrologer"
            className="text-base font-bold text-black px-2 py-1 relative group transition-colors"
            style={{ fontFamily: 'Playfair Display, serif', color: '#000', fontWeight: 700 }}
          >
            <span className="relative z-10">{t("header.nav.talk_to_astrologer")}</span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#77A656] to-[#77A656] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 z-0" />
          </Link>
          <Link
            href="/shop"
            className="text-base font-bold text-black px-2 py-1 relative group transition-colors"
            style={{ fontFamily: 'Playfair Display, serif', color: '#000', fontWeight: 700 }}
          >
            <span className="relative z-10">{t("header.nav.buy_products")}</span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#77A656] to-[#77A656] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 z-0" />
          </Link>
          <Link
            href="/services"
            className="text-base font-bold text-black px-2 py-1 relative group transition-colors"
            style={{ fontFamily: 'Playfair Display, serif', color: '#000', fontWeight: 700 }}
          >
            <span className="relative z-10">{t("header.nav.our_services")}</span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#77A656] to-[#77A656] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 z-0" />
          </Link>
          {/* Language Selector Icon (moved here) */}
          <div className="relative ml-2" ref={langDropdownRef}>
            {/* Language Button: Yellow, Dropdown White, Items Black */}
            <button
              onClick={() => setIsLangDropdownOpen((prev) => !prev)}
              className="flex items-center text-base font-bold px-2 py-1 relative group transition-colors focus:outline-none"
              style={{ fontFamily: 'Playfair Display, serif', height: '40px', minWidth: 'auto', color: '#77A656', background: 'transparent', fontWeight: 700 }}
              aria-haspopup="listbox"
              aria-expanded={isLangDropdownOpen}
              aria-controls="lang-menu"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Escape') setIsLangDropdownOpen(false);
                if (e.key === 'Enter' || e.key === ' ') setIsLangDropdownOpen(v => !v);
              }}
            >
              <span className="relative z-10">{(LANGUAGE_NAMES as Record<string, string>)[lang] || t('header.language_selector.button') || 'Select Language'}</span>
              <span className="ml-1 text-lg" style={{ lineHeight: 1, color: '#77A656' }}>&#x2304;</span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#77A656] to-[#77A656] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 z-0" />
            </button>
            <AnimatePresence>
              {isLangDropdownOpen && (
                isMobile ? (
                  <motion.div
                    id="lang-menu-mobile"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="fixed left-0 right-0 top-0 w-full z-[9999] bg-white shadow-2xl rounded-b-2xl px-2 py-6 flex flex-col gap-0"
                    tabIndex={-1}
                    onKeyDown={e => { if (e.key === 'Escape') setIsLangDropdownOpen(false); }}
                    style={{ pointerEvents: isLangDropdownOpen ? 'auto' : 'none' }}
                  >
                    <div className="flex justify-between items-center mb-4 px-2">
                      <span className="text-lg font-bold tracking-wide text-[#23244a] mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>Select Language</span>
                      <button onClick={() => setIsLangDropdownOpen(false)} aria-label="Close" className="text-2xl text-[#23244a] px-2 py-1 rounded-full focus:outline-none hover:bg-[#e9eafc]">×</button>
                    </div>
                    <div className="flex flex-col gap-1 max-h-[70vh] overflow-y-auto w-full custom-scrollbar">
                      {languageList.map((code, idx) => (
                        <button
                          key={code}
                          onClick={() => { setLang(code); setIsLangDropdownOpen(false); }}
                          className={`w-full flex items-center justify-center gap-2 py-3 px-2 transition-all duration-150 font-semibold text-black text-[1.12rem] focus:outline-none rounded-xl ${lang === code ? 'bg-[#e9eafc] shadow-[0_0_8px_#b89c6a33] font-bold' : ''}`}
                          style={{ fontFamily: 'Montserrat, sans-serif', border: 'none', margin: 0, letterSpacing: '0.01em', color: '#000' }}
                          tabIndex={0}
                          aria-selected={lang === code}
                          autoFocus={idx === 0}
                          onKeyDown={e => { if (e.key === 'Enter') { setLang(code); setIsLangDropdownOpen(false); } }}
                        >
                          <span className={`transition-all duration-150 text-center w-full ${lang === code ? 'text-[#23244a]' : ''} hover:underline hover:decoration-[#b89c6a] hover:decoration-2`} style={{ textShadow: lang === code ? '0 0 8px #e6c77e55' : 'none', fontWeight: lang === code ? 700 : 500 }}>
                            {(LANGUAGE_NAMES as Record<string, string>)[code] || LANGUAGE_NAMES['en']}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    id="lang-menu"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="absolute right-0 mt-2 w-60 max-w-[95vw] rounded-2xl shadow-2xl border border-[#e6c77e] z-50 py-2 px-0 flex flex-col gap-0"
                    tabIndex={-1}
                    onKeyDown={e => { if (e.key === 'Escape') setIsLangDropdownOpen(false); }}
                    style={{ pointerEvents: isLangDropdownOpen ? 'auto' : 'none', borderWidth: 1.5, minWidth: 220, background: '#FEFBF2' }}
                  >
                    <div className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto w-full py-1 custom-scrollbar">
                      {languageList.map((code, idx) => (
                        <button
                          key={code}
                          onClick={() => { setLang(code); setIsLangDropdownOpen(false); }}
                          className={`w-full flex items-center justify-center gap-2 py-3 px-2 transition-all duration-150 font-semibold text-black text-[1.08rem] focus:outline-none rounded-xl ${lang === code ? 'bg-[#e9eafc] shadow-[0_0_8px_#b89c6a33] font-bold' : ''}`}
                          style={{ fontFamily: 'Montserrat, sans-serif', border: 'none', margin: 0, letterSpacing: '0.01em', color: '#000' }}
                          tabIndex={0}
                          aria-selected={lang === code}
                          autoFocus={idx === 0}
                          onKeyDown={e => { if (e.key === 'Enter') { setLang(code); setIsLangDropdownOpen(false); } }}
                        >
                          <span className={`transition-all duration-150 text-center w-full ${lang === code ? 'text-[#23244a]' : ''} hover:underline hover:decoration-[#b89c6a] hover:decoration-2`} style={{ textShadow: lang === code ? '0 0 8px #e6c77e55' : 'none', fontWeight: lang === code ? 700 : 500 }}>
                            {(LANGUAGE_NAMES as Record<string, string>)[code] || LANGUAGE_NAMES['en']}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </nav>
      </motion.header>

      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="bg-black/90 backdrop-blur-lg border rounded-2xl p-6 max-w-2xl shadow-2xl sm:rounded-3xl" style={{ borderColor: '#D6FA25' }}>
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none" style={{ color: '#D6FA25' }} />
              <Input
                id="search"
                placeholder="Search for services, products, or articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-32 rounded-full border-2 focus-visible:ring text-lg bg-white/80"
                style={{ color: '#D6FA25', borderColor: '#D6FA25' }}
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full font-bold h-10 px-8 text-md"
                style={{ background: '#D6FA25', color: '#23244a' }}
              >
                Search
              </Button>
            </div>
          </form>
          <div className="mt-5 pl-2">
            <p className="text-sm font-semibold mb-2" style={{ color: '#D6FA25' }}>
              Popular searches:
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <button
                onClick={() => handlePopularSearch("Horoscope")}
                style={{ color: '#D6FA25' }}
                className="hover:underline"
              >
                Horoscope
              </button>
              <button
                onClick={() => handlePopularSearch("Tarot Reading")}
                style={{ color: '#D6FA25' }}
                className="hover:underline"
              >
                Tarot Reading
              </button>
              <button
                onClick={() => handlePopularSearch("Meditation")}
                style={{ color: '#D6FA25' }}
                className="hover:underline"
              >
                Meditation
              </button>
              <button
                onClick={() => handlePopularSearch("Astrology Course")}
                style={{ color: '#D6FA25' }}
                className="hover:underline"
              >
                Astrology Course
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 3. Mobile menu drawer: Only show on mobile/tablet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white z-[999] shadow-2xl flex flex-col p-6 gap-6 md:hidden overflow-y-auto max-h-screen"
          >
            {/* Search Bar at the top of sidebar - REMOVED */}
            {/* <form onSubmit={handleSearchSubmit} className="mb-4 w-full"> ... </form> */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end mb-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Close menu"
              style={{ color: '#000' }}
            >
              <X className="w-6 h-6" style={{ color: '#000' }} />
            </button>
            <nav className="flex flex-col gap-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-lg text-black" style={{ fontFamily: 'Playfair Display, serif' }}>{t('header.nav.home')}</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-lg text-black" style={{ fontFamily: 'Playfair Display, serif' }}>{t('header.nav.about')}</Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-lg text-black" style={{ fontFamily: 'Playfair Display, serif' }}>{t('header.nav.blog')}</Link>
              {/* Study Dropdown */}
              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-between font-semibold text-lg text-black py-2 px-0 focus:outline-none"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                  onClick={() => setIsStudyOpen((prev) => !prev)}
                >
                  <span>{t('header.nav.study')}</span>
                  <span className={`ml-2 transition-transform duration-300 ease-in-out ${isStudyOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isStudyOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  style={{ background: '#FDF9EF', borderRadius: '0.75rem' }}
                >
                  <div className="py-2 px-2 flex flex-col gap-2">
                    <Link
                      href="/study"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-[#e9eafc] transition-all"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {t('header.nav.study')}
                    </Link>
                    <Link
                      href="/courses"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-[#e9eafc] transition-all"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {t('header.nav.courses')}
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/courses" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-lg text-black" style={{ fontFamily: 'Playfair Display, serif' }}>{t('header.nav.courses')}</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-lg text-black" style={{ fontFamily: 'Playfair Display, serif' }}>{t('header.nav.contact')}</Link>
              {/* Consultations Dropdown REMOVED FROM HAMBURGER MENU */}
              {/* Language Selector in Drawer */}
              <div className="mt-4 w-full">
                <button
                  onClick={() => setIsMobileLangMenuOpen((prev) => !prev)}
                  className="w-full font-semibold text-lg text-left flex items-center justify-between py-2 px-3 rounded-md bg-[#F3F1EB] border border-gray-200 shadow"
                  style={{ color: '#77A656', fontFamily: 'Playfair Display, serif' }}
                >
                  {(LANGUAGE_NAMES as Record<string, string>)[lang] || 'Select Language'}
                  <ChevronDown className={`ml-2 w-5 h-5 transition-transform ${isMobileLangMenuOpen ? 'rotate-180' : ''}`} style={{ color: '#77A656' }} />
                </button>
                <AnimatePresence>
                  {isMobileLangMenuOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col mt-2 bg-white rounded-md shadow border border-gray-200 max-h-60 overflow-y-auto w-full"
                      style={{ zIndex: 100 }}
                    >
                      {languageList.map((code) => (
                        <button
                          key={code}
                          onClick={() => { setLang(code); setIsMobileLangMenuOpen(false); setIsMobileMenuOpen(false); }}
                          className={`text-left py-2 px-4 font-semibold text-black hover:bg-[#e9eafc] rounded-md w-full ${lang === code ? 'bg-[#e9eafc] font-bold' : ''}`}
                          style={{ width: '100%', fontFamily: 'Playfair Display, serif' }}
                        >
                          {(LANGUAGE_NAMES as Record<string, string>)[code] || LANGUAGE_NAMES['en']}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Auth/Cart/Join buttons */}
              <div className="flex gap-3 mt-6">
                {/* <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 py-2 rounded-full bg-[#f7f7fa] text-black font-semibold text-center" style={{ fontFamily: 'Playfair Display, serif' }}>{t('header.cart')}</Link> */}
                {/* Mobile Join Us button */}
                <a href="/astrologer/auth/" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 py-2 rounded-full font-semibold text-center" style={{ background: '#77A656', color: '#fff', fontFamily: 'Playfair Display, serif' }}>{t('header.nav.join_us') || t('header.join_us') || 'Join Us'}</a>
                {/* Mobile Sign In button */}
                <button onClick={() => { signIn(); setIsMobileMenuOpen(false); }} className="flex-1 py-2 rounded-full font-semibold text-center" style={{ background: '#77A656', color: '#fff', border: 'none', fontFamily: 'Playfair Display, serif' }}>{t('header.auth.signin') || 'Sign In'}</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx global>{`
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(120, 120, 140, 0.18);
    border-radius: 8px;
    min-height: 40px;
    transition: background 0.2s;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(120, 120, 140, 0.28);
  }
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(120,120,140,0.18) transparent;
  }
`}</style>
    </>
  );
}
