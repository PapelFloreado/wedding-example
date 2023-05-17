import React from 'react'
import {motion} from "framer-motion"



const Gallery = () => {
 

  return (
  <div className='bg-back bg-cover bg-fixed md:bg-fixed'>
    <div className='py-20  text-melon'>
      <motion.h2 initial={{ opacity: 0, scale:0.5 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeInOut'}}
            animate={{scale: 1}}
            exit={{ opacity: 0}} className='text-6xl md:text-8xl font-roboto text-center'>Us</motion.h2>
      <motion.div 
            initial={{ opacity: 0, scale:0.5 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeInOut', delay:0.3}}
            animate={{scale: 1}}
            exit={{ opacity: 0}} className='md:flex-row flex flex-col justify-items-center md:justify-center items-center mx-auto md:w-3/4 w-3/4 '>
          <div className='mx-auto  md:m-6' >
              <img width={500} className='m-4 md:m-10 grayscale hover:grayscale-0 md:hover:scale-110 duration-500 ease-in-out' src='https://i.postimg.cc/B6XG2fSd/pareja1.jpg' alt="" />
              <img width={500} className='m-4 md:m-10 grayscale hover:grayscale-0 md:hover:scale-110 duration-500 ease-in-out' src='https://i.postimg.cc/13shJqR0/pareja4.jpg' alt="" />
              <img width={500} className='m-4 md:m-10 grayscale hover:grayscale-0 md:hover:scale-110 duration-500 ease-in-out' src='https://i.postimg.cc/PJDsFb8y/pareja5.jpg'  alt="" />
          </div>
          <div className='mx-auto md:m-6' >
              <img width={400} className='m-4 md:m-10 grayscale hover:grayscale-0 md:hover:scale-110 duration-500 ease-in-out' src='https://i.postimg.cc/9FGHdp2F/pareja2.jpg' alt="" />
              <img width={400} className='m-4 md:m-10 grayscale hover:grayscale-0 md:hover:scale-110 duration-500 ease-in-out' src='https://i.postimg.cc/3JMH0qPc/pareja3.jpg'  alt="" />
              
          </div>
      </motion.div>
    </div>
  </div>
  )
}

export default Gallery