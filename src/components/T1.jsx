import React from 'react';

const T1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image with Experience Badge */}
        <div className="relative">
          <div className="rounded-3xl shadow-xl overflow-hidden relative transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/group-of-multiracial-young-friends-with-coats-and-hats-smiling-and-watching-the-social-media-with-a.jpg"
              alt="People collaborating"
              className="w-full h-full object-cover"
            />
            {/* Experience Badge */}
            <div className="absolute -top-8 -right-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-full p-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div className="text-center">
                <span className="text-4xl font-extrabold">15+</span>
                <div className="text-sm mt-1">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - About Us Content */}
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-6xl font-extrabold leading-tight">
  <span className="text-[#003366]">BEST </span>
  <span className="text-[#75cd32]">DIGITAL MARKETING AGENCY</span>
  <span className="text-[#003366]"> IN DELHI</span>
</h1>


          {/* Subheading */}
         

          {/* Main Description */}
          <p className="text-gray-700 text-lg leading-relaxed">
            In today's digital age, businesses need to establish a strong online presence to stay ahead of the competition. We are a group of dedicated and skilled experts who specialize in developing and implementing effective digital marketing strategies tailored to your company's requirements. Our specialized strategies have assisted businesses in a variety of industries in achieving their objectives, whether they are startups, small businesses, or established companies.
          </p>

          {/* Location Specific Content */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Looking for a digital marketing agency near me?</h3>
            <p className="text-gray-700 leading-relaxed">
              We're right here in Delhi, offering end-to-end solutions, including SEO, PPC, content marketing, and social media management. As the <span className="font-bold text-[#75cd32]">Best Social Media Agency in Delhi</span>, we specialize in building your online presence and connecting you with your audience.
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <p className="text-xl text-gray-800 font-semibold">
              Your success is our success. Partner with us, and let us help you unlock the full potential of digital marketing to grow your business.
            </p>
          </div>

          {/* Call to Action Button */}
          
        </div>
      </div>
    </div>
  );
};

export default T1;
