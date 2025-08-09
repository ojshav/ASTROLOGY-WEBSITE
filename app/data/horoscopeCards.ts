export interface HoroscopeCard {
  title: { en: string; hi: string; es: string; fr: string; de: string; zh: string; ar: string; ru: string; };
  description: { en: string; hi: string; es: string; fr: string; de: string; zh: string; ar: string; ru: string; };
  href: string;
  image: string; // NEW FIELD
}

export const horoscopeCards: HoroscopeCard[] = [
  {
    title: {
      en: "Aries Horoscope",
      hi: "मेष राशिफल",
      es: "Horóscopo de Aries",
      fr: "Horoscope Bélier",
      de: "Widder Horoskop",
      zh: "白羊座运势",
      ar: "توقعات برج الحمل",
      ru: "Гороскоп Овен"
    },
    description: {
      en: "Your daily insights for Aries, focusing on career and finance.",
      hi: "मेष राशि के लिए आपकी दैनिक अंतर्दृष्टि, करियर और वित्त पर ध्यान केंद्रित करते हुए।",
      es: "Tus ideas diarias para Aries, centrándote en la carrera y las finanzas.",
      fr: "Vos idées quotidiennes pour le Bélier, axées sur la carrière et les finances.",
      de: "Ihre täglichen Einblicke für Widder, mit Fokus auf Karriere und Finanzen.",
      zh: "白羊座的每日见解，专注于事业和财务。",
      ar: "رؤى يومية لبرج الحمل، مع التركيز على العمل والمال.",
      ru: "Ваши ежедневные советы для Овна, с акцентом на карьеру и финансы."
    },
    href: "/daily-horoscope/aries",
    image: "https://res.cloudinary.com/dxwspucxw/image/upload/v1754556366/ariies___vgl9oj.png",
  },
  {
    title: {
      en: "Taurus Horoscope",
      hi: "वृषभ राशिफल",
      es: "Horóscopo de Tauro",
      fr: "Horoscope Taureau",
      de: "Stier Horoskop",
      zh: "金牛座运势",
      ar: "توقعات برج الثور",
      ru: "Гороскоп Телец"
    },
    description: {
      en: "Discover what the stars hold for Taurus in love and relationships.",
      hi: "प्रेम और रिश्तों में वृषभ के लिए सितारे क्या कहते हैं, जानें।",
      es: "Descubre lo que las estrellas deparan para Tauro en el amor y las relaciones.",
      fr: "Découvrez ce que les étoiles réservent au Taureau en amour et en relations.",
      de: "Entdecken Sie, was die Sterne für den Stier in Liebe und Beziehungen bereithalten.",
      zh: "探索金牛座在爱情和关系中的星象。",
      ar: "اكتشف ما تخبئه النجوم للثور في الحب والعلاقات.",
      ru: "Узнайте, что звезды готовят Тельцу в любви и отношениях."
    },
    href: "/daily-horoscope/taurus",
    image: "https://res.cloudinary.com/dxwspucxw/image/upload/v1754556342/Taurus_qnsgar.png",
  },
  {
    title: {
      en: "Gemini Horoscope",
      hi: "मिथुन राशिफल",
      es: "Horóscopo de Géminis",
      fr: "Horoscope Gémeaux",
      de: "Zwillinge Horoskop",
      zh: "双子座运势",
      ar: "توقعات برج الجوزاء",
      ru: "Гороскоп Близнецы"
    },
    description: {
      en: "Guidance for Gemini on health and well-being today.",
      hi: "आज स्वास्थ्य और कल्याण पर मिथुन राशि के लिए मार्गदर्शन।",
      es: "Orientación para Géminis sobre la salud y el bienestar hoy.",
      fr: "Conseils pour les Gémeaux sur la santé et le bien-être aujourd'hui.",
      de: "Ratschläge für Zwillinge zu Gesundheit und Wohlbefinden heute.",
      zh: "今日双子座健康与幸福的指导。",
      ar: "إرشادات للجوزاء حول الصحة والرفاهية اليوم.",
      ru: "Советы для Близнецов по здоровью и благополучию на сегодня."
    },
    href: "/daily-horoscope/gemini",
    image: "https://res.cloudinary.com/dxwspucxw/image/upload/v1754556343/Gemini_kjqrtl.png",
  },
  {
    title: {
      en: "Cancer Horoscope",
      hi: "कर्क राशिफल",
      es: "Horóscopo de Cáncer",
      fr: "Horoscope Cancer",
      de: "Krebs Horoskop",
      zh: "巨蟹座运势",
      ar: "توقعات برج السرطان",
      ru: "Гороскоп Рак"
    },
    description: {
      en: "Career growth and personal development tips for Cancerians.",
      hi: "कर्क राशि वालों के लिए करियर में वृद्धि और व्यक्तिगत विकास के सुझाव।",
      es: "Consejos de crecimiento profesional y desarrollo personal para Cáncer.",
      fr: "Conseils de croissance professionnelle et de développement personnel pour le Cancer.",
      de: "Tipps für Karrierewachstum und persönliche Entwicklung für Krebse.",
      zh: "巨蟹座的职业成长和个人发展建议。",
      ar: "نصائح للنمو المهني والتطور الشخصي للسرطان.",
      ru: "Советы по карьерному росту и личному развитию для Раков."
    },
    href: "/daily-horoscope/cancer",
    image: "https://res.cloudinary.com/dxwspucxw/image/upload/v1754556346/Cancer_sgabek.png",
  },
  {
    title: {
      en: "Leo Horoscope",
      hi: "सिंह राशिफल",
      es: "Horóscopo de Leo",
      fr: "Horoscope Lion",
      de: "Löwe Horoskop",
      zh: "狮子座运势",
      ar: "توقعات برج الأسد",
      ru: "Гороскоп Лев"
    },
    description: {
      en: "Financial predictions and lucky numbers for Leo today.",
      hi: "आज सिंह राशि के लिए वित्तीय भविष्यवाणियां और भाग्यशाली संख्याएँ।",
      es: "Predicciones financieras y números de la suerte para Leo hoy.",
      fr: "Prédictions financières et numéros chanceux pour le Lion aujourd'hui.",
      de: "Finanzielle Vorhersagen und Glückszahlen für den Löwen heute.",
      zh: "今日狮子座的财务预测和幸运数字。",
      ar: "توقعات مالية وأرقام الحظ للأسد اليوم.",
      ru: "Финансовые прогнозы и счастливые числа для Льва на сегодня."
    },
    href: "/daily-horoscope/leo",
    image: "https://res.cloudinary.com/dxwspucxw/image/upload/v1754556367/leo_ynxtts.png",
  },
  {
    title: {
      en: "Virgo Horoscope",
      hi: "कन्या राशिफल",
      es: "Horóscopo de Virgo",
      fr: "Horoscope Vierge",
      de: "Jungfrau Horoskop",
      zh: "处女座运势",
      ar: "توقعات برج العذراء",
      ru: "Гороскоп Дева"
    },
    description: {
      en: "Love life and social interactions for Virgo this week.",
      hi: "इस सप्ताह कन्या राशि के लिए प्रेम जीवन और सामाजिक संबंध।",
      es: "Vida amorosa e interacciones sociales para Virgo esta semana.",
      fr: "Vie amoureuse et interactions sociales pour la Vierge cette semaine.",
      de: "Liebesleben und soziale Interaktionen für Jungfrau diese Woche.",
      zh: "本周处女座的爱情生活和社交互动。",
      ar: "الحياة العاطفية والتفاعلات الاجتماعية للعذراء هذا الأسبوع.",
      ru: "Любовная жизнь и социальные взаимодействия Девы на этой неделе."
    },
    href: "/daily-horoscope/virgo",
    image: "https://res.cloudinary.com/dxwspucxw/image/upload/v1754556342/Virgo_p7fsyl.png",
  },
]; 