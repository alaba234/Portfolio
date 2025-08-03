// src/components/ContactSection.jsx
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This is the Netlify-recommended way to submit forms with JavaScript
    const encoded = new URLSearchParams(formData).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded,
      });

      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      // You might want to set an error state here
    }
  };


  return (
    <section
      id="contact"
      className="bg-dark-theme-bg text-dark-theme-text py-16 px-8 md:px-16 lg:px-24"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column: Contact Info */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm always interested in discussing new opportunities, innovative
              projects, or collaborating on exciting challenges. Feel free to
              reach out!
            </p>

            <div className="space-y-6 text-gray-300 mb-12">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaEnvelope className="text-neon-green text-xl" />
                <span>johannes.hirt@t-online.de</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaPhone className="text-neon-green text-xl" />
                <span>+4915121730329</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaMapMarkerAlt className="text-neon-green text-xl" />
                <span>Ulm, DE</span>
              </div>
            </div>

            {/* Social Media Icons */}
           
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1">
            <form
              name="contact" // Give your form a name
              method="POST" // Use the POST method
              data-netlify="true" // This is the key attribute for Netlify Forms
              data-netlify-honeypot="bot-field" // An anti-spam field
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4"
            
            >
              {/* A hidden field for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-green transition-colors duration-300"
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-green transition-colors duration-300"
                />
              </div>
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Project collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-green transition-colors duration-300"
                />
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-green transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full p-4 rounded-lg text-white font-bold bg-gradient-to-r from-neon-green to-blue-500 hover:scale-105 transform transition-transform duration-300 shadow-md"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
