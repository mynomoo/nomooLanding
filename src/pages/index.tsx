import GreenChoicesSection from '../components/greenChoicesSection'
import HeroSection from '../components/hero'
import ImpactTrackingSection from '../components/ImpactTrackingSection'
import HowItWorksSection from '../components/HowItWorksSection'
import KeyFeaturesSection from '../components/KeyFeaturesSection'
import AllInOneSection from '../components/AllInOneSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='bg-white h-screen'>
      <HeroSection />
      <GreenChoicesSection />
      <ImpactTrackingSection />
      <HowItWorksSection />
      <KeyFeaturesSection />
      <AllInOneSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
