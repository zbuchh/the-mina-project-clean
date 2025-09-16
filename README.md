# The Mina Project - Refugee Health Navigation Platform

A comprehensive digital health navigation tool designed specifically for refugee and immigrant communities in the Dallas-Fort Worth area. The platform addresses key barriers to healthcare access including language, insurance, provider availability, and health literacy.

## 🌟 Features

### 🔍 Provider Search Tool
- Search for healthcare providers by language spoken
- Filter by insurance type (Medicaid, CHIP, RMA, etc.)
- Find providers by location and availability hours
- Refugee-optimized provider directory

### 🤖 AI Health Assistant
- Multilingual chatbot (Arabic, Spanish, Pashto, English, and more)
- Voice-enabled communication
- Real-time health question support
- Local resource recommendations
- Emergency guidance

### 📚 Educational Media Hub
- Short educational videos in multiple languages
- WhatsApp-friendly voice notes
- Culturally adapted infographics
- Interactive service maps
- Health literacy resources

### 🌍 Multilingual Support
- Full platform translation in Arabic, Spanish, Pashto, and English
- Language switcher in navigation
- Culturally appropriate content
- Right-to-left (RTL) text support for Arabic

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### GitHub Setup

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `the-mina-project` (or your preferred name)
   - Make it public or private as needed

2. **Initialize Git in your project**
   ```bash
   cd refugee-health-platform
   git init
   git add .
   git commit -m "Initial commit: The Mina Project - Refugee Health Navigation Platform"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/the-mina-project.git
   git push -u origin main
   ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/the-mina-project.git
   cd the-mina-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
refugee-health-platform/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── search/            # Provider search page
│   │   ├── chatbot/           # AI assistant page
│   │   ├── education/         # Educational hub page
│   │   └── about/             # About page
│   ├── components/            # Reusable React components
│   │   ├── Navigation.tsx     # Main navigation
│   │   ├── LanguageProvider.tsx # Multilingual support
│   │   ├── HeroSection.tsx    # Landing page hero
│   │   ├── SearchSection.tsx  # Provider search interface
│   │   ├── FeaturesSection.tsx # Features showcase
│   │   ├── StatsSection.tsx   # Statistics display
│   │   ├── TestimonialsSection.tsx # User testimonials
│   │   └── Footer.tsx         # Site footer
│   └── lib/                   # Utility functions
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🎨 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context (for language switching)
- **Deployment**: Vercel-ready

## 🌐 Supported Languages

- English (en)
- Arabic (ar) - العربية
- Spanish (es) - Español  
- Pashto (ps) - پښتو
- Dari (dr)
- French (fr) - Français
- Swahili (sw) - Kiswahili
- Somali (so) - Soomaali
- Burmese (my) - မြန်မာ
- Nepali (ne) - नेपाली

## 🏥 Insurance Coverage Types

### Priority Coverage (Refugee-Focused)
- Medicaid (STAR, STAR+PLUS, STAR Kids)
- CHIP (Children's Health Insurance Program)
- Refugee Medical Assistance (RMA)
- Charity Care / Sliding Scale Programs
- Uninsured Programs

### Secondary Coverage
- Medicare
- ACA Marketplace Plans (Ambetter, Molina, Oscar, BCBS)
- Commercial Carriers (UnitedHealthcare, Aetna, Cigna, Humana)

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Accessibility features (WCAG 2.1 compliant)

## 🔧 Development Roadmap

### Phase 1 (Current) - Core Infrastructure ✅
- [x] Basic web platform with landing page
- [x] Provider search prototype with filters
- [x] Multilingual support framework
- [x] Responsive UI/UX design

### Phase 2 (Next) - Chatbot & Content
- [ ] MVP chatbot with text-based interface
- [ ] Voice integration (speech-to-text + text-to-speech)
- [ ] Educational content creation
- [ ] Database integration for providers

### Phase 3 - Integration & Testing
- [ ] Chatbot website integration
- [ ] Google Maps API integration
- [ ] Community partner pilot testing
- [ ] User feedback collection

### Phase 4 - Launch & Scale
- [ ] WhatsApp integration
- [ ] Advanced voice features
- [ ] Community testing and refinement
- [ ] Research data collection

## 🤝 Contributing

We welcome contributions from the community! Please see our contributing guidelines for more information.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

- **Email**: support@healthbridge.org
- **Phone**: 1-800-HEALTH-1
- **Emergency**: Call 911 or visit nearest emergency room
- **Crisis Support**: 988 Suicide & Crisis Lifeline

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Community partners: Ma'ruf, ICNA Relief, Refugee Services
- Healthcare providers in the DFW area
- Refugee and immigrant communities for their input and feedback
- Open source contributors and libraries

---

**The Mina Project** - Building bridges to better health for all communities.
