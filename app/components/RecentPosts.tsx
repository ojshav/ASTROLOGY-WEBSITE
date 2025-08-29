'use client'

import { blogPosts } from '../data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/useLanguage';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const posts = Object.values(blogPosts).slice(0, 4); // 1 featured + 3 side

type PostLanguages = {
  en: string;
  hi: string;
};

type AdditionalPost = {
  title: PostLanguages;
  author: PostLanguages;
  date: string;
  category: string;
  imageUrl: string;
  themeColor: string;
};

// Additional mock posts for the new blocks
const additionalPosts: AdditionalPost[] = [
  {
    title: { en: "Mercury Retrograde Guide", hi: "बुध वक्री गाइड" },
    author: { en: "Acharya Raj Kumar", hi: "आचार्य राज कुमार" },
    date: "2024-04-14",
    category: "Naksh",
    imageUrl: "https://res.cloudinary.com/dxwspucxw/image/upload/v1753079351/Mercury_Retrograde_ngktou.jpg",
    themeColor: "#4F46E5"
  },
  {
    title: { en: "Vastu Shastra Tips", hi: "वास्तु शास्त्र टिप्स" },
    author: { en: "Pandit Suresh Sharma", hi: "पंडित सुरेश शर्मा" },
    date: "2024-04-13",
    category: "Vastu",
    imageUrl: "https://res.cloudinary.com/dxwspucxw/image/upload/v1753079524/Vastu_Shastra_f0haqy.jpg",
    themeColor: "#059669"
  }
];

function getSafe(obj: Record<string, string>, lang: string) {
  return obj[lang] || obj['en'];
}

function getSafePost(obj: PostLanguages, lang: string): string {
  if (lang === 'en' || lang === 'hi') {
    return obj[lang as keyof PostLanguages];
  }
  return obj.en;
}

