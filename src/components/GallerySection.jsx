import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  // Using placeholder images - replace with actual bakery images
  const row1Images = [
    '/api/placeholder/300/300',
    '/api/placeholder/300/300',
    '/api/placeholder/300/300',
    '/api/placeholder/300/300',
    // Duplicate images for continuous scroll
    '/api/placeholder/300/300',
    '/api/placeholder/300/300',
    '/api/placeholder/300/300',
    '/api/placeholder/300/300'
  ];

  const row2Images = [
    '/api/placeholder/300/300',
    '/api/placeholder/300/300',
    '/api/placeholder/300/300',
    '/api/placeholder/300/300',
    // Duplicate images for continuous scroll
    '/api/placeholder/300/300',
    '/api/placeholder/300/300',
    '/api/placeholder/300/300',
    '/api/placeholder/300/300'
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl text-center font-light text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Just a little of what we do
        </motion.h2>

        {/* First Row - Left to Right */}
        <div className="mb-8 overflow-hidden">
          <motion.div 
            className="flex gap-4"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {row1Images.map((img, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={img} 
                  alt={`Bakery item ${index + 1}`}
                  className="w-72 h-72 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-4"
            initial={{ x: '-50%' }}
            animate={{ x: 0 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {row2Images.map((img, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={img} 
                  alt={`Bakery item ${index + 1}`}
                  className="w-72 h-72 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pause on Hover Overlay */}
      <div className="fixed bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg opacity-50 hover:opacity-100 transition-opacity">
        <p className="text-sm">Hover over images to pause</p>
      </div>
    </section>
  );
};

export default GallerySection;