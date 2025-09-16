'use client'

import { Users, Globe, Heart, CheckCircle } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const StatsSection = () => {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Users,
      number: '500+',
      label: t('stats.providers'),
      description: 'Healthcare providers in DFW area'
    },
    {
      icon: Globe,
      number: '15+',
      label: t('stats.languages'),
      description: 'Languages supported'
    },
    {
      icon: Heart,
      number: '25+',
      label: t('stats.communities'),
      description: 'Refugee communities served'
    },
    {
      icon: CheckCircle,
      number: '10K+',
      label: t('stats.success'),
      description: 'Successful healthcare connections'
    }
  ]

  return (
    <section className="py-16 bg-sunset-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Making Healthcare Accessible
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our platform has helped thousands of refugees and immigrants find the healthcare they need in their own language.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm opacity-80">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Building Bridges to Better Health
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Every day, we're working to eliminate language barriers, insurance confusion, and cultural misunderstandings 
              that prevent refugees and immigrants from accessing quality healthcare. Our platform connects communities 
              with compassionate providers who understand their unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
