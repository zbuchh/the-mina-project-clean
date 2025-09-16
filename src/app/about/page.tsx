'use client'

import { Heart, Users, Globe, Target, Award, Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'

const AboutPage = () => {
  const { t, language } = useLanguage()

  const teamMembers = [
    {
      name: 'Dr. Sarah Ahmed',
      role: 'Medical Director',
      specialty: 'Family Medicine',
      languages: ['English', 'Arabic', 'French'],
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Community Health Coordinator',
      specialty: 'Public Health',
      languages: ['English', 'Spanish'],
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Dr. Hassan Khan',
      role: 'Cultural Liaison',
      specialty: 'Internal Medicine',
      languages: ['English', 'Pashto', 'Dari', 'Urdu'],
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Fatima Al-Zahra',
      role: 'Community Outreach Specialist',
      specialty: 'Social Work',
      languages: ['English', 'Arabic', 'French'],
      image: '/api/placeholder/200/200'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We believe everyone deserves access to quality healthcare, regardless of their background or circumstances.'
    },
    {
      icon: Globe,
      title: 'Cultural Sensitivity',
      description: 'We respect and honor the diverse cultural backgrounds of the communities we serve.'
    },
    {
      icon: Users,
      title: 'Community-Centered',
      description: 'Our solutions are developed with and for the communities we serve, ensuring relevance and effectiveness.'
    },
    {
      icon: Target,
      title: 'Accessibility',
      description: 'We remove barriers to healthcare access through language support, insurance guidance, and cultural adaptation.'
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'Platform Launch',
      description: 'HealthBridge platform goes live with initial provider directory and multilingual support.'
    },
    {
      year: '2024',
      title: 'Community Partnerships',
      description: 'Established partnerships with Ma\'ruf, ICNA Relief, and local refugee service organizations.'
    },
    {
      year: '2025',
      title: 'AI Chatbot Integration',
      description: 'Launched multilingual health assistant with voice capabilities and WhatsApp integration.'
    },
    {
      year: '2025',
      title: 'Educational Hub',
      description: 'Expanded platform with comprehensive health education resources in multiple languages.'
    }
  ]

  return (
    <div className="min-h-screen bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'ar' ? 'من نحن' :
             language === 'es' ? 'Acerca de Nosotros' :
             language === 'ps' ? 'زموږ په اړه' :
             'About HealthBridge'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' ? 'نحن ملتزمون بجعل الرعاية الصحية في متناول الجميع، بغض النظر عن اللغة أو الثقافة أو الوضع المالي.' :
             language === 'es' ? 'Estamos comprometidos a hacer que la atención médica sea accesible para todos, independientemente del idioma, cultura o situación financiera.' :
             language === 'ps' ? 'موږ ژمن یو چې روغتیا پاملرنه د هرچا لپاره د لاسرسي وړ کړو، د ژبې، کلتور یا مالي وضعیت سره سم.' :
             'We are committed to making healthcare accessible to everyone, regardless of language, culture, or financial situation.'}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 border border-warm-orange border-opacity-20">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="h-8 w-8 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'ar' ? 'مهمتنا' :
                 language === 'es' ? 'Nuestra Misión' :
                 language === 'ps' ? 'زموږ ماموریت' :
                 'Our Mission'}
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {language === 'ar' ? 'تمكين اللاجئين والمهاجرين من الوصول إلى الرعاية الصحية عالية الجودة من خلال توفير أدوات ملاحة رقمية شاملة تدعم لغاتهم وثقافاتهم.' :
               language === 'es' ? 'Empoderar a refugiados e inmigrantes para acceder a atención médica de calidad mediante herramientas de navegación digital integrales que respalden sus idiomas y culturas.' :
               language === 'ps' ? 'د کډوالو او کډوالو د دوی د ژبو او کلتورونو ملاتړ کونکي بشپړ ډیجیټل ناوګیشن وسایلو له لارې د کیفیت روغتیا پاملرنې ته د لاسرسي وړ کول.' :
               'To empower refugees and immigrants to access quality healthcare through comprehensive digital navigation tools that support their languages and cultures.'}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border border-warm-orange border-opacity-20">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="h-8 w-8 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'ar' ? 'رؤيتنا' :
                 language === 'es' ? 'Nuestra Visión' :
                 language === 'ps' ? 'زموږ لید' :
                 'Our Vision'}
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {language === 'ar' ? 'عالم حيث لا توجد حواجز لغوية أو ثقافية أو مالية تمنع أي شخص من الحصول على الرعاية الصحية التي يحتاجها.' :
               language === 'es' ? 'Un mundo donde no existan barreras lingüísticas, culturales o financieras que impidan a cualquier persona acceder a la atención médica que necesita.' :
               language === 'ps' ? 'یو نړیوال چیرته چې د ژبې، کلتوري یا مالي خنډونو شتون نلري چې کومه څوک د هغه روغتیا پاملرنې څخه منع کړي چې ورته اړین دی.' :
               'A world where no language, cultural, or financial barriers prevent anyone from accessing the healthcare they need.'}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'ar' ? 'قيمنا' :
             language === 'es' ? 'Nuestros Valores' :
             language === 'ps' ? 'زموږ ارزښتونه' :
             'Our Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-warm-cream p-3 rounded-lg border border-warm-orange border-opacity-20">
                      <Icon className="h-6 w-6 text-warm-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'ar' ? 'فريقنا' :
             language === 'es' ? 'Nuestro Equipo' :
             language === 'ps' ? 'زموږ ټیم' :
             'Our Team'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.specialty}</p>
                <div className="flex flex-wrap justify-center gap-1">
                  {member.languages.map((lang) => (
                    <span key={lang} className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'ar' ? 'رحلة التطوير' :
             language === 'es' ? 'Nuestro Viaje' :
             language === 'ps' ? 'زموږ سفر' :
             'Our Journey'}
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-warm-orange text-white rounded-full flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 flex-1 border border-warm-orange border-opacity-20">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            {language === 'ar' ? 'تواصل معنا' :
             language === 'es' ? 'Contáctanos' :
             language === 'ps' ? 'موږ سره اړیکه ونیسئ' :
             'Get in Touch'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-warm-cream p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-warm-orange border-opacity-20">
                <Mail className="h-8 w-8 text-warm-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">support@minaproject.org</p>
            </div>
            <div className="text-center">
              <div className="bg-warm-cream p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-warm-orange border-opacity-20">
                <Phone className="h-8 w-8 text-warm-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">1-800-MINA-HELP</p>
            </div>
            <div className="text-center">
              <div className="bg-warm-cream p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-warm-orange border-opacity-20">
                <MapPin className="h-8 w-8 text-warm-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Dallas-Fort Worth Metroplex</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
