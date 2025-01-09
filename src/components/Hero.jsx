import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'INSPIRE',
      subtitle: 'Inspiring Strategies',
    },
    {
      image: 'https://i.ibb.co/yVCqnNZ/2.jpg',
      title: 'KINDLE',
      subtitle: 'Sparking Creativity',
    },
    {
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'DELIVER',
      subtitle: 'Delivering Results',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              srcSet={`${slide.image} 480w, ${slide.image.replace('.jpg', '@2x.jpg')} 1024w, ${slide.image.replace('.jpg', '@3x.jpg')} 1920w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
              style={{
                objectPosition: 'center',
                imageRendering: 'auto',
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        {slides.map((slide, index) =>
          currentSlide === index ? (
            <div key={index} className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-3xl text-white">
                {slide.subtitle}
              </p>
            </div>
          ) : null
        )}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-200 shadow-lg ${
              currentSlide === index ? 'bg-blue-500' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
