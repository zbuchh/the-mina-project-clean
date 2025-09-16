'use client'

import { useState } from 'react'
import { Search, MapPin, Clock, Shield, MessageCircle, BookOpen, Globe } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import SearchSection from '@/components/SearchSection'
import FeaturesSection from '@/components/FeaturesSection'
import StatsSection from '@/components/StatsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-gradient">
      <HeroSection />
      <SearchSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
