import React, { useState, useEffect } from "react";

const T3 = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/5816298/pexels-photo-5816298.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "People enjoying social media",
      title: "Unlock endless possibilities with our expert social media marketing services.",
      description: "Discover innovative ways to expand your reach, engage your audience, and elevate your brand with our expert social media marketing services. Harness the power of social media to drive growth and success by implementing tailored strategies that connect you with your target market and create lasting impressions.",
    },
    {
      src: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Collaboration on social platforms",
     title: "Unlock endless possibilities with our expert social media marketing services.",
      description: "Discover innovative ways to expand your reach, engage your audience, and elevate your brand with our expert social media marketing services. Harness the power of social media to drive growth and success by implementing tailored strategies that connect you with your target market and create lasting impressions.",
    },
    {
      src: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Engaging with a vibrant audience",
      title: "Unlock endless possibilities with our expert social media marketing services.",
      description: "Discover innovative ways to expand your reach, engage your audience, and elevate your brand with our expert social media marketing services. Harness the power of social media to drive growth and success by implementing tailored strategies that connect you with your target market and create lasting impressions.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative min-h-[600px] w-full overflow-hidden">
      {/* Image Slider */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-[600px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            {images[currentSlide].title}
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            {images[currentSlide].description}
          </p>

          {/* Button */}
          <button className="bg-gradient-to-r from-lime-500 to-[#75cd32] text-white px-10 py-4 rounded-lg shadow-lg hover:shadow-xl hover:from-lime-600 hover:to-green-700 transition-all duration-300 text-lg font-semibold">
            DISCOVER MORE
          </button>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 shadow-lg ${
              currentSlide === index ? "bg-blue-500" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default T3;
