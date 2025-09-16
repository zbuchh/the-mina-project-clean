'use client'

import { Search, Heart, Users, Globe } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const HeroSection = () => {
  const { t } = useLanguage()

  return (
    <section className="relative bg-sunset-gradient text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          {/* Quick Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder={t('hero.searchPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        window.location.href = '/search'
                      }
                    }}
                  />
                </div>
                <button 
                  onClick={() => window.location.href = '/search'}
                  className="bg-warm-orange hover:bg-warm-coral text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Search className="h-5 w-5" />
                  {t('hero.searchButton')}
                </button>
              </div>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Healthcare Access</h3>
              <p className="text-sm opacity-90">Find providers who understand your needs</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Support</h3>
              <p className="text-sm opacity-90">Connect with others in your community</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multilingual</h3>
              <p className="text-sm opacity-90">Available in your native language</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
