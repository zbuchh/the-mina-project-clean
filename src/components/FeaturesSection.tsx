'use client'

import { Search, MessageCircle, BookOpen, MapPin, Clock, Shield } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const FeaturesSection = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: Search,
      title: t('features.search.title'),
      description: t('features.search.desc'),
      details: [
        'Search by language spoken',
        'Filter by insurance acceptance',
        'Find providers by location',
        'Check availability hours'
      ],
      color: 'bg-warm-orange'
    },
    {
      icon: MessageCircle,
      title: t('features.chatbot.title'),
      description: t('features.chatbot.desc'),
      details: [
        '24/7 health question support',
        'Multilingual voice and text',
        'Local resource recommendations',
        'Emergency guidance'
      ],
      color: 'bg-warm-coral'
    },
    {
      icon: BookOpen,
      title: t('features.education.title'),
      description: t('features.education.desc'),
      details: [
        'Short educational videos',
        'WhatsApp-friendly voice notes',
        'Culturally adapted content',
        'Service maps and guides'
      ],
      color: 'bg-warm-gold'
    }
  ]

  return (
    <section className="py-16 bg-warm-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform addresses the key barriers to healthcare access for refugee and immigrant communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-warm-orange border-opacity-10">
              <div className={`inline-flex p-3 rounded-lg ${feature.color} text-white mb-6`}>
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>

              <ul className="space-y-3">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-warm-orange rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-warm-orange border-opacity-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Priority Insurance Coverage
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-warm-orange flex-shrink-0" />
                  <span className="text-sm text-gray-700">Medicaid (STAR, STAR+PLUS, STAR Kids)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-warm-orange flex-shrink-0" />
                  <span className="text-sm text-gray-700">CHIP (Children's Health Insurance Program)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-warm-orange flex-shrink-0" />
                  <span className="text-sm text-gray-700">Refugee Medical Assistance (RMA)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-warm-orange flex-shrink-0" />
                  <span className="text-sm text-gray-700">Charity Care / Sliding Scale Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-warm-orange flex-shrink-0" />
                  <span className="text-sm text-gray-700">ACA Marketplace Plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-warm-orange flex-shrink-0" />
                  <span className="text-sm text-gray-700">Uninsured Programs</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Supported Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Arabic', 'Spanish', 'Pashto', 'Dari', 'French', 'Swahili', 'Somali', 'Burmese', 'Nepali'].map((lang) => (
                  <span key={lang} className="bg-warm-cream text-warm-orange px-3 py-1 rounded-full text-sm border border-warm-orange border-opacity-20">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
