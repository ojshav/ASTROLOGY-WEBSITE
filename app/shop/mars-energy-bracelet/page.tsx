"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { UniversalCartButton } from '../../components/UniversalCartButton';
import ProductAssuranceBar from '../../components/ProductAssuranceBar';
import ProductPurchaseInfo from '../../components/ProductPurchaseInfo';
import { ProductServiceCard } from "../../components/UniversalServiceGrid";
import ServiceCarousels from '../../components/ServiceCarousels';
import NakshatraGyaanBanner from '../../components/NakshatraGyaanBanner';
import SpiritualJourneyBanner from '../../components/SpiritualJourneyBanner';
import { useCart } from '../../contexts/CartContext';

// Mars Energy Bracelet Product Configuration
const marsEnergyBracelet = {
  title: "Mars Energy Bracelet",
  images: [
    "/images/products/mars-energy-bracelet-main.jpg",
    "/images/products/mars-bracelet-detail-1.jpg",
    "/images/products/mars-bracelet-detail-2.jpg",
    "/images/products/mars-bracelet-packaging.jpg",
    "/images/products/mars-bracelet-wearing.jpg",
    "/images/products/mars-bracelet-gift.jpg",
  ],
  variants: [
    { label: "Red Jasper Beads", image: "/images/products/mars-bracelet-red-jasper.jpg" },
    { label: "Carnelian Beads", image: "/images/products/mars-bracelet-carnelian.jpg" },
  ],
  features: ["Mars Planet Energy", "Courage & Strength", "Natural Gemstones"],
  price: "₹1,299",
  oldPrice: "₹2,499",
  discount: "48% OFF",
  offerEnds: "02 hr : 15 min : 45 sec",
  rating: 4.7,
  reviews: 892,
  orders: 1245,
};

// Mars Energy Bracelet FAQs
const marsEnergyFaqs = [
  {
    question: "What is the Mars Energy Bracelet and how does it work?",
    answer: "The Mars Energy Bracelet is crafted with natural gemstones that resonate with Mars planet energy. Mars represents courage, strength, leadership, and determination. Wearing this bracelet helps channel Mars's positive energy to enhance your confidence, overcome obstacles, and achieve your goals.",
  },
  {
    question: "Which gemstones are used in the Mars Energy Bracelet?",
    answer: "Our Mars Energy Bracelet features authentic Red Jasper and Carnelian beads, both powerful Mars stones. Red Jasper enhances courage and physical strength, while Carnelian boosts confidence, motivation, and leadership qualities. These stones work together to amplify Mars's beneficial energy.",
  },
  {
    question: "How do I know if I need Mars energy in my life?",
    answer: "You may benefit from Mars energy if you experience lack of confidence, fear of taking action, low energy levels, difficulty in leadership roles, or feeling stuck in achieving your goals. Mars energy helps overcome these challenges and brings courage and determination.",
  },
  {
    question: "How should I wear the Mars Energy Bracelet?",
    answer: "Wear the bracelet on your right wrist for maximum Mars energy absorption. It's best to wear it during the day, especially when you need courage or strength. You can also wear it during Mars hora (Tuesday) for enhanced benefits. Cleanse it monthly with running water.",
  },
  {
    question: "How long does it take to see the effects?",
    answer: "Effects vary by individual. Some people feel immediate confidence and energy boost, while others notice gradual improvements over 2-4 weeks of consistent wearing. The bracelet works by aligning your energy with Mars's positive vibrations.",
  },
  {
    question: "Is this bracelet suitable for everyone?",
    answer: "The Mars Energy Bracelet is generally suitable for most people, especially those seeking courage, strength, and leadership qualities. However, if you have Mars in a strong position in your birth chart, consult an astrologer first to ensure it's beneficial for you.",
  },
  {
    question: "How do I care for and maintain my Mars Energy Bracelet?",
    answer: "Clean your bracelet monthly with running water to remove negative energy. Avoid exposing it to harsh chemicals or extreme temperatures. Store it in a clean, dry place when not wearing. The natural stones will maintain their energy with proper care.",
  },
  {
    question: "Can I wear this bracelet with other gemstone jewelry?",
    answer: "Yes, the Mars Energy Bracelet can be worn with other gemstone jewelry. However, avoid wearing it with Venus-ruled stones (like diamonds or white pearls) simultaneously, as Mars and Venus have opposing energies. It pairs well with Sun and Jupiter stones.",
  },
];

