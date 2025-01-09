import React from 'react';
import { motion } from 'framer-motion';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "Social media marketing has allowed me to reach a global audience and expand my business beyond my local market. It's been an incredible growth opportunity.",
      name: "Courtney Wright",
      location: "MEDAN",
      image: "https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/img__0001_Layer-7.jpg"
    },
    {
      quote: "Thanks to social media marketing, my small business has grown exponentially in just a few months. I never knew the power of targeted ads until I tried it!",
      name: "Marisa Randall",
      location: "JAKARTA",
      image: "https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/img__0003_Layer-5.jpg"
    },
    {
      quote: "Social media marketing has allowed me to connect with my customers on a more personal level. It's helped me build trust and loyalty with my audience.",
      name: "Thomas Stewart",
      location: "BANDUNG",
      image: "https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/img__0004_Layer-4.jpg"
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-500 font-medium text-lg mb-4 block"
          >
            TESTIMONIAL
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            What they say about us
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
            ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;