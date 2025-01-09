import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LatestBlog = () => {
  const blogs = [
    {
      title: "10 Tips for a Successful Digital Marketing Campaign",
      description: "Learn how to maximize your digital marketing efforts with these essential tips for running a successful campaign.",
      image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_2-4.jpg",
      link: "#"
    },
    {
      title: "The Future of Social Media Marketing in 2025",
      description: "Discover the trends and strategies that will shape social media marketing in the years to come.",
      image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_1.jpg",
      link: "#"
    },
    {
      title: "How to Optimize Your Content for SEO",
      description: "A comprehensive guide on creating SEO-friendly content to boost your website traffic.",
      image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_3-3.jpg",
      link: "#"
    },
    {
      title: "Email Marketing Best Practices for Higher Conversions",
      description: "Master email marketing with these proven techniques to improve open rates and drive conversions.",
      image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_3-2.jpg",
      link: "#"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
   <div className="bg-gradient-to-br from-[#003366] via-[#002244] to-[#001122] bg-opacity-50 py-20 px-6">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-6">Latest Blogs</h2>
          <p className="text-white text-lg max-w-3xl mx-auto">
            Stay updated with the latest insights and trends in digital marketing to keep your strategies ahead of the curve.
          </p>
        </div>

        {/* Blog Slider */}
        <div className="relative">
          {/* Slider Controls */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-red-600 p-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-red-600 p-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <motion.div
            className="flex overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                className={`shrink-0 w-full transition-transform duration-500 ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[300px] object-cover rounded-t-xl"
                  />
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{blog.title}</h3>
                    <p className="text-gray-600 mb-6">{blog.description}</p>
                    <a
                      href={blog.link}
                      className="text-red-600 font-semibold hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;