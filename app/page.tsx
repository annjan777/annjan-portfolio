'use client'

import { useEffect } from 'react'
import { Link as ScrollLink, Element } from 'react-scroll'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import { ThemeToggle } from './components/ThemeToggle'

export default function Portfolio() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <ul className="flex space-x-6">
            {['About', 'Education', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </header>

      <ParallaxBanner
        layers={[
          {
            image: '/hero-image.jpg',
            speed: -20,
          },
        ]}
        className="relative min-h-screen"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden mb-8">
            <Image
              src="/hero-image.jpg"
              alt="Annjan Arora"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold mb-4"
            >
              Annjan Arora
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl"
            >
              Software Developer | IoT Enthusiast
            </motion.p>
          </div>
        </div>
      </ParallaxBanner>

      <main className="container mx-auto px-6 py-8">
        <Element name="about"><About /></Element>
        <Element name="education"><Education /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="experience"><Experience /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="certifications"><Certifications /></Element>
        <Element name="contact"><Contact /></Element>
      </main>

      <footer className="bg-gray-800 dark:bg-black text-white py-6 transition-colors duration-200">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p>&copy; 2023 Annjan Arora. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/annjan-arora" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:annjan0077@gmail.com">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+918295380969">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}