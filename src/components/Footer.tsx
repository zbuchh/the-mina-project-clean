'use client'

import { Heart, Mail, Phone, MapPin, Globe } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const Footer = () => {
  const { t } = useLanguage()

  const footerLinks = {
    services: [
      { name: 'Find Providers', href: '/search' },
      { name: 'Health Assistant', href: '/chatbot' },
      { name: 'Health Education', href: '/education' },
      { name: 'Emergency Resources', href: '/emergency' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Community Resources', href: '/resources' },
      { name: 'Language Support', href: '/languages' }
    ],
    about: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/mission' },
      { name: 'Partners', href: '/partners' },
      { name: 'Volunteer', href: '/volunteer' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-warm-orange" />
              <span className="text-2xl font-bold">The Mina Project</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting refugee and immigrant communities with healthcare providers who speak their language and understand their needs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-warm-orange" />
                <span className="text-gray-300">support@minaproject.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-warm-orange" />
                <span className="text-gray-300">1-800-MINA-HELP</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-warm-orange" />
                <span className="text-gray-300">Dallas-Fort Worth Metroplex</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-warm-orange transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-warm-orange transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-warm-orange transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Language Support */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Available Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {['English', 'العربية', 'Español', 'پښتو', 'Français', 'Kiswahili', 'Soomaali', 'မြန်မာ', 'नेपाली'].map((lang) => (
                  <span key={lang} className="bg-warm-orange bg-opacity-20 text-warm-orange px-3 py-1 rounded-full text-sm border border-warm-orange border-opacity-30">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Emergency: Call 911 or visit your nearest emergency room
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Crisis Support: 988 Suicide & Crisis Lifeline
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 The Mina Project. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-warm-orange text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-warm-orange text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/accessibility" className="text-gray-400 hover:text-warm-orange text-sm transition-colors duration-200">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
