'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useLanguage } from '../contexts/useLanguage'
import { Sparkles, ArrowRight, Facebook, Instagram, Twitter, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { horoscopeCards } from '@/app/data/horoscopeCards'
import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

const zodiacSigns = [
  { label: { en: 'Aries', hi: 'मेष', es: 'Bélier', fr: 'Bélier', de: 'Widder', zh: '白羊座', ar: 'الحمل', ru: 'Овен' }, value: 'Aries' },
  { label: { en: 'Taurus', hi: 'वृषभ', es: 'Taureau', fr: 'Taureau', de: 'Stier', zh: '金牛座', ar: 'الثور', ru: 'Телец' }, value: 'Taurus' },
  { label: { en: 'Gemini', hi: 'मिथुन', es: 'Gémeaux', fr: 'Gémeaux', de: 'Zwillinge', zh: '双子座', ar: 'الجوزاء', ru: 'Близнецы' }, value: 'Gemini' },
  { label: { en: 'Cancer', hi: 'कर्क', es: 'Cancer', fr: 'Cancer', de: 'Krebs', zh: '巨蟹座', ar: 'السرطان', ru: 'Рак' }, value: 'Cancer' },
  { label: { en: 'Leo', hi: 'सिंह', es: 'Lion', fr: 'Lion', de: 'Löwe', zh: '狮子座', ar: 'الأسد', ru: 'Лев' }, value: 'Leo' },
  { label: { en: 'Virgo', hi: 'कन्या', es: 'Vierge', fr: 'Vierge', de: 'Jungfrau', zh: '处女座', ar: 'العذراء', ru: 'Дева' }, value: 'Virgo' },
  { label: { en: 'Libra', hi: 'तुला', es: 'Balance', fr: 'Balance', de: 'Waage', zh: '天秤座', ar: 'الميزان', ru: 'Весы' }, value: 'Libra' },
  { label: { en: 'Scorpio', hi: 'वृश्चिक', es: 'Scorpion', fr: 'Scorpion', de: 'Skorpion', zh: '天蝎座', ar: 'العقرب', ru: 'Скорпион' }, value: 'Scorpio' },
  { label: { en: 'Sagittarius', hi: 'धनु', es: 'Sagittaire', fr: 'Sagittaire', de: 'Schütze', zh: '射手座', ar: 'القوس', ru: 'Стрелец' }, value: 'Sagittarius' },
  { label: { en: 'Capricorn', hi: 'मकर', es: 'Capricorne', fr: 'Capricorne', de: 'Steinbock', zh: '摩羯座', ar: 'الجدي', ru: 'Козерог' }, value: 'Capricorn' },
  { label: { en: 'Aquarius', hi: 'कुंभ', es: 'Verseau', fr: 'Verseau', de: 'Wassermann', zh: '水瓶座', ar: 'الدلو', ru: 'Водолей' }, value: 'Aquarius' },
  { label: { en: 'Pisces', hi: 'मीन', es: 'Poissons', fr: 'Poissons', de: 'Fische', zh: '双鱼座', ar: 'الحوت', ru: 'Рыбы' }, value: 'Pisces' },
]

const dailyPredictions = {
  Aries: {
    en: "Today is a day for bold action, Aries. Your dynamic energy is high, making it a perfect time to start new projects or tackle challenging tasks. Trust your instincts and lead the way.",
    hi: "मेष, आज साहसिक कार्रवाई का दिन है। आपकी गतिशील ऊर्जा उच्च है, जो इसे नई परियोजनाओं को शुरू करने या चुनौतीपूर्ण कार्यों से निपटने के लिए एक आदर्श समय बनाती है। अपनी प्रवृत्ति पर भरोसा करें और नेतृत्व करें।",
    es: "Hoy es un día para la acción audaz, Aries. Tu energía dinámica está alta, lo que lo convierte en un momento perfecto para comenzar nuevos proyectos o abordar tareas desafiantes. Confía en tus instintos y lidera el camino.",
    de: "Heute ist ein Tag für mutiges Handeln, Widder. Deine dynamische Energie ist hoch, was es zu einem perfekten Zeitpunkt macht, neue Projekte zu starten oder herausfordernde Aufgaben anzugehen. Vertraue auf deine Instinkte und übernimm die Führung.",
    fr: "Aujourd'hui est un jour pour agir avec audace, Bélier. Votre énergie dynamique est élevée, c'est donc le moment idéal pour démarrer de nouveaux projets ou relever des défis. Faites confiance à votre instinct et prenez les devants.",
    zh: "今天是采取大胆行动的一天，白羊座。你的活力很高，非常适合开始新项目或应对挑战。相信你的直觉，带领大家前进。",
    ar: "اليوم هو يوم للعمل الجريء، برج الحمل. طاقتك الديناميكية مرتفعة، مما يجعله وقتًا مثاليًا لبدء مشاريع جديدة أو مواجهة المهام الصعبة. ثق بحدسك وقُد الطريق.",
    ru: "Сегодня день для решительных действий, Овен. Ваша энергия на высоте — отличное время для новых начинаний или решения сложных задач. Доверьтесь своим инстинктам и ведите за собой."
  },
  Taurus: {
    en: "Focus on stability and comfort, Taurus. It's a great day to manage your finances or indulge in simple pleasures. Patience will be your greatest asset, so avoid rushing into decisions.",
    hi: "वृषभ, स्थिरता और आराम पर ध्यान केंद्रित करें। यह आपके वित्त का प्रबंधन करने या साधारण सुखों में लिप्त होने के लिए एक अच्छा दिन है। धैर्य आपकी सबसे बड़ी संपत्ति होगी, इसलिए निर्णयों में जल्दबाजी करने से बचें।",
    es: "Concéntrate en la estabilidad y la comodidad, Tauro. Es un gran día para gestionar tus finanzas o disfrutar de placeres simples. La paciencia será tu mayor activo, así que evita apresurarte en las decisiones.",
    de: "Fokussiere dich auf Stabilität und Komfort, Stier. Es ist ein großartiger Tag, um deine Finanzen zu regeln oder einfache Freuden zu genießen. Geduld ist dein größtes Kapital, also vermeide übereilte Entscheidungen.",
    fr: "Concentrez-vous sur la stabilité et le confort, Taureau. C'est une excellente journée pour gérer vos finances ou profiter des plaisirs simples. La patience sera votre plus grand atout, alors évitez de vous précipiter dans vos décisions.",
    zh: "金牛座，专注于稳定和舒适。今天非常适合管理财务或享受简单的快乐。耐心是你最大的财富，避免仓促做决定。",
    ar: "ركز على الاستقرار والراحة، برج الثور. إنه يوم رائع لإدارة أموالك أو الاستمتاع بالملذات البسيطة. الصبر سيكون أعظم أصولك، لذا تجنب التسرع في اتخاذ القرارات.",
    ru: "Сосредоточьтесь на стабильности и комфорте, Телец. Отличный день для управления финансами или наслаждения простыми радостями. Терпение — ваш главный актив, не спешите с решениями."
  },
  Gemini: {
    en: "Your communication skills are at their peak, Gemini. Engage in meaningful conversations, share your ideas, and connect with others. A new perspective could come from an unexpected chat.",
    hi: "मिथुन, आपकी संचार कौशल अपने चरम पर है। सार्थक बातचीत में शामिल हों, अपने विचार साझा करें और दूसरों से जुड़ें। एक अप्रत्याशित बातचीत से एक नया दृष्टिकोण आ सकता है।",
    es: "Tus habilidades de comunicación están en su punto máximo, Géminis. Participa en conversaciones significativas, comparte tus ideas y conéctate con los demás. Una nueva perspectiva podría surgir de una charla inesperada.",
    de: "Deine Kommunikationsfähigkeiten sind auf dem Höhepunkt, Zwillinge. Führe bedeutungsvolle Gespräche, teile deine Ideen und vernetze dich mit anderen. Eine neue Perspektive könnte sich aus einem unerwarteten Gespräch ergeben.",
    fr: "Vos compétences en communication sont à leur apogée, Gémeaux. Engagez-vous dans des conversations significatives, partagez vos idées et connectez-vous avec les autres. Une nouvelle perspective pourrait venir d'une discussion inattendue.",
    zh: "双子座，你的沟通能力正处于巅峰。参与有意义的对话，分享你的想法，与他人建立联系。一次意外的交流可能带来新的视角。",
    ar: "مهاراتك في التواصل في أوجها اليوم، برج الجوزاء. شارك في محادثات هادفة، وشارك أفكارك، وتواصل مع الآخرين. قد تأتي وجهة نظر جديدة من محادثة غير متوقعة.",
    ru: "Ваши коммуникативные навыки на высоте, Близнецы. Вовлекайтесь в содержательные беседы, делитесь идеями и общайтесь с другими. Новый взгляд может прийти из неожиданного разговора."
  },
  Cancer: {
    en: "Listen to your heart today, Cancer. Your intuition is guiding you, especially in matters of home and family. Nurture your relationships and create a sense of security around you.",
    hi: "कर्क, आज अपने दिल की सुनें। आपकी अंतर्ज्ञान आपको मार्गदर्शन कर रही है, खासकर घर और परिवार के मामलों में। अपने रिश्तों का पोषण करें और अपने आस-पास सुरक्षा की भावना पैदा करें।",
    es: "Escucha a tu corazón hoy, Cáncer. Tu intuición te guía, especialmente en asuntos del hogar y la familia. Nutre tus relaciones y crea un ambiente de seguridad a tu alrededor.",
    de: "Höre heute auf dein Herz, Krebs. Deine Intuition leitet dich, besonders in Angelegenheiten von Zuhause und Familie. Pflege deine Beziehungen und schaffe ein Gefühl von Sicherheit um dich herum.",
    fr: "Écoutez votre cœur aujourd'hui, Cancer. Votre intuition vous guide, surtout en ce qui concerne la maison et la famille. Prenez soin de vos relations et créez un sentiment de sécurité autour de vous.",
    zh: "巨蟹座，今天请倾听你的内心。你的直觉正在指引你，尤其是在家庭和家人方面。滋养你的关系，营造安全感。",
    ar: "استمع إلى قلبك اليوم، برج السرطان. حدسك يرشدك، خاصة في أمور المنزل والعائلة. اعتنِ بعلاقاتك وخلق شعور بالأمان من حولك.",
    ru: "Прислушайтесь к своему сердцу сегодня, Рак. Ваша интуиция ведет вас, особенно в вопросах дома и семьи. Заботьтесь о своих отношениях и создайте вокруг себя атмосферу безопасности."
  },
  Leo: {
    en: "It's your time to shine, Leo! Your creativity and confidence are magnetic. Step into the spotlight, express yourself, and don't be afraid to take center stage. Your talents will be recognized.",
    hi: "सिंह, यह आपके चमकने का समय है! आपकी रचनात्मकता और आत्मविश्वास चुंबकीय हैं। सुर्खियों में कदम रखें, खुद को व्यक्त करें, और केंद्र मंच लेने से न डरें। आपकी प्रतिभाओं को पहचाना जाएगा।",
    es: "¡Es tu momento de brillar, Leo! Tu creatividad y confianza son magnéticas. Da un paso al frente, exprésate y no temas ser el centro de atención. Tus talentos serán reconocidos.",
    de: "Es ist deine Zeit zu glänzen, Löwe! Deine Kreativität und dein Selbstvertrauen sind magnetisch. Tritt ins Rampenlicht, drücke dich aus und hab keine Angst, im Mittelpunkt zu stehen. Deine Talente werden anerkannt.",
    fr: "C'est votre moment de briller, Lion ! Votre créativité et votre confiance sont magnétiques. Montez sur scène, exprimez-vous et n'ayez pas peur d'occuper le devant de la scène. Vos talents seront reconnus.",
    zh: "狮子座，现在是你闪耀的时候！你的创造力和自信极具吸引力。走到聚光灯下，表达自己，不要害怕成为焦点。你的才华会被认可。",
    ar: "إنه وقتك للتألق، برج الأسد! إبداعك وثقتك بنفسك جاذبان. تقدم للأمام، وعبّر عن نفسك، ولا تخف من أن تكون في مركز الاهتمام. سيتم الاعتراف بمواهبك.",
    ru: "Это твое время сиять, Лев! Твоя креативность и уверенность притягательны. Выйди на сцену, выражай себя и не бойся быть в центре внимания. Твои таланты будут признаны."
  },
  Virgo: {
    en: "A practical and organized approach will serve you well, Virgo. Focus on details, whether at work or in your personal life. Your efficiency will bring you a sense of accomplishment.",
    hi: "कन्या, एक व्यावहारिक और संगठित दृष्टिकोण आपकी अच्छी सेवा करेगा। काम पर या अपने निजी जीवन में विवरणों पर ध्यान केंद्रित करें। आपकी दक्षता आपको उपलब्धि की भावना लाएगी।",
    es: "Un enfoque práctico y organizado te servirá bien, Virgo. Concéntrate en los detalles, ya sea en el trabajo o en tu vida personal. Tu eficiencia te dará una sensación de logro.",
    de: "Ein praktischer und organisierter Ansatz wird dir guttun, Jungfrau. Konzentriere dich auf Details, egal ob bei der Arbeit oder im Privatleben. Deine Effizienz wird dir ein Gefühl der Erfüllung bringen.",
    fr: "Une approche pratique et organisée vous sera bénéfique, Vierge. Concentrez-vous sur les détails, que ce soit au travail ou dans votre vie personnelle. Votre efficacité vous apportera un sentiment d'accomplissement.",
    zh: "处女座，务实和有条理的方法会对你有益。无论在工作还是生活中，都要关注细节。你的高效会带来成就感。",
    ar: "النهج العملي والمنظم سيخدمك جيدًا، برج العذراء. ركز على التفاصيل سواء في العمل أو في حياتك الشخصية. كفاءتك ستمنحك شعورًا بالإنجاز.",
    ru: "Практичный и организованный подход принесет вам пользу, Дева. Обращайте внимание на детали — на работе и в личной жизни. Ваша эффективность принесет вам чувство удовлетворения."
  },
  Libra: {
    en: "Harmony in relationships is your focus, Libra. Seek balance and fairness in your interactions. A diplomatic approach will help you resolve any conflicts and strengthen your bonds.",
    hi: "तुला, रिश्तों में सामंजस्य आपका ध्यान है। अपनी बातचीत में संतुलन और निष्पक्षता की तलाश करें। एक राजनयिक दृष्टिकोण आपको किसी भी संघर्ष को हल करने और अपने बंधनों को मजबूत करने में मदद करेगा।",
    es: "La armonía en las relaciones es tu enfoque, Libra. Busca el equilibrio y la justicia en tus interacciones. Un enfoque diplomático te ayudará a resolver conflictos y fortalecer tus lazos.",
    de: "Harmonie in Beziehungen ist dein Fokus, Waage. Suche nach Ausgewogenheit und Fairness in deinen Interaktionen. Ein diplomatischer Ansatz hilft dir, Konflikte zu lösen und Bindungen zu stärken.",
    fr: "L'harmonie dans les relations est votre priorité, Balance. Recherchez l'équilibre et l'équité dans vos interactions. Une approche diplomatique vous aidera à résoudre les conflits et à renforcer vos liens.",
    zh: "天秤座，关系中的和谐是你的重点。在互动中寻求平衡与公正。采取外交手段有助于解决冲突并加深联系。",
    ar: "الانسجام في العلاقات هو محور تركيزك اليوم، برج الميزان. ابحث عن التوازن والعدالة في تفاعلاتك. النهج الدبلوماسي سيساعدك على حل أي صراعات وتقوية الروابط.",
    ru: "Гармония в отношениях — ваш приоритет, Весы. Стремитесь к балансу и справедливости в общении. Дипломатичный подход поможет разрешить конфликты и укрепить связи."
  },
  Scorpio: {
    en: "Embrace transformation, Scorpio. Today is a powerful day for inner growth and letting go of what no longer serves you. Trust the process and welcome positive change.",
    hi: "वृश्चिक, परिवर्तन को अपनाएं। आज आंतरिक विकास और जो अब आपकी सेवा नहीं करता है उसे जाने देने के लिए एक शक्तिशाली दिन है। प्रक्रिया पर भरोसा करें और सकारात्मक बदलाव का स्वागत करें।",
    es: "Abraza la transformación, Escorpio. Hoy es un día poderoso para el crecimiento interior y dejar atrás lo que ya no te sirve. Confía en el proceso y da la bienvenida al cambio positivo.",
    de: "Umarme die Veränderung, Skorpion. Heute ist ein kraftvoller Tag für inneres Wachstum und das Loslassen von Dingen, die dir nicht mehr dienen. Vertraue dem Prozess und heiße positive Veränderungen willkommen.",
    fr: "Accueillez la transformation, Scorpion. Aujourd'hui est un jour puissant pour la croissance intérieure et pour laisser partir ce qui ne vous sert plus. Faites confiance au processus et accueillez le changement positif.",
    zh: "天蝎座，拥抱转变。今天是内在成长和放下无用事物的强大日子。相信过程，迎接积极变化。",
    ar: "احتضن التحول اليوم، برج العقرب. اليوم هو يوم قوي للنمو الداخلي والتخلي عما لم يعد يخدمك. ثق بحدسك ورحب بالتغيير الإيجابي.",
    ru: "Примите перемены, Скорпион. Сегодня мощный день для внутреннего роста и отпускания того, что больше не служит вам. Доверьтесь процессу и приветствуйте позитивные изменения."
  },
  Sagittarius: {
    en: "Adventure is calling, Sagittarius! Broaden your horizons, whether by learning something new or exploring a different place. Your optimistic outlook will attract exciting opportunities.",
    hi: "धनु, रोमांच बुला रहा है! अपनी क्षितिज का विस्तार करें, चाहे कुछ नया सीखकर या किसी अलग जगह की खोज करके। आपका आशावादी दृष्टिकोण रोमांचक अवसरों को आकर्षित करेगा।",
    es: "¡La aventura te llama, Sagitario! Amplía tus horizontes, ya sea aprendiendo algo nuevo o explorando un lugar diferente. Tu actitud optimista atraerá oportunidades emocionantes.",
    de: "Das Abenteuer ruft, Schütze! Erweitere deinen Horizont, indem du etwas Neues lernst oder einen anderen Ort erkundest. Deine optimistische Einstellung zieht spannende Möglichkeiten an.",
    fr: "L'aventure t'appelle, Sagittaire ! Élargis tes horizons, que ce soit en apprenant quelque chose de nouveau ou en explorant un nouvel endroit. Ton optimisme attirera des opportunités passionnantes.",
    zh: "射手座，冒险在召唤你！无论是学习新知识还是探索新地方，都要拓宽你的视野。你的乐观态度会吸引激动人心的机会。",
    ar: "المغامرة تناديك اليوم، برج القوس! وسع آفاقك، سواء بتعلم شيء جديد أو استكشاف مكان مختلف. نظرتك المتفائلة ستجذب الفرص المثيرة.",
    ru: "Приключения зовут, Стрелец! Расширяйте горизонты — учитесь новому или исследуйте новые места. Ваш оптимизм привлечет захватывающие возможности."
  },
  Capricorn: {
    en: "Your ambition is highlighted today, Capricorn. Focus on your long-term goals and take practical steps to achieve them. Your discipline and hard work will pay off.",
    hi: "मकर, आज आपकी महत्वाकांक्षा पर प्रकाश डाला गया है। अपने दीर्घकालिक लक्ष्यों पर ध्यान केंद्रित करें और उन्हें प्राप्त करने के लिए व्यावहारिक कदम उठाएं। आपका अनुशासन और कड़ी मेहनत रंग लाएगी।",
    es: "Tu ambición se destaca hoy, Capricornio. Concéntrate en tus objetivos a largo plazo y toma medidas prácticas para lograrlos. Tu disciplina y trabajo duro darán frutos.",
    de: "Dein Ehrgeiz steht heute im Vordergrund, Steinbock. Konzentriere dich auf deine langfristigen Ziele und ergreife praktische Maßnahmen, um sie zu erreichen. Deine Disziplin und harte Arbeit werden sich auszahlen.",
    fr: "Votre ambition est mise en avant aujourd'hui, Capricorne. Concentrez-vous sur vos objectifs à long terme et prenez des mesures pratiques pour les atteindre. Votre discipline et votre travail acharné porteront leurs fruits.",
    zh: "摩羯座，今天你的雄心壮志尤为突出。专注于长期目标，并采取实际步骤去实现。你的自律和努力会得到回报。",
    ar: "طموحك يبرز اليوم، برج الجدي. ركز على أهدافك طويلة المدى واتخذ خطوات عملية لتحقيقها. انضباطك وعملك الجاد سيؤتي ثماره.",
    ru: "Сегодня ваша амбициозность особенно заметна, Козерог. Сосредоточьтесь на долгосрочных целях и делайте практические шаги для их достижения. Ваша дисциплина и труд окупятся."
  },
  Aquarius: {
    en: "Your innovative ideas can make a difference, Aquarius. Connect with like-minded people and collaborate on projects that matter to you. Your unique perspective is valuable.",
    hi: "कुंभ, आपके अभिनव विचार एक अंतर डाल सकते हैं। समान विचारधारा वाले लोगों से जुड़ें और उन परियोजनाओं पर सहयोग करें जो आपके लिए मायने रखती हैं। आपका अनूठा दृष्टिकोण मूल्यवान है।",
    es: "Tus ideas innovadoras pueden marcar la diferencia, Acuario. Conéctate con personas afines y colabora en proyectos que te importan. Tu perspectiva única es valiosa.",
    de: "Deine innovativen Ideen können einen Unterschied machen, Wassermann. Vernetze dich mit Gleichgesinnten und arbeite an Projekten, die dir wichtig sind. Deine einzigartige Perspektive ist wertvoll.",
    fr: "Vos idées innovantes peuvent faire la différence, Verseau. Connectez-vous avec des personnes partageant les mêmes idées et collaborez sur des projets qui vous tiennent à cœur. Votre perspective unique est précieuse.",
    zh: "水瓶座，你的创新想法可以带来改变。与志同道合的人合作，参与对你有意义的项目。你的独特视角很有价值。",
    ar: "أفكارك المبتكرة يمكن أن تحدث فرقًا اليوم، برج الدلو. تواصل مع أشخاص يشاركونك نفس التفكير وتعاون في مشاريع تهمك. وجهة نظرك الفريدة ذات قيمة.",
    ru: "Ваши инновационные идеи могут изменить многое, Водолей. Общайтесь с единомышленниками и работайте над важными для вас проектами. Ваш уникальный взгляд ценен."
  },
  Pisces: {
    en: "Trust your intuition, Pisces. Your sensitivity and compassion are heightened, allowing you to connect deeply with others. It's a good day for creative pursuits and spiritual reflection.",
    hi: "मीन, अपनी अंतर्ज्ञान पर भरोसा करें। आपकी संवेदनशीलता और करुणा बढ़ गई है, जिससे आप दूसरों के साथ गहराई से जुड़ सकते हैं। यह रचनात्मक कार्यों और आध्यात्मिक प्रतिबिंब के लिए एक अच्छा दिन है।",
    es: "Confía en tu intuición, Piscis. Tu sensibilidad y compasión están aumentadas, lo que te permite conectar profundamente con los demás. Es un buen día para actividades creativas y reflexión espiritual.",
    de: "Vertraue auf deine Intuition, Fische. Deine Sensibilität und dein Mitgefühl sind heute besonders ausgeprägt, was dir ermöglicht, dich tief mit anderen zu verbinden. Es ist ein guter Tag für kreative Tätigkeiten und spirituelle Reflexion.",
    fr: "Faites confiance à votre intuition, Poissons. Votre sensibilité et votre compassion sont accrues, ce qui vous permet de vous connecter profondément avec les autres. C'est une bonne journée pour des activités créatives et la réflexion spirituelle.",
    zh: "双鱼座，相信你的直觉。你的敏感和同情心增强了，让你能与他人深度连接。今天适合进行创造性活动和精神反思。",
    ar: "ثق بحدسك اليوم، برج الحوت. حساسيتك وتعاطفك مرتفعان، مما يسمح لك بالتواصل العميق مع الآخرين. إنه يوم جيد للمساعي الإبداعية والتأمل الروحي.",
    ru: "Доверьтесь своей интуиции, Рыбы. Ваша чувствительность и сострадание обострены, что позволяет вам глубоко общаться с другими. Хороший день для творчества и духовных размышлений."
  }
};

interface FAQItem {
  question: { en: string; hi: string; es: string; fr: string; de: string; zh: string; ar: string; ru: string; };
  answer: { en: string; hi: string; es: string; fr: string; de: string; zh: string; ar: string; ru: string; };
}

const horoscopeFAQs: FAQItem[] = [
  {
    question: {
      en: "What is a horoscope?",
      hi: "राशिफल क्या है?",
      es: "¿Qué es un horóscopo?",
      fr: "Qu'est-ce qu'un horoscope ?",
      de: "Was ist ein Horoskop?",
      zh: "什么是星座运势？",
      ar: "ما هو البرج؟",
      ru: "Что такое гороскоп?"
    },
    answer: {
      en: "A horoscope is an astrological chart or diagram representing the positions of the Sun, Moon, planets, astrological aspects, and sensitive angles at the time of an event, such as the moment of a person's birth.",
      hi: "राशिफल एक ज्योतिषीय चार्ट या आरेख है जो किसी घटना के समय सूर्य, चंद्रमा, ग्रहों, ज्योतिषीय पहलुओं और संवेदनशील कोणों की स्थिति का प्रतिनिधित्व करता है, जैसे किसी व्यक्ति के जन्म का क्षण।",
      es: "Un horóscopo es una carta o diagrama astrológico que representa las posiciones del Sol, la Luna, los planetas, los aspectos astrológicos y los ángulos sensibles en el momento de un evento, como el nacimiento de una persona.",
      fr: "Un horoscope est un graphique ou un diagramme astrologique représentant les positions du Soleil, de la Lune, des planètes, des aspects astrologiques et des angles sensibles au moment d'un événement, comme la naissance d'une personne.",
      de: "Ein Horoskop ist eine astrologische Karte oder ein Diagramm, das die Positionen von Sonne, Mond, Planeten, astrologischen Aspekten und sensiblen Winkeln zum Zeitpunkt eines Ereignisses darstellt, wie z.B. die Geburt einer Person.",
      zh: "星座运势是一种占星图或图表，表示在某一事件发生时（如一个人出生的时刻）太阳、月亮、行星、占星角度和敏感点的位置。",
      ar: "البرج هو مخطط أو رسم بياني فلكي يمثل مواقع الشمس والقمر والكواكب والجوانب الفلكية والزوايا الحساسة في وقت حدث ما، مثل لحظة ولادة شخص ما.",
      ru: "Гороскоп — это астрологическая карта или диаграмма, представляющая положения Солнца, Луны, планет, астрологических аспектов и чувствительных углов в момент события, например, рождения человека."
    }
  },
  {
    question: {
      en: "How accurate are horoscopes?",
      hi: "राशिफल कितने सटीक होते हैं?",
      es: "¿Qué tan precisos son los horóscopos?",
      fr: "Quelle est la précision des horoscopes ?",
      de: "Wie genau sind Horoskope?",
      zh: "星座运势有多准确？",
      ar: "ما مدى دقة الأبراج؟",
      ru: "Насколько точны гороскопы?"
    },
    answer: {
      en: "Horoscopes are based on astrological interpretations and serve as guides for self-reflection and potential trends. Their accuracy can vary and is often seen as a tool for personal growth rather than definitive prediction.",
      hi: "राशिफल ज्योतिषीय व्याख्याओं पर आधारित होते हैं और आत्म-चिंतन और संभावित रुझानों के लिए मार्गदर्शक के रूप में कार्य करते हैं। उनकी सटीकता भिन्न हो सकती है और इसे अक्सर निश्चित भविष्यवाणी के बजाय व्यक्तिगत विकास के लिए एक उपकरण के रूप में देखा जाता है।",
      es: "Los horóscopos se basan en interpretaciones astrológicas y sirven como guías para la autorreflexión y las tendencias potenciales. Su precisión puede variar y a menudo se consideran una herramienta para el crecimiento personal más que una predicción definitiva.",
      fr: "Les horoscopes sont basés sur des interprétations astrologiques et servent de guides pour l'autoréflexion et les tendances potentielles. Leur précision peut varier et ils sont souvent considérés comme un outil de développement personnel plutôt qu'une prédiction définitive.",
      de: "Horoskope basieren auf astrologischen Interpretationen und dienen als Leitfaden für Selbstreflexion und mögliche Trends. Ihre Genauigkeit kann variieren und sie werden oft eher als Werkzeug für persönliches Wachstum denn als endgültige Vorhersage angesehen.",
      zh: "星座运势基于占星解释，用作自我反思和潜在趋势的指南。其准确性可能有所不同，通常被视为个人成长的工具，而不是最终的预测。",
      ar: "الأبراج مبنية على تفسيرات فلكية وتعمل كدليل للتأمل الذاتي والاتجاهات المحتملة. قد تختلف دقتها وغالبًا ما يُنظر إليها كأداة للنمو الشخصي بدلاً من التنبؤ النهائي.",
      ru: "Гороскопы основаны на астрологических интерпретациях и служат руководством для самоанализа и возможных тенденций. Их точность может различаться, и их часто рассматривают как инструмент личностного роста, а не как окончательное предсказание."
    }
  },
  {
    question: {
      en: "Can horoscopes help with career decisions?",
      hi: "क्या राशिफल करियर के फैसलों में मदद कर सकते हैं?",
      es: "¿Pueden los horóscopos ayudar con las decisiones de carrera?",
      fr: "Les horoscopes peuvent-ils aider dans les décisions de carrière ?",
      de: "Können Horoskope bei Karriereentscheidungen helfen?",
      zh: "星座运势能帮助职业决策吗？",
      ar: "هل يمكن أن تساعد الأبراج في قرارات الحياة المهنية؟",
      ru: "Могут ли гороскопы помочь в выборе карьеры?"
    },
    answer: {
      en: "Yes, many people use horoscopes and astrological readings to gain insight into their strengths, challenges, and favorable periods, which can inform career decisions and paths.",
      hi: "हां, कई लोग अपनी ताकत, चुनौतियों और अनुकूल अवधियों के बारे में जानकारी प्राप्त करने के लिए राशिफल और ज्योतिषीय रीडिंग का उपयोग करते हैं, जो करियर के फैसलों और रास्तों को सूचित कर सकते हैं।",
      es: "Sí, muchas personas usan horóscopos y lecturas astrológicas para obtener información sobre sus fortalezas, desafíos y períodos favorables, lo que puede influir en las decisiones y trayectorias profesionales.",
      fr: "Oui, de nombreuses personnes utilisent les horoscopes et les lectures astrologiques pour mieux comprendre leurs forces, leurs défis et les périodes favorables, ce qui peut influencer les décisions et les parcours professionnels.",
      de: "Ja, viele Menschen nutzen Horoskope und astrologische Deutungen, um Einblicke in ihre Stärken, Herausforderungen und günstigen Zeiten zu gewinnen, was Karriereentscheidungen und -wege beeinflussen kann.",
      zh: "是的，许多人使用星座运势和占星解读来了解自己的优势、挑战和有利时期，这可以为职业决策和路径提供参考。",
      ar: "نعم، يستخدم الكثير من الناس الأبراج والقراءات الفلكية لاكتساب نظرة ثاقبة حول نقاط قوتهم وتحدياتهم والفترات المواتية، مما يمكن أن يؤثر على قرارات ومسارات الحياة المهنية.",
      ru: "Да, многие люди используют гороскопы и астрологические прогнозы, чтобы получить представление о своих сильных сторонах, трудностях и благоприятных периодах, что может помочь в выборе карьеры и пути развития."
    }
  },
  {
    question: {
      en: "What is the difference between sun sign and moon sign?",
      hi: "सूर्य राशि और चंद्र राशि में क्या अंतर है?",
      es: "¿Cuál es la diferencia entre el signo solar y el signo lunar?",
      fr: "Quelle est la différence entre le signe solaire et le signe lunaire ?",
      de: "Was ist der Unterschied zwischen Sonnenzeichen und Mondzeichen?",
      zh: "太阳星座和月亮星座有什么区别？",
      ar: "ما الفرق بين البرج الشمسي والبرج القمري؟",
      ru: "В чем разница между солнечным и лунным знаком?"
    },
    answer: {
      en: "Your sun sign represents your core personality and ego, determined by the Sun's position at your birth. Your moon sign reflects your emotional nature, inner self, and subconscious habits, determined by the Moon's position.",
      hi: "आपकी सूर्य राशि आपके मूल व्यक्तित्व और अहंकार का प्रतिनिधित्व करती है, जो आपके जन्म के समय सूर्य की स्थिति से निर्धारित होती है। आपकी चंद्र राशि आपकी भावनात्मक प्रकृति, आंतरिक स्व और अवचेतन आदतों को दर्शाती है, जो चंद्रमा की स्थिति से निर्धारित होती है।",
      es: "Tu signo solar representa tu personalidad central y ego, determinado por la posición del Sol en tu nacimiento. Tu signo lunar refleja tu naturaleza emocional, tu yo interior y tus hábitos subconscientes, determinados por la posición de la Luna.",
      fr: "Votre signe solaire représente votre personnalité fondamentale et votre ego, déterminés par la position du Soleil à votre naissance. Votre signe lunaire reflète votre nature émotionnelle, votre moi intérieur et vos habitudes subconscientes, déterminés par la position de la Lune.",
      de: "Ihr Sonnenzeichen steht für Ihre Kernpersönlichkeit und Ihr Ego, bestimmt durch die Position der Sonne bei Ihrer Geburt. Ihr Mondzeichen spiegelt Ihre emotionale Natur, Ihr inneres Selbst und unterbewusste Gewohnheiten wider, bestimmt durch die Position des Mondes.",
      zh: "你的太阳星座代表你的核心个性和自我，由你出生时太阳的位置决定。你的月亮星座反映你的情感本质、内在自我和潜意识习惯，由月亮的位置决定。",
      ar: "يمثل برجك الشمسي شخصيتك الأساسية وذاتك، ويحدد من خلال موقع الشمس عند ولادتك. يعكس برجك القمري طبيعتك العاطفية وذاتك الداخلية وعاداتك اللاواعية، ويحدد من خلال موقع القمر.",
      ru: "Ваш солнечный знак отражает вашу основную личность и эго, определяется положением Солнца в момент вашего рождения. Ваш лунный знак отражает вашу эмоциональную природу, внутреннее \"я\" и подсознательные привычки, определяется положением Луны."
    }
  }
];

// Helper function for safe language access
function getLocalizedText(obj: { [key: string]: string }, lang: string) {
  return obj[lang] ?? obj['en'];
}

export function DailyHoroscope() {
  const { lang, t } = useLanguage();
  const [selectedSign, setSelectedSign] = useState<string>('');
  const [horoscope, setHoroscope] = useState<string>('');
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const getHoroscope = () => {
    if (selectedSign) {
      const prediction = dailyPredictions[selectedSign as keyof typeof dailyPredictions];
      if (prediction) {
        setHoroscope(getLocalizedText(prediction, lang));
      }
    }
  };
  const productCardImages = [
    ['https://res.cloudinary.com/dxwspucxw/image/upload/v1753179309/amulets_wsxif3.png', 'https://res.cloudinary.com/dxwspucxw/image/upload/v1753178892/healing_remedy_fe8zlb.png'],
    ['https://res.cloudinary.com/dxwspucxw/image/upload/v1753178835/healing_d4zat3.png', 'https://res.cloudinary.com/dxwspucxw/image/upload/v1753092132/book_collection_xmxrru.jpg'],
    ['https://res.cloudinary.com/dxwspucxw/image/upload/v1753091688/mala_svpxn3.jpg', 'https://res.cloudinary.com/dxwspucxw/image/upload/v1752754784/accessory_viwtit.jpg'],
  ];
  const [imgIdxs, setImgIdxs] = useState([0, 0, 0]);
  useEffect(() => {
    const timers = productCardImages.map((imgs, i) => setInterval(() => {
      setImgIdxs(prev => {
        const next = [...prev];
        next[i] = (next[i] + 1) % imgs.length;
        return next;
      });
    }, 3500 + i * 300)); // slight stagger for visual effect
    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  return (
    <section className="min-h-screen bg-white pt-6 pb-10 font-sans">
      <div className="max-w-8xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Banner Heading */}
        <div className="w-full rounded-3xl bg-gradient-to-r from-[#fdf6f2] via-[#f3e8ff] to-[#e0f2fe] py-7 px-2 sm:px-4 md:px-10 lg:px-16 mb-8 flex flex-col items-center justify-center shadow-md border border-[#f3e8ff]">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-3 text-center drop-shadow-lg tracking-tight">
            {t('dailyHoroscope.heading')}
          </h1>
          <p className="text-base xs:text-lg md:text-2xl text-gray-700 text-center max-w-2xl">
            {t('dailyHoroscope.subheading')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left/Main Content */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="col-span-1 md:col-span-2 bg-white shadow-lg border border-gray-200 rounded-2xl p-4 xs:p-6">
                <h3 className="text-xl xs:text-2xl font-bold text-black mb-3">
                  {t('dailyHoroscope.knowYourSign')}
                </h3>
                <div className="mb-4">
                  <label htmlFor="zodiac-sign" className="block text-sm font-medium mb-2 text-black">
                    {t('dailyHoroscope.selectSign')}
                  </label>
                  <Select onValueChange={setSelectedSign}>
                    <SelectTrigger className="w-full bg-gray-100 text-black border border-gray-300 rounded-xl px-3 py-2 hover:bg-gray-200 transition-all text-sm xs:text-base">
                      <SelectValue placeholder={t('dailyHoroscope.chooseSign')} />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                      {zodiacSigns.map((sign) => (
                        <SelectItem
                          key={sign.value}
                          value={sign.value}
                          className="px-4 py-2 text-sm text-black hover:bg-gray-100 cursor-pointer rounded-xl"
                        >
                          {getLocalizedText(sign.label, lang)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={getHoroscope}
                  disabled={!selectedSign}
                  className={`w-full px-4 py-2 rounded-xl border text-sm font-semibold mb-4 transition-all
                  ${!selectedSign
                    ? 'bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed'
                    : 'bg-black text-white border-[#E0E0E0] hover:bg-gray-800'}
                  shadow-md`}
                >
                  {t('dailyHoroscope.viewHoroscope')}
                </Button>

                {horoscope && (
                  <p className="text-black whitespace-pre-wrap mt-4 font-serif text-base xs:text-lg">{horoscope}</p>
                )}
              </Card>

              {horoscopeCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
                  className="rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between bg-white max-w-full md:max-w-[420px] mx-auto p-0"
                >
                  <div className="w-full h-44 xs:h-52 sm:h-56 relative">
                    <Image
                      src={card.image}
                      alt={getLocalizedText(card.title, lang)}
                      fill
                      className="object-cover rounded-t-xl"
                      priority={index < 2}
                    />
                  </div>
                  <div className="p-4 xs:p-6 flex flex-col flex-1">
                    <h3 className="text-lg xs:text-xl font-bold text-black mb-2">{getLocalizedText(card.title, lang)}</h3>
                    <p className="text-gray-700 mb-4 line-clamp-3 text-sm xs:text-base">{getLocalizedText(card.description, lang)}</p>
                    <Link href={card.href} passHref>
                      <Button className="bg-black text-white rounded-lg py-2 px-6 shadow-md transition-all duration-300 border border-[#E0E0E0] hover:bg-gray-800 text-sm xs:text-base">
                        {t('dailyHoroscope.learnMore')}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right/Sidebar Content */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <Card className="bg-white rounded-xl shadow-lg p-4 xs:p-6 text-center border border-gray-100">
              <div className="relative w-20 h-20 xs:w-24 xs:h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dxwspucxw/image/upload/v1752042877/placeholder-author_utggms.jpg"
                  alt="Dr. Narendra Kumar Sharma"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl xs:text-2xl font-bold text-black mb-2">
                {t('dailyHoroscope.authorName')}
              </h3>
              <p className="text-purple-600 text-xs xs:text-sm mb-4">{t('dailyHoroscope.authorTitle')}</p>
              <p className="text-gray-600 text-xs xs:text-sm mb-6">
                {t('dailyHoroscope.authorBio')}
              </p>
              <Link href="/contact" passHref>
                <Button className="w-full bg-black text-white rounded-full py-2 px-4 shadow-md transition duration-300 border border-[#E0E0E0] hover:bg-gray-800 mb-4 text-sm xs:text-base">
                  {t('dailyHoroscope.contactMe')}
                </Button>
              </Link>
              <div className="flex justify-center items-center space-x-4">
                <span className="text-gray-600 text-xs xs:text-sm">{t('dailyHoroscope.follow')}</span>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5 xs:w-6 xs:h-6" /></a>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors"><Instagram className="w-5 h-5 xs:w-6 xs:h-6" /></a>
                <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5 xs:w-6 xs:h-6" /></a>
              </div>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg p-4 xs:p-6 border border-gray-100">
              <h3 className="text-xl xs:text-2xl font-bold text-black mb-4">
                {t('dailyHoroscope.faqHeading')}
              </h3>
              <div className="space-y-4">
                {horoscopeFAQs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-2 mb-2">
                    <button
                      onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                      className="w-full text-left flex justify-between items-center text-sm xs:text-base font-semibold text-gray-900 focus:outline-none py-2"
                    >
                      {getLocalizedText(faq.question, lang)}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFAQIndex === index ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                    {openFAQIndex === index && (
                      <p className="text-gray-700 font-serif text-xs xs:text-sm pt-1 pb-2 transition-all duration-300">
                        {getLocalizedText(faq.answer, lang)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Card>
            {/* Product Image Cards: vertical column below FAQ */}
            <div className="flex flex-col gap-4 xs:gap-6 mt-4 xs:mt-6 w-full max-w-full md:max-w-[420px] mx-auto">
              {[0, 1, 2].map((cardIdx) => {
                const variants = [
                  { initial: { y: -80, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: 80, opacity: 0 } },
                  { initial: { x: -80, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: 80, opacity: 0 } },
                  { initial: { y: 80, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -80, opacity: 0 } },
                ];
                return (
                  <motion.div
                    key={cardIdx}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between w-full h-40 xs:h-48 sm:h-56 overflow-hidden"
                  >
                    <div className="relative w-full h-full">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.img
                          key={imgIdxs[cardIdx]}
                          src={productCardImages[cardIdx][imgIdxs[cardIdx]]}
                          alt="Product"
                          className="object-cover w-full h-full"
                          initial={variants[cardIdx].initial}
                          animate={variants[cardIdx].animate}
                          exit={variants[cardIdx].exit}
                          transition={{ duration: 1.2, ease: 'easeInOut' }}
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        />
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
