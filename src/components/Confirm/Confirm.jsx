import React from 'react'
import {motion} from "framer-motion"
import { BsWhatsapp } from "react-icons/bs";

const Confirm = () => {
    
  return (
    <div className='mt-20'>
        <motion.h2 initial={{ opacity: 0, scale:0.5 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeInOut'}}
            animate={{scale: 1}}
            exit={{ opacity: 0}} className='text-6xl md:text-8xl font-roboto text-center  text-melon'>Save the date</motion.h2>
        <div className='text-melon flex-col'>
            <div className='mt-10 text-center'>
                <motion.p initial={{ opacity: 0, scale:0.5 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 1, ease: 'easeInOut', delay:0.2}}
                    animate={{scale: 1}}
                    exit={{ opacity: 0}} className='text-4xl md:text-6xl'>We would be very happy if you join us on this special day.</motion.p>
                <motion.p initial={{ opacity: 0, scale:0.5 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 1, ease: 'easeInOut', delay:0.2}}
                    animate={{scale: 1}}
                    exit={{ opacity: 0}} className='text-4xl md:text-6xl mt-6'>For this we need you to confirm your attendance.</motion.p>
            </div>        
            <motion.div initial={{ opacity: 0, scale:0.5 }}
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1, ease: 'easeInOut', delay:0.4}}
                animate={{scale: 1}}
                exit={{ opacity: 0}} className='md:flex-row flex flex-col font-roboto my-20 text-4xl items-center justify-center mx-auto'>
                <button className='hover:border-white duration-700 ease-in-out  text-white bg-melon flex justify-center gap-5' type='button'>
                    <BsWhatsapp/>
                    <a className='text-white text-2xl md:text-6xl' href="https://wa.me/5491140435288/?text=Hi!%20I%20liked%20your%20application%20I%20would%20like%20to%20hire%20you" target="_blank" rel="noopener noreferrer">We regret not being able to accompany you.</a>
                </button>
                <button className='hover:border-melon flex justify-center gap-5' type='button'>
                    <BsWhatsapp/>
                    <a className='text-melon text-2xl md:text-6xl' href="https://wa.me/5491140435288/?text=Hi!%20I%20liked%20your%20application%20I%20would%20like%20to%20hire%20you" target="_blank" rel="noopener noreferrer">We will accompany you on this special day</a>
                </button>
            </motion.div>

        </div>
    </div>
  )
}

export default Confirm