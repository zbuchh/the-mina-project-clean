'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.findProvider': 'Find Provider',
    'nav.chatbot': 'Health Assistant',
    'nav.education': 'Education',
    'nav.about': 'About',
    'hero.title': 'Your Health, Your Language, Your Community',
    'hero.subtitle': 'Find healthcare providers who speak your language and accept your insurance in the DFW area',
    'hero.searchPlaceholder': 'Enter your zip code or city',
    'hero.searchButton': 'Find Providers',
    'features.title': 'How We Help',
    'features.search.title': 'Find Providers',
    'features.search.desc': 'Search by language, insurance, and location',
    'features.chatbot.title': 'Health Assistant',
    'features.chatbot.desc': 'Get answers to health questions in your language',
    'features.education.title': 'Health Education',
    'features.education.desc': 'Learn about health topics with videos and guides',
    'search.title': 'Find Healthcare Providers',
    'search.subtitle': 'Search for providers who speak your language and accept your insurance',
    'search.language': 'Language Spoken',
    'search.insurance': 'Insurance Type',
    'search.location': 'Location',
    'search.hours': 'Available Hours',
    'search.searchButton': 'Search Providers',
    'stats.providers': 'Healthcare Providers',
    'stats.languages': 'Languages Supported',
    'stats.communities': 'Communities Served',
    'stats.success': 'Successful Connections',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.findProvider': 'البحث عن مقدم خدمة',
    'nav.chatbot': 'مساعد الصحة',
    'nav.education': 'التعليم',
    'nav.about': 'حول',
    'hero.title': 'صحتك، لغتك، مجتمعك',
    'hero.subtitle': 'ابحث عن مقدمي الرعاية الصحية الذين يتحدثون لغتك ويقبلون تأمينك في منطقة دالاس فورت وورث',
    'hero.searchPlaceholder': 'أدخل الرمز البريدي أو المدينة',
    'hero.searchButton': 'البحث عن مقدمي الخدمة',
    'features.title': 'كيف نساعد',
    'features.search.title': 'البحث عن مقدمي الخدمة',
    'features.search.desc': 'البحث حسب اللغة والتأمين والموقع',
    'features.chatbot.title': 'مساعد الصحة',
    'features.chatbot.desc': 'احصل على إجابات لأسئلة الصحة بلغتك',
    'features.education.title': 'التعليم الصحي',
    'features.education.desc': 'تعلم عن مواضيع الصحة بالفيديوهات والأدلة',
    'search.title': 'البحث عن مقدمي الرعاية الصحية',
    'search.subtitle': 'ابحث عن مقدمي الخدمة الذين يتحدثون لغتك ويقبلون تأمينك',
    'search.language': 'اللغة المحكية',
    'search.insurance': 'نوع التأمين',
    'search.location': 'الموقع',
    'search.hours': 'ساعات العمل',
    'search.searchButton': 'البحث عن مقدمي الخدمة',
    'stats.providers': 'مقدمو الرعاية الصحية',
    'stats.languages': 'اللغات المدعومة',
    'stats.communities': 'المجتمعات المخدومة',
    'stats.success': 'الصلات الناجحة',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.findProvider': 'Buscar Proveedor',
    'nav.chatbot': 'Asistente de Salud',
    'nav.education': 'Educación',
    'nav.about': 'Acerca de',
    'hero.title': 'Tu Salud, Tu Idioma, Tu Comunidad',
    'hero.subtitle': 'Encuentra proveedores de salud que hablen tu idioma y acepten tu seguro en el área de DFW',
    'hero.searchPlaceholder': 'Ingresa tu código postal o ciudad',
    'hero.searchButton': 'Buscar Proveedores',
    'features.title': 'Cómo Ayudamos',
    'features.search.title': 'Buscar Proveedores',
    'features.search.desc': 'Busca por idioma, seguro y ubicación',
    'features.chatbot.title': 'Asistente de Salud',
    'features.chatbot.desc': 'Obtén respuestas a preguntas de salud en tu idioma',
    'features.education.title': 'Educación en Salud',
    'features.education.desc': 'Aprende sobre temas de salud con videos y guías',
    'search.title': 'Buscar Proveedores de Salud',
    'search.subtitle': 'Busca proveedores que hablen tu idioma y acepten tu seguro',
    'search.language': 'Idioma Hablado',
    'search.insurance': 'Tipo de Seguro',
    'search.location': 'Ubicación',
    'search.hours': 'Horarios Disponibles',
    'search.searchButton': 'Buscar Proveedores',
    'stats.providers': 'Proveedores de Salud',
    'stats.languages': 'Idiomas Soportados',
    'stats.communities': 'Comunidades Atendidas',
    'stats.success': 'Conexiones Exitosas',
  },
  ps: {
    'nav.home': 'کور',
    'nav.findProvider': 'د خدمتون وړاندې کوونکي موندل',
    'nav.chatbot': 'د روغتیا مرستیال',
    'nav.education': 'زده کړه',
    'nav.about': 'زموږ په اړه',
    'hero.title': 'ستاسو روغتیا، ستاسو ژبه، ستاسو ټولنه',
    'hero.subtitle': 'د روغتیا خدمتونو وړاندې کوونکي ومومئ چې ستاسو ژبه ویلای شي او ستاسو بیمه مني په DFW سیمه کې',
    'hero.searchPlaceholder': 'خپل پوسټ کوډ یا ښار ولیکئ',
    'hero.searchButton': 'د خدمتونو وړاندې کوونکي ومومئ',
    'features.title': 'موږ څنګه مرسته کوو',
    'features.search.title': 'د خدمتونو وړاندې کوونکي موندل',
    'features.search.desc': 'د ژبې، بیمې او ځای پر اساس لټون',
    'features.chatbot.title': 'د روغتیا مرستیال',
    'features.chatbot.desc': 'د روغتیا پوښتنو ته ځوابونه په خپله ژبه ترلاسه کړئ',
    'features.education.title': 'د روغتیا زده کړه',
    'features.education.desc': 'د ویډیوګانو او لارښودونو سره د روغتیا موضوعاتو زده کړه',
    'search.title': 'د روغتیا خدمتونو وړاندې کوونکي ومومئ',
    'search.subtitle': 'د خدمتونو وړاندې کوونکي ومومئ چې ستاسو ژبه ویلای شي او ستاسو بیمه مني',
    'search.language': 'ویل شوې ژبه',
    'search.insurance': 'د بیمې ډول',
    'search.location': 'ځای',
    'search.hours': 'شته ساعتونه',
    'search.searchButton': 'د خدمتونو وړاندې کوونکي ومومئ',
    'stats.providers': 'د روغتیا خدمتونو وړاندې کوونکي',
    'stats.languages': 'مات شوي ژبې',
    'stats.communities': 'خدمت شوي ټولنې',
    'stats.success': 'بریالۍ اړیکې',
  },
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en')

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
