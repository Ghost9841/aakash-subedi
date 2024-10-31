'use client'
import React, { useRef } from 'react'
import { useScroll,motion } from "framer-motion";
import LiIcon from './LiIcon';

interface DetailsProps {
  position: string
  company: string 
  time: string
  address: string
  work: React.ReactNode
 
}
const Details = ({position,company,time,address,work}:DetailsProps) =>{
  const ref = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-column items-center justify-between'>
    <LiIcon reference={ref}/>
    <motion.div className=""
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5,type:"spring"}}>
      <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; @{company}</h3>
      <span className='capitalize font-medium text-dark/75 '>
        {time} | {address}
      </span>
      <p className='font-medium w-full'>
        {work}
      </p>
    </motion.div>
  </li>
}
const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end","center start"]
    }
  )
  return (
    <div className='my-64'>
 
      <div className="font-semibold font-poppin text-7xl mb-32 w-full text-center">
        Experience
      </div>
      <div ref={ref}className="w-[75%] mx-auto relative">
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top">
        </motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          
        <Details
        position = "Technician (ISP Operator)" company='JNICT' time="2023-2024" address='Thankot, Chandragiri'
        work={
          <>
          Provided technical support and maintenance <br />
          Installed routers and internet in homes
          </>}
        />
        <Details
        position = "Technician (ISP Operator)" company='JNICT' time="2023-2024" address='Thankot, Chandragiri'
        work={
          <>
          Provided technical support and maintenance <br />
          Installed routers and internet in homes
          </>}
        />
        <Details
        position = "Technician (ISP Operator)" company='JNICT' time="2023-2024" address='Thankot, Chandragiri'
        work={
          <>
          Provided technical support and maintenance <br />
          Installed routers and internet in homes
          </>}
        />
        <Details
        position = "Technician (ISP Operator)" company='JNICT' time="2023-2024" address='Thankot, Chandragiri'
        work={
          <>
          Provided technical support and maintenance <br />
          Installed routers and internet in homes
          </>}
        />
        <Details
        position = "Technician (ISP Operator)" company='JNICT' time="2023-2024" address='Thankot, Chandragiri'
        work={
          <>
          Provided technical support and maintenance <br />
          Installed routers and internet in homes
          </>}
        />
        <Details
        position = "Technician (ISP Operator)" company='JNICT' time="2023-2024" address='Thankot, Chandragiri'
        work={
          <>
          Provided technical support and maintenance <br />
          Installed routers and internet in homes
          </>}
        />
        
        </ul>
       
      </div>
    </div>
  )
}

export default Education;
