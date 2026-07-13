import './index.css'
import './App.css'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Ticker from './components/Ticker'
import FeaturesSection from './components/FeaturesSection'
import HowItWorks from './components/HowItWorks'
import TechStack from './components/TechStack'
import StatsSection from './components/StatsSection'
import APISection from './components/APISection'
import TestimonialsSection from './components/TestimonialsSection'
import RoadmapSection from './components/RoadmapSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero — above the fold */}
        <HeroSection />

        {/* 2. Animated capability ticker */}
        <Ticker />

        {/* 3. Core Features grid */}
        <FeaturesSection />

        <div className="section-divider" />

        {/* 4. How It Works + Architecture diagram */}
        <HowItWorks />

        <div className="section-divider" />

        {/* 5. Tech Stack breakdown */}
        <TechStack />

        {/* 6. Stats & Interactive Demo (pipeline + candidates) */}
        <StatsSection />

        <div className="section-divider" />

        {/* 7. REST API Endpoints */}
        <APISection />

        <div className="section-divider" />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. Product Roadmap */}
        <RoadmapSection />

        {/* 10. Call To Action */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating scroll-to-top */}
      <ScrollToTop />
    </>
  )
}

export default App
