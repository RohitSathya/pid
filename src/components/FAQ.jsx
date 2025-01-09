import React, { useState } from 'react';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does SEO (Search Engine Optimization) help my business?",
      answer: "SEO improves your website’s visibility on search engines, making it easier for potential customers to find you. By optimizing your website’s content, structure, and technical aspects, SEO helps drive organic traffic, improve user experience, and boost your search engine rankings.",
      category: "SEO"
    },
    {
      question: "Why should I invest in Digital Marketing services?",
      answer: "Investing in digital marketing helps you reach a larger, more targeted audience and achieve measurable results. It’s cost-effective compared to traditional marketing methods and allows you to track and optimize your campaigns to improve performance.",
      category: "Benefits"
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy, and results can take anywhere from 3 to 6 months to become noticeable. Factors such as competition, website age, and the effectiveness of optimization techniques can impact the time it takes to see significant changes.",
      category: "SEO Timeline"
    },
    {
      question: "Can PPC be effective for small businesses?",
      answer: "Yes, PPC is a highly effective method for small businesses to drive immediate traffic and leads. By targeting specific keywords and demographics, PPC allows small businesses to compete with larger companies, while keeping the costs within a set budget.",
      category: "PPC"
    },
    {
      question: "How does Social Media Marketing (SMM) benefit my business?",
      answer: "SMM helps you promote your business on social media platforms by creating and sharing content that resonates with your audience. It boosts brand awareness, fosters customer relationships, and drives traffic to your website, ultimately leading to higher conversions.",
      category: "SMM"
    },
    {
      question: "What role does content play in digital marketing?",
      answer: "Content is a crucial element of digital marketing. It educates, informs, and engages your target audience. Quality content, including blogs, videos, and infographics, helps build trust with your audience, increases website traffic, and supports SEO efforts.",
      category: "Content"
    },
    {
      question: "How does Online Reputation Management (ORM) work?",
      answer: "ORM involves actively managing your brand's online image by monitoring reviews, mentions, and comments across platforms. By addressing negative feedback and promoting positive content, ORM helps shape your brand’s reputation and foster customer loyalty.",
      category: "ORM"
    },
    {
      question: "What is the importance of Keyword Research in SEO?",
      answer: "Keyword research is the foundation of SEO. By identifying the keywords your target audience is searching for, you can create content that matches their needs and search intent. This helps your website rank higher in search engine results, driving more organic traffic.",
      category: "SEO Basics"
    },
    {
      question: "What types of content do you create for Content Marketing?",
      answer: "We create a variety of content, including blog posts, articles, case studies, infographics, videos, and social media content. Our goal is to produce high-quality, engaging content that attracts your target audience, drives traffic, and helps convert leads into customers.",
      category: "Content"
    },
    {
      question: "Which social media platforms should my business focus on?",
      answer: "The ideal platforms depend on your business goals and target audience. We analyze your brand’s niche and customer demographics to recommend the most effective social media platforms for your marketing efforts—whether it’s Facebook, Instagram, LinkedIn, Twitter, or others.",
      category: "Social Media"
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#75cd32]  text-white rounded-full text-sm font-medium mb-4">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#003366]">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
            Find answers to common questions about digital marketing and how it can help your business grow.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-12">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#003366] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#75cd32] text-white">
                      <MessageCircle className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
                <span className="inline-block mt-2 text-sm text-white bg-[#75cd32] px-2 py-1 rounded-full">
                  {faq.category}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="px-6 pb-6 text-white leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No matching questions found. Try adjusting your search terms.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="inline-flex items-center px-6 py-3 bg-[#75cd32] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#65b32a] hover:-translate-y-0.5">
  Contact Us
  <ChevronDown/>
</button>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
