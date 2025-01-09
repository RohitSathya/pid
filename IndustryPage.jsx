import React from "react";
import { useParams } from "react-router-dom";

const IndustryPage = () => {
  const { name } = useParams();

  const randomContent = {
    Photography: {
      title: "Capture Moments That Last Forever",
      description: `
        Photography is an art form that transcends time, freezing moments that hold meaning and emotion. 
        Whether it's a breathtaking landscape, a candid portrait, or an unforgettable wedding day, 
        photography allows us to preserve memories in their purest form. 

        As a photographer, your craft is not just about taking pictures; it’s about storytelling, 
        creativity, and bringing visions to life. With the rise of digital platforms, the demand for 
        skilled photographers has never been higher. Discover how professional photography can elevate 
        your brand, connect with audiences, and inspire countless people worldwide.

        From mastering lighting techniques to exploring post-production editing, 
        photography is a journey of endless learning and growth.
      `,
      image: "https://images.pexels.com/photos/1002630/pexels-photo-1002630.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    "Event Management": {
      title: "Unforgettable Events, Seamlessly Executed",
      description: `
        Event management is the backbone of every successful gathering, be it a corporate conference, 
        a wedding, or a music festival. It’s the meticulous planning, creative vision, and flawless execution 
        that make events memorable for everyone involved. 

        As an event planner, your role goes beyond logistics. You create experiences that leave lasting impressions 
        on attendees, from innovative themes to immersive activities. In today’s fast-paced world, the ability to 
        manage events seamlessly is a skill highly sought after across industries. 

        Learn the art of orchestrating events, coordinating with vendors, and delivering excellence 
        under tight deadlines. Let every event you plan be a celebration of perfection and creativity.
      `,
      image: "https://images.pexels.com/photos/6341377/pexels-photo-6341377.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    Medical: {
      title: "Empowering Healthcare Through Innovation",
      description: `
        The medical field is a cornerstone of modern society, dedicated to improving lives through cutting-edge 
        healthcare services. From life-saving surgeries to groundbreaking medical research, professionals in this 
        industry play a pivotal role in shaping a healthier future. 

        For healthcare providers, staying updated with the latest advancements in medicine and technology 
        is crucial. It’s not just about diagnosing and treating illnesses but also building trust and 
        compassion with patients. 

        Whether you’re a doctor, nurse, or researcher, your work impacts lives on a profound level. 
        Explore the transformative power of medicine and how it continues to evolve, improving 
        the quality of life for millions globally.
      `,
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    // Add content for other industries similarly
  };

  const content = randomContent[name] || {
    title: "Explore More",
    description: `
      Welcome to our industry page. Explore how innovation, creativity, and expertise transform 
      different sectors. Stay tuned for more updates and insights about various industries.
    `,
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Image Section */}
      <div
        className="h-96 w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${content.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            {name}
          </h1>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto py-16 px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">{content.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {content.description}
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Make an Impact in {name}?
          </h3>
          <button className="mt-4 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustryPage;
