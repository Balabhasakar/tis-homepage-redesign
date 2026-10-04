import CustomCursor from './components/animation/CustomCursor'
import ScrollProgress from './components/animation/ScrollProgress'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import AboutSection from './components/sections/AboutSection'
import CTASection from './components/sections/CTASection'
import HeroSection from './components/sections/HeroSection'
import SportsSection from './components/sections/SportsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import WhySection from './components/sections/WhySection'

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="top">
        <HeroSection />
        <AboutSection />
        <WhySection />
        <SportsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App