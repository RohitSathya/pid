import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const ClientStats = () => {
  const logos = [
    "https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/logo-11.png",
    "https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/logo-1.png",
    "https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/logo-2.png",
    "https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/logo-3.png",
    "https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/logo-4.png",
    "https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/logo-5.png",
  ];

  const stats = [
    { value: "14K+", description: "Satisfied Happy Client", icon: "🎯" },
    { value: "57%", description: "Less Employment Cost per Month", icon: "💰" },
    { value: "4.7", description: "Average Customer Rating", icon: "⭐" },
  ];

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Trusted by fast-moving brands &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              agencies worldwide
            </span>
          </h2>
        </motion.div>

        {/* Logos Slider */}
        <div className="mb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 flex items-center justify-center h-32"
                >
                  <img 
                    src={logo} 
                    alt={`Client logo ${index + 1}`} 
                    className="max-h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-lg font-medium">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientStats;