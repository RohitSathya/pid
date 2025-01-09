import React from 'react';
import { Search, Share, DollarSign, FileText, Users, ShieldCheck } from 'lucide-react';

const OurServices = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: 'SMO',
      description:
        'We are experts in Social Media Optimization (SMO), delivering engaging content that resonates with your followers. Our strategies increase shares, likes, and interactions, leading to a broader reach and more engaged social media users, helping your brand achieve significant growth.',
    },
    {
      icon: <Share className="w-8 h-8 text-white" />,
      title: 'SEO',
      description:
        'Our digital marketing agency specializes in SEO, using innovative techniques to skyrocket your website’s Google rankings. By identifying the best keywords for your niche, we drive targeted, organic traffic to your site, boosting visibility and ensuring your brand stands out. Let us help you achieve long-term SEO success.',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: 'PPC',
      description:
        'PPC advertising is one of the fastest ways to generate traffic and leads. we focus on maximizing your ad spend and ensuring the best possible ROI, driving qualified traffic and boosting conversions on platforms like Facebook Ads and Google Ads.',
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'SMM',
      description:
        'Our SMM services focus on crafting engaging content that resonates with your audience. As the Best Social Media Agency in Delhi, we help you grow your brand’s online presence by driving targeted engagement and boosting visibility across social media platforms like Facebook, Instagram, and LinkedIn for maximum results.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: 'ORM',
      description:
        'Our ORM (Online Reputation Management) services help protect and enhance your brand’s online image. As a leading digital marketing agency in Delhi, we monitor reviews, address negative feedback, and promote positive interactions, ensuring your brand maintains a trustworthy and credible reputation across digital platforms, driving consumer trust and loyalty.',
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'Content Marketing',
      description:
        'Our content marketing services focus on creating high-quality, engaging content that resonates with your audience. As a digital marketing agency in Delhi, we craft compelling blogs, videos, and infographics that build brand authority, drive organic traffic, and enhance engagement, ensuring your brand stands out in the digital space.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="bg-[#75cd32] text-white text-sm font-medium px-6 py-2 rounded-full">
          Our Services
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] leading-tight mt-6">
          The Services We Provide in Digital Marketing
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-[#003366] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-0"></div>

            {/* Icon Container */}
            <div className="w-14 h-14 rounded-full bg-[#75cd32] flex items-center justify-center mb-6 relative z-10">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-white mb-6 leading-relaxed relative z-10">
              {service.description}
            </p>

            {/* Learn More Button */}
            <button className="bg-[#75cd32] text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors duration-200 font-medium relative z-10">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Add Space Below */}
      <div className="mt-16" />

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-blue-100 rounded-full -z-10 opacity-30 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-100 rounded-full -z-10 opacity-30 animate-pulse" />
    </div>
  );
};

export default OurServices;
