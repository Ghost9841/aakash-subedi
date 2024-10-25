import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='w-full border-t-2 border-solid border-dark
      font-poppin font-medium text-lg'>
        <span className='py-8   flex items-center  justify-between'>
          {new Date().getFullYear()} &copy; All Rights Reserved.
        <div className='mr-12 font-poppin font-bold'>
          <span className='px-1 mr-1 text-primary text-2xl'>
          &#128736; 
          </span>
          Build By &nbsp;
        <a href="https://linkedin.com/in/aakash-subedi-b5401b215/" target={'_blank'} className='underline
        underline-offset-2'>Aakash Subedi</a>
        </div>
        <Link href="/">Send me a Hello</Link>
        </span>
      </footer>
    </div>
  )
}

export default Footer;
