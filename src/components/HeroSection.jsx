// src/components/HeroSection.jsx
import React, { useState, useEffect, useRef } from 'react'
import SocialLinks from './SocialLinks'
import { useTheme } from '../ThemeContext'
import useScrollFadeOut from '../hooks/useScrollFadeOut'
import useTypingEffect from '../hooks/useTypingEffect'

function HeroSection() {
  const profileImagePath = '/Passfoto.jpeg'
  const sectionRef = useRef(null) // Create a ref
  const sectionRef2 = useRef(null) // Create a ref for the second section
  const { theme } = useTheme()

  const [profileVisible, setProfileVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [socialVisible, setSocialVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)

  const jumpToSection = sectionID => {
    const section = document.getElementById(sectionID)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProfileVisible(true)
    }, 300)

    const timer2 = setTimeout(() => {
      setTextVisible(true)
    }, 800)

    const timer3 = setTimeout(() => {
      setSocialVisible(true)
    }, 1300)

    const timer4 = setTimeout(() => {
      setButtonsVisible(true)
    }, 1800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  const contentOpacity = useScrollFadeOut(sectionRef, 0.1) // Use the custom hook
  const contentOpacity2 = useScrollFadeOut(sectionRef2, 0.5) // Use the custom hook for the second section

  const phrases = [
    'a Software Engineer',
    'an Embedded Systems Engineer',
    'a Problem Solver',
    'an Electrical Engineer',
  ]
  const typedText = useTypingEffect(phrases)

  return (
    <section
      id="home"
      className="flex-grow flex flex-col items-center justify-center text-center p-8 relative overflow-hidden pt-24">
      {/* Profile Image with conditional animation */}
      <div
        className="relative z-10 flex flex-col items-center w-full"
        // Apply the calculated opacity
      >
        <div className="container mx-auto px-8 mt-16">
          <h1 className="text-5xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight">
            Hi, I'm Johannes, <br />
            <span className="bg-clip-text bg-gradient-to-r from-neon-green to-blue-500 text-transparent ">
              {typedText}
            </span>
            <span className="cursor text-neon-green from-neon-green to-blue-500">
              |
            </span>
          </h1>
        </div>
        {/* Main Content (Title, Description) with conditional animation */}
        <div
          ref={sectionRef}
          style={{ opacity: contentOpacity }}
          className={`mt-16 relative text-center max-w-5xl mx-auto mb-12 transition-all duration-700 ease-out
                    ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl md:text-4xl lg:text- font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Master Student in Systems Engineering and Management with a
            specialization in Electrical Engineering
          </h1>

          <p className="text-base md:text-lg text-gray-400 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Innovating at the intersection of software and embedded
            systems. Building next-generation solutions with cutting-edge
            technology.
          </p>
        </div>

        {/* Full-width Neon Green Loading Line - POSITIONED ABSOLUTELY TO BREAK OUT OF CONTAINER */}
        <div className="w-full max-w-7xl mx-auto mb-6">
          {' '}
          {/* or max-w-6xl */}
          <div
            className={`bg-gradient-to-r from-neon-green to-blue-500 rounded-full h-0.5 md:h-1
                   transition-all duration-1000 ease-in-out transform origin-left
                   ${textVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>

        {/* Social Links with conditional animation */}
        <div
          className={`transition-all duration-700 ease-out
                    ${socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SocialLinks />
        </div>

        {/* Action Buttons with conditional animation */}
        <div
          ref={sectionRef2}
          style={{ opacity: contentOpacity2 }}
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-8
                    transition-all duration-700 ease-out
                    ${buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={() => jumpToSection('projects')}
            className="px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-neon-green to-blue-500 hover:scale-105 transform transition-transform duration-300 shadow-md">
            View My Work
          </button>
          <button
            onClick={() => jumpToSection('contact')}
            className="px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-neon-green
        to-blue-500 hover:scale-105
         transform transition-transform duration-300 shadow-md">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
