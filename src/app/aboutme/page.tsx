'use client'
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import assets from '@/components/assets';
import Image from 'next/image';
import TransitionEffect from '@/components/TransitionEffect';

interface AnimatedNumbersProps {
  value: number;
}

const AnimatedNumbers = ({ value }: AnimatedNumbersProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(0);
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [springValue]);

  return <span ref={ref} className="inline-block text-5xl md:text-7xl font-bold"></span>;
};

const AboutME = () => {
  return (
    <div>
      <Head>
        <title>Aakash Subedi About me</title>
        <meta name="description" content="A portfolio showcasing the skills and projects of Aakash Subedi." />
      </Head>
      
        <TransitionEffect/>
      <main className="flex flex-col items-center py-12 px-6 md:px-20 space-y-6 md:space-y-12 dark:text-light">
       
        <motion.div 
          className="text-6xl font-bold mb-6 capitalize justify-center items-center pt-1 flex flex-col w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Driven by Passion, Guided by Innovation!
        </motion.div>

       
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12 w-full max-w-6xl dark:text-light/90">
          
       
          <motion.div 
            className="flex-1 text-left space-y-6"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-poppin  text-dark/90 uppercase mb-4 font-bold dark:text-light">About Me</h2>
           <p className="text-justify font-poppin">Hello! I'm Aakash Subedi – a developer, designer, and tech enthusiast passionate about building impactful digital experiences. With expertise in web development, UI/UX design, and cybersecurity, I’m dedicated to creating seamless, user-centered solutions that solve real-world challenges.</p>
           <p className="text-justify">From e-commerce to disaster management and game projects, I approach every task with innovation and a focus on usability. Let’s collaborate to bring fresh perspectives and make a difference together!</p> 
           <footer>Let's create something exceptional together!</footer>
          </motion.div>

          <motion.div className='flex-1 w-full md:w-auto mt-6 md:mt-0'
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          
          whileHover={{ scale: 1.1 }}  // Scale up on hover
          transition={{ type: "spring", stiffness: 300 ,duration: 1, repeatType: "reverse"}}
          >
          <div className="flex-1 w-full md:w-auto mt-6 md:mt-0">
            <Image 
              src={assets.aboutmepfp} 
              
              alt="Profile Picture of Aakash Subedi"
              className="w-full h-auto object-cover rounded-lg shadow-lg dark:bg-light hover:dark:border-2"
              />
          </div>
              </motion.div>

         
          <div className="flex flex-col items-start md:items-end md:ml-8 space-y-6 mt-8 md:mt-0">
            

            <div className="flex flex-col items-center md:items-end justify-center">
              <span className="inline-block text-5xl md:text-7xl font-bold">
                <AnimatedNumbers value={11}/>+
              </span>
              <h2 className="text-lg md:text-xl font-medium capitalize text-dark/90 dark:text-light">Projects done</h2>
            </div>

            <div className="flex flex-col items-center md:items-end justify-center">
              <span className="inline-block text-5xl md:text-7xl font-bold">
                <AnimatedNumbers value={1}/>+
              </span>
              <h2 className="text-lg md:text-xl font-medium capitalize text-dark/90 dark:text-light/90">Years of experience</h2>
            </div>

            <div className="flex flex-col items-center md:items-end justify-center dark:text-light/90">
              <span className="inline-block text-5xl md:text-7xl font-bold">
                <AnimatedNumbers value={10}/>+
              </span>
              <h2 className="text-lg md:text-xl font-medium capitalize text-dark/90 dark:text-light/90">Programming Languages</h2>
            </div>
          
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutME;
