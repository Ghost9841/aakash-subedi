import React from 'react'
import { CircularText } from './icons'

const Hireme = () => {
  return (
    <div className='fixed left-1 bottom-0 flex items-center 
    justify-center overflow-hidden'>
        <div className="flex items-center justify-center relative"></div>
      <CircularText className="fill-dark animate-spin-slow"/>
    </div>
  )
}

export default Hireme
