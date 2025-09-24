'use client'
import React from 'react'
import { motion } from "framer-motion";
import Experience from './Experience';
import Education from './Education';
import TransitionEffect from '@/components/TransitionEffect';

interface SkillProps {
  name: string;
  x: string;
  y: string;
}


const Skill = ({name, x, y}:SkillProps) => {
  return(
    <motion.div className="flex items-center justify-center rounded-full font-semibold 
    font-poppin bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light" 
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y}}
    transition={{duration: 1.5}}>
      {name}
      </motion.div>
  )
}
const skills = () => {
  return (
    <div>
      <div className="text-7xl font-poppin justify-center flex font-semibold pt-8 my-2 dark:text-light">
        Skills
        </div>
        <TransitionEffect/>
        <div className="w-full h-screen relative flex items-center justify-center bg-circularLight rounded-full dark:bg-circularDark">
          <motion.div className="flex items-center justify-center rounded-full font-semibold 
          font-poppin bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{scale:1.05}}>
            Web
            </motion.div>
          <Skill name = "React Native" x="-28vw" y="2vw"/>
          <Skill name = "Expo" x="-5vw" y="-7vw"/>
          <Skill name = "Typescript" x="24vw" y="7vw"/>
          <Skill name = "ReactJS" x="0vw" y="10vw"/>
          <Skill name = "Technician" x="15vw" y="-12vw"/>
          <Skill name = "Figma" x="0vw" y="-21vw"/>
          <Skill name = "Graphic Designer" x="-25vw" y="18vw"/>
          <Skill name = "Tailwind CSS" x="18vw" y="19vw"/>
          <Skill name = "NextJS" x="-20vw" y="-15vw"/>
        </div>
            <Experience/>
            <Education/>
      </div>
      
  )
}

export default skills
