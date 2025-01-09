import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import ScrollToTop from './ScrollToTop'
// Importing Components
import Header1 from "./components/Header1";
import Hero from "./components/Hero";
import T1 from "./components/T1";
import T2 from "./components/T2";
import T3 from "./components/T3";
import OurServices from "./components/OurServices";
import ChooseUs from "./components/ChooseUs";
import ClientStats from "./components/ClientStats";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import StartNow from "./components/StartNow";
import Footer from "./components/Footer";
import ConsultationForm from "./components/ConsultationForm";
import TeamSlider from "./components/TeamSlider";
import HowWeWork from "./components/HowWeWork";
import LatestBlog from "./components/LatestBlog";
import Footer2 from "./components/Footer2";
import IndustryPage from "./IndustryPage";
import AnimatedWrapper from './AnimatedWrapper';
// Add a NotFoundPage component

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
  
      {/* Header */}
      <Header1/>
   

      {/* Routes for Navigation */}
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <Element name="hero">
                <Hero />
              </Element>
              <Element name="t1">
                <T1 />
              </Element>
              <AnimatedWrapper delay={0.1}>
                <T2 />
              </AnimatedWrapper>
              
              <AnimatedWrapper delay={0.2}>
                <T3 />
              </AnimatedWrapper>
              
              <Element name="ourservices">
                <AnimatedWrapper delay={0.3}>
                  <OurServices />
                </AnimatedWrapper>
              </Element>
              
              <AnimatedWrapper delay={0.4}>
                <ChooseUs />
              </AnimatedWrapper>
              
              <Element name="latestblog">
                <AnimatedWrapper delay={0.5}>
                  <LatestBlog />
                </AnimatedWrapper>
              </Element>
              
              <AnimatedWrapper delay={0.6}>
                <HowWeWork />
              </AnimatedWrapper>
              
              <Element name="consultationform">
                <AnimatedWrapper delay={0.7}>
                  <ConsultationForm />
                </AnimatedWrapper>
              </Element>
              
              <Element name="ts">
                <AnimatedWrapper delay={0.8}>
                  <TeamSlider />
                </AnimatedWrapper>
              </Element>
              
              <Element name="faq">
                <AnimatedWrapper delay={0.9}>
                  <FAQ />
                </AnimatedWrapper>
              </Element>
              
              <AnimatedWrapper delay={1}>
                <StartNow />
              </AnimatedWrapper>
            </>
          }
        />

        {/* Dynamic Industry Page */}
        <Route path="/industry/:name" element={<IndustryPage />} />

        {/* 404 Page */}
        
      </Routes>

      {/* Footer */}
      <Footer />
      <Footer2 />
    </Router>
  );
};

export default App;
