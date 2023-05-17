import React from 'react'
import {motion} from "framer-motion"



const Hero = () => {
  return (
        <div className='flex'>
            <img className='w-full' src='https://i.postimg.cc/c1tSHW53/pareja.jpg' alt="couple weedding" />   
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 1, ease: 'easeInOut', delay:1}}
              exit={{ opacity: 0}} className='text-6xl absolute text-center text-black  inset-x-0 bottom-0  font-sacramento  md:text-9xl'>Our Wedding</motion.h2>
        </div>
  )
}

export default Hero