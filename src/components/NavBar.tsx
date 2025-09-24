'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import {DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon,} from './icons'
import {motion} from 'framer-motion'
import useThemeSwitcher from './useThemeSwitcher'
import { Facebook, FacebookIcon } from 'lucide-react'


const CustomLink = ({href, title, className = ''}: {href: string, title: string, className?: string})=>{
  const pathname = usePathname();
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      
      <span className={`
       h-[1px] inline-block bg-dark w-0
       absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease-in-out duration-300 dark:bg-light
       ${pathname === href? 'w-full' : 'w-0'}
        `}
        >
        &nbsp;</span>
    </Link>
  )
}
const CustomMobileLink = ({href, title, className = '',toggle}: {href: string, title: string, className?: string,toggle : () => void})=>{
  const pathname = usePathname();
  const handleClick= () => {
    toggle();
    window.location.href = href;
    
  }
  return(
    <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      
      <span className={`
       h-[1px] inline-block bg-light w-0
       absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease-in-out duration-300 dark:bg-dark
       ${pathname === href? 'w-full' : 'w-0'}
        `}
        >
        &nbsp;</span>
    </button>
  )
}


const NavBar = () => {
 
  const [mode, setMode] = useThemeSwitcher() as [string, React.Dispatch<React.SetStateAction<string>>];
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () =>{
    setIsOpen(!isOpen)
  }
   return (
    <header 
      className='w-full px-32 py-8 font-poppins items-center justify-between dark:text-light relative'>
     <button className=' flex-col fixed justify-center items-center hidden lg:hidden sm:flex md:flex xs:flex' onClick={handleClick}>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
     </button>

      <div className="w-full flex justify-between items-center lg:flex xs:hidden sm:hidden ">
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
        <GithubIcon className='w-6 h-auto mx-4 bg-light rounded-full dark:bg-dark dark:rounded-full'/>
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
        <PinterestIcon className='w-6 h-auto mx-4 bg-light rounded-full'/>
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
        
      <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
      onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        {
          mode ==="dark" ?
          <SunIcon className={"fill dark"}/>
          : <MoonIcon className={"fill-dark"}/>
        }
      </button>
      
      </nav>
      </div>

        {
          isOpen ?
          
      <motion.div 
      initial = {{scale:0, x:"-50%", y:"-50%"}}
      animate={{scale:1, opacity:1}}
      transition={{duration: 0.5}}
      className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32">
   
       <nav className=' items-center flex flex-col justify-center'>
        <CustomMobileLink href='/' title="Home" className='' toggle = {handleClick}/>
        <CustomMobileLink href='/aboutme' title="About" className='' toggle = {handleClick}/>
        <CustomMobileLink href='/skills' title="Skills" className='' toggle = {handleClick}/>
        <CustomMobileLink href='/projects' title="Projects" className='' toggle = {handleClick}/>
        
      </nav>
  
      <nav className='flex items-center justify-center flex-wrap mt-2'>
        
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
        <TwitterIcon className='w-6 h-auto mr-4 sm:mx-1'/>

        </motion.a>
        <motion.a href='https://github.com/Ghost9841'
        whileHover={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          whileTap={{ 
            scale: 0.9 ,
            rotate: -360,
            borderRadius: "100%"}}
             target={"_blank"}>
        <GithubIcon className='w-6 h-auto mx-4 bg-light rounded-full dark:bg-dark dark:rounded-full sm:mx-1'/>
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
        <LinkedInIcon className='w-6 h-auto mx-4 sm:mx-1'/>
        </motion.a>

        <motion.a href='https://www.pinterest.com/GhostAakash/'
        whileHover={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}

          whileTap={{ 
            scale: 0.9 ,
            rotate: -360,
            borderRadius: "100%"}}
             target={"_blank"}>
              <FacebookIcon className='w-6 h-auto mx-4 sm:mx-1' color="#1a5fb4" />
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
        <DribbbleIcon className='w-6 h-auto mx-4 sm:mx-1'/>
        </motion.a>
        
      <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
      onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        {
          mode ==="dark" ?
          <SunIcon className={"fill dark"}/>
          : <MoonIcon className={"fill-dark"}/>
        }
      </button>
      
      </nav>
      </motion.div>

          : null
        }






      <div className='absolute left-[48%] top-4 '><Logo/></div>
    </header>
  )
}

export default NavBar
