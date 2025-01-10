import React from 'react';
import { Linkedin, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ikra from '../images/1.png';

const TeamSlider = () => {
  const teamMembers = [
    {
      name: "Ikra",
      position: "Head of Digital Strategy",
      bio: "Ikra is the visionary leader behind the digital marketing company. As the Founder & Head of Digital Strategy, she ensures every project aligns with the latest industry trends and client needs. With experience working with 50+ clients, she has expertise in diverse industries.",
      expertise: ["Digital Strategy", "Client Insights", "Industry Trends"],
      icon: <Trophy className="w-6 h-6" />,
      image: ikra,
      linkedin: "https://www.linkedin.com/in/ikra-sheikh-875560277/"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#003366] mb-4">
            The Marketing Minds
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of creative and strategic thinkers is dedicated to driving your brand’s success. With deep expertise in digital marketing, we craft customized strategies that deliver measurable results.
          </p>
        </div>

        {/* Static Card */}
        <div className="flex justify-center">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm shadow-xl w-full max-w-lg mx-auto"
            >
              <CardContent className="p-6">
                <div className="relative flex flex-col items-center mb-6">
                  {/* Rounded Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-[#003366]"
                  />
                </div>

                {/* Member Details */}
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-[#003366] font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-4 py-1 bg-[#75cd32] text-white rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