// Related Products
const relatedProducts = [
  {
    title: 'Sun Energy Bracelet',
    image: '/images/products/sun-energy-bracelet.jpg',
    price: '₹1,199',
    oldPrice: '₹2,299',
    slug: 'sun-energy-bracelet',
  },
  {
    title: 'Jupiter Energy Bracelet',
    image: '/images/products/jupiter-energy-bracelet.jpg',
    price: '₹1,399',
    oldPrice: '₹2,599',
    slug: 'jupiter-energy-bracelet',
  },
  {
    title: 'Moon Energy Bracelet',
    image: '/images/products/moon-energy-bracelet.jpg',
    price: '₹1,099',
    oldPrice: '₹2,199',
    slug: 'moon-energy-bracelet',
  },
  {
    title: 'Saturn Energy Bracelet',
    image: '/images/products/saturn-energy-bracelet.jpg',
    price: '₹1,299',
    oldPrice: '₹2,399',
    slug: 'saturn-energy-bracelet',
  },
];

export default function MarsEnergyBraceletPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());
  const { items, updateQuantity } = useCart();

  // Find if this product is already in cart and get its quantity
  const productId = "mars-energy-bracelet";
  const cartItem = items.find(item => item.id === productId);
  const cartQuantity = cartItem?.quantity || 0;

  // Sync local quantity with cart quantity when cart changes
  useEffect(() => {
    if (cartQuantity > 0) {
      setQuantity(cartQuantity);
    }
  }, [cartQuantity]);

  // Real-time offer timer
  const OFFER_DURATION = 2 * 60 * 60 + 15 * 60 + 45; // 2 hr 15 min 45 sec in seconds
  const [secondsLeft, setSecondsLeft] = useState(OFFER_DURATION);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  function formatTime(secs: number) {
    const h = Math.floor(secs / 3600).toString().padStart(2, '0');
    const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${h} hr : ${m} min : ${s} sec`;
  }

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
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8">
          {/* Left: Main Image and Thumbnails */}
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full rounded-xl overflow-hidden bg-[#f7f5ed] flex items-center justify-center mb-3" style={{ aspectRatio: '1/1', maxWidth: 340 }}>
              <Image
                src={marsEnergyBracelet.images[selectedImage]}
                alt={marsEnergyBracelet.title}
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-row gap-2 w-full overflow-x-auto pb-2">
              {marsEnergyBracelet.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg border-2 ${selectedImage === idx ? 'border-black' : 'border-transparent'} overflow-hidden focus:outline-none`}
                  style={{ minWidth: 54, minHeight: 54 }}
                >
                  <Image src={img} alt={marsEnergyBracelet.title} width={54} height={54} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          </div>
          {/* Right: Product Info */}
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#23244a]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>{marsEnergyBracelet.title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#FFD700] text-lg">&#9733;</span>
              <span className="text-base font-medium text-[#23244a]">{marsEnergyBracelet.rating}</span>
              <span className="text-sm text-[#23244a]">{marsEnergyBracelet.reviews} reviews</span>
            </div>
            <div className="flex gap-2 mt-2">
              {marsEnergyBracelet.features.map((f, i) => (
                <span key={f} className={`px-3 py-0.5 rounded-full text-xs font-medium ${i === 0 ? 'bg-red-100 text-red-800' : i === 1 ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>{f}</span>
              ))}
            </div>
            <div className="flex items-end gap-3 mt-3">
              {secondsLeft === 0 ? (
                <span className="text-xl font-bold text-black" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>{marsEnergyBracelet.oldPrice}</span>
              ) : (
                <>
                  <span className="text-xl font-bold text-black" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>{marsEnergyBracelet.price}</span>
                  <span className="text-base text-gray-400 line-through">{marsEnergyBracelet.oldPrice}</span>
                  <span className="text-base font-semibold text-green-700">{marsEnergyBracelet.discount}</span>
                </>
              )}
            </div>
            <div className="text-red-600 font-medium text-sm mt-1">
              {secondsLeft > 0 ? `Offer ends in ${formatTime(secondsLeft)}` : 'Offer ended'}
            </div>
            {/* Product Variants */}
            <div className="flex gap-4 mt-3">
              {marsEnergyBracelet.variants.map((v, idx) => (
                <button
                  key={v.label}
                  onClick={() => setSelectedVariant(idx)}
                  className={`flex flex-col items-center gap-1 focus:outline-none ${selectedVariant === idx ? 'ring-2 ring-black' : ''}`}
                >
                  <Image src={v.image} alt={v.label} width={40} height={40} className="rounded-full object-cover" />
                  <span className="text-xs text-[#23244a] mt-1 font-normal">{v.label}</span>
                </button>
              ))}
            </div>
            {/* Quantity Selector */}
            <div className="flex items-center gap-3 mt-3">
              <span className="text-sm text-[#23244a]">Quantity</span>
              <button
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-lg font-bold text-[#23244a] bg-white"
                onClick={() => {
                  const newQty = Math.max(1, quantity - 1);
                  setQuantity(newQty);
                  if (cartQuantity > 0) {
                    updateQuantity(productId, newQty);
                  }
                }}
              >-</button>
              <span className="text-base font-medium text-[#23244a] w-7 text-center">{quantity}</span>
              <button
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-lg font-bold text-[#23244a] bg-white"
                onClick={() => {
                  const newQty = quantity + 1;
                  setQuantity(newQty);
                  if (cartQuantity > 0) {
                    updateQuantity(productId, newQty);
                  }
                }}
              >+</button>
              {cartQuantity > 0 && (
                <span className="text-xs text-green-600 ml-2">({cartQuantity} in cart)</span>
              )}
            </div>
            <div className="text-xs text-gray-600 mt-1">{marsEnergyBracelet.orders.toLocaleString()} orders placed in the last 24 hours</div>
            {/* Delivery Date Input */}
            <div className="mt-3 bg-gray-100 rounded-lg p-3 flex flex-col gap-2">
              <span className="text-xs font-medium text-[#23244a]">ESTIMATED DELIVERY DATE</span>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter your pincode"
                  value={pincode}
                  onChange={e => setPincode(e.target.value)}
                  className="rounded-md px-3 py-1.5 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#23244a] bg-white"
                  style={{ maxWidth: 120 }}
                />
                <button className="bg-black text-white px-4 py-1.5 rounded-md font-semibold text-sm hover:bg-[#23244a] transition">CHECK</button>
              </div>
            </div>
            {/* Add to Cart / Buy Now */}
            <div className="flex gap-3 mt-5">
              <UniversalCartButton
                productId={productId}
                productName={marsEnergyBracelet.title}
                price={Number(marsEnergyBracelet.price.replace(/[^\d]/g, ''))}
                image={marsEnergyBracelet.images[0]}
                quantity={quantity}
                className="flex-1 bg-black text-white py-3 rounded-md font-semibold text-base hover:bg-[#23244a] transition"
              >
                {cartQuantity > 0 ? 'UPDATE CART' : 'ADD TO CART'}
              </UniversalCartButton>
              <button className="flex-1 bg-yellow-400 text-black py-3 rounded-md font-semibold text-base hover:bg-yellow-500 transition">BUY IT NOW</button>
            </div>
          </div>
        </div>
        {/* ProductAssuranceBar */}
        <ProductAssuranceBar />
        {/* FAQ Section */}
        <div className="w-screen overflow-x-clip mt-14 mb-10" style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
          <div className="max-w-5xl w-full mx-auto px-2 md:px-0">
            <h2 className="text-2xl md:text-3xl font-semibold mb-7 text-[#23244a] text-center" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.02em' }}>Frequently Asked Questions</h2>
            <div className="space-y-5 w-full">
              {marsEnergyFaqs.map((faq, idx) => {
                const isOpen = openFaqs.has(idx);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                    className="rounded-xl border border-gray-200 bg-white/80 shadow-md p-4 group hover:shadow-lg transition-all w-full"
                  >
                    <button
                      className="w-full text-left font-medium text-[#23244a] cursor-pointer text-base group-open:text-[#77A656] focus:outline-none flex justify-between items-center"
                      onClick={() => {
                        const newOpenFaqs = new Set(openFaqs);
                        if (isOpen) {
                          newOpenFaqs.delete(idx);
                        } else {
                          newOpenFaqs.add(idx);
                        }
                        setOpenFaqs(newOpenFaqs);
                      }}
                      aria-expanded={isOpen}
                    >
                      {faq.question}
                      <span className={`ml-2 transition-transform text-lg ${isOpen ? 'rotate-90' : ''}`}>▶</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 text-[#2C3A4B] text-sm leading-relaxed">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        {/* ProductPurchaseInfo */}
        <ProductPurchaseInfo />
        {/* Full-width ServiceCarousels */}
        <div className="w-screen overflow-x-clip" style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
          <ServiceCarousels />
        </div>
        {/* Nakshatra Gyaan Banner */}
        <NakshatraGyaanBanner />
        {/* Related Products */}
        <div className="w-screen overflow-x-clip mb-16" style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#23244a] text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Related Products</h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-8">
            {relatedProducts.map(product => (
              <div key={product.slug} className="group">
                <ProductServiceCard
                  image={product.image}
                  title={product.title}
                  description={product.oldPrice ? `${product.price} (was ${product.oldPrice})` : product.price}
                  badge={product.oldPrice ? 'Recommended' : ''}
                  href={`/shop/${product.slug}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Spiritual Journey Banner */}
        <SpiritualJourneyBanner />
      </div>
    </>
  );
} 