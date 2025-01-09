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
       
                <T2 />
       
              
        
                <T3 />
         
              
              <Element name="ourservices">
              
                  <OurServices />
              
              </Element>
              
         
                <ChooseUs />
        
              
              <Element name="latestblog">
             
                  <LatestBlog />
            
              </Element>
              
        
                <HowWeWork />
        
              
              <Element name="consultationform">
        
                  <ConsultationForm />
              
              </Element>
              
              <Element name="ts">
               >
                  <TeamSlider />
               
              </Element>
              
              <Element name="faq">
       
                  <FAQ />
      
              </Element>
              
     
                <StartNow />
     
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
