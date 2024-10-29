import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'

const Hireme = () => {
  return (
    <div className='fixed left-1 bottom-0 flex items-center 
    justify-center overflow-hidden'>
        <div className="flex items-center justify-center relative"></div>
      <CircularText className="fill-dark animate-spin-slow"/>
      <Link href='mailto:asubedi778@gmail.com' className=' flex items-center
      justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark 
      font-poppin text-light shadow-md border-solid border-dark w-20 h-20 rounded-full
      hover:bg-light hover:text-dark '
      target={'_blank'}>
        Hire Me
      </Link>
    </div>
  )
}

export default Hireme
