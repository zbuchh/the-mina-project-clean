'use client'

import { useState } from 'react'
import { Play, Volume2, FileText, MapPin, Clock, Globe, Heart, Users } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'

interface EducationalContent {
  id: string
  title: string
  description: string
  type: 'video' | 'audio' | 'infographic' | 'guide'
  language: string
  duration?: string
  category: string
  thumbnail?: string
}

const EducationPage = () => {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLanguage, setSelectedLanguage] = useState(language)

  const categories = [
    { id: 'all', name: 'All Topics', icon: Heart },
    { id: 'preventive', name: 'Preventive Care', icon: Heart },
    { id: 'chronic', name: 'Chronic Conditions', icon: Heart },
    { id: 'mental', name: 'Mental Health', icon: Heart },
    { id: 'children', name: 'Children\'s Health', icon: Heart },
    { id: 'women', name: 'Women\'s Health', icon: Heart },
    { id: 'emergency', name: 'Emergency Preparedness', icon: Heart }
  ]

  const languages = ['English', 'Arabic', 'Spanish', 'Pashto', 'Dari', 'French', 'Swahili', 'Somali']

  // Mock educational content
  const educationalContent: EducationalContent[] = [
    {
      id: '1',
      title: 'Understanding Your Health Insurance',
      description: 'Learn about different types of health insurance and how to use your benefits.',
      type: 'video',
      language: 'English',
      duration: '5:30',
      category: 'preventive',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: '2',
      title: 'فهم التأمين الصحي الخاص بك',
      description: 'تعلم عن أنواع مختلفة من التأمين الصحي وكيفية استخدام مزاياك.',
      type: 'video',
      language: 'Arabic',
      duration: '5:30',
      category: 'preventive'
    },
    {
      id: '3',
      title: 'Diabetes Management Tips',
      description: 'Essential tips for managing diabetes and maintaining healthy blood sugar levels.',
      type: 'audio',
      language: 'English',
      duration: '8:45',
      category: 'chronic'
    },
    {
      id: '4',
      title: 'Mental Health and Stress',
      description: 'Understanding mental health, recognizing stress, and finding support resources.',
      type: 'infographic',
      language: 'English',
      category: 'mental'
    },
    {
      id: '5',
      title: 'Child Vaccination Schedule',
      description: 'Complete guide to childhood vaccinations and immunization schedules.',
      type: 'guide',
      language: 'English',
      category: 'children'
    },
    {
      id: '6',
      title: 'Preparación para Emergencias',
      description: 'Cómo prepararse para emergencias médicas y desastres naturales.',
      type: 'video',
      language: 'Spanish',
      duration: '6:15',
      category: 'emergency'
    },
    {
      id: '7',
      title: 'د روغتیا پاملرنې لارښود',
      description: 'د روغتیا پاملرنې لپاره اساسي لارښودونه او مشورې.',
      type: 'audio',
      language: 'Pashto',
      duration: '7:20',
      category: 'preventive'
    },
    {
      id: '8',
      title: 'Women\'s Health Screening',
      description: 'Important health screenings and check-ups for women of all ages.',
      type: 'infographic',
      language: 'English',
      category: 'women'
    }
  ]

  const filteredContent = educationalContent.filter(content => {
    const categoryMatch = selectedCategory === 'all' || content.category === selectedCategory
    const languageMatch = selectedLanguage === 'all' || content.language === selectedLanguage
    return categoryMatch && languageMatch
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Play
      case 'audio': return Volume2
      case 'infographic': return FileText
      case 'guide': return FileText
      default: return FileText
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-500'
      case 'audio': return 'bg-blue-500'
      case 'infographic': return 'bg-green-500'
      case 'guide': return 'bg-purple-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'مركز التعليم الصحي' :
             language === 'es' ? 'Centro de Educación en Salud' :
             language === 'ps' ? 'د روغتیا زده کړه مرکز' :
             'Health Education Hub'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' ? 'تعلم عن الصحة والعافية من خلال مقاطع الفيديو والصوت والمواد التعليمية بلغتك.' :
             language === 'es' ? 'Aprende sobre salud y bienestar a través de videos, audio y materiales educativos en tu idioma.' :
             language === 'ps' ? 'د ویډیوګانو، غږیزو او زده کړیزو توکو له لارې په خپله ژبه د روغتیا او ښه والي په اړه زده کړه.' :
             'Learn about health and wellness through videos, audio, and educational materials in your language.'}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-warm-orange border-opacity-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {language === 'ar' ? 'المواضيع:' :
                 language === 'es' ? 'Temas:' :
                 language === 'ps' ? 'موضوعات:' :
                 'Topics:'}
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-warm-orange text-white'
                          : 'bg-warm-cream text-gray-700 hover:bg-warm-sand border border-warm-orange border-opacity-20'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{category.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Language Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <Globe className="inline h-4 w-4 mr-1" />
                {language === 'ar' ? 'اللغة:' :
                 language === 'es' ? 'Idioma:' :
                 language === 'ps' ? 'ژبه:' :
                 'Language:'}
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Languages</option>
                {languages.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content) => {
            const TypeIcon = getTypeIcon(content.type)
            return (
              <div key={content.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-warm-orange border-opacity-10">
                {/* Thumbnail/Icon */}
                <div className="h-48 bg-gradient-to-br from-warm-cream to-warm-sand flex items-center justify-center relative">
                  <div className={`absolute top-4 left-4 ${getTypeColor(content.type)} text-white p-2 rounded-lg`}>
                    <TypeIcon className="h-6 w-6" />
                  </div>
                  {content.duration && (
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                      {content.duration}
                    </div>
                  )}
                  <div className="text-center">
                    <TypeIcon className="h-12 w-12 text-warm-orange mx-auto mb-2" />
                    <span className="text-sm text-gray-600 capitalize">{content.type}</span>
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-warm-cream text-warm-orange px-2 py-1 rounded-full text-xs font-medium border border-warm-orange border-opacity-20">
                      {content.language}
                    </span>
                    <span className="text-sm text-gray-500 capitalize">{content.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  <button className="w-full bg-warm-orange hover:bg-warm-coral text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                    {content.type === 'video' ? 'Watch Video' :
                     content.type === 'audio' ? 'Listen' :
                     content.type === 'infographic' ? 'View Infographic' :
                     'Read Guide'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Service Maps Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 border border-warm-orange border-opacity-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {language === 'ar' ? 'خرائط الخدمات' :
             language === 'es' ? 'Mapas de Servicios' :
             language === 'ps' ? 'د خدمتونو نقشې' :
             'Service Maps'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-warm-cream border border-warm-orange border-opacity-20 rounded-lg">
              <MapPin className="h-8 w-8 text-warm-orange mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Affordable Clinics</h3>
              <p className="text-sm text-gray-600">Find low-cost healthcare options</p>
            </div>
            
            <div className="text-center p-6 bg-warm-cream border border-warm-orange border-opacity-20 rounded-lg">
              <Heart className="h-8 w-8 text-warm-orange mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Pharmacies</h3>
              <p className="text-sm text-gray-600">Locate nearby pharmacies</p>
            </div>
            
            <div className="text-center p-6 bg-warm-cream border border-warm-orange border-opacity-20 rounded-lg">
              <Users className="h-8 w-8 text-warm-orange mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">ESL Programs</h3>
              <p className="text-sm text-gray-600">English language learning</p>
            </div>
            
            <div className="text-center p-6 bg-warm-cream border border-warm-orange border-opacity-20 rounded-lg">
              <Clock className="h-8 w-8 text-warm-orange mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Screenings</h3>
              <p className="text-sm text-gray-600">Free health screenings</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Integration Notice */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              {language === 'ar' ? 'قريباً: تكامل واتساب' :
               language === 'es' ? 'Próximamente: Integración de WhatsApp' :
               language === 'ps' ? 'ډیر ژر: د WhatsApp ادغام' :
               'Coming Soon: WhatsApp Integration'}
            </h3>
            <p className="text-green-700">
              {language === 'ar' ? 'سنقوم قريباً بدمج مساعد الصحة مع واتساب لتسهيل الوصول إلى المعلومات الصحية.' :
               language === 'es' ? 'Pronto integraremos el asistente de salud con WhatsApp para facilitar el acceso a información de salud.' :
               language === 'ps' ? 'موږ به ډیر ژر د روغتیا مرستیال د WhatsApp سره ادغام کړو ترڅو د روغتیا معلوماتو ته لاسرسی اسانه کړو.' :
               'We will soon integrate the health assistant with WhatsApp to make health information more accessible.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationPage
