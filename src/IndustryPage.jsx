import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const industryContent = {
  Photography: {
    title: "Digital Marketing for Photographers",
    description:
      "Reach more clients and showcase your creative talent with our tailored marketing solutions for photographers.",
    features: [
      "SEO for Photography Websites",
      "Targeting Local and Destination Clients",
      "Engaging with Customers on Social Media",
      "Showcasing Portfolios with Stunning Visuals",
      "Building a Professional Online Presence",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
  EventManagement: {
    title: "Digital Marketing for Event Management Companies",
    description:
      "Promote your event planning business and reach potential clients with our targeted digital marketing strategies.",
    features: [
      "Event Promotion on Social Media",
      "Google Ads for Event Organizers",
      "Showcasing Past Events with Visual Campaigns",
      "Targeting Local and Corporate Clients",
      "Building Brand Trust with Testimonials",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
  Healthcare: {
    title: "Digital Marketing for Healthcare Professionals",
    description:
      "Expand your reach and connect with more patients through our healthcare marketing strategies.",
    features: [
      "SEO for Doctors",
      "Targeting Local and Distant Patients",
      "Customer Testimonials",
      "Video & Infographics for Awareness",
      "Facebook and Google Ads for Healthcare",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
  InteriorDesign: {
    title: "Digital Marketing for Interior Designers",
    description:
      "Grow your interior design business and showcase your portfolio to attract high-end clients.",
    features: [
      "Visual Campaigns for Portfolio Promotion",
      "Google and Social Media Ads",
      "Targeting Local and Luxury Clients",
      "Building Brand Identity for Designers",
      "SEO for Interior Design Services",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
  Immigration: {
    title: "Digital Marketing for Immigration Consultants",
    description:
      "Reach more clients seeking immigration services with our specialized marketing strategies.",
    features: [
      "Targeting International Clients",
      "Google Ads for Immigration Services",
      "Creating Informative Blogs and Articles",
      "Building Trust with Testimonials",
      "Social Media Campaigns for Brand Awareness",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
  NGO: {
    title: "Digital Marketing for NGOs",
    description:
      "Increase awareness and support for your NGO with our digital marketing solutions.",
    features: [
      "Social Media Campaigns for Donations",
      "Building Trust Through Impact Stories",
      "SEO for NGO Websites",
      "Email Marketing for Fundraising",
      "Targeting Local and Global Supporters",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
  Education: {
    title: "Digital Marketing for Educational Institutions",
    description:
      "Boost enrollment and increase your institution’s visibility with tailored digital marketing strategies.",
    features: [
      "Targeting Students with Social Media Ads",
      "Google Ads for Education Services",
      "Creating Engaging Content for Students",
      "SEO for Educational Websites",
      "Promoting Online and Offline Courses",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
  ArtAndDecor: {
    title: "Digital Marketing for Art & Decor Businesses",
    description:
      "Showcase your art and decor pieces to the right audience with our targeted strategies.",
    features: [
      "SEO for Art Stores",
      "Social Media Ads for Artists",
      "Promoting Home Decor on Pinterest",
      "Building an Online Store with E-commerce Ads",
      "Targeting Art Enthusiasts and Collectors",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
  Manufacturing: {
    title: "Digital Marketing for Manufacturers",
    description:
      "Expand your manufacturing business and attract B2B clients with our marketing strategies.",
    features: [
      "SEO for Industrial Websites",
      "Google Ads for Manufacturing Services",
      "Building a Strong Online Presence",
      "Creating Informative Case Studies",
      "Targeting International Clients",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
  FoodAndBeverages: {
    title: "Digital Marketing for Food & Beverage Businesses",
    description:
      "Promote your restaurant or food brand with creative and impactful digital marketing solutions.",
    features: [
      "Social Media Campaigns for Food Brands",
      "Google Ads for Restaurants",
      "Creating Mouthwatering Visuals",
      "SEO for Food Blogs and Websites",
      "Targeting Local and Online Customers",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
  Finance: {
    title: "Digital Marketing for Financial Services",
    description:
      "Grow your financial service business and reach potential clients with our marketing strategies.",
    features: [
      "SEO for Financial Advisors",
      "Google Ads for Loan Services",
      "Building Brand Trust with Case Studies",
      "Social Media Campaigns for Awareness",
      "Targeting High-Net-Worth Individuals",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
  RealEstate: {
    title: "Digital Marketing for Real Estate Businesses",
    description:
      "Attract buyers and renters by showcasing properties with our effective digital marketing strategies.",
    features: [
      "SEO for Real Estate Listings",
      "Google and Facebook Ads for Properties",
      "Showcasing Properties with Virtual Tours",
      "Creating Compelling Visual Campaigns",
      "Targeting Local and International Clients",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
  Construction: {
    title: "Digital Marketing for Construction Companies",
    description:
      "Grow your construction business and reach potential clients with specialized marketing strategies.",
    features: [
      "SEO for Construction Websites",
      "Building Trust with Client Testimonials",
      "Google Ads for Construction Projects",
      "Showcasing Completed Projects Online",
      "Targeting Commercial and Residential Clients",
    ],
    images: [
      "https://inklik.com/wp-content/uploads/2021/05/doctor-1-1.png", // Replace with actual image URL
      "https://inklik.com/wp-content/uploads/2021/05/doctor-banner-image.jpg", // Replace with actual image URL
    ],
  },
};



const IndustryPage = () => {
  const { name } = useParams();
  const content = industryContent[name] || {};

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] mix-blend-overlay opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-10">
          <h1 className="text-3xl font-bold tracking-tight">{content.title || "Industry Page"}</h1>
          <a
            href="/"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-blue-50 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#003366] leading-tight">
              {content.title || "Customized Solutions for Your Industry"}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {content.description ||
                "We deliver success-focused solutions for startups and established brands alike through proven strategies."}
            </p>
            <a
  href="/"
  className="inline-block bg-[#75cd32] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
>
  Learn More
</a>

          </div>

          {/* First Image Section */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl blur opacity-30 group-hover:opacity-40 transition duration-300" />
            <img
              src={content.images?.[0] || "/api/placeholder/800/600"}
              alt={name}
              className="relative rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Second Image Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Second Image */}
          <motion.div
            className="relative group order-last md:order-first"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <img
              src={content.images?.[1] || "/api/placeholder/800/600"}
              alt={name}
              className="relative rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full object-cover"
            />
          </motion.div>

          {/* Features Section */}
          <div>
          <h3 className="text-2xl font-bold text-[#003366] mb-8">
              Key Strategies
            </h3>
            <ul className="space-y-6">
              {(content.features || ["Feature 1", "Feature 2", "Feature 3"]).map(
                (feature, index) => (
                  <li key={index} className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
<span className="inline-block w-4 h-4 bg-[#75cd32] rounded-full"></span>

                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FAQ />
      <Footer />
    </div>
  );
};

export default IndustryPage;
