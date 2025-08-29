
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { zodiacInfoData, universalNavigationItems } from '../../data/zodiacInfoData';

interface ZodiacInfoNavigationProps {
  zodiacSign: keyof typeof zodiacInfoData;
}

type NavigationItem = typeof universalNavigationItems[number];

// Discriminated union for ZodiacData to allow for optional planet sections
type ZodiacData = typeof zodiacInfoData[keyof typeof zodiacInfoData] & {
  uranus?: {
    title: string;
    description: string;
    cards: { title: string; content: string }[];
  };
  mercury?: {
    title: string;
    description: string;
    cards: { title: string; content: string }[];
  };
  venus?: {
    title: string;
    description: string;
    cards: { title: string; content: string }[];
  };
  mars?: {
    title: string;
    description: string;
    cards: { title: string; content: string }[];
  };
  saturn?: {
    title: string;
    cards: { title: string; content: string }[];
  };
  moon?: {
    title: string;
    cards: { title: string; content: string }[];
  };
  neptune?: {
    title: string;
    description: string;
    cards: { title: string; content: string }[];
  };
  jupiter?: {
    title: string;
    description: string;
    cards: { title: string; content: string }[];
  };
  pluto?: {
    title: string;
    description: string;
    cards: { title: string; content: string }[];
  };
};

const tabContentMap: Record<string, (data: ZodiacData) => JSX.Element> = {
  about: (data: ZodiacData) => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full mb-4">
          {(() => {
            const Icon = universalNavigationItems[0].icon;
            return <Icon className="w-8 h-8 text-orange-600" />;
          })()}
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{data.about.title}</h2>
        {'description' in data.about && data.about.description && (
          <p className="text-gray-600 max-w-2xl mx-auto">{data.about.description}</p>
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
  {data.about.cards && data.about.cards.map((item: { title: string; content: string }, index: number) => (
          <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  ),
  lucky: (data: ZodiacData) => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full mb-4">
          {(() => {
            const Icon = universalNavigationItems[2].icon;
            return <Icon className="w-8 h-8 text-orange-600" />;
          })()}
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{data.lucky.title || 'Lucky Elements'}</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {data.lucky.categories && data.lucky.categories.map((category: { title: string; items: string[] }, index: number) => (
          <div key={index} className="text-center bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Lucky {category.title}</h3>
            <div className="space-y-2">
              {category.items.map((item: string, i: number) => (
                <div key={i} className="bg-white/60 px-3 py-1 rounded-lg text-sm text-gray-700">{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  compatibility: (data: ZodiacData) => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full mb-4">
          {(() => {
            const Icon = universalNavigationItems[3].icon;
            return <Icon className="w-8 h-8 text-orange-600" />;
          })()}
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{data.compatibility.title || 'Compatibility'}</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Best Matches</h3>
          <div className="space-y-3">
            {data.compatibility.bestMatches && data.compatibility.bestMatches.map((sign: string, i: number) => (
              <div key={i} className="bg-white/60 px-4 py-2 rounded-lg text-center font-medium text-gray-700">{sign}</div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Challenging</h3>
          <div className="space-y-3">
            {data.compatibility.challenging && data.compatibility.challenging.map((sign: string, i: number) => (
              <div key={i} className="bg-white/60 px-4 py-2 rounded-lg text-center font-medium text-gray-700">{sign}</div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Friendship</h3>
          <p className="text-gray-600 text-center">{data.compatibility.friendship}</p>
        </div>
      </div>
    </div>
  ),
  growth: (data: ZodiacData) => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full mb-4">
          {(() => {
            const Icon = universalNavigationItems[4].icon;
            return <Icon className="w-8 h-8 text-orange-600" />;
          })()}
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{data.growth.title || 'Growth & Challenges'}</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl border border-amber-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Areas for Growth</h3>
          <ul className="space-y-3 text-gray-600">
            {data.growth.areasForGrowth && data.growth.areasForGrowth.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Common Challenges</h3>
          <ul className="space-y-3 text-gray-600">
            {data.growth.commonChallenges && data.growth.commonChallenges.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ),
  uranus: (data: ZodiacData) => (
    data.uranus ? (
      <div className="space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full mb-4">
            {(() => {
              const Icon = universalNavigationItems[5].icon;
              return <Icon className="w-8 h-8 text-orange-600" />;
            })()}
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{data.uranus.title || 'Uranus Influence'}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{data.uranus.description}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {data.uranus.cards.map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    ) : <div>Section not available.</div>
  ),
  faq: (data: ZodiacData) => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full mb-4">
          {(() => {
            const Icon = universalNavigationItems[6].icon;
            return <Icon className="w-8 h-8 text-orange-600" />;
          })()}
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{data.faq?.title || 'Frequently Asked Questions'}</h2>
      </div>
      <div className="space-y-6">
  {data.faq?.faqs && data.faq.faqs.map((faq: { question: string; answer: string }, index: number) => (
          <div key={index} className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default function ZodiacInfoNavigation({ zodiacSign }: ZodiacInfoNavigationProps) {
  const [activeTab, setActiveTab] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const data = zodiacInfoData[zodiacSign];
  const navigationItems = data.navigationItems;
  const activeItem = navigationItems.find((item: NavigationItem) => item.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        
        {/* Mobile Dropdown Navigation */}
        <div className="block sm:hidden mb-6">
          <div className="relative">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between bg-white rounded-xl shadow-md px-4 py-3 text-left border border-orange-100"
            >
              <div className="flex items-center gap-3">
                {activeItem && <activeItem.icon className="w-5 h-5 text-orange-600" />}
                <span className="font-medium text-gray-800">{activeItem?.label}</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-orange-100 z-10">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-orange-50 first:rounded-t-xl last:rounded-b-xl transition-colors ${
                        activeTab === item.id ? 'bg-orange-100 text-orange-700' : 'text-gray-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Tab Navigation */}
        <div className="hidden sm:block mb-8">
          <div className="bg-white rounded-2xl shadow-md p-2 border border-orange-100">
            {/* Dynamically set grid-cols based on navigationItems.length for equal spacing */}
            <nav
              className={`grid gap-0 grid-cols-${navigationItems.length}`}
              style={{ gridTemplateColumns: `repeat(${navigationItems.length}, minmax(0, 1fr))` }}
            >
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-gradient-to-br from-orange-100 to-amber-100 text-orange-700 shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-orange-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.shortLabel}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content Panel */}
        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
          <div className="p-6 sm:p-8">
            {tabContentMap[activeTab as keyof typeof tabContentMap]
              ? tabContentMap[activeTab as keyof typeof tabContentMap](data)
              : <div>Section not available.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}