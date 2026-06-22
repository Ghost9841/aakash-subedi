'use client'
import React from 'react';
import assets from './assets';
import { motion } from "framer-motion";
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center">
      <motion.img 
        className="rounded-2xl bg-dark w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border-2 border-solid border-transparent dark:border-light object-cover"
        whileHover={{ 
          scale: 1.15,
          rotate: 8,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
        src={assets.logoghost.src} 
        alt="Aakash Subedi Logo"
      /> 
    </Link>
  )
}

export default Logo;