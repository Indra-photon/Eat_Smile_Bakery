import React from 'react'
import WelcomeSection from '../components/WelcomeSection'
import FeaturesSection from '../components/FeaturesSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with full-width welcome banner */}
      <div className="relative">
        <WelcomeSection />
      </div>

      {/* Features section with clean grid layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FeaturesSection />
      </div>

      {/* Gallery with masonry layout */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <GallerySection />
        </div>
      </div>

      {/* Contact section with modern form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <ContactSection />
      </div>
    </div>
  )
}

export default Home