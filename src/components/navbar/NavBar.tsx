'use client'
import React, { useState } from 'react'
import Logo from '../Logo'
import { MoonIcon,  SunIcon,  } from '../icons'
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
    <header
      className='w-full px-32 py-8 font-poppins items-center justify-between dark:text-light relative border-b border-border'>
      <button className=' flex-col fixed justify-center items-center hidden lg:hidden sm:flex md:flex xs:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div className="w-full flex justify-between items-center lg:flex xs:hidden sm:hidden ">
        <nav>
          <CustomLink href='/' title="Home" className='mr-4' />
          <CustomLink href='/aboutme' title="About" className='mx-4' />
          <CustomLink href='/skills' title="Skills" className='mx-4' />
          <CustomLink href='/projects' title="Projects" className='ml-4' />
          <CustomLink href='/blogs' title="Blogs" className='ml-4' />
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>

          {/* Social Icons */}
          <div className="flex gap-8 text-xl">
            <motion.a
              href="https://github.com/Ghost9841"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub className='w-8 h-8' />
            </motion.a>
            <motion.a
              href="https://x.com/GhostAakash"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-[#1DA1F2]"
            >
              <FaTwitter className='w-8 h-8' />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aakash-subedi-011777286/"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-[#0A66C2]"
            >
              <FaLinkedin className='w-8 h-8' />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/ghostaakash"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-[#1877F2]"
            >
              <FaFacebook className='w-8 h-8' />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/aakash_subedi_04/"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              className="text-[#E4405F]"
            >
              <FaInstagram className='w-8 h-8' />
            </motion.a>

             <motion.button
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
            className={`flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {
              mode === "dark" ?
                <SunIcon className={"fill dark"} />
                : <MoonIcon className={"fill-dark"} />
            }
          </motion.button>
          </div>
        </nav>
      </div>

      {
        isOpen ?

          <motion.div
            initial={{ scale: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32">

            <nav className=' items-center flex flex-col justify-center'>
              <CustomMobileLink href='/' title="Home" className='' toggle={handleClick} />
              <CustomMobileLink href='/aboutme' title="About" className='' toggle={handleClick} />
              <CustomMobileLink href='/skills' title="Skills" className='' toggle={handleClick} />
              <CustomMobileLink href='/projects' title="Projects" className='' toggle={handleClick} />

            </nav>

            <nav className='flex items-center justify-center flex-wrap mt-2'>

              {/* Social Icons */}
              <div className="flex gap-8 text-xl">
                <motion.a
                  href="https://github.com/Ghost9841"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  <FaGithub className='w-8 h-8' />
                </motion.a>
                <motion.a
                  href="https://x.com/GhostAakash"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  className="text-[#1DA1F2]"
                >
                  <FaTwitter className='w-8 h-8' />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/aakash-subedi-011777286/"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  className="text-[#0A66C2]"
                >
                  <FaLinkedin className='w-8 h-8' />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/ghostaakash"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  className="text-[#1877F2]"
                >
                  <FaFacebook className='w-8 h-8' />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/aakash_subedi_04/"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  className="text-[#E4405F]"
                >
                  <FaInstagram className='w-8 h-8' />
                </motion.a>
              </div>

              <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {
                  mode === "dark" ?
                    <SunIcon className={"fill dark"} />
                    : <MoonIcon className={"fill-dark"} />
                }
              </button>

            </nav>
          </motion.div>

          : null
      }






      <div className='absolute left-[48%] top-4 '><Logo /></div>
    </header>
  )
}

export default NavBar
