'use client'

import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Amina Hassan',
      location: 'Dallas, TX',
      language: 'Somali',
      text: 'HealthBridge helped me find a doctor who speaks Somali and accepts my Medicaid. I finally feel understood and comfortable during my appointments.',
      rating: 5
    },
    {
      name: 'Carlos Rodriguez',
      location: 'Fort Worth, TX',
      language: 'Spanish',
      text: 'The chatbot answered all my questions about my child\'s health in Spanish. It was like having a doctor available 24/7.',
      rating: 5
    },
    {
      name: 'Fatima Al-Zahra',
      location: 'Irving, TX',
      language: 'Arabic',
      text: 'The educational videos helped me understand diabetes management. The information was clear and culturally appropriate for my family.',
      rating: 5
    },
    {
      name: 'Mohammad Khan',
      location: 'Plano, TX',
      language: 'Pashto',
      text: 'I found a clinic that accepts Refugee Medical Assistance and has Pashto-speaking staff. This platform saved me months of searching.',
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stories from Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from refugees and immigrants who have found healthcare through our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 relative shadow-md border border-warm-orange border-opacity-10">
              <Quote className="h-8 w-8 text-warm-orange mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-primary-600">{testimonial.language} Speaker</div>
                </div>
                
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Partners */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Community Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="bg-warm-cream border border-warm-orange border-opacity-20 rounded-lg p-4 h-20 flex items-center justify-center">
              <span className="font-semibold text-warm-orange">Ma'ruf</span>
            </div>
            <div className="bg-warm-cream border border-warm-orange border-opacity-20 rounded-lg p-4 h-20 flex items-center justify-center">
              <span className="font-semibold text-warm-orange">ICNA Relief</span>
            </div>
            <div className="bg-warm-cream border border-warm-orange border-opacity-20 rounded-lg p-4 h-20 flex items-center justify-center">
              <span className="font-semibold text-warm-orange">Refugee Services</span>
            </div>
            <div className="bg-warm-cream border border-warm-orange border-opacity-20 rounded-lg p-4 h-20 flex items-center justify-center">
              <span className="font-semibold text-warm-orange">Community Health</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
