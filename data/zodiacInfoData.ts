// zodiacInfoData.ts
// Data for all zodiac signs, structured for easy extension
import {
  Sparkles,
  Heart,
  Zap,
  Star,
  Gem,
  TrendingUp,
  HelpCircle,
} from "lucide-react";

// Universal navigation items for all zodiac signs
export const universalNavigationItems = [
  { id: "about", label: "About", shortLabel: "About", icon: Sparkles },
  { id: "lucky", label: "Lucky Elements", shortLabel: "Lucky", icon: Gem },
  {
    id: "compatibility",
    label: "Compatibility",
    shortLabel: "Match",
    icon: Heart,
  },
  { id: "growth", label: "Growth", shortLabel: "Growth", icon: TrendingUp },
  { id: "uranus", label: "Uranus", shortLabel: "Uranus", icon: Zap },
  { id: "faq", label: "FAQ", shortLabel: "FAQ", icon: HelpCircle },
];

export const zodiacInfoData = {
  aquarius: {
    navigationItems: universalNavigationItems,
    about: {
      title: "About Aquarius",
      description:
        "The innovative water bearer, bringing revolutionary ideas and humanitarian spirit to the world.",
      cards: [
        {
          title: "Element & Quality",
          content:
            "Air sign with Fixed quality. Aquarius represents innovation, humanitarianism, and a unique perspective on the world.",
        },
        {
          title: "Ruling Planet",
          content:
            "Uranus, the planet of innovation, rebellion, and sudden change. This gives Aquarius their revolutionary spirit and originality.",
        },
        {
          title: "Natural Strengths",
          content:
            "Innovation, independence, humanitarianism, intellectual curiosity, and thinking outside the box.",
        },
      ],
    },
    daily: {
      title: "Daily Insights",
      forecast: {
        title: ",Today’s Forecast",
        description:
          "Uranus aligns with Mercury today, bringing innovative ideas and opportunities for intellectual breakthroughs. Embrace your unique perspective.",
        luckyNumber: "11",
        bestTime: "3-5 PM",
      },
      weekly: {
        title: "Weekly Focus",
        description:
          "This week emphasizes innovation and humanitarian efforts. Perfect time to share your unique ideas and work toward positive change.",
        keyThemes: [
          "Innovation and creativity",
          "Community connections",
          "Progressive thinking",
        ],
      },
    },
    lucky: {
      title: "Lucky Elements",
      categories: [
        {
          title: "Colors",
          items: ["Electric Blue", "Turquoise", "Silver", "Purple"],
        },
        { title: "Numbers", items: ["4", "7", "11", "22", "29"] },
        { title: "Days", items: ["Saturday", "Wednesday"] },
        {
          title: "Stones",
          items: ["Amethyst", "Aquamarine", "Clear Quartz", "Fluorite"],
        },
      ],
    },
    compatibility: {
      title: "Compatibility",
      bestMatches: ["Gemini", "Libra", "Sagittarius", "Aries"],
      challenging: ["Taurus", "Scorpio"],
      friendship:
        "Excellent with Air and Fire signs who value intellectual connection and independence.",
    },
    growth: {
      title: "Growth & Challenges",
      areasForGrowth: [
        "Learning emotional expression",
        "Developing patience",
        "Balancing independence with connection",
      ],
      commonChallenges: [
        "Being too detached emotionally",
        "Fixed opinions and stubbornness",
        "Sometimes too idealistic",
      ],
    },
    uranus: {
      title: "Uranus Influence",
      description:
        "The revolutionary planet that shapes Aquarius' innovative spirit and desire for change.",
      cards: [
        {
          title: "Innovation & Rebellion",
          content:
            "Uranus gives Aquarius a revolutionary spirit, love for innovation, and desire to break free from traditional norms and create positive change in the world.",
        },
        {
          title: "Originality & Independence",
          content:
            "Aquarius' Uranian influence brings unique perspectives, intellectual curiosity, and a strong need for personal freedom and authentic self-expression.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Why are Aquarius so innovative?",
          answer:
            "Aquarius' ruling planet Uranus brings a revolutionary spirit and love for innovation. They are naturally drawn to new ideas and progressive thinking.",
        },
        {
          question: "What careers suit Aquarius?",
          answer:
            "Technology, science, humanitarian work, social activism, research, and any field requiring innovation, originality, and progressive thinking.",
        },
        {
          question: "How can Aquarius improve relationships?",
          answer:
            "By being more emotionally expressive, developing patience, and balancing their need for independence with emotional connection and intimacy.",
        },
      ],
    },
  },

  libra: {
    navigationItems: universalNavigationItems,
    about: {
      title: "About Libra",
      description:
        "The balanced air sign, known for harmony, diplomacy, and a love for beauty and fairness.",
      cards: [
        {
          title: "Element & Quality",
          content:
            "Air sign with Cardinal quality. Libra represents balance, harmony, and a natural desire for justice and beauty.",
        },
        {
          title: "Ruling Planet",
          content:
            "Venus, the planet of love, beauty, and harmony. This gives Libra their appreciation for aesthetics, diplomacy, and balanced relationships.",
        },
        {
          title: "Natural Strengths",
          content:
            "Diplomacy, fairness, charm, artistic sense, and natural ability to see both sides of any situation. Libra excels in creating harmony.",
        },
      ],
    },
    daily: {
      title: "Daily Insights",
      forecast: {
        title: "Today's Forecast",
        description:
          "Venus aligns with Jupiter today, bringing opportunities for harmony, beauty, and balanced decision-making. Your diplomatic skills are enhanced.",
        luckyNumber: "6",
        bestTime: "3:00 PM - 5:00 PM",
      },
      weekly: {
        title: "Weekly Focus",
        description:
          "This week emphasizes balance and harmony. Perfect time to resolve conflicts, make fair decisions, and surround yourself with beauty.",
        keyThemes: [
          "Harmony and balance",
          "Diplomacy in relationships",
          "Appreciation for beauty",
        ],
      },
    },
    lucky: {
      title: "Lucky Elements",
      categories: [
        { title: "Colors", items: ["Pink", "Blue", "Green", "White"] },
        { title: "Numbers", items: ["6", "7", "15", "24", "33"] },
        { title: "Days", items: ["Friday", "Monday"] },
        { title: "Stones", items: ["Rose Quartz", "Opal", "Lapis Lazuli"] },
      ],
    },
    compatibility: {
      title: "Compatibility",
      bestMatches: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
      challenging: ["Cancer", "Capricorn"],
      friendship:
        "Excellent with Air and Fire signs. Libra values intellectual conversations, fairness, and harmonious relationships.",
    },
    growth: {
      title: "Growth & Challenges",
      areasForGrowth: [
        "Learning to make decisions more confidently",
        "Developing assertiveness",
        "Balancing the needs of others with their own needs",
      ],
      commonChallenges: [
        "Indecisiveness",
        "People-pleasing",
        "Avoiding conflict at all costs",
      ],
    },
    venus: {
      title: "Venus Influence",
      description:
        "Venus, the planet of love and beauty, shapes Libra’s romantic, diplomatic, and aesthetic nature.",
      cards: [
        {
          title: "Love & Relationships",
          content:
            "Venus makes Libra naturally romantic and diplomatic. They seek balanced, harmonious relationships and value partnership deeply.",
        },
        {
          title: "Aesthetics & Beauty",
          content:
            "Libra has an innate appreciation for beauty, art, and elegance. They enjoy creating beautiful environments and experiences.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Why are Libra so indecisive?",
          answer:
            "Libra's desire to see all sides of a situation and their fear of making the wrong choice can lead to indecision. They want to make the fairest decision.",
        },
        {
          question: "What careers suit Libra?",
          answer:
            "Law, diplomacy, interior design, fashion, counseling, and any field requiring fairness, beauty, and interpersonal skills.",
        },
        {
          question: "How can Libra improve relationships?",
          answer:
            "By being more decisive, learning to express their own needs clearly, and finding the right balance between compromise and self-assertion.",
        },
      ],
    },
  },
  aries: {
    navigationItems: universalNavigationItems,
    about: {
      title: "About Aries",
      description:
        "The pioneering fire sign, known for leadership, courage, and boundless energy.",
      cards: [
        {
          title: "Element & Quality",
          content:
            "Fire sign with Cardinal quality. Aries represents initiative, passion, and a drive to lead and conquer.",
        },
        {
          title: "Ruling Planet",
          content:
            "Mars, the planet of action, desire, and motivation. This gives Aries their boldness and competitive spirit.",
        },
        {
          title: "Natural Strengths",
          content:
            "Leadership, courage, determination, honesty, optimism, and passion.",
        },
      ],
    },
    daily: {
      title: "Daily Insights",
      forecast: {
        description:
          "Mars energizes you today—perfect for bold moves and new beginnings. Trust your instincts and take the lead.",
        luckyNumber: "9",
        bestTime: "6-9 AM",
      },
      weekly: {
        description:
          "This week, focus on channeling your energy into productive pursuits. Great time for starting projects and inspiring others.",
        keyThemes: [
          "Initiative and leadership",
          "Courage in challenges",
          "Inspiring others",
        ],
      },
    },
    lucky: {
      title: "Lucky Elements",
      categories: [
        { title: "Colors", items: ["Red", "Scarlet", "Crimson", "White"] },
        { title: "Numbers", items: ["1", "9", "18", "27"] },
        { title: "Days", items: ["Tuesday", "Saturday"] },
        { title: "Stones", items: ["Ruby", "Red Jasper", "Carnelian"] },
      ],
    },
    compatibility: {
      title: "Compatibility",
      bestMatches: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
      challenging: ["Cancer", "Capricorn", "Virgo"],
      friendship:
        "Best with Fire and Air signs who match Aries’ energy and enthusiasm.",
    },
    growth: {
      title: "Growth & Challenges",
      areasForGrowth: [
        "Practicing patience",
        "Developing empathy",
        "Balancing impulsiveness with planning",
      ],
      commonChallenges: [
        "Impatience",
        "Quick temper",
        "Difficulty with routine tasks",
      ],
    },
    uranus: {
      title: "Mars Influence",
      description:
        "Mars, the red planet, fuels Aries’ drive, courage, and pioneering spirit.",
      cards: [
        {
          title: "Action & Initiative",
          content:
            "Mars gives Aries the courage to take risks, start new ventures, and lead others.",
        },
        {
          title: "Competitive Edge",
          content:
            "Aries’ Martian energy brings a love for competition and a desire to be first.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Why are Aries so impatient?",
          answer:
            "Mars energy creates urgency. Aries want immediate results and action.",
        },
        {
          question: "What careers suit Aries?",
          answer:
            "Entrepreneurship, sports, military, sales, and any field requiring initiative and leadership.",
        },
        {
          question: "How can Aries improve relationships?",
          answer:
            "By practicing patience, listening more, and considering others’ feelings.",
        },
      ],
    },
  },
  capricorn: {
    navigationItems: universalNavigationItems,
    about: {
      title: "About Capricorn",
      cards: [
        {
          title: "Element & Quality",
          content:
            "Earth sign with Cardinal quality. Capricorn represents ambition, discipline, and a practical approach to achieving goals.",
        },
        {
          title: "Ruling Planet",
          content:
            "Saturn, the planet of discipline, responsibility, and structure. This gives Capricorn their determination, patience, and ability to build lasting foundations.",
        },
        {
          title: "Natural Strengths",
          content:
            "Ambition, discipline, patience, responsibility, and practical wisdom. Capricorn excels in building and achieving long-term goals.",
        },
      ],
    },
    daily: {
      title: "Daily Insights for Capricorn",
      forecast: {
        description:
          "Saturn aligns with Venus today, bringing opportunities for building relationships and achieving career goals. Focus on practical steps toward your ambitions.",
        luckyNumber: "8",
        bestTime: "2:00 PM - 4:00 PM",
      },
      weekly: {
        description:
          "This week emphasizes discipline and achievement. Perfect time to set new goals, work on long-term projects, and build solid foundations.",
      },
    },
    lucky: {
      title: "Lucky Elements for Capricorn",
      categories: [
        { title: "Colors", items: ["Brown", "Black", "Gray", "Dark Green"] },
        { title: "Numbers", items: ["4", "8", "13", "17", "22", "26"] },
        { title: "Days", items: ["Saturday", "Tuesday"] },
        {
          title: "Stones",
          items: ["Onyx", "Obsidian", "Jet", "Black Tourmaline"],
        },
      ],
    },
    compatibility: {
      title: "Capricorn Compatibility",
      bestMatches: ["Taurus", "Virgo", "Scorpio", "Pisces"],
      challenging: ["Aries", "Libra"],
      friendship:
        "Excellent with Earth and Water signs. Capricorn values loyalty, reliability, and shared goals in friendships.",
    },
    growth: {
      title: "Growth & Challenges",
      areasForGrowth: [
        "Learning to relax",
        "Developing emotional expression",
        "Balancing work with personal life",
        "Embracing spontaneity and joy",
      ],
      commonChallenges: [
        "Being too serious",
        "Perfectionism",
        "Sometimes being too rigid. Learning to enjoy life and be more flexible is key.",
      ],
    },
    saturn: {
      title: "Saturn Influence on Capricorn",
      cards: [
        {
          title: "Discipline & Structure",
          content:
            "Saturn gives Capricorn a strong sense of responsibility, discipline, and the ability to build lasting structures and achieve long-term goals.",
        },
        {
          title: "Patience & Wisdom",
          content:
            "Capricorn's Saturnian influence brings patience, practical wisdom, and a methodical approach to life and success.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Why are Capricorns so ambitious?",
          answer:
            "Saturn’s influence gives Capricorn a strong drive for achievement and responsibility.",
        },
        {
          question: "What careers suit Capricorn?",
          answer:
            "Business, finance, management, law, engineering, and any field requiring discipline and long-term planning.",
        },
        {
          question: "How can Capricorn improve relationships?",
          answer:
            "By being more emotionally expressive, learning to relax, and balancing work with personal life.",
        },
      ],
    },
  },
  gemini: {
    navigationItems: universalNavigationItems,
    about: {
      title: "About Gemini",
      description:
        "The adaptable air sign, known for wit, curiosity, and communication skills.",
      cards: [
        {
          title: "Element & Quality",
          content:
            "Air sign with Mutable quality. Gemini represents communication, adaptability, and intellectual curiosity.",
        },
        {
          title: "Ruling Planet",
          content:
            "Mercury, the planet of communication, intellect, and quick thinking. This gives Gemini their natural gift for expression and learning.",
        },
        {
          title: "Natural Strengths",
          content:
            "Versatility, communication skills, intellectual curiosity, adaptability, and social charm. Gemini excels in connecting with others.",
        },
      ],
    },
    daily: {
      title: "Daily Insights",
      forecast: {
        description:
          "Mercury aligns with Jupiter today, bringing opportunities for learning, travel, and meaningful conversations. Perfect day for networking.",
        luckyNumber: "5",
        bestTime: "10:00 AM - 12:00 PM",
      },
      weekly: {
        description:
          "This week emphasizes communication and learning. Perfect time to start new projects, connect with friends, and expand your knowledge.",
        keyThemes: [
          "Communication and networking",
          "Learning and curiosity",
          "Social connections",
        ],
      },
    },
    lucky: {
      title: "Lucky Elements",
      categories: [
        { title: "Colors", items: ["Yellow", "Orange", "Light Blue", "White"] },
        { title: "Numbers", items: ["3", "5", "7", "12", "21"] },
        { title: "Days", items: ["Wednesday", "Friday"] },
        { title: "Stones", items: ["Agate", "Pearl", "Citrine"] },
      ],
    },
    compatibility: {
      title: "Compatibility",
      bestMatches: ["Libra", "Aquarius", "Aries", "Leo"],
      challenging: ["Pisces", "Virgo"],
      friendship:
        "Excellent with Air and Fire signs. Gemini values mental connection and stimulating conversations.",
    },
    growth: {
      title: "Growth & Challenges",
      areasForGrowth: [
        "Learning to focus and commit",
        "Developing emotional depth",
        "Finding balance between variety and consistency",
      ],
      commonChallenges: ["Restlessness", "Inconsistency", "Superficiality"],
    },
    uranus: {
      title: "Mercury Influence",
      description:
        "Mercury, the planet of intellect and communication, gives Gemini their quick wit and adaptability.",
      cards: [
        {
          title: "Communication & Learning",
          content:
            "Mercury makes Gemini naturally gifted communicators and learners. They excel in writing, speaking, and absorbing new information quickly.",
        },
        {
          title: "Adaptability & Versatility",
          content:
            "Gemini’s mutable nature combined with Mercury’s quick thinking makes them highly adaptable and able to handle multiple tasks simultaneously.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Why are Geminis so talkative?",
          answer:
            "Mercury’s influence makes Gemini natural communicators. They process thoughts through speaking and love sharing ideas with others.",
        },
        {
          question: "What careers suit Gemini?",
          answer:
            "Journalism, teaching, sales, marketing, public relations, and any field requiring communication, versatility, and quick thinking.",
        },
        {
          question: "How can Gemini improve relationships?",
          answer:
            "By developing emotional depth, learning to commit and follow through, and balancing their need for variety with stability.",
        },
      ],
    },
  },
  leo: {
    navigationItems: universalNavigationItems,
    about: {
      title: "About Leo",
      description:
        "The radiant fire sign, known for leadership, creativity, and charisma.",
      cards: [
        {
          title: "Element & Quality",
          content:
            "Fire sign with Fixed quality. Leo represents creativity, leadership, and a natural desire to shine and inspire others.",
        },
        {
          title: "Ruling Planet",
          content:
            "The Sun, the center of our solar system and source of life. This gives Leo their natural charisma, confidence, and radiant personality.",
        },
        {
          title: "Natural Strengths",
          content:
            "Leadership, creativity, generosity, loyalty, and natural charisma. Leo excels in inspiring others and taking center stage.",
        },
      ],
    },
    daily: {
      title: "Daily Insights",
      forecast: {
        description:
          "The Sun aligns with Jupiter today, bringing opportunities for leadership, recognition, and creative success. Your natural charisma is amplified.",
        luckyNumber: "1",
        bestTime: "12:00 PM - 2:00 PM",
      },
      weekly: {
        description:
          "This week emphasizes leadership and creativity. Perfect time to take charge, express yourself, and inspire others with your natural talents.",
        keyThemes: [
          "Leadership and recognition",
          "Creative expression",
          "Inspiring others",
        ],
      },
    },
    lucky: {
      title: "Lucky Elements",
      categories: [
        { title: "Colors", items: ["Gold", "Orange", "Red", "Purple"] },
        { title: "Numbers", items: ["1", "4", "10", "22", "31"] },
        { title: "Days", items: ["Sunday", "Tuesday"] },
        { title: "Stones", items: ["Ruby", "Amber", "Tiger Eye"] },
      ],
    },
    compatibility: {
      title: "Compatibility",
      bestMatches: ["Aries", "Sagittarius", "Gemini", "Libra"],
      challenging: ["Taurus", "Scorpio"],
      friendship:
        "Excellent with Fire and Air signs. Leo values loyalty, fun, and mutual admiration in friendships.",
    },
    growth: {
      title: "Growth & Challenges",
      areasForGrowth: [
        "Learning to share the spotlight",
        "Developing humility",
        "Balancing confidence with sensitivity to others",
      ],
      commonChallenges: ["Pride", "Stubbornness", "Being too self-centered"],
    },
    uranus: {
      title: "Sun Influence",
      description:
        "The Sun, source of Leo’s vitality, gives them confidence, creativity, and a magnetic personality.",
      cards: [
        {
          title: "Leadership & Charisma",
          content:
            "The Sun makes Leo natural leaders with magnetic personalities. They have an innate ability to inspire and motivate others.",
        },
        {
          title: "Creativity & Expression",
          content:
            "Leo’s solar influence gives them a natural flair for drama, creativity, and self-expression. They love to entertain and be entertained.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Why are Leos so confident?",
          answer:
            "The Sun’s influence makes Leo naturally confident and self-assured. They have an innate sense of their own worth and abilities.",
        },
        {
          question: "What careers suit Leo?",
          answer:
            "Acting, politics, teaching, sales, entertainment, and any field requiring leadership, creativity, and public speaking.",
        },
        {
          question: "How can Leo improve relationships?",
          answer:
            "By learning to share attention, developing humility, and balancing their need for recognition with genuine care for others.",
        },
      ],
    },
  },
  cancer: {
    navigationItems: universalNavigationItems,
    about: {
      title: "About Cancer",
      cards: [
        {
          title: "Element & Quality",
          content:
            "Water sign with Cardinal quality. Cancer represents emotional depth, nurturing instincts, and strong family bonds.",
        },
        {
          title: "Ruling Planet",
          content:
            "The Moon, the planet of emotions, intuition, and the subconscious. This gives Cancer their deep emotional sensitivity and nurturing nature.",
        },
        {
          title: "Natural Strengths",
          content:
            "Intuition, emotional intelligence, nurturing abilities, loyalty, and strong protective instincts. Cancer excels in creating safe, loving environments.",
        },
      ],
    },
    daily: {
      title: "Daily Insights for Cancer",
      forecast: {
        description:
          "The Moon aligns with Venus today, bringing opportunities for emotional healing and deepening relationships. Trust your intuition.",
        luckyNumber: "2",
        bestTime: "7:00 PM - 9:00 PM",
      },
      weekly: {
        description:
          "This week emphasizes emotional well-being and family connections. Perfect time to nurture relationships and create a peaceful home environment.",
      },
    },
    lucky: {
      title: "Lucky Elements for Cancer",
      categories: [
        { title: "Colors", items: ["Silver", "White", "Pale Blue", "Cream"] },
        { title: "Numbers", items: ["2", "7", "11", "16", "20"] },
        { title: "Days", items: ["Monday", "Thursday"] },
        { title: "Stones", items: ["Pearl", "Moonstone", "Opal"] },
      ],
    },
    compatibility: {
      title: "Cancer Compatibility",
      bestMatches: ["Scorpio", "Pisces", "Taurus", "Virgo"],
      challenging: ["Aries", "Libra"],
      friendship:
        "Excellent with Water and Earth signs. Cancer values emotional connection and loyalty in friendships.",
    },
    growth: {
      title: "Growth & Challenges",
      areasForGrowth: [
        "Learning to set healthy boundaries",
        "Developing independence",
        "Balancing emotional sensitivity with practical action",
      ],
      commonChallenges: [
        "Over-sensitivity",
        "Moodiness",
        "Sometimes being too clingy. Learning to manage emotions and develop self-reliance is key.",
      ],
    },
    moon: {
      title: "Moon Influence on Cancer",
      cards: [
        {
          title: "Emotional Depth & Intuition",
          content:
            "The Moon makes Cancer deeply intuitive and emotionally sensitive. They have a natural ability to understand others' feelings and create nurturing environments.",
        },
        {
          title: "Nurturing & Protection",
          content:
            "Cancer's lunar influence gives them strong maternal instincts and a deep need to protect and care for loved ones.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Why are Cancers so emotional?",
          answer:
            "The Moon’s influence makes Cancer deeply sensitive and intuitive.",
        },
        {
          question: "What careers suit Cancer?",
          answer:
            "Nursing, counseling, teaching, real estate, hospitality, and any field requiring empathy and care.",
        },
        {
          question: "How can Cancer improve relationships?",
          answer:
            "By setting healthy boundaries, developing independence, and communicating needs clearly.",
        },
      ],
    },
  },
  pisces: {
    navigationItems: universalNavigationItems,
    about: {
      title: "About Pisces",
      description:
        "The mystical water sign, known for intuition, compassion, and a deep connection to the spiritual realm.",
      cards: [
        {
          title: "Element & Quality",
          content:
            "Water sign with Mutable quality. Pisces represents intuition, compassion, and a deep connection to the spiritual realm.",
        },
        {
          title: "Ruling Planet",
          content:
            "Neptune, the planet of dreams, intuition, and spirituality. This gives Pisces their psychic abilities, compassion, and artistic talents.",
        },
        {
          title: "Natural Strengths",
          content:
            "Intuition, empathy, creativity, spirituality, and compassion. Pisces excels in understanding others and connecting with the divine.",
        },
      ],
    },
    daily: {
      title: "Daily Insights",
      forecast: {
        title: "Today's Forecast",
        description:
          "Neptune aligns with Venus today, bringing heightened intuition and creative inspiration. Trust your instincts and embrace your artistic side.",
        luckyNumber: "7",
        bestTime: "9:00 PM - 11:00 PM",
      },
      weekly: {
        title: "Weekly Focus",
        description:
          "This week emphasizes intuition and spiritual growth. Perfect time for meditation, creative projects, and deepening your spiritual connection.",
        keyThemes: [
          "Intuition and creativity",
          "Spiritual growth",
          "Compassion and empathy",
        ],
      },
    },
    lucky: {
      title: "Lucky Elements",
      categories: [
        { title: "Colors", items: ["Sea Green", "Purple", "Silver", "Turquoise"] },
        { title: "Numbers", items: ["3", "7", "12", "16", "21", "25"] },
        { title: "Days", items: ["Thursday", "Monday"] },
        { title: "Stones", items: ["Moonstone", "Aquamarine", "Amethyst", "Pearl"] },
      ],
    },
    compatibility: {
      title: "Compatibility",
      bestMatches: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
      challenging: ["Gemini", "Sagittarius"],
      friendship:
        "Excellent with Water and Earth signs. Pisces values emotional connection, understanding, and shared spiritual values in friendships.",
    },
    growth: {
      title: "Growth & Challenges",
      areasForGrowth: [
        "Learning to be more practical",
        "Developing boundaries",
        "Balancing dreams with reality",
      ],
      commonChallenges: [
        "Being too idealistic",
        "Emotional overwhelm",
        "Escapism",
      ],
    },
    neptune: {
      title: "Neptune Influence",
      description:
        "Neptune, the planet of dreams and intuition, shapes Pisces’ mystical, compassionate, and artistic nature.",
      cards: [
        {
          title: "Dreams & Intuition",
          content:
            "Neptune gives Pisces a deep connection to the spiritual realm, heightened intuition, and a natural ability to understand the unseen.",
        },
        {
          title: "Compassion & Creativity",
          content:
            "Pisces's Neptunian influence brings boundless compassion, artistic talents, and a desire to help and heal others.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Why are Pisces so intuitive?",
          answer:
            "Pisces's ruling planet Neptune brings a deep connection to the spiritual realm and heightened psychic abilities. They are naturally sensitive to energy and emotions.",
        },
        {
          question: "What careers suit Pisces?",
          answer:
            "Art, music, therapy, healing, spiritual work, charity, and any field requiring empathy, creativity, and helping others.",
        },
        {
          question: "How can Pisces improve relationships?",
          answer:
            "By setting healthy boundaries, being more practical, and balancing their emotional nature with logical thinking and self-care.",
        },
      ],
    },
  },

  sagittarius: {
    navigationItems: universalNavigationItems,
    about: {
      title: "About Sagittarius",
      description:
        "The adventurous fire sign, known for optimism, exploration, and a quest for truth and freedom.",
      cards: [
        {
          title: "Element & Quality",
          content:
            "Fire sign with Mutable quality. Sagittarius represents exploration, optimism, and a quest for truth and adventure.",
        },
        {
          title: "Ruling Planet",
          content:
            "Jupiter, the planet of expansion, wisdom, and good fortune. This gives Sagittarius their adventurous spirit, optimism, and love for learning.",
        },
        {
          title: "Natural Strengths",
          content:
            "Optimism, curiosity, independence, honesty, and a love for travel and new experiences. Sagittarius excels in inspiring others to explore.",
        },
      ],
    },
    daily: {
      title: "Daily Insights",
      forecast: {
        title: "Today's Forecast",
        description:
          "Jupiter aligns with Mercury today, bringing opportunities for learning, travel, and expanding your horizons. Embrace new ideas and adventures.",
        luckyNumber: "3",
        bestTime: "4:00 PM - 6:00 PM",
      },
      weekly: {
        title: "Weekly Focus",
        description:
          "This week emphasizes adventure and growth. Perfect time to start a new journey, learn something new, or plan a trip.",
        keyThemes: [
          "Adventure and exploration",
          "Learning and growth",
          "Optimism and freedom",
        ],
      },
    },
    lucky: {
      title: "Lucky Elements",
      categories: [
        { title: "Colors", items: ["Purple", "Blue", "Gold", "Turquoise"] },
        { title: "Numbers", items: ["3", "12", "21", "30", "42"] },
        { title: "Days", items: ["Thursday", "Sunday"] },
        { title: "Stones", items: ["Turquoise", "Amethyst", "Lapis Lazuli", "Citrine"] },
      ],
    },
    compatibility: {
      title: "Compatibility",
      bestMatches: ["Aries", "Leo", "Libra", "Aquarius"],
      challenging: ["Virgo", "Pisces"],
      friendship:
        "Excellent with Fire and Air signs. Sagittarius values adventure, honesty, and open-mindedness in friendships.",
    },
    growth: {
      title: "Growth & Challenges",
      areasForGrowth: [
        "Learning to be more patient",
        "Developing focus",
        "Balancing freedom with responsibility",
      ],
      commonChallenges: [
        "Restlessness",
        "Impatience",
        "Bluntness",
      ],
    },
    jupiter: {
      title: "Jupiter Influence",
      description:
        "Jupiter, the planet of expansion and wisdom, shapes Sagittarius’ adventurous, optimistic, and philosophical nature.",
      cards: [
        {
          title: "Expansion & Wisdom",
          content:
            "Jupiter gives Sagittarius a love for learning, growth, and expanding their horizons. They are optimistic and open-minded.",
        },
        {
          title: "Adventure & Optimism",
          content:
            "Sagittarius's Jupiterian influence brings a thirst for adventure, travel, and a positive outlook on life.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Why are Sagittarius so adventurous?",
          answer:
            "Sagittarius's ruling planet Jupiter brings a love for exploration, learning, and new experiences. They are naturally curious and optimistic.",
        },
        {
          question: "What careers suit Sagittarius?",
          answer:
            "Travel, education, philosophy, publishing, sports, and any field requiring exploration, learning, and open-mindedness.",
        },
        {
          question: "How can Sagittarius improve relationships?",
          answer:
            "By being more patient, listening to others, and balancing their need for freedom with commitment and understanding.",
        },
      ],
    },
  },
  scorpio: {
    navigationItems: universalNavigationItems,
    about: {
      title: "About Scorpio",
      description:
        "The intense water sign, known for transformation, depth, and a powerful drive for truth and intensity.",
      cards: [
        {
          title: "Element & Quality",
          content:
            "Water sign with Fixed quality. Scorpio represents transformation, depth, and a powerful drive for truth and intensity.",
        },
        {
          title: "Ruling Planet",
          content:
            "Pluto (and Mars, traditionally), the planet of transformation, power, and rebirth. This gives Scorpio their intensity, resilience, and magnetic presence.",
        },
        {
          title: "Natural Strengths",
          content:
            "Determination, intuition, emotional depth, resourcefulness, and the ability to transform and heal. Scorpio excels in uncovering hidden truths.",
        },
      ],
    },
    daily: {
      title: "Daily Insights",
      forecast: {
        title: "Today's Forecast",
        description:
          "Pluto aligns with the Moon today, bringing opportunities for deep emotional healing and powerful transformation. Trust your intuition.",
        luckyNumber: "9",
        bestTime: "8:00 PM - 10:00 PM",
      },
      weekly: {
        title: "Weekly Focus",
        description:
          "This week emphasizes transformation and renewal. Perfect time to let go of the past, embrace change, and focus on personal growth.",
        keyThemes: [
          "Transformation and healing",
          "Emotional depth",
          "Letting go and renewal",
        ],
      },
    },
    lucky: {
      title: "Lucky Elements",
      categories: [
        { title: "Colors", items: ["Deep Red", "Maroon", "Black", "Dark Purple"] },
        { title: "Numbers", items: ["8", "11", "18", "22"] },
        { title: "Days", items: ["Tuesday", "Thursday"] },
        { title: "Stones", items: ["Obsidian", "Garnet", "Malachite", "Topaz"] },
      ],
    },
    compatibility: {
      title: "Compatibility",
      bestMatches: ["Cancer", "Pisces", "Virgo", "Capricorn"],
      challenging: ["Leo", "Aquarius"],
      friendship:
        "Excellent with Water and Earth signs. Scorpio values loyalty, trust, and deep emotional connections in friendships.",
    },
    growth: {
      title: "Growth & Challenges",
      areasForGrowth: [
        "Learning to let go of grudges",
        "Developing trust",
        "Embracing vulnerability",
      ],
      commonChallenges: [
        "Jealousy",
        "Secrecy",
        "Control issues",
      ],
    },
    pluto: {
      title: "Pluto Influence",
      description:
        "Pluto, the planet of transformation and power, shapes Scorpio’s intense, resilient, and magnetic nature.",
      cards: [
        {
          title: "Transformation & Power",
          content:
            "Pluto gives Scorpio a powerful drive for transformation, rebirth, and uncovering hidden truths. They are resilient and resourceful.",
        },
        {
          title: "Emotional Depth",
          content:
            "Scorpio's Plutonic influence brings emotional depth, intuition, and the ability to heal themselves and others.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Why are Scorpio so intense?",
          answer:
            "Scorpio's ruling planet Pluto brings intensity, depth, and a desire for transformation. They feel emotions deeply and seek truth in all things.",
        },
        {
          question: "What careers suit Scorpio?",
          answer:
            "Psychology, research, healing, investigation, finance, and any field requiring depth, intuition, and resilience.",
        },
        {
          question: "How can Scorpio improve relationships?",
          answer:
            "By learning to trust, being more open, and letting go of control. Embracing vulnerability and honest communication is key.",
        },
      ],
    },
  },
  taurus: {
    navigationItems: universalNavigationItems,
    about: {
      title: "About Taurus",
      description:
        "The steadfast earth sign, known for stability, determination, and a deep connection to the physical world.",
      cards: [
        {
          title: "Element & Quality",
          content:
            "Earth sign with Fixed quality. Taurus represents stability, determination, and a deep connection to the physical world.",
        },
        {
          title: "Ruling Planet",
          content:
            "Venus, the planet of love, beauty, and harmony. This gives Taurus their appreciation for luxury and aesthetic pleasures.",
        },
        {
          title: "Natural Strengths",
          content:
            "Patience, reliability, sensuality, determination, and a strong work ethic. Taurus excels in building lasting foundations.",
        },
      ],
    },
    daily: {
      title: "Daily Insights",
      forecast: {
        title: "Today's Forecast",
        description:
          "Venus aligns with Jupiter today, bringing opportunities for financial growth and romantic connections. Focus on your long-term goals.",
        luckyNumber: "6",
        bestTime: "2:00 PM - 4:00 PM",
      },
      weekly: {
        title: "Weekly Focus",
        description:
          "This week emphasizes stability and growth. Perfect time to invest in yourself, strengthen relationships, and build your foundation.",
        keyThemes: [
          "Stability and growth",
          "Building foundations",
          "Romance and luxury",
        ],
      },
    },
    lucky: {
      title: "Lucky Elements",
      categories: [
        { title: "Colors", items: ["Green", "Pink", "White", "Light Blue"] },
        { title: "Numbers", items: ["2", "6", "9", "12", "24"] },
        { title: "Days", items: ["Friday", "Monday"] },
        { title: "Stones", items: ["Emerald", "Rose Quartz", "Diamond"] },
      ],
    },
    compatibility: {
      title: "Compatibility",
      bestMatches: ["Cancer", "Virgo", "Capricorn", "Pisces"],
      challenging: ["Aquarius", "Leo"],
      friendship:
        "Excellent with Earth and Water signs. Taurus values loyalty and deep, meaningful connections.",
    },
    growth: {
      title: "Growth & Challenges",
      areasForGrowth: [
        "Learning to embrace change",
        "Developing flexibility",
        "Opening up to new experiences",
      ],
      commonChallenges: [
        "Stubbornness",
        "Resistance to change",
        "Materialism",
      ],
    },
    venus: {
      title: "Venus Influence",
      description:
        "Venus, the planet of love and beauty, shapes Taurus’s romantic, loyal, and aesthetic nature.",
      cards: [
        {
          title: "Love & Relationships",
          content:
            "Venus makes Taurus deeply romantic and loyal. They seek stable, long-term relationships and value physical affection and quality time.",
        },
        {
          title: "Aesthetics & Luxury",
          content:
            "Taurus has an innate appreciation for beauty, art, and luxury. They enjoy surrounding themselves with quality and comfort.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Why are Taurus so stubborn?",
          answer:
            "Taurus's fixed earth nature makes them determined and persistent. Once they set their mind to something, they rarely give up.",
        },
        {
          question: "What careers suit Taurus?",
          answer:
            "Finance, real estate, agriculture, culinary arts, and any field requiring patience, reliability, and attention to detail.",
        },
        {
          question: "How can Taurus improve relationships?",
          answer:
            "By being more flexible, communicating openly about their needs, and learning to compromise while maintaining their values.",
        },
      ],
    },
  },
  virgo: {
    navigationItems: universalNavigationItems,
    about: {
      title: "About Virgo",
      description:
        "The precise earth sign, known for service, analytical thinking, and a deep desire for perfection and order.",
      cards: [
        {
          title: "Element & Quality",
          content:
            "Earth sign with Mutable quality. Virgo represents precision, service, and a deep desire for perfection and order.",
        },
        {
          title: "Ruling Planet",
          content:
            "Mercury, the planet of communication, intellect, and analysis. This gives Virgo their sharp mind, attention to detail, and practical approach.",
        },
        {
          title: "Natural Strengths",
          content:
            "Analytical thinking, attention to detail, reliability, practicality, and a strong work ethic. Virgo excels in organization and problem-solving.",
        },
      ],
    },
    daily: {
      title: "Daily Insights",
      forecast: {
        title: "Today's Forecast",
        description:
          "Mercury aligns with Venus today, bringing opportunities for clear communication, practical solutions, and harmonious relationships.",
        luckyNumber: "5",
        bestTime: "9:00 AM - 11:00 AM",
      },
      weekly: {
        title: "Weekly Focus",
        description:
          "This week emphasizes organization and efficiency. Perfect time to tackle projects, improve systems, and focus on health and wellness.",
        keyThemes: [
          "Organization and efficiency",
          "Health and wellness",
          "Practical solutions",
        ],
      },
    },
    lucky: {
      title: "Lucky Elements",
      categories: [
        { title: "Colors", items: ["Green", "Brown", "Navy Blue", "White"] },
        { title: "Numbers", items: ["5", "14", "15", "23", "32"] },
        { title: "Days", items: ["Wednesday", "Friday"] },
        { title: "Stones", items: ["Peridot", "Jade", "Moss Agate"] },
      ],
    },
    compatibility: {
      title: "Compatibility",
      bestMatches: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
      challenging: ["Sagittarius", "Gemini"],
      friendship:
        "Excellent with Earth and Water signs. Virgo values loyalty, reliability, and meaningful conversations in friendships.",
    },
    growth: {
      title: "Growth & Challenges",
      areasForGrowth: [
        "Learning to be less critical",
        "Embracing imperfection",
        "Developing flexibility and spontaneity",
      ],
      commonChallenges: [
        "Perfectionism",
        "Overthinking",
        "Being too critical",
      ],
    },
    mercury: {
      title: "Mercury Influence",
      description:
        "Mercury, the planet of intellect and analysis, shapes Virgo’s analytical, practical, and service-oriented nature.",
      cards: [
        {
          title: "Analytical Mind",
          content:
            "Mercury gives Virgo a sharp, analytical mind with excellent problem-solving skills and attention to detail.",
        },
        {
          title: "Communication & Service",
          content:
            "Virgo excels in clear communication and has a natural desire to serve and help others through practical means.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Why are Virgo so critical?",
          answer:
            "Virgo's attention to detail and desire for perfection can make them notice flaws that others miss. They often have high standards for themselves and others.",
        },
        {
          question: "What careers suit Virgo?",
          answer:
            "Healthcare, research, accounting, editing, quality control, and any field requiring attention to detail, analysis, and practical problem-solving.",
        },
        {
          question: "How can Virgo improve relationships?",
          answer:
            "By being less critical, learning to accept imperfection, and developing more flexibility while maintaining their helpful and reliable nature.",
        },
      ],
    },
  },
};
