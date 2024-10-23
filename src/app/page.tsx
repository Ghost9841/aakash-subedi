'use client'
import Image from "next/image";
import profilepic from './utilits/profile/developer-pic-1.png';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full flex items-center text-dark min-h-screen">
      <div className="flex-shrink-0 w-1/2 h-full pt-0 bg-light p-32 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}  // Scale up on hover
          transition={{ type: "spring", stiffness: 300 ,duration: 1, repeatType: "reverse"}}
        >
        <Image  src={profilepic} alt="Aakash Pic"/>
        </motion.div>
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-center bg-light p-32">
        <motion.div
          className="text-6xl font-bold mb-4 capitalize"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          whileHover={{scale: 1}}
        >
          Crafting Digital Experiences with Code and Creativity
        </motion.div>
        <motion.p 
          className="text-lg mb-2"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I am a passionate full-stack developer focused on building dynamic web applications that elevate user experiences.
        </motion.p>
        <motion.p 
          className="text-lg"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Dive into my projects and articles to see my journey and expertise in modern web technologies.
        </motion.p>
      </div>
    </div>
  );
}
