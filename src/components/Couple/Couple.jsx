import React from 'react'
import { motion } from "framer-motion"
import novios from "../../assets/novios.jpg"


const Couple = () => {

  return (

        <div className='bg-melon bg-cover bg-opacity-50'>
            <div className='flex items-center justify-center'>
                <motion.h2 initial={{ opacity: 0, scale:0.5 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 1, ease: 'easeInOut', delay:0.2}}
                    animate={{scale: 1}}
                    exit={{ opacity: 0}} className=' basis-1/3 text-6xl md:text-9xl text-end mr-20'>Eva</motion.h2>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 1}}
                    exit={{ opacity: 0}}
                    className=' mx-auto basis-1/3  w-1/4'>/
                    <img className='rounded-full  shadow-2xl shadow-black my-10' src={novios} alt="couple photo" />
                </motion.div>
                <motion.h2 initial={{ opacity: 0, scale:0.5 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 1, ease: 'easeInOut', delay:0.2}}
                    animate={{scale: 1}}
                    exit={{ opacity: 0}} className='text-6xl md:text-9xl ml-20 basis-1/3'>Mark</motion.h2>
            </div>
            <motion.h2 initial={{ opacity: 0, scale:0.5 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeInOut', delay:0.3}}
            animate={{scale: 1}}
            exit={{ opacity: 0}}  className='text-2xl md:text-6xl font-roboto text-center py-16'>Join us in our wedding</motion.h2>
        </div>
  )
}

export default Couple