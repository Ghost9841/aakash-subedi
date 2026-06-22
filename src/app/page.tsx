'use client'
import Image from "next/image";
import profilepic from '@/utilits/profile/aakash-subedi-profile.jpg';
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center text-dark dark:text-light">
      <TransitionEffect />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Center Section - Name and Image */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block">Aakash</span>
              <span className="block">Subedi</span>
            </h1>
          </motion.div>

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden cursor-pointer border-4 border-dark dark:border-light shadow-2xl"
          >
            <Image
              src={profilepic}
              alt="Aakash Subedi"
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-center"
          >
            <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
              Designer, Developer & Technician
            </span>
          </motion.div>
        </div>

        {/* Content Section - Single Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Summary */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            Hate and love relationship with coding. I hate it when it breaks,
            but love it when it works. Frustrated by bugs, fueled by solutions.
            Every error is just a lesson in disguise. Full-stack developer,
            When I&apos;m not coding, I&apos;m thinking about coding.
          </p>

          {/* Experience Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-1">
                Experience
              </h3>
              <p className="text-sm">
                Junior Full Stack Developer<br />
                <span className="text-xs opacity-70">Tyakkai Solutions • 2024-2025</span>
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-1">
                Education
              </h3>
              <p className="text-sm">
                BSc Computer Science<br />
                <span className="text-xs opacity-70">Techspire College • 2024-2027</span>
              </p>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold opacity-70 uppercase tracking-wider mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['React', 'NextJS', 'TypeScript', 'NodeJS', 'Python', 'Java', 'MongoDB', 'Supabase'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/Aakash_Subedi_CV.pdf"
              target="_blank"
              download={true}
              className="flex items-center gap-2 bg-dark text-light px-4 py-2 rounded-lg text-sm font-medium hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-colors duration-300 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
            >
              <Download size={16} />
              Resume
            </Link>

            <Link
              href="mailto:asubedi778@gmail.com"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-dark underline dark:text-light hover:opacity-80 transition-opacity"
            >
              <Mail size={16} />
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}