export default function RecentPosts() {
  const { lang, t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth / 2;
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth / 2;
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  // Combine all posts for mobile view
  const allPosts = [
    posts[0],
    additionalPosts[0],
    ...posts.slice(1),
    additionalPosts[1]
  ];

  useEffect(() => {
    checkScrollButtons();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">{t('blog.recent.heading')}</h2>
      
  {/* Desktop View (only on lg+) */}
  <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Two Featured Blogs */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* First Featured Blog - Height matches 2 right blocks */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[470px] md:h-[428px]">
            <div className="relative w-full h-64 md:h-64 flex items-center justify-center" style={{ background: posts[0].themeColor, transition: 'background 0.3s' }}>
              <Image src={posts[0].imageUrl} alt={posts[0].title.en} fill className="object-cover rounded-2xl" />
            </div>
            <div className="p-6 flex flex-col justify-between h-[164px]">
              {(() => {
                return (
                  <>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{getSafe(posts[0].title, lang)}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-4 gap-4 flex-wrap">
                        <span>👤 {getSafe(posts[0].author, lang)}</span>
                        <span>📅 {posts[0].date}</span>
                        <span>⏱ 2 {t('blog.featured.minRead')}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${posts[0].title.en.replace(/\s+/g, '-').toLowerCase()}`}
                      className="inline-block px-6 py-2 rounded-lg bg-black text-white text-base font-semibold shadow hover:bg-gray-800 transition-all w-max">
                      {t('blog.featured.readMore')} →
                    </Link>
                  </>
                );
              })()}
            </div>
          </div>

          {/* Second Featured Blog - Height matches 2 right blocks */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[470px] md:h-[428px]">
            <div className="relative w-full h-64 md:h-64 flex items-center justify-center" style={{ background: additionalPosts[0].themeColor, transition: 'background 0.3s' }}>
              <Image src={additionalPosts[0].imageUrl} alt={additionalPosts[0].title.en} fill className="object-cover rounded-2xl" />
              
            </div>
            <div className="p-6 flex flex-col justify-between h-[164px]">
              {(() => {
                return (
                  <>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{getSafePost(additionalPosts[0].title, lang)}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-4 gap-4 flex-wrap">
                        <span>👤 {getSafePost(additionalPosts[0].author, lang)}</span>
                        <span>📅 {additionalPosts[0].date}</span>
                        <span>⏱ 3 {t('blog.featured.minRead')}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${additionalPosts[0].title.en.replace(/\s+/g, '-').toLowerCase()}`}
                      className="inline-block px-6 py-2 rounded-lg bg-black text-white text-base font-semibold shadow hover:bg-gray-800 transition-all w-max">
                      {t('blog.featured.readMore')} →
                    </Link>
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Right Column: Four Stacked Blogs */}
        <div className="flex flex-col gap-6">
          {posts.slice(1).map((post, i) => {
            return (
              <div key={post.title.en} className="flex flex-row bg-white rounded-2xl shadow-lg overflow-hidden h-[230px] md:h-[200px] w-full md:w-[420px] mx-auto">
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 flex items-center justify-center my-auto mx-4" style={{ background: post.themeColor, transition: 'background 0.3s' }}>
                  <Image src={post.imageUrl} alt={post.title.en} fill className="object-cover rounded-2xl" />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-center">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{getSafe(post.title, lang)}</h4>
                  <div className="flex items-center text-sm text-gray-500 mb-3 gap-3 flex-wrap">
                    <span>📅 {post.date}</span>
                    <span>⏱ {4 + i} {t('blog.featured.minRead')}</span>
                  </div>
                  <Link href={`/blog/${post.title.en.replace(/\s+/g, '-').toLowerCase()}`}
                    className="inline-block px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold shadow hover:bg-gray-800 transition-all w-max">
                    {t('blog.featured.readMore')} →
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Fourth Blog (Additional) */}
          <div className="flex flex-row bg-white rounded-2xl shadow-lg overflow-hidden h-[230px] md:h-[200px] w-full md:w-[420px] mx-auto">
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 flex items-center justify-center my-auto mx-4" style={{ background: additionalPosts[1].themeColor, transition: 'background 0.3s' }}>
              <Image src={additionalPosts[1].imageUrl} alt={additionalPosts[1].title.en} fill className="object-cover rounded-2xl" />
            </div>
            <div className="flex-1 p-4 flex flex-col justify-center">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{getSafePost(additionalPosts[1].title, lang)}</h4>
              <div className="flex items-center text-sm text-gray-500 mb-3 gap-3 flex-wrap">
                <span>📅 {additionalPosts[1].date}</span>
                <span>⏱ 7 {t('blog.featured.minRead')}</span>
              </div>
              <Link href={`/blog/${additionalPosts[1].title.en.replace(/\s+/g, '-').toLowerCase()}`}
                className="inline-block px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold shadow hover:bg-gray-800 transition-all w-max">
                {t('blog.featured.readMore')} →
              </Link>
            </div>
          </div>
        </div>
      </div>

  {/* Mobile/Tablet View - Horizontal Scroll */}
  <div className="lg:hidden">
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-32 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity ${
              canScrollLeft ? 'opacity-100 hover:bg-gray-50' : 'opacity-50 cursor-not-allowed'
            }`}
            style={{ marginLeft: '-20px' }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 top-32 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity ${
              canScrollRight ? 'opacity-100 hover:bg-gray-50' : 'opacity-50 cursor-not-allowed'
            }`}
            style={{ marginRight: '-20px' }}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-2"
            style={{ 
              scrollSnapType: 'x mandatory', 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {allPosts.map((post, index) => {
              const isAdditionalPost = index === 1 || index === allPosts.length - 1;
              // Responsive card width: 2 cards on mobile, 4 on tablet, auto on lg+
              // w-[calc(52%-6px)] for mobile, md:w-[calc(25%-8px)] for tablet
                return (
                  <div
                    key={`mobile-${index}`}
                    className="flex-none w-[calc(52%-6px)] min-w-[170px] snap-start md:w-[calc(25.5%-8px)] md:min-w-[175px] lg:w-[300px]"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[300px] flex flex-col">
                    <div 
                      className="relative w-full h-32 flex-shrink-0" 
                      style={{ 
                        background: post.themeColor, 
                        transition: 'background 0.3s' 
                      }}
                    >
                      <Image 
                        src={post.imageUrl} 
                        alt={post.title.en} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div className="p-3 flex flex-col flex-1">
                      <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                        {isAdditionalPost 
                          ? getSafePost(post.title as PostLanguages, lang)
                          : getSafe(post.title as Record<string, string>, lang)
                        }
                      </h3>
                      <div className="text-xs text-gray-500 mb-3 space-y-1">
                        <div>📅 {post.date}</div>
                        <div>⏱ {index + 2} {t('blog.featured.minRead')}</div>
                      </div>
                      <div className="mt-auto">
                        <Link 
                          href={`/blog/${post.title.en.replace(/\s+/g, '-').toLowerCase()}`}
                          className="block w-full px-3 py-2 rounded-lg bg-black text-white text-xs font-semibold text-center hover:bg-gray-800 transition-all"
                        >
                          {t('blog.featured.readMore')} →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}