'use client'

import { useState, useEffect } from 'react'
import { MapPin, Clock, Phone, Globe, Shield, Star, Filter, Map } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'

interface Provider {
  id: string
  name: string
  specialty: string
  address: string
  phone: string
  languages: string[]
  insurance: string[]
  hours: string
  rating: number
  distance: string
  acceptsNewPatients: boolean
}

const SearchResultsPage = () => {
  const { t } = useLanguage()
  const [showMap, setShowMap] = useState(false)
  const [sortBy, setSortBy] = useState('distance')
  const [searchParams, setSearchParams] = useState({
    location: '',
    language: '',
    insurance: '',
    hours: ''
  })

  useEffect(() => {
    // Get search parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    setSearchParams({
      location: urlParams.get('location') || '',
      language: urlParams.get('language') || '',
      insurance: urlParams.get('insurance') || '',
      hours: urlParams.get('hours') || ''
    })
  }, [])

  // Mock data - in real app this would come from API
  const providers: Provider[] = [
    {
      id: '1',
      name: 'Dr. Sarah Ahmed',
      specialty: 'Family Medicine',
      address: '1234 Main St, Dallas, TX 75201',
      phone: '(214) 555-0123',
      languages: ['English', 'Arabic', 'French'],
      insurance: ['Medicaid (STAR)', 'CHIP', 'Blue Cross Blue Shield'],
      hours: 'Mon-Fri: 8AM-5PM, Sat: 9AM-1PM',
      rating: 4.8,
      distance: '0.5 miles',
      acceptsNewPatients: true
    },
    {
      id: '2',
      name: 'Dr. Maria Rodriguez',
      specialty: 'Pediatrics',
      address: '5678 Oak Ave, Fort Worth, TX 76102',
      phone: '(817) 555-0456',
      languages: ['English', 'Spanish'],
      insurance: ['Medicaid (STAR)', 'CHIP', 'Refugee Medical Assistance'],
      hours: 'Mon-Thu: 7AM-6PM, Fri: 7AM-4PM',
      rating: 4.9,
      distance: '1.2 miles',
      acceptsNewPatients: true
    },
    {
      id: '3',
      name: 'Dr. Hassan Khan',
      specialty: 'Internal Medicine',
      address: '9012 Elm St, Irving, TX 75038',
      phone: '(972) 555-0789',
      languages: ['English', 'Pashto', 'Dari', 'Urdu'],
      insurance: ['Medicaid (STAR+PLUS)', 'Medicare', 'Charity Care'],
      hours: 'Mon-Fri: 8AM-5PM',
      rating: 4.7,
      distance: '2.1 miles',
      acceptsNewPatients: false
    },
    {
      id: '4',
      name: 'Dr. Fatima Al-Zahra',
      specialty: 'Obstetrics & Gynecology',
      address: '3456 Pine Rd, Plano, TX 75023',
      phone: '(972) 555-0321',
      languages: ['English', 'Arabic', 'French'],
      insurance: ['Medicaid (STAR)', 'CHIP', 'ACA Marketplace'],
      hours: 'Mon-Wed: 8AM-5PM, Thu: 8AM-7PM, Fri: 8AM-3PM',
      rating: 4.9,
      distance: '3.5 miles',
      acceptsNewPatients: true
    }
  ]

  const ProviderCard = ({ provider }: { provider: Provider }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-warm-orange border-opacity-10">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{provider.name}</h3>
          <p className="text-warm-orange font-medium">{provider.specialty}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1 mb-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="font-semibold">{provider.rating}</span>
          </div>
          <span className="text-sm text-gray-600">{provider.distance}</span>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span className="text-gray-700">{provider.address}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-gray-500" />
          <span className="text-gray-700">{provider.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-gray-700">{provider.hours}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <Globe className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Languages:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {provider.languages.map((lang) => (
            <span key={lang} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <Shield className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Insurance Accepted:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {provider.insurance.slice(0, 3).map((ins) => (
            <span key={ins} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
              {ins}
            </span>
          ))}
          {provider.insurance.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
              +{provider.insurance.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {provider.acceptsNewPatients ? (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Accepting New Patients
            </span>
          ) : (
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              Not Accepting New Patients
            </span>
          )}
        </div>
        <button className="bg-warm-orange hover:bg-warm-coral text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Healthcare Providers Near You
          </h1>
          <p className="text-gray-600 mb-4">
            Found {providers.length} providers matching your criteria
          </p>
          
          {/* Search Criteria Display */}
          {(searchParams.location || searchParams.language || searchParams.insurance || searchParams.hours) && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Search Criteria:</h3>
              <div className="flex flex-wrap gap-2">
                {searchParams.location && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    📍 {searchParams.location}
                  </span>
                )}
                {searchParams.language && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    🌐 {searchParams.language}
                  </span>
                )}
                {searchParams.insurance && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    🛡️ {searchParams.insurance}
                  </span>
                )}
                {searchParams.hours && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    🕒 {searchParams.hours}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowMap(!showMap)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                showMap 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Map className="h-4 w-4" />
              <span>{showMap ? 'Hide Map' : 'Show Map'}</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="distance">Distance</option>
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className={`grid gap-6 ${showMap ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
          {/* Provider List */}
          <div className="space-y-6">
            {providers.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>

          {/* Map */}
          {showMap && (
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-4">Map View</h3>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Map className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive map would be displayed here</p>
                  <p className="text-sm">Integration with Google Maps API</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
                      <button className="bg-warm-orange hover:bg-warm-coral text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Load More Providers
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchResultsPage
