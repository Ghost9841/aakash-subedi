
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaGlobe } from 'react-icons/fa';


interface SideProjectProps {
  title: string;
  type: string;
  link: string;
  github: string;
  img: StaticImageData;
  livedemo?: string;
  description?: string;
  tech?: string[];
}

const SideProject = ({ title, type, img, link, github, livedemo, description, tech }: SideProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
     border-dark bg-light p-4 sm:p-6 dark:bg-dark dark:border-light hover:shadow-xl transition-shadow duration-300">
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg mb-4">
        <Image src={img} alt={title} className="w-full h-auto hover:scale-105 transition-transform duration-300" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between">
        <span className="text-primary dark:text-primaryDark font-medium text-sm sm:text-base md:text-lg">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-xl sm:text-2xl font-poppin font-bold">{title}</h2>
        </Link>
        {description && (
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">{description}</p>
        )}
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tech.map((t) => (
              <span key={t} className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium">
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Link href={github} target="_blank" className="hover:scale-110 transition-transform">
            <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </Link>
          <Link href={link} target="_blank" className="rounded-lg bg-dark text-light p-1.5 px-3 sm:px-4 text-xs sm:text-sm
           font-semibold hover:bg-white hover:text-black drop-shadow-md
           border border-solid border-dark hover:border-1 dark:text-dark dark:bg-light dark:font-semibold
            dark:hover:bg-dark dark:hover:text-white dark:hover:border-1 dark:hover:border-white transition-all duration-300">
            <FaExternalLinkAlt className="inline mr-1" />
            View
          </Link>
          {livedemo && (
            <Link href={livedemo} target="_blank" className="flex flex-row gap-1.5 rounded-lg bg-dark text-light p-1.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold
              hover:bg-white hover:text-black drop-shadow-md border border-solid border-dark hover:border-1 dark:text-dark dark:bg-light dark:font-semibold
              dark:hover:bg-dark dark:hover:text-white dark:hover:border-1 dark:hover:border-white transition-all duration-300">
              <FaGlobe className="inline" />
              Demo
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default SideProject;