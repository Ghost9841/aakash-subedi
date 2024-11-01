'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { GithubIcon } from '@/components/icons';
import featuredproject from '../../utilits/aakashportfolio.png';
import bazarproducts from '../../utilits/bazzar products.png'
import paisaminer from '../../utilits/paisaminer.png'

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  img: string | StaticImageData;
  link: string;
  github: string;
}

const FeaturedProject = ({ type, title, summary, img, link, github }: FeaturedProjectProps) => {
  return (
    <article className="w-full flex items-center justify-center rounded-3xl border border-solid border-dark
     bg-light shadow-2xl p-12 dark:bg-dark dark:border-light">
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-poppin font-bold dark:text-white">{title}</h2>
        </Link>
        <p className="my-2 font-medium font-poppin text-dark dark:text-white">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank">
            <GithubIcon className="w-9 h-auto dark::border-1" />
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            hover:bg-white hover:text-black drop-shadow-md border border-solid border-dark hover:border-1 dark:text-dark dark:bg-light dark:font-semibold
            dark:hover:bg-dark dark:hover:text-white dark:hover:border-1 dark:hover:border-white">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

interface SideProjectProps {
  title: string;
  type: string;
  link: string;
  github: string;
  img: StaticImageData;
}

const SideProject = ({ title, type, img, link, github }: SideProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
     border-dark bg-light p-6 dark:bg-dark dark:border-light">
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg mb-4">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between">
        <span className="text-primary dark:text-primaryDark font-medium text-lg">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-2xl font-poppin font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank">
            <GithubIcon className="w-9 h-auto" />
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-4 text-base
           font-semibold hover:bg-white hover:text-black drop-shadow-md
           border border-solid border-dark hover:border-1 dark:text-dark dark:bg-light dark:font-semibold
            dark:hover:bg-dark dark:hover:text-white dark:hover:border-1 dark:hover:border-white">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <motion.div
        className="text-7xl font-bold mb-16 capitalize justify-center items-center pt-16 flex flex-col w-full dark:text-light"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Creativity Unlocks Potential.
      </motion.div>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 w-full px-12 dark:text-light">
        {/* Featured Project */}
        <div className="lg:col-span-12 dark:text-light">
          <FeaturedProject
            title="Aakash Personal Portfolio"
            summary="This is a portfolio website of Aakash Subedi, made using NextJS, Tailwind CSS, and Framer-Motion. Showcasing interactions and personal portfolio."
            link="https://github.com/Ghost9841"
            type="Featured Product"
            img={featuredproject}
            github="https://github.com/Ghost9841/personal-porfolio-app"
          />
        </div>

        <div className="lg:col-span-6">
          <SideProject
            title="Bazar Products"
            link="https://github.com/Ghost9841"
            type="E-commerce Website"
            img={bazarproducts}
            github="https://github.com/Ghost9841/ecommercewebsite"
          />
        </div>
        <div className="lg:col-span-6">
          <SideProject
            title="Aakash Personal Portfolio"
            link="https://github.com/Ghost9841"
            type="Side Project"
            img={paisaminer}
            github="https://github.com/Ghost9841/paisa-miner"
          />
        </div>
      </div>
    </main>
  );
};

export default Projects;
