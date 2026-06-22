'use client'
import React, { useState } from 'react'
import Logo from '../Logo'
import { MoonIcon, SunIcon } from '../icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from '../useThemeSwitcher'
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import CustomLink from './CustomLink'
import CustomMobileLink from './CustomMobileLink'

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher() as [string, React.Dispatch<React.SetStateAction<string>>];
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full px-4 sm:px-8 md:px-16 lg:px-32 py-4 sm:py-6 lg:py-8 font-poppins items-center justify-between dark:text-light relative border-b border-border'>
      
      <div className="flex items-center justify-between w-full">
        {/* Left Section - Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1">
          <nav className="flex items-center gap-2 md:gap-4">
            <CustomLink href='/' title="Home" />
            <CustomLink href='/aboutme' title="About" />
            <CustomLink href='/skills' title="Skills" />
            <CustomLink href='/projects' title="Projects" />
            <CustomLink href='/blogs' title="Blogs" />
          </nav>
        </div>

        {/* Center Section - Logo (Desktop) / Logo (Mobile Left) */}
        <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 flex-shrink-0">
          <Logo />
        </div>

        {/* Right Section - Social Icons (Desktop) + Theme Toggle + Hamburger (Mobile) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Social Icons - Desktop only */}
          <div className="hidden lg:flex items-center gap-4 md:gap-6">
            <motion.a
              href="https://github.com/Ghost9841"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="hover:text-gray-900 dark:hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub className='w-5 h-5 md:w-6 md:h-6' />
            </motion.a>
            <motion.a
              href="https://x.com/Aakash__Subedi"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-[#1DA1F2]"
              aria-label="Twitter"
            >
              <FaTwitter className='w-5 h-5 md:w-6 md:h-6' />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aakash-subedi-b5401b215/"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-[#0A66C2]"
              aria-label="LinkedIn"
            >
              <FaLinkedin className='w-5 h-5 md:w-6 md:h-6' />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/aakash.subedi.545/"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-[#1877F2]"
              aria-label="Facebook"
            >
              <FaFacebook className='w-5 h-5 md:w-6 md:h-6' />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/aakashsubedi8/"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-[#E4405F]"
              aria-label="Instagram"
            >
              <FaInstagram className='w-5 h-5 md:w-6 md:h-6' />
            </motion.a>
          </div>

          {/* Theme Toggle - Always visible */}
          <motion.button
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
            className={`flex items-center justify-center rounded-full p-1.5 md:p-2 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {mode === "dark" ? (
              <SunIcon className={"fill dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </motion.button>

          {/* Mobile Menu Button - Right */}
          <button 
            className='flex flex-col justify-center items-center lg:hidden z-40' 
            onClick={handleClick}
            aria-label="Toggle menu"
          >
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-white/95 dark:bg-dark/95 backdrop-blur-md"
        >
          <nav className='flex flex-col items-center gap-6 md:gap-8 mb-8 w-full max-w-xs px-4'>
            <CustomMobileLink href='/' title="Home" toggle={handleClick} />
            <CustomMobileLink href='/aboutme' title="About" toggle={handleClick} />
            <CustomMobileLink href='/skills' title="Skills" toggle={handleClick} />
            <CustomMobileLink href='/projects' title="Projects" toggle={handleClick} />
            <CustomMobileLink href='/blogs' title="Blogs" toggle={handleClick} />
          </nav>

          <div className="flex items-center gap-6 md:gap-8">
            <motion.a
              href="https://github.com/Ghost9841"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-dark dark:text-light hover:opacity-70"
              aria-label="GitHub"
            >
              <FaGithub className='w-8 h-8 md:w-10 md:h-10' />
            </motion.a>
            <motion.a
              href="https://x.com/GhostAakash"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-[#1DA1F2]"
              aria-label="Twitter"
            >
              <FaTwitter className='w-8 h-8 md:w-10 md:h-10' />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aakash-subedi-011777286/"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-[#0A66C2]"
              aria-label="LinkedIn"
            >
              <FaLinkedin className='w-8 h-8 md:w-10 md:h-10' />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/ghostaakash"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-[#1877F2]"
              aria-label="Facebook"
            >
              <FaFacebook className='w-8 h-8 md:w-10 md:h-10' />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/aakash_subedi_04/"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-[#E4405F]"
              aria-label="Instagram"
            >
              <FaInstagram className='w-8 h-8 md:w-10 md:h-10' />
            </motion.a>
          </div>

          <button
            className={`mt-8 flex items-center justify-center rounded-full p-2 md:p-3 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {mode === "dark" ? (
              <SunIcon className={"fill dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </motion.div>
      )}
    </header>
  )
}

export default NavBar