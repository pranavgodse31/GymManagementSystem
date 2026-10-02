import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import Features from './components/Features'
import EthosBanner from './components/EthosBanner'
import MembershipPreview from './components/MembershipPreview'
import InquirySection from './components/InquirySection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [selectedTier, setSelectedTier] = useState('Resident Athlete')

  const handleSelectTier = (tierName) => {
    setSelectedTier(tierName)
  }

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <Features />
        <EthosBanner />
        <MembershipPreview onSelectTier={handleSelectTier} />
        <InquirySection selectedTier={selectedTier} />
      </main>
      <Footer />
    </>
  )
}

export default App
