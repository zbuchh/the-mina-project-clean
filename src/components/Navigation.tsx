'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe, Heart } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ps', name: 'پښتو', flag: '🇦🇫' },
  ]

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/search', label: t('nav.findProvider') },
    { href: '/chatbot', label: t('nav.chatbot') },
    { href: '/education', label: t('nav.education') },
    { href: '/about', label: t('nav.about') },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-warm-orange" />
            <span className="text-xl font-bold text-gray-900">The Mina Project</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-warm-orange transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-warm-cream"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border-none text-sm focus:outline-none cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-warm-orange"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-warm-orange hover:bg-warm-cream transition-colors duration-200 font-medium rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
