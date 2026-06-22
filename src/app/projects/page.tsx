'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import featuredproject from '../../utilits/aakashportfolio.png';
import bazarproducts from '../../utilits/bazzar products.png';
import paisaminer from '../../utilits/paisaminer.png';
import createGhostBun from '../../utilits/create-ghost-bun.png';
import powerinweb from '../../utilits/powerinweb.png';
import ezripper from '../../utilits/ezripper.png';
import monsoonbooks from '../../utilits/monsoonbooks.png';
import unitedtravels from '../../utilits/unitedtravels.png';
import badartype from '../../utilits/badartype.png';
import movesinternational from '../../utilits/movesinternational.png';

import comingsoon from '../../utilits/comingsoon.png';


import TransitionEffect from '@/components/TransitionEffect';
import FeaturedProject from './FeaturedProjects';
import SideProject from './SideProjects';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'featured', 'web', 'app', 'extension', 'npm'];

  const allProjects = {
    featured: {
      title: "Aakash Personal Portfolio",
      summary: "This is a portfolio website of Aakash Subedi, made using NextJS, Tailwind CSS, and Framer-Motion. Showcasing interactions and personal portfolio.",
      link: "https://github.com/Ghost9841/aakash-subedi",
      type: "Featured Project",
      img: featuredproject,
      github: "https://github.com/Ghost9841/aakash-subedi",
      livedemo: 'https://aakash-subedi.com.np/',
      category: 'featured'
    },
    sideProjects: [
      {
        title: "Monsoon Books",
        type: "Local E-commerce",
        img: monsoonbooks, // Replace with actual image
        github: "https://github.com/Ghost9841/monsoon-books",
        link: "https://github.com/Ghost9841/monsoon-books",
        description: "E-commerce platform for book lovers",
        tech: ['Next.js', 'Cloudinary', 'Supabase'],
        category: 'web'
      },
      {
        title: "Power In Web",
        type: "Website App",
        img: powerinweb,
        github: "https://github.com/Ghost9841/powerinweb.git",
        livedemo: 'https://powerinweb.netlify.app/',
        link: "https://github.com/Ghost9841/powerinweb.git",
        description: "A powerful web application for digital solutions",
        tech: ['React', 'Tailwind', 'Netlify'],
        category: 'web'
      },
      {
        title: "United Travel & Tours",
        type: "UK Project",
        img: unitedtravels, // Replace with actual image
        github: "https://github.com/Ghost9841/united-travel-tour",
        link: "https://github.com/Ghost9841/united-travel-tour",
        livedemo: "https://united-travel-tour.com",
        description: "Travel agency website for UK clients with booking system",
        tech: ['Next.js', 'Stripe', 'Tailwind'],
        category: 'web'
      },
      {
        title: "Moves International",
        type: "Bangladesh Project",
        img: movesinternational, // Replace with actual image
        github: "https://github.com/Ghost9841/moves-international",
        link: "https://github.com/Ghost9841/moves-international",
        livedemo: "https://moves-international.com",
        description: "Educational consultancy website for Bangladesh",
        tech: ['AWS', 'Lovable'],
        category: 'web'
      },
      {
        title: "Create Ghost Bun - npm",
        type: "npm Package",
        img: createGhostBun,
        github: "https://github.com/Ghost9841/create-ghost-bun.git",
        livedemo: 'https://www.npmjs.com/package/@technest/create-ghost-bun',
        link: "https://github.com/Ghost9841/create-ghost-bun.git",
        description: "A CLI tool for creating Ghost Bun projects",
        tech: ['Node.js', 'CLI', 'npm'],
        category: 'npm'
      },
      {
        title: "BadarType",
        type: "Nepali Project",
        img: badartype, // Replace with actual image
        github: "https://github.com/Ghost9841/badartype",
        link: "https://github.com/Ghost9841/badartype",
        description: "Nepali typing practice application",
        tech: ['React', 'Nepali Unicode'],
        category: 'web'
      },
      {
        title: "Bazar Products",
        type: "E-commerce Website",
        img: bazarproducts,
        github: "https://github.com/Ghost9841/ecommercewebsite",
        link: "https://github.com/Ghost9841/ecommercewebsite",
        description: "Full-featured e-commerce platform for local products",
        tech: ['React', 'Node.js', 'MongoDB'],
        category: 'web'
      },
      {
        title: "Paisa Miner",
        type: "Side Project",
        img: paisaminer,
        github: "https://github.com/Ghost9841/paisa-miner",
        link: "https://github.com/Ghost9841/paisa-miner",
        description: "Financial tracking and mining analytics tool",
        tech: ['Python', 'Data Analysis'],
        category: 'web'
      },
      {
        title: "EZRipper",
        type: "Browser Extension",
        img: ezripper, // Replace with actual image
        github: "https://github.com/Ghost9841/ezripper",
        link: "https://ezripper.netlify.app/",
        description: "Powerful browser extension for content extraction",
        tech: ['JavaScript', 'Chrome API'],
        category: 'extension'
      },
      {
        title: "Undercover",
        type: "Mobile App",
        img: comingsoon, // Replace with actual image
        github: "https://github.com/Ghost9841/undercover",
        link: "https://github.com/Ghost9841/undercover",
        description: "Mobile application for undercover operations",
        tech: ['React Native', 'Expo'],
        category: 'app'
      },
      {
        title: "The Inner Room",
        type: "Mobile App",
        img: comingsoon, // Replace with actual image
        github: "https://github.com/Ghost9841/the-inner-room",
        link: "https://github.com/Ghost9841/the-inner-room",
        description: "Mental wellness and meditation app",
        tech: ['React Native', 'Firebase'],
        category: 'app'
      },
      {
        title: "Mimble",
        type: "Mobile App",
        img: comingsoon, // Replace with actual image
        github: "https://github.com/Ghost9841/mimble",
        link: "https://github.com/Ghost9841/mimble",
        description: "Innovative mobile application for daily tasks",
        tech: ['React Native', 'Node.js'],
        category: 'app'
      }
    ]
  };

  const filteredProjects = filter === 'all'
    ? allProjects.sideProjects
    : allProjects.sideProjects.filter(p => p.category === filter);

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <TransitionEffect />

      <motion.div
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 capitalize justify-center items-center pt-8 sm:pt-12 md:pt-16 flex flex-col w-full dark:text-light text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Creativity Unlocks Potential.
        <span className="text-base sm:text-lg md:text-xl font-normal mt-2 text-gray-600 dark:text-gray-400">
          Explore my projects and innovations
        </span>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium capitalize transition-all duration-300
              ${filter === cat
                ? 'bg-dark text-light dark:bg-light dark:text-dark'
                : 'bg-gray-200 dark:bg-gray-800 text-dark dark:text-light hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16 w-full px-4 sm:px-6 md:px-8 lg:px-12 dark:text-light">
        {/* Featured Project */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FeaturedProject {...allProjects.featured} />
        </motion.div>

        {/* Side Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <SideProject {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;