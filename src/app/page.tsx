'use client'
import Image from "next/image";
import profilepic from '@/utilits/profile/developer-pic-1.png';
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import Hireme from "@/components/Hireme";


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
      <div className="w-1/2 h-full flex-shrink-0 items-center justify-center pt-0 bg-light p-32">
        <motion.div
          className="text-6xl font-bold mb-6 capitalize"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Crafting Digital Experiences with Code and Creativity
        </motion.div>
        <motion.p 
          className="text-lg my-6"
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
        <div className="flex items-center self-start mt-4">
        <Link href="/mycv.pdf" 
        target={"_blank"}
        className="flex items-center bg-dark text-light p-2.5 px-6
        rounded-lg text-lg font-poppin font-semibold hover:bg-light hover:text-dark
        border-2 border-solid border-transparent hover:border-dark"
        download={true}
        >
           Resume
        <LinkArrow className={"w-6 ml-1"}></LinkArrow>
        </Link>

        <Link href="mailto:asubedi778@gmail.com" 
        target="_blank"
        className="ml-4 text-lg font-poppin font-medium capitalize text-dark underline"
        >
          Contact
          </Link>
        <Hireme/>
        </div>
      </div>
    </div>
  );
}
