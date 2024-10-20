'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const CustomLink = ({href, title, className = ''}: {href: string, title: string, className?: string})=>{
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      
      <span className='
       h-[1px] inline-block bg-dark 
       absolute left-0 -bottom-1
       w-0 group-hover:w-full transition-all duration-300'>
        &nbsp;</span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header 
      className=' px-32 py-8 font-poppin flex items-center justify-between'>
      <nav>
        <CustomLink href='/' title="Home" className='mr-4'/>
        <CustomLink href='/aboutme' title="About" className='mx-4'/>
        <CustomLink href='/skills' title="Skills" className='mx-4'/>
        <CustomLink href='/projects' title="Projects" className='ml-4'/>
        
      </nav>
      <nav>
        <Link href='/' target={"_blank"}>T</Link>
        <Link href='/' target={"_blank"}>T</Link>
        <Link href='/' target={"_blank"}>T</Link>
        <Link href='/' target={"_blank"}>T</Link>
        <Link href='/' target={"_blank"}>T</Link>
      </nav>
      <div className='absolute left-[47.5%] top-4 '><Logo/></div>
    </header>
  )
}

export default NavBar
