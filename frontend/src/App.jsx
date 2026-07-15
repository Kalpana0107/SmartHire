import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Ticker from './components/Ticker'
import HowItWorks from './components/HowItWorks'
import FeaturesSection from './components/FeaturesSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Dashboard from './pages/Dashboard'

const LandingPage = () => (
  <>
    {/* Fixed Navigation */}
    <Navbar />

    {/* Main Content */}
    <main>
      {/* 1. Hero — above the fold */}
      <HeroSection />

      {/* 2. Animated capability ticker */}
      <Ticker />

      {/* 3. How It Works */}
      <HowItWorks />

      <div className="section-divider" />

      {/* 4. Core Features grid */}
      <FeaturesSection />

      <div className="section-divider" />

      {/* 5. Stats */}
      <StatsSection />

      <div className="section-divider" />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. Call To Action */}
      <CTASection />
    </main>

    {/* Footer */}
    <Footer />

    {/* Floating scroll-to-top */}
    <ScrollToTop />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
