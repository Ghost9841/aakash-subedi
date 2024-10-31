'use client'
import React from 'react'
import { motion } from "framer-motion";
import Experience from './Experience';
import Education from './Education';

interface SkillProps {
  name: string;
  x: string;
  y: string;
}


const Skill = ({name, x, y}:SkillProps) => {
  return(
    <motion.div className="flex items-center justify-center rounded-full font-semibold 
    font-poppin bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
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
      <div className="text-7xl font-poppin justify-center flex font-semibold pt-8 my-2">
        Skills
        </div>
        <div className="w-full h-screen relative flex items-center justify-center bg-circularLight rounded-full">
          <motion.div className="flex items-center justify-center rounded-full font-semibold 
          font-poppin bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{scale:1.05}}>
            Web
            </motion.div>
          <Skill name = "HTML" x="-25vw" y="2vw"/>
          <Skill name = "CSS" x="-5vw" y="-9vw"/>
          <Skill name = "Javascript" x="20vw" y="7vw"/>
          <Skill name = "ReactJS" x="0vw" y="12vw"/>
          <Skill name = "Python" x="15vw" y="-13vw"/>
          <Skill name = "Figma" x="0vw" y="-21vw"/>
          <Skill name = "MySQL" x="-25vw" y="18vw"/>
          <Skill name = "Tailwind CSS" x="18vw" y="19vw"/>
          <Skill name = "NextJS" x="-20vw" y="-15vw"/>
        </div>
            <Experience/>
            <Education/>
      </div>
      
  )
}

export default skills
