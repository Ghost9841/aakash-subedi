import { LinkArrow } from "@/components/icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  img: string | StaticImageData;
  link: string;
  github: string;
  livedemo?: string;
}


const FeaturedProject = ({ type, title, summary, img, link, github, livedemo }: FeaturedProjectProps) => {
  return (
    <article className="w-full flex flex-col lg:flex-row items-center justify-center rounded-3xl border border-solid border-dark
     bg-light shadow-2xl p-6 sm:p-8 md:p-12 dark:bg-dark dark:border-light gap-6 lg:gap-8">
      <Link href={link} target="_blank" className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <Image src={img} alt={title} className="w-full h-auto hover:scale-105 transition-transform duration-300" />
      </Link>
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between">
        <span className="text-primary dark:text-primaryDark font-medium text-base sm:text-lg md:text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-2xl sm:text-3xl md:text-4xl font-poppin font-bold dark:text-white">{title}</h2>
        </Link>
        <p className="my-2 font-medium font-poppin text-dark dark:text-white text-sm sm:text-base">{summary}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Link href={github} target="_blank" className="hover:scale-110 transition-transform">
            <FaGithub className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
          </Link>
          <Link href={link} target="_blank" className="rounded-lg bg-dark text-light p-2 px-4 sm:px-6 text-sm sm:text-base font-semibold
            hover:bg-white hover:text-black drop-shadow-md border border-solid border-dark hover:border-1 dark:text-dark dark:bg-light dark:font-semibold
            dark:hover:bg-dark dark:hover:text-white dark:hover:border-1 dark:hover:border-white transition-all duration-300">
            Visit Project
          </Link>
          {livedemo && (
            <Link href={livedemo} target="_blank" className="flex flex-row gap-2 rounded-lg bg-dark text-light p-2 px-4 sm:px-6 text-sm sm:text-base font-semibold
              hover:bg-white hover:text-black drop-shadow-md border border-solid border-dark hover:border-1 dark:text-dark dark:bg-light dark:font-semibold
              dark:hover:bg-dark dark:hover:text-white dark:hover:border-1 dark:hover:border-white transition-all duration-300">
              Live Demo
              <LinkArrow className="w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;