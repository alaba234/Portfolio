// src/components/ContactSection.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-dark-theme-bg text-dark-theme-text py-16 px-8 md:px-16 lg:px-24">
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
                <span>alex.rivera@email.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaPhone className="text-neon-green text-xl" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaMapMarkerAlt className="text-neon-green text-xl" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="#" className="text-white hover:text-neon-green transition-colors duration-300">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-neon-green transition-colors duration-300">
                <FaGithub className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-neon-green transition-colors duration-300">
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1">
            <form action="#" method="POST" className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="w-full p-4 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-green transition-colors duration-300"
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full p-4 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-green transition-colors duration-300"
                />
              </div>
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Project collaboration"
                  className="w-full p-4 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-green transition-colors duration-300"
                />
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  className="w-full p-4 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-green transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full p-4 rounded-lg text-white font-bold bg-gradient-to-r from-neon-green to-blue-500 hover:scale-105 transform transition-transform duration-300 shadow-md"
                >
                  Send Message
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