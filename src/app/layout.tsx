import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { LanguageProvider } from '@/components/LanguageProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Mina Project - Refugee Health Navigation',
  description: 'A comprehensive digital health navigation tool for refugees and underserved communities in DFW',
  keywords: 'refugee health, healthcare access, DFW, multilingual, health navigation, Mina Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
}
