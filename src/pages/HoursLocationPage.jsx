import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Phone, MapPin } from 'lucide-react';

const HoursLocationPage = () => {
  const businessHours = [
    { day: 'Mon', hours: '5:30 AM - 2:00 PM' },
    { day: 'Tue', hours: '5:30 AM - 2:00 PM' },
    { day: 'Wed', hours: '5:30 AM - 3:00 PM' },
    { day: 'Thu', hours: '5:30 AM - 3:00 PM' },
    { day: 'Fri', hours: '5:30 AM - 5:00 PM' },
    { day: 'Sat', hours: '5:30 AM - 3:00 PM' },
    { day: 'Sun', hours: 'Closed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <motion.header 
        className="bg-red-800 text-white py-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center font-cursive">
          <h1 className="text-4xl font-serif mb-4 font-cursive">Hours & Location</h1>
          <p className="text-lg font-cursive">Visit us at our Kenosha location</p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Hours Section */}
          <motion.section 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-red-800" />
              <h2 className="text-2xl font-semibold">Business Hours</h2>
            </div>
            <div className="space-y-3">
              {businessHours.map((schedule) => (
                <div 
                  key={schedule.day}
                  className="flex justify-between items-center border-b border-gray-100 py-2"
                >
                  <span className="font-medium">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
              <p className="text-red-800 font-medium mt-4">Closed Sunday and Holidays</p>
            </div>
          </motion.section>

          {/* Contact & Location Section */}
          <motion.section 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-red-800" />
                  <h2 className="text-2xl font-semibold">Contact</h2>
                </div>
                <p className="text-lg">
                  <a 
                    href="tel:+12626523984" 
                    className="text-red-800 hover:text-red-700 transition-colors"
                  >
                    Phone: (262) 652-3984
                  </a>
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-red-800" />
                  <h2 className="text-2xl font-semibold">Location</h2>
                </div>
                <p className="text-lg mb-2">3526 Roosevelt Rd,</p>
                <p className="text-lg">Kenosha, WI 53142</p>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Map Section */}
        <motion.section 
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.8876011925447!2d-87.8279872!3d42.6012945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88055e3b7b9af36f%3A0x7b7b0b0b0b0b0b0b!2s3526%20Roosevelt%20Rd%2C%20Kenosha%2C%20WI%2053142!5e0!3m2!1sen!2sus!4v1629788000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Oliver's Bakery Kenosha Wisconsin, 53142</p>
        </div>
      </footer>
    </div>
  );
};

export default HoursLocationPage;