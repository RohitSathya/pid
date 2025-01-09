import React, { useState } from "react";
import { Mail, User, Phone, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Validation rules
  const validateForm = () => {
    const errors = [];
    
    // Name validation
    if (!formData.name.trim()) {
      errors.push("Name is required");
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      errors.push("Name must contain only letters and spaces");
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.push("Email is required");
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)) {
      errors.push("Invalid email format");
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      errors.push("Phone number is required");
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
      errors.push("Phone number must be 10-15 digits");
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.push("Message is required");
    }
    
    // If there are any errors, show them all in one toast
    if (errors.length > 0) {
      toast.error(
        <div>
          <p className="font-bold mb-2">Please correct the following:</p>
          <ul className="list-disc pl-4">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>,
        {
          position: "top-right",
          autoClose: 6000, // Increased duration to give more time to read
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        }
      );
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    setLoading(true);

    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_dra4h5z", // Replace with your EmailJS service ID
        "template_9wt461v", // Replace with your EmailJS template ID
        emailParams,
        "JEdkAUNXPC1eoXGTt" // Replace with your EmailJS public API key
      )
      .then(
        (result) => {
          toast.success("Your message was sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send email. Please try again later.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-white p-4 flex items-center justify-center">
      {/* Toast Notification Container */}
      <ToastContainer />

      <Card className="w-full max-w-5xl bg-[#003366] shadow-xl p-6 rounded-lg">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <Mail className="h-12 w-12 text-[#75cd32]" />
          </div>
          <CardTitle className="text-3xl font-bold text-white">
            Get a Free Digital Marketing Consultation
          </CardTitle>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We'll help you plan the best digital strategy for your brand.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              {/* Name Input */}
              <div className="relative group w-full md:w-1/3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#75cd32] transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#75cd32] bg-white text-gray-700 focus:ring-2 focus:ring-[#75cd32] outline-none transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              {/* Email Input */}
              <div className="relative group w-full md:w-1/3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#75cd32] transition-colors" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#75cd32] bg-white text-gray-700 focus:ring-2 focus:ring-[#75cd32] outline-none transition-all"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Phone Input */}
              <div className="relative group w-full md:w-1/3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-[#75cd32] transition-colors" />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#75cd32] bg-white text-gray-700 focus:ring-2 focus:ring-[#75cd32] outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Textarea for Comments */}
            <div className="relative group">
              <textarea
                placeholder="Write your message or comments here..."
                className="w-full h-32 p-4 rounded-lg border border-gray-300 focus:border-[#75cd32] bg-white text-gray-700 focus:ring-2 focus:ring-[#75cd32] outline-none transition-all resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className={`bg-[#75cd32] text-white py-3 px-8 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#65b32a]"
                }`}
                disabled={loading}
              >
                <span>{loading ? "Sending..." : "Submit"}</span>
                {!loading && <ArrowRight className="h-5 w-5" />}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsultationForm;
