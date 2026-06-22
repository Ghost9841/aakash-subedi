'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import { Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='w-full border-t-2 border-solid border-dark/10 dark:border-light/10 bg-light/50 dark:bg-dark/50 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          
          {/* Left Section - Brand */}
          <div className='flex flex-col items-center md:items-start'>
            <h3 className='text-xl font-bold mb-2 text-dark dark:text-light'>
              Aakash Subedi
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 text-center md:text-left max-w-xs'>
              Crafting digital experiences with code and creativity.
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className='flex flex-col items-center'>
            <h4 className='text-sm font-semibold uppercase tracking-wider mb-4 text-gray-600 dark:text-gray-400'>
              Connect With Me
            </h4>
            <div className='flex items-center gap-4'>
              <motion.a
                href="https://github.com/Ghost9841"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                className="text-gray-700 dark:text-gray-300 hover:text-dark dark:hover:text-light transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className='w-5 h-5' />
              </motion.a>
              <motion.a
                href="https://x.com/GhostAakash"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                className="text-[#1DA1F2] hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <FaTwitter className='w-5 h-5' />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aakash-subedi-b5401b215/"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                className="text-[#0A66C2] hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <FaLinkedin className='w-5 h-5' />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/aakash.subedi.545/"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                className="text-[#1877F2] hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <FaFacebook className='w-5 h-5' />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/aakashsubedi8/"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                className="text-[#E4405F] hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <FaInstagram className='w-5 h-5' />
              </motion.a>
              <motion.a
                href="mailto:asubedi778@gmail.com"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 dark:text-gray-300 hover:text-dark dark:hover:text-light transition-colors"
                aria-label="Email"
              >
                <Mail className='w-5 h-5' />
              </motion.a>
            </div>
          </div>

          {/* Right Section - Quick Links & Back to Top */}
          <div className='flex flex-col items-center md:items-end'>
            <div className='flex flex-col items-center md:items-end gap-2'>
              <Link 
                href="/" 
                className='text-sm text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-light transition-colors'
              >
                Home
              </Link>
              <Link 
                href="/aboutme" 
                className='text-sm text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-light transition-colors'
              >
                About
              </Link>
              <Link 
                href="/projects" 
                className='text-sm text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-light transition-colors'
              >
                Projects
              </Link>
              <Link 
                href="/blogs" 
                className='text-sm text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-light transition-colors'
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-8 pt-6 border-t border-dark/10 dark:border-light/10'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <p className='text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left'>
              {new Date().getFullYear()} &copy; All Rights Reserved.
            </p>
            
            <p className='text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1'>
              <a 
                href="https://linkedin.com/in/aakash-subedi-b5401b215/" 
                target="_blank" 
                className='font-semibold text-dark dark:text-light hover:underline underline-offset-2 transition-colors mr-4'
              >
                Ghost Aakash
              </a>
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='flex items-center gap-2 px-4 py-2 rounded-lg bg-dark dark:bg-light text-light dark:text-dark hover:bg-dark/80 dark:hover:bg-light/80 transition-colors text-sm font-medium'
              aria-label="Back to top"
            >
              <ArrowUp className='w-4 h-4' />
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer