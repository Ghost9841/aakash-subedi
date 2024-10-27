'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import {DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon,} from './icons'
import {motion} from 'framer-motion'


const CustomLink = ({href, title, className = ''}: {href: string, title: string, className?: string})=>{
  const pathname = usePathname();
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      
      <span className={`
       h-[1px] inline-block bg-dark w-0
       absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease-in-out duration-300
       ${pathname === href? 'w-full' : 'w-0'}
        `}>
        &nbsp;</span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header 
      className=' px-32 py-8 font-poppins flex items-center justify-between'>
      <nav>
        <CustomLink href='/' title="Home" className='mr-4'/>
        <CustomLink href='/aboutme' title="About" className='mx-4'/>
        <CustomLink href='/skills' title="Skills" className='mx-4'/>
        <CustomLink href='/projects' title="Projects" className='ml-4'/>
        
      </nav>
      <nav className='flex items-center justify-center flex-wrap'>
        
        <motion.a href='https://x.com/GhostAakash'
        whileHover={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          whileTap={{ 
            scale: 0.9 ,
            rotate: -360,
            borderRadius: "100%"}}
          
         target={"_blank"}>
        <TwitterIcon className='w-6 h-auto mr-4'/>

        </motion.a>
        <motion.a href='https://github.com/Ghost9841'
        whileHover={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 2  
            
          }}
          whileTap={{ 
            scale: 0.9 ,
            rotate: -360,
            borderRadius: "100%"}}
             target={"_blank"}>
        <GithubIcon className='w-6 h-auto mx-4'/>
        </motion.a>

        <motion.a href='https://www.linkedin.com/in/aakash-subedi-b5401b215/'
        whileHover={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          whileTap={{ 
            scale: 0.9 ,
            rotate: -360,
            borderRadius: "100%"}}
             target={"_blank"}>
        <LinkedInIcon className='w-6 h-auto mx-4'/>
        </motion.a>

        <motion.a href='https://www.pinterest.com/GhostAakash/'
        whileHover={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          whileTap={{ 
            scale: 0.9 ,
            rotate: -360,
            borderRadius: "100%"}}
             target={"_blank"}>
        <PinterestIcon className='w-6 h-auto mx-4'/>
        </motion.a>

        <motion.a href='https://dribbble.com/ghostaakash'
        whileHover={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          whileTap={{ 
            scale: 0.9 ,
            rotate: -360,
            borderRadius: "100%"}}
             target={"_blank"}>
        <DribbbleIcon className='w-6 h-auto mx-4'/>
        </motion.a>
        
      </nav>
      <div className='absolute left-[48%] top-4 '><Logo/></div>
    </header>
  )
}

export default NavBar
