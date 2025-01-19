import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WelcomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample carousel images - replace with your actual images
  const carouselImages = [
    '/api/placeholder/400/300',
    '/api/placeholder/400/300',
    '/api/placeholder/400/300'
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Welcome Text */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Eat & Smiley Bakery!</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We would like to thank you for your business during these trying times and hope you continue to support
          us as other businesses reopen. We have proudly served this community for over 70 years, and with your
          support, we hope to see another 70. Oliver's Bakery is a locally owned small business with the flexibility to
          cater to your personal needs. If you don't see what you are looking for give us a call and we will see if we
          can help you out.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <a
          href="/orders"
          className="bg-red-800 text-white px-6 py-2 rounded hover:bg-red-900 transition-colors"
        >
          ONLINE CAKE ORDERS
        </a>
        <div className="flex gap-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            FACEBOOK
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition-colors"
          >
            INSTAGRAM
          </a>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Bakery showcase ${index + 1}`}
                className="w-full h-[400px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;