import React from 'react';
import { Heart, Gift, Cake, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Heart className="w-12 h-12 text-orange-500" />,
      title: "FISH FRIDAY",
      description: "Deep Fried White Fish and Shrimp are available from about 8:30 AM every Friday until it's gone. You can make sure to get yours by calling ahead and placing your order. Call the day before or early Friday and tell us what time you would like to pick up your order."
    },
    {
      icon: <Gift className="w-12 h-12 text-orange-500" />,
      title: "SPECIALTY ITEMS",
      description: "We are famous for our Kringles! Oliver's Bakery Kringles are a unique, any time gift. Their tender, flaky crust and flavorful fillings make them ideal for Anniversaries, Weddings, Office Gathering, Holidays and more!"
    },
    {
      icon: <Cake className="w-12 h-12 text-orange-500" />,
      title: "CAKES",
      description: "From basic to custom Oliver's can help you with your next cake order. Order on line or give us a call, we would love to help in any way we can."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "HISTORY",
      description: "For the past 70 years, Oliver's has been Kenosha's hometown bakery, and our store on Roosevelt Road is a well known landmark in the community. Over the years we have had the privilege of serving and building relationships with our customers. Being Sweet to You Is What We Do!"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl text-center font-light text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          A few things we're great at
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow bg-white"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start space-x-4">
                <motion.div 
                  className="flex-shrink-0"
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <div className="p-2 rounded-full border-2 border-orange-500 bg-white">
                    {feature.icon}
                  </div>
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-xl font-semibold text-orange-500 mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;