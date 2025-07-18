'use client';

import { AnimatedStars } from '../components/AnimatedStars'
import { MysticBackground } from '../components/MysticBackground'
import { FeaturedProducts } from '../components/FeaturedProducts'
import { ProductGrid } from '../components/ProductGrid'
import { AstrologyStones } from '../components/AstrologyStones'
import { ShopCTA } from '../components/ShopCTA'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import ProductOfTheDay from '../components/ProductOfTheDay';
import AllProductsGrid from '../components/AllProductsGrid';
import { AstrologerProfile } from '../components/AstrologerProfile';
import { Statistics } from '../components/Statistics';
import { Testimonials } from '../components/Testimonials';
import { ProductServiceCard } from '../components/UniversalServiceGrid';
import { defaultProducts } from '../components/AllProductsGrid';

// Move plugin initialization outside the component
const autoplayPlugin = Autoplay({ delay: 3500, stopOnInteraction: false });

const ShopProductCarousel = dynamic(() => import('../components/ShopProductCarousel'), { ssr: false });

const products = [
  {
    title: 'Natural Gemstone Collection',
    description: 'Authentic, lab-certified gemstones for planetary remedies and spiritual growth.',
    price: '₹2,499',
    slug: 'gemstone-collection',
    image:"https://res.cloudinary.com/dxwspucxw/image/upload/v1752753177/naturalstones_xsst5z.jpg"
  },
  {
    title: 'Rudraksha Mala & Beads',
    description: 'Energized Rudraksha beads and malas for protection, peace, and spiritual power.',
    price: '₹1,199',
    slug: 'rudraksha-collection',
    image:"https://res.cloudinary.com/dxwspucxw/image/upload/v1752753830/rudrakshamala_pibmxj.jpg"
  },
  {
    title: 'Energized Yantras',
    description: 'Sacred spiritual diagrams (Yantras) energized for prosperity, health, and harmony.',
    price: '₹799',
    slug: 'yantras',
    image:"https://res.cloudinary.com/dxwspucxw/image/upload/v1752754014/yantra_kppksi.jpg"
  },
  {
    title: 'Puja Samagri & Ritual Kits',
    description: 'Complete kits for home puja, havan, and Vedic rituals, including all essentials.',
    price: '₹999',
    slug: 'puja-samagri-kits',
    image:"https://res.cloudinary.com/dxwspucxw/image/upload/v1752754218/puja_samagri_sc0vpt.jpg"
  },
  {
    title: 'Astrology Reports & Kundli Services',
    description: 'Personalized astrology reports, Janam Kundli, and detailed horoscope analysis.',
    price: '₹499',
    slug: 'astrology-reports-kundli',
    image:"https://res.cloudinary.com/dxwspucxw/image/upload/v1752754647/kundli_h5hiqg.jpg"
  },
  {
    title: 'Spiritual Accessories',
    description: 'Incense holders, copper bottles, meditation mats, and more for your spiritual space.',
    price: '₹399',
    slug: 'spiritual-accessories',
    image:"https://res.cloudinary.com/dxwspucxw/image/upload/v1752754784/accessory_viwtit.jpg"
  },
  {
    title: 'Personalized Astrology Tools',
    description: 'Custom-engraved pendants, name plates, and tools based on your birth chart.',
    price: '₹1,499',
    slug: 'personalized-astrology-tools',
    image:"https://res.cloudinary.com/dxwspucxw/image/upload/v1752754941/personalized_astrology_tools_mj3501.jpg"
  },
];

// Helper function to format product keys to readable titles
function formatProductTitle(key: string) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace('Bracelet', ' Bracelet')
    .replace('Combo', ' Combo')
    .replace('Plate', ' Plate')
    .replace('Stone', ' Stone')
    .replace('Mala', ' Mala')
    .replace('Yantras', ' Yantras')
    .replace('Rudraksha', ' Rudraksha')
    .replace('Pyrite', ' Pyrite')
    .replace('Dhan Yog', 'Dhan Yog')
    .replace('Navgraha', 'Navgraha')
    .replace('Shanti', 'Shanti')
    .replace('Evil Eye', 'Evil Eye')
    .replace('Richie Rich', 'Richie Rich')
    .replace('Success', 'Success')
    .replace('Health Wellness', 'Health & Wellness')
    .replace('Career Booster', 'Career Booster')
    .replace('Protection', 'Protection')
    .replace('Peace Harmony', 'Peace & Harmony')
    .replace('Spiritual Growth', 'Spiritual Growth')
    .replace('Focus Clarity', 'Focus & Clarity')
    .replace('Confidence Booster', 'Confidence Booster')
    .replace('Calm Mind', 'Calm Mind')
    .trim();
}

export default function ShopPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.shop-purpose-card').forEach(card => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-golden-amber-dark via-sunburst-yellow to-golden-amber-dark">
      {/* Top Banner Section */}
      <div className="w-full flex items-center justify-between" style={{ background: '#FFFDF8', minHeight: '320px', padding: '0 48px' }}>
        {/* Product Image Left */}
        <div className="flex-shrink-0 flex items-center justify-center" style={{ minWidth: 480 }}>
          <img
            src="/images/astrowellness.jpg"
            alt="Featured Product"
            className="object-contain rounded-xl shadow-md"
            style={{ maxHeight: 220, maxWidth: 520 }}
          />
        </div>
        {/* Heading Right */}
        <div className="flex-1 flex items-center justify-end">
          <h1
            className="text-5xl md:text-7xl font-normal"
            style={{ fontFamily: 'Playfair Display, serif', color: '#000', fontWeight: 400, letterSpacing: '0.01em' }}
          >
            Spiritual Shop
          </h1>
        </div>
      </div>
      {/* Existing Content */}
      <AnimatedStars />
      <MysticBackground>
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Main Page Heading */}
          {/* Removed duplicate <h1>Spiritual Shop</h1> here */}
          {/* Full-width Product Carousel (dynamically imported) */}
          <div className="w-full flex flex-col items-center justify-center mb-2 mt-8">
            <h2
              className="text-3xl md:text-4xl mb-8 text-center font-normal text-black"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, letterSpacing: '0.01em' }}
            >
              Best Seller
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
              {products.map((product, idx) => (
                <ProductServiceCard
                  key={product.slug}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  badge={'BEST SELLER'}
                  href={`/shop/${product.slug}`}
                />
              ))}
              {/* Shop by Purpose Cards */}
              <ProductServiceCard
                image="/images/course-1.jpg"
                title="Money"
                description="Shop products to attract wealth, prosperity, and abundance."
                badge=""
                href="#money"
              />
              <ProductServiceCard
                image="/images/course-2.jpg"
                title="Love"
                description="Shop products to enhance love, relationships, and harmony."
                badge=""
                href="#love"
              />
              <ProductServiceCard
                image="/images/course-3.jpg"
                title="Career"
                description="Shop products for career growth, success, and new opportunities."
                badge=""
                href="#career"
              />
              <ProductServiceCard
                image="/images/astrology.svg"
                title="Evil Eye"
                description="Shop products for protection from negativity and evil eye."
                badge=""
                href="#evil-eye"
              />
              <ProductServiceCard
                image="/images/astrowellness.jpg"
                title="Health"
                description="Shop products for health, wellness, and healing."
                badge=""
                href="#health"
              />
              {/* All ProductsGrid cards */}
              {defaultProducts.map((product: any, idx: number) => (
                <ProductServiceCard
                  key={product.key}
                  image={product.image}
                  title={formatProductTitle(product.key)}
                  description={`₹${product.price} (was ₹${product.oldPrice})`}
                  badge={product.discountKey || ''}
                  href={`/shop/${product.key}`}
                />
              ))}
              {/* Astrology product card for even layout */}
              <ProductServiceCard
                image="/images/birth_chart_mockup.jpg"
                title="Personalized Birth Chart Report"
                description="Get your detailed, personalized birth chart analysis from expert astrologers."
                badge="NEW"
                href="/shop/birth-chart-report"
              />
              <ProductServiceCard
                image="/images/gemstones.jpg"
                title="Gemstone Recommendation"
                description="Find the perfect gemstone for your astrological needs."
                badge="POPULAR"
                href="/shop/gemstone-recommendation"
              />
              <ProductServiceCard
                image="/images/7mukhi-rudraksha.jpg"
                title="Rudraksha Mala"
                description="Energized Rudraksha mala for spiritual growth and protection."
                badge="LIMITED"
                href="/shop/rudraksha-mala"
              />
              <ProductServiceCard
                image="/images/tarot-banner.jpg"
                title="Tarot Reading Kit"
                description="Unlock the secrets of tarot with this complete reading kit."
                badge="NEW"
                href="/shop/tarot-reading-kit"
              />
              <ProductServiceCard
                image="/images/astrowellness.jpg"
                title="Crystal Healing Set"
                description="A curated set of healing crystals for balance and wellness."
                badge=""
                href="/shop/crystal-healing-set"
              />
              <ProductServiceCard
                image="/images/astrology.svg"
                title="Yantra for Prosperity"
                description="Sacred yantra to attract prosperity and remove obstacles."
                badge="RECOMMENDED"
                href="/shop/yantra-prosperity"
              />
              <ProductServiceCard
                image="/images/pyrite.jpg"
                title="Pyrite Stone"
                description="Pyrite for abundance, protection, and positive energy."
                badge=""
                href="/shop/pyrite-stone"
              />
              <ProductServiceCard
                image="/images/evil-eye-obsidian.jpg"
                title="Evil Eye Protection Bracelet"
                description="Wear this bracelet to ward off negativity and evil eye."
                badge="BESTSELLER"
                href="/shop/evil-eye-bracelet"
              />
              <ProductServiceCard
                image="/images/maha-dhan-yog.jpg"
                title="Maha Dhan Yog Combo"
                description="A powerful combo for wealth and prosperity."
                badge="COMBO"
                href="/shop/maha-dhan-yog-combo"
              />
              <ProductServiceCard
                image="/images/selenite-plate.jpg"
                title="Selenite Charging Plate"
                description="Cleanse and charge your crystals with selenite."
                badge="NEW"
                href="/shop/selenite-charging-plate"
              />
              <ProductServiceCard
                image="/images/love-attraction.jpg"
                title="Love Attraction Bracelet"
                description="Attract love and harmony into your life."
                badge=""
                href="/shop/love-attraction-bracelet"
              />
              <ProductServiceCard
                image="/images/peace-harmony.jpg"
                title="Peace & Harmony Bracelet"
                description="Promote peace and harmony with this special bracelet."
                badge=""
                href="/shop/peace-harmony-bracelet"
              />
              <ProductServiceCard
                image="/images/spiritual-growth.jpg"
                title="Spiritual Growth Bracelet"
                description="Enhance your spiritual journey with this bracelet."
                badge=""
                href="/shop/spiritual-growth-bracelet"
              />
            </div>
          </div>
          {/* <FeaturedProducts /> */}
          {/* Product Of The Day Section */}
          <ProductOfTheDay />
          {/* Astrologer Profile, Statistics, Testimonials */}
          <Statistics />
          <Testimonials />
          <style jsx global>{`
            .shop-purpose-card {
              opacity: 0;
              transform: translateY(40px);
              animation: shopPurposeFadeIn 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
            }
            .shop-purpose-card:nth-child(1) { animation-delay: 0.05s; }
            .shop-purpose-card:nth-child(2) { animation-delay: 0.15s; }
            .shop-purpose-card:nth-child(3) { animation-delay: 0.25s; }
            .shop-purpose-card:nth-child(4) { animation-delay: 0.35s; }
            .shop-purpose-card:nth-child(5) { animation-delay: 0.45s; }
            .shop-purpose-card:nth-child(6) { animation-delay: 0.55s; }
            @keyframes shopPurposeFadeIn {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          {/* AstrologyStones */}
          {/* <AstrologyStones /> */}
        </div>
      </MysticBackground>
    </div>
  )
}
