import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="relative inline-block">
            <span className="bg-[#75cd32] text-white text-sm font-medium px-6 py-2 rounded-full">
              Industry Expertise
            </span>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-20"></div>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#003366] to-[#003366] bg-clip-text text-transparent"
          >
            Customized Solutions for All Industries
          </h2>
          
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-4xl">
      As Delhi's premier digital marketing agency, our expert team creates targeted strategies that drive results for your industry.
      We deliver success-focused solutions for both startups and established brands through proven engagement techniques.
    </p>
        </motion.div>

        <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {industries.map((industry, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <Link to={`/industry/${industry.dn}`}>
            <div className="relative overflow-hidden rounded-xl bg-[#003366] p-6 shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-80"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <motion.div
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="p-4 rounded-full bg-[#75cd32]"
                >
                  <div className="text-white">
                    {typeof industry.icon === "string" ? (
                      <img src={industry.icon} alt={industry.name} className="w-10 h-10" />
                    ) : (
                      industry.icon
                    )}
                  </div>
                </motion.div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    {industry.name}
                  </h3>
                
                </div>

                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.2, 1] : 1
                  }}
                  transition={{ duration: 0.3 }}

                />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
