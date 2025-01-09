import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  AcademicCapIcon,
  CameraIcon,
  CalendarDaysIcon,
  HomeModernIcon,
  GlobeAltIcon,
  UserIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  BanknotesIcon,
  HeartIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

const IndustryExpertise = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { scrollY } = useScroll();
  
  const industries = [
    { name: "Photography", dn: "Photography", icon: <CameraIcon className="w-8 h-8" /> },
    { name: "Event Management", dn: "EventManagement", icon: <CalendarDaysIcon className="w-8 h-8" /> },
    { name: "Healthcare", dn: "Healthcare", icon: <HeartIcon className="w-8 h-8" /> },
    { name: "Interior Design", dn: "InteriorDesign", icon: <HomeModernIcon className="w-8 h-8" /> },
    { name: "Immigration", dn: "Immigration", icon: <GlobeAltIcon className="w-8 h-8" /> },
    { name: "NGO", dn: "NGO", icon: <LightBulbIcon className="w-8 h-8" /> },
    { name: "Education", dn: "Education", icon: <AcademicCapIcon className="w-8 h-8" /> },
    { name: "Art & Decor", dn: "ArtAndDecor", icon: <PaintBrushIcon className="w-8 h-8" /> },
    { name: "Manufacturing", dn: "Manufacturing", icon: <WrenchScrewdriverIcon className="w-8 h-8" /> },
    { name: "Food & Beverages", dn: "FoodAndBeverages", icon: <BanknotesIcon className="w-8 h-8" /> },
    { name: "Finance", dn: "Finance", icon: <BriefcaseIcon className="w-8 h-8" /> },
    { name: "Real Estate", dn: "RealEstate", icon: <BuildingOfficeIcon className="w-8 h-8" /> },
    { name: "Construction", dn: "Construction", icon: <WrenchScrewdriverIcon className="w-8 h-8 rotate-45" /> },
  ];

  const CardComponent = ({ industry, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1
          }
        }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ 
          scale: 1.03,
          rotateY: 2,
          transition: { duration: 0.3 }
        }}
        onHoverStart={() => setHoveredIndex(index)}
        onHoverEnd={() => setHoveredIndex(null)}
        className="transform-gpu"
      >
        <Link to={`/industry/${industry.dn}`}>
          <div className="relative overflow-hidden rounded-xl bg-[#003366] p-6 shadow-lg">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
              animate={{
                opacity: hoveredIndex === index ? 0.9 : 0.7
              }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <motion.div
                animate={{
                  rotate: hoveredIndex === index ? 360 : 0,
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="p-4 rounded-full bg-[#75cd32]"
              >
                <div className="text-white">
                  {industry.icon}
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: hoveredIndex === index ? -3 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-white">
                  {industry.name}
                </h3>
              </motion.div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  const headerY = useTransform(scrollY, [0, 300], [0, -30]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  const springConfig = { stiffness: 80, damping: 15 };
  const springY = useSpring(headerY, springConfig);
  const springOpacity = useSpring(headerOpacity, springConfig);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{
            y: springY,
            opacity: springOpacity
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <span className="bg-[#75cd32] text-white text-sm font-medium px-6 py-2 rounded-full">
              Industry Expertise
            </span>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#003366] to-[#003366] bg-clip-text text-transparent"
          >
            Customized Solutions for All Industries
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-xl text-gray-600 leading-relaxed max-w-4xl"
          >
            As Delhi's premier digital marketing agency, our expert team creates
            targeted strategies that drive results for your industry. We deliver
            success-focused solutions for both startups and established brands
            through proven engagement techniques.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <CardComponent key={index} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
