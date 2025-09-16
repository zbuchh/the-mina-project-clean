'use client'

import { useState } from 'react'
import { Search, MapPin, Clock, Shield, Globe } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const SearchSection = () => {
  const { t } = useLanguage()
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    language: '',
    insurance: '',
    hours: ''
  })

  const languages = [
    'English', 'Arabic', 'Spanish', 'Pashto', 'Dari', 'French', 'Swahili', 'Somali', 'Burmese', 'Nepali'
  ]

  const insuranceTypes = [
    'Medicaid (STAR)',
    'Medicaid (STAR+PLUS)',
    'CHIP',
    'Refugee Medical Assistance (RMA)',
    'Medicare',
    'ACA Marketplace Plans',
    'Blue Cross Blue Shield',
    'UnitedHealthcare',
    'Aetna',
    'Cigna',
    'Humana',
    'Molina',
    'Ambetter',
    'Charity Care / Sliding Scale',
    'Uninsured'
  ]

  const handleSearch = () => {
    // Navigate to search results page with filters
    const params = new URLSearchParams()
    if (searchFilters.location) params.set('location', searchFilters.location)
    if (searchFilters.language) params.set('language', searchFilters.language)
    if (searchFilters.insurance) params.set('insurance', searchFilters.insurance)
    if (searchFilters.hours) params.set('hours', searchFilters.hours)
    
    window.location.href = `/search?${params.toString()}`
  }

  return (
    <section className="py-16 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('search.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('search.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-warm-orange border-opacity-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  {t('search.location')}
                </label>
                <input
                  type="text"
                  placeholder="Enter zip code or city (e.g., 75201, Dallas)"
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Globe className="inline h-4 w-4 mr-1" />
                  {t('search.language')}
                </label>
                <select
                  value={searchFilters.language}
                  onChange={(e) => setSearchFilters({...searchFilters, language: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                >
                  <option value="">Select language</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              {/* Insurance */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Shield className="inline h-4 w-4 mr-1" />
                  {t('search.insurance')}
                </label>
                <select
                  value={searchFilters.insurance}
                  onChange={(e) => setSearchFilters({...searchFilters, insurance: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                >
                  <option value="">Select insurance type</option>
                  {insuranceTypes.map((insurance) => (
                    <option key={insurance} value={insurance}>{insurance}</option>
                  ))}
                </select>
              </div>

              {/* Hours */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-1" />
                  {t('search.hours')}
                </label>
                <select
                  value={searchFilters.hours}
                  onChange={(e) => setSearchFilters({...searchFilters, hours: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                >
                  <option value="">Any time</option>
                  <option value="morning">Morning (8 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                  <option value="weekend">Weekend</option>
                  <option value="emergency">24/7 Emergency</option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleSearch}
                className="bg-warm-orange hover:bg-warm-coral text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2 mx-auto shadow-lg"
              >
                <Search className="h-5 w-5" />
                {t('search.searchButton')}
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-warm-orange mb-2">500+</div>
              <div className="text-sm text-gray-600">{t('stats.providers')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warm-orange mb-2">15+</div>
              <div className="text-sm text-gray-600">{t('stats.languages')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warm-orange mb-2">25+</div>
              <div className="text-sm text-gray-600">{t('stats.communities')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warm-orange mb-2">10K+</div>
              <div className="text-sm text-gray-600">{t('stats.success')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
