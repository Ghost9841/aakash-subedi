'use client'
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import assets from '@/components/assets';
import Image from 'next/image';
import TransitionEffect from '@/components/TransitionEffect';
import { 
  FaCode, 
  FaLaptopCode, 
  FaShieldAlt, 
  FaUserGraduate,
  FaRocket,
  FaAward,
  FaAppStore,
  FaLightbulb
} from 'react-icons/fa';

interface AnimatedNumbersProps {
  value: number;
  suffix?: string;
}

const AnimatedNumbers = ({ value, suffix = '' }: AnimatedNumbersProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref} className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"></span>;
};

const AboutME = () => {
  return (
    <>
      <Head>
        <title>Aakash Subedi - About Me</title>
        <meta name="description" content="Learn about Aakash Subedi, a passionate full-stack developer, designer, and tech enthusiast." />
      </Head>
      
      <TransitionEffect />
      
      <main className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 dark:text-light">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Title */}
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold capitalize leading-tight">
              Driven by Passion,<br />
              <span className="text-primary dark:text-primaryDark">Guided by Innovation!</span>
            </h1>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Section - About Text */}
            <motion.div 
              className="flex-1 space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaUserGraduate className="text-2xl text-primary dark:text-primaryDark" />
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider">
                  About Me
                </h2>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                Hello! I&apos;m <span className="font-semibold text-primary dark:text-primaryDark">Aakash Subedi</span> - 
                a developer, designer, and tech enthusiast passionate about building 
                impactful digital experiences. With expertise in web development, 
                UI/UX design, and cybersecurity, I&apos;m dedicated to creating seamless, 
                user-centered solutions that solve real-world challenges.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                From e-commerce to disaster management and game projects, I approach 
                every task with innovation and a focus on usability. Let&apos;s collaborate 
                to bring fresh perspectives and make a difference together!
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-3 py-1 bg-primary/10 dark:bg-primaryDark/10 rounded-full text-sm font-medium">
                  <FaCode className="inline mr-2" />
                  Full Stack
                </span>
                <span className="px-3 py-1 bg-primary/10 dark:bg-primaryDark/10 rounded-full text-sm font-medium">
                  <FaLaptopCode className="inline mr-2" />
                  UI/UX Design
                </span>
                <span className="px-3 py-1 bg-primary/10 dark:bg-primaryDark/10 rounded-full text-sm font-medium">
                  <FaShieldAlt className="inline mr-2" />
                  Cybersecurity
                </span>
              </div>

              <motion.blockquote 
                className="mt-6 p-4 sm:p-6 bg-gray-100 dark:bg-gray-800/50 rounded-lg border-l-4 border-primary dark:border-primaryDark italic text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                &quot;Let&apos;s create something exceptional together!&quot;
                <footer className="mt-2 text-sm font-semibold not-italic">
                  — Aakash Subedi
                </footer>
              </motion.blockquote>
            </motion.div>

            {/* Center Section - Image */}
            <motion.div 
              className="flex-1 flex items-center justify-center lg:px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 dark:border-primaryDark/20">
                  <Image 
                    src={assets.aboutmepfp} 
                    alt="Profile Picture of Aakash Subedi"
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-primary dark:bg-primaryDark text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  <FaRocket className="inline mr-1" />
                  Innovator
                </div>
              </div>
            </motion.div>

            {/* Right Section - Stats */}
            <motion.div 
              className="flex flex-row lg:flex-col justify-around lg:justify-start gap-4 sm:gap-6 lg:gap-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <AnimatedNumbers value={21} suffix="+" />
                <h3 className="text-sm sm:text-base md:text-lg font-medium capitalize text-dark/80 dark:text-light/80 mt-1">
                  Projects Done
                </h3>
              </div>

              <div className="text-center">
                <AnimatedNumbers value={3} suffix="+" />
                <h3 className="text-sm sm:text-base md:text-lg font-medium capitalize text-dark/80 dark:text-light/80 mt-1">
                  Years Experience
                </h3>
              </div>

              <div className="text-center">
                <AnimatedNumbers value={10} suffix="+" />
                <h3 className="text-sm sm:text-base md:text-lg font-medium capitalize text-dark/80 dark:text-light/80 mt-1">
                  Languages
                </h3>
              </div>

              <div className="text-center">
                <AnimatedNumbers value={15} suffix="" />
                <h3 className="text-sm sm:text-base md:text-lg font-medium capitalize text-dark/80 dark:text-light/80 mt-1">
                  <FaAward className="inline mr-1 text-primary dark:text-primaryDark" />
                  Certifications
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div 
            className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-dark/10 dark:border-light/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-center text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
              What I Do Best
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { icon: FaCode, label: "Web Development" },
                { icon: FaLaptopCode, label: "UI/UX Design" },
                { icon: FaAppStore, label: "App Development" },
                { icon: FaLightbulb, label: "Innovation" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.label}
                  className="p-4 sm:p-6 text-center bg-gray-100 dark:bg-gray-800/50 rounded-lg hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <skill.icon className="text-2xl sm:text-3xl text-primary dark:text-primaryDark mx-auto mb-2" />
                  <h4 className="text-sm sm:text-base font-medium">{skill.label}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default AboutME;