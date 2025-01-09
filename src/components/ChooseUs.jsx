import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Share2, Settings, Headphones, LineChart, DollarSign, ChevronRight } from 'lucide-react';

const ChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Clock />,
      title: 'We Deliver on Time',
      description: 'Time is crucial. We understand the importance of deadlines and are committed to delivering all projects on time without compromising quality.',
      color: '#60A5FA',
      stat: '98% On-time Delivery',
    },
    {
      icon: <Share2 />,
      title: 'Social Media Results',
      description: 'Our targeted campaigns and engaging strategies boost your brand\'s visibility, leading to tangible results and increased ROI.',
      color: '#34D399',
      stat: '85% Engagement Rate',
    },
    {
      icon: <Settings />,
      title: 'Customized Strategies',
      description: 'We don\'t believe in a one-size-fits-all approach. Every client receives tailored strategies that align with their goals.',
      color: '#F472B6',
      stat: '92% Client Satisfaction',
    },
    {
      icon: <Headphones />,
      title: 'Dedicated Support',
      description: 'Our team provides ongoing support, ensuring all your questions are answered and your campaigns are constantly improving.',
      color: '#A78BFA',
      stat: '95% Support Response',
    },
    {
      icon: <LineChart />,
      title: 'Transparent Reporting',
      description: 'We offer transparent and easy-to-understand reports that let you track the progress and success of your campaigns.',
      color: '#FBBF24',
      stat: '90% Report Clarity',
    },
    {
      icon: <DollarSign />,
      title: 'Affordable Price',
      description: 'Whether you\'re a small business or a large enterprise, our flexible packages can be customized to fit your budget.',
      color: '#EC4899',
      stat: '88% Cost Efficiency',
    },
  ];

  return (
    <div className="min-h-screen bg-[#003366] text-white py-16 px-4 relative overflow-hidden">
      {/* Animated Background Patterns */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#75cd32] rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#75cd32] rounded-full mix-blend-multiply filter blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#75cd32] text-white rounded-full text-sm font-medium mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white pb-4">
            Top Digital Marketing Company in Delhi
          </h2>
          <p className="text-white text-xl max-w-3xl mx-auto">
            We focus on providing exceptional results through personalized services. Here's why Inspire Strategies stands out.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveFeature(index)}
                className="cursor-pointer group bg-[#65c94a] rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white">
                    {React.cloneElement(feature.icon, {
                      className: 'w-6 h-6',
                      style: { color: '#65c94a' }, // Icon color matches lime green for contrast
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image Replacement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[800px] flex justify-center items-center"
          >
            <img
              src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=2150"
              alt="Why Choose Us"
              className="rounded-2xl shadow-lg w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
