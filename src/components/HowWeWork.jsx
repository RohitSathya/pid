import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowWeWork = () => {
  const steps = [
    {
      id: "01",
      title: "Evaluate the Project",
      description:
        "The first step in our process is understanding your business, objectives, and target audience. We perform a thorough analysis of your existing digital presence, market conditions, and competitors.",
      icon: <Search />,
      position: "left",
    },
    {
      id: "02",
      title: "Discover Innovative Ideas",
      description:
        "We analyze current trends, consumer behavior, and industry best practices to ensure we bring fresh, impactful strategies to the table.",
      icon: <Lightbulb />,
      position: "right",
    },
    {
      id: "03",
      title: "Start Optimization",
      description:
        "Once the strategy is in place, we begin the optimization process. Whether it's optimizing your website for SEO, launching targeted ad campaigns, or curating engaging social media content.",
      icon: <TrendingUp />,
      position: "left",
    },
    {
      id: "04",
      title: "Achieve Goals",
      description:
        "With all the pieces in place, we focus on achieving your business goals. By consistently monitoring and analyzing the performance of each campaign, we make data-driven adjustments.",
      icon: <Target />,
      position: "right",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#003366] text-white py-16 px-4 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#75cd32] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#75cd32] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-[#75cd32] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-[#75cd32] text-white px-6 py-2 inline-block rounded-lg">
            How Do We Work
          </h2>
          <p className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            We follow a systematic approach to ensure that every project is
            executed to perfection.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#75cd32]" />

          {/* Steps */}
          <div className="relative space-y-16 md:space-y-24">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row ${
                  step.position === "left" ? "items-start" : "items-end"
                }`}
              >
                <div
                  className={`relative w-full md:w-5/12 ${
                    step.position === "right" && "md:ml-auto"
                  }`}
                >
                  <motion.div whileHover={{ scale: 1.02 }} className="group">
                    <Card className="bg-[#75cd32] border border-white/10">
                      <CardContent className="p-6 md:p-8">
                        {/* Step Number */}
                        <div
                          className={`absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 md:translate-x-0 md:${
                            step.position === "left" ? "left-[-2.5rem]" : "right-[-2.5rem]"
                          } bg-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center font-bold text-lg md:text-2xl text-[#003366]`}
                        >
                          {step.id}
                        </div>

                        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#003366] rounded-2xl flex items-center justify-center transform rotate-3 transition-transform group-hover:rotate-6 duration-300">
                          {React.cloneElement(step.icon, {
                            className: "w-6 h-6 md:w-8 md:h-8 text-white",
                          })}
                        </div>

                        <h3 className="text-lg md:text-2xl font-bold mt-4 md:mt-6 mb-2 md:mb-4 text-white">
                          {step.title}
                        </h3>

                        <p className="text-sm md:text-base text-white leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Connector */}
                    <div
                      className={`absolute top-1/2 ${
                        step.position === "left" ? "right-0" : "left-0"
                      } w-12 md:w-16 h-0.5 bg-[#003366] transform -translate-y-1/2 ${
                        step.position === "left"
                          ? "translate-x-full"
                          : "-translate-x-full"
                      }`}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowWeWork;
