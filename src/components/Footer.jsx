import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, ArrowUp, Send } from 'lucide-react';
import { Link } from 'react-scroll';
import emailjs from 'emailjs-com';
import youtube from '../images/youtube.png';
import pint from '../images/pint.png';
import insta from '../images/insta.png';
import fb from '../images/fb.png';
import link from '../images/in.png';
import twit from '../images/twit.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Reset messages
    setSuccessMessage('');
    setErrorMessage('');

    // EmailJS parameters
    const templateParams = {
      user_email: email,
      message: `This user is requesting to join the newsletter: ${email}`,
    };

    emailjs
      .send(
        'service_dra4h5z', // Replace with your EmailJS service ID
        'template_9wt461v', // Replace with your EmailJS template ID
        templateParams,
        'JEdkAUNXPC1eoXGTt' // Replace with your EmailJS public API key
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response.text);
          setSuccessMessage('Thank you for subscribing to our newsletter!');
          setEmail(''); // Clear the email input
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setErrorMessage('Failed to send your request. Please try again later.');
        }
      );
  };

  return (
    <footer className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-cyan-50 to-yellow-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4 whitespace-nowrap">
              IKD Marketing
            </h2>
             <p className="text-gray-600 mb-6">
              We specialize in driving online success with digital marketing services that cover SEO, social media, content, and paid ads. Our goal is to improve your online presence and help you reach the right audience with the right strategy, ensuring growth and results that matter.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <img src={fb} alt="Facebook" className="w-6 h-6 rounded-full hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <img src={twit} alt="Twitter" className="w-6 h-6 rounded-full hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <img src={link} alt="LinkedIn" className="w-6 h-6 rounded-full hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="flex items-center justify-center">
                <img src={youtube} alt="YouTube" className="w-6 h-6 rounded-full hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="flex items-center justify-center">
                <img src={insta} alt="Instagram" className="w-6 h-6 rounded-full hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="flex items-center justify-center">
                <img src={pint} alt="Pinterest" className="w-6 h-6 rounded-full hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Information</h3>
            <ul className="space-y-3">
              <li><Link to="latestblog" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Blog</Link></li>
              <li><Link to="ourservices" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Services</Link></li>
              <li><Link to="faq" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">FAQ</Link></li>
              <li><Link to="consultationform" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Contact</Link></li>
              <li><Link smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Testimonials</Link></li>
              <li><Link smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Reviews</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="text-gray-600 mb-2">New Delhi, India</p>
              <p className="text-gray-600 mb-2">
                <a href="mailto:ikdmarketinginfo@gmail.com" className="hover:text-blue-600">contact@ikdmarketing.com</a>
              </p>
              <p className="text-gray-600">+91 8700984067</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700">
                <Send size={24} />
              </button>
            </form>
            {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
            {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm text-center md:text-left">&copy;2024 IKD Marketing. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Support</a>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 bg-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <ArrowUp size={24} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
