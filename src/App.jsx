import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import WelcomeSection from './components/WelcomeSection'
import FeaturesSection from './components/FeaturesSection'
import GallerySection from './components/GallerySection'
import ContactSection from './components/ContactSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <WelcomeSection />
      <FeaturesSection />
      <GallerySection />
      <ContactSection />
    </>
  )
}

export default App
