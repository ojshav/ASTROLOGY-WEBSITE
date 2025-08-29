import React from 'react';
import Link from 'next/link';
import { Instagram, Youtube, ArrowUp, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const quickLinks = [
  { label: 'footer.links.quickLinks.home', href: '/' },
  { label: 'footer.links.quickLinks.about', href: '/about' },
  { label: 'footer.links.quickLinks.services', href: '/services' },
  { label: 'footer.links.quickLinks.reviews', href: '/reviews' },
  { label: 'footer.links.quickLinks.blog', href: '/blog' },
];

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-black text-white py-20 overflow-hidden">
      {/* Floating decorative cards */}
      <Link href="/blog/astrology-remedies-for-life" className="hidden lg:block absolute top-10 left-10 rotate-[-12deg] opacity-90 z-10 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 rounded-2xl p-6 w-72 shadow-2xl">
          <div className="bg-black/20 rounded-md px-3 py-1 text-xs text-white mb-4 inline-block">{t('footer.floatingCards.card1.tag')}</div>
          <h3 className="text-white font-bold text-lg mb-2 leading-snug">{t('footer.floatingCards.card1.title')}</h3>
          <div className="flex items-center text-white/80 text-sm mb-4">
            <span className="mr-2">🌟</span>
            <span>{t('footer.floatingCards.card1.date')}</span>
            <span className="ml-auto">{t('footer.floatingCards.card1.readTime')}</span>
          </div>
          <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium border-none cursor-pointer transition-all hover:bg-white/30 inline-block">{t('footer.floatingCards.card1.button')}</span>
        </div>
      </Link>
      <Link href="/blog/the-influence-of-planets" className="hidden lg:block absolute top-16 right-10 rotate-[12deg] opacity-90 z-10 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="bg-gradient-to-br from-blue-500 via-teal-400 to-green-400 rounded-2xl p-6 w-72 shadow-2xl">
          <div className="bg-black/20 rounded-md px-3 py-1 text-xs text-white mb-4 inline-block">{t('footer.floatingCards.card2.tag')}</div>
          <h3 className="text-white font-bold text-lg mb-2 leading-snug">{t('footer.floatingCards.card2.title')}</h3>
          <div className="flex items-center text-white/80 text-sm mb-4">
            <span className="mr-2">📅</span>
            <span>{t('footer.floatingCards.card2.date')}</span>
            <span className="ml-auto">{t('footer.floatingCards.card2.readTime')}</span>
          </div>
          <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium border-none cursor-pointer transition-all hover:bg-white/30 inline-block">{t('footer.floatingCards.card2.button')}</span>
        </div>
      </Link>

      <div className="max-w-6xl mx-auto px-5 relative z-20">
        {/* Main content */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            {t('footer.newsletter.title')}<br />
            <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">{t('footer.newsletter.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {t('footer.newsletter.subtitle')}
          </p>
          {/* Newsletter signup */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12 justify-center">
            <input
              type="email"
              placeholder={t('footer.newsletter.placeholder')}
              className="flex-1 min-w-[200px] bg-white/10 border border-white/20 text-white rounded-full px-6 py-3 text-base outline-none placeholder-gray-300"
            />
            <button className="bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full text-base transition-transform hover:scale-105">{t('footer.newsletter.button')}</button>
          </div>
        </div>


        {/* Responsive Links grid and Socials */}
        <div className="w-full max-w-2xl mx-auto mb-8">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-3 md:gap-8">
            {/* Keep Exploring */}
            <div>
              <h5 className="text-xs font-semibold mb-2 text-white/80 md:text-base md:mb-4">{t('footer.links.keepExploring')}</h5>
              <ul className="space-y-1 md:space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">{t(link.label)}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Legal (on mobile, in 2nd col; on md, 2nd col) */}
            <div>
              <h5 className="text-xs font-semibold mb-2 text-white/80 md:text-base md:mb-4">{t('footer.links.legal')}</h5>
              <ul className="space-y-1 md:space-y-2">
                <li><Link href="/terms-conditions" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">{t('footer.links.legalLinks.terms')}</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">{t('footer.links.legalLinks.privacy')}</Link></li>
                <li><Link href="/site-credits" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">{t('footer.links.legalLinks.credits')}</Link></li>
              </ul>
            </div>
            {/* Connect (on mobile, spans 2 cols; on md, 3rd col) */}
            <div className="col-span-2 md:col-span-1">
              <h5 className="text-xs font-semibold mb-2 text-white/80 md:text-base md:mb-4">{t('footer.links.connect')}</h5>
              <ul className="space-y-1 md:space-y-2 mb-2 md:mb-4">
                <li><Link href="/contact" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">{t('footer.links.quickLinks.contact')}</Link></li>
              </ul>
            </div>
          </div>
          {/* Social links below links grid */}
          <div className="flex gap-4 justify-center mt-6 md:mt-8 mb-4 md:mb-12">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label={t('footer.social.facebook')}>
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label={t('footer.social.twitter')}>
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label={t('footer.social.instagram')}>
              <Instagram size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label={t('footer.social.youtube')}>
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm border-t border-white/10 pt-8 gap-4">
          <div>
            <span>{t('footer.brand.taglinePrefix')}</span>
            <a href="https://scalixity.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">{t('footer.brand.team')}</a>
          </div>
          <div className="text-center">
            <p className="m-0">{t('footer.brand.copyright')}</p>
          </div>
          <div className="flex items-center gap-4">
            <span>{t('footer.brand.poweredByPrefix')}</span>
            <a href="#" className="text-white hover:underline">{t('footer.brand.energy')}</a>
            <div className="text-xs bg-white/10 px-2 py-1 rounded">{t('footer.brand.language')}</div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-5 bg-gradient-to-r from-green-800 via-green-600 to-green-500 text-white p-3 rounded-full shadow-xl z-50 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-300"
        aria-label={t('footer.scrollToTop')}
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
}
