import React from 'react'
import {easeInOut, motion} from "framer-motion"

const Family = () => {

  return (
    <div className='bg-back bg-cover bg-fixed md:bg-fixed py-16 pb-10 '>
        <div className=' text-melon bg-cover bg-opacity-50 font-roboto font-light'>
            <motion.h2
            initial={{ opacity: 0, scale:0.5 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, ease: "easeInOut"}}
            animate={{scale: 1}}
            exit={{ opacity: 0}} className='text-center pt-20 text-6xl md:text-8xl'>Our Parents</motion.h2>
            <div className='md:flex justify-around text-4xl md:text-6xl'>
                <motion.div 
                    initial={{ opacity: 0, scale:0.5 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 1.2, ease: "easeInOut", delay:0.2}}
                    animate={{scale: 1}}
                    exit={{ opacity: 0}}
                    className='justify-center '>
                    <p className='mt-10 text-4xl md:text-6xl text-center'>Bride</p>
                    <p className='my-10 text-4xl md:text-6xl font-sacramento text-center'>Vilma Johnson</p>
                    <p className='text-4xl md:text-6xl font-sacramento text-center'>Alexis Johnson</p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale:0.5 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 1.2, ease: easeInOut, delay:0.2}}
                    animate={{scale: 1}}
                    exit={{ opacity: 0}}
                    className='justify-center'>
                    <p className='mt-10 text-center'>Boyfriend</p>
                    <p className='my-10 text-4xl md:text-6xl font-sacramento text-center'>Vilma Johnson</p>
                    <p className='text-4xl md:text-6xl font-sacramento text-center'>Alexis Johnson</p>
                </motion.div>
            </div>
            <div className='mt-10'>
                <motion.p initial={{ opacity: 0, scale:0.5 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 1.2, ease: easeInOut, delay:0.2}}
                    animate={{scale: 1}}
                    exit={{ opacity: 0}} className='text-4xl md:text-6xl text-center'>Godparents</motion.p>
                <motion.div 
                initial={{ opacity: 0, scale:0.5 }}
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1.2, ease: easeInOut, delay:0.4}}
                animate={{scale: 1}}
                exit={{ opacity: 0}} className='md:flex text-center justify-around mt-10'>
                    <p className="text-4xl mt-10 md:text-6xl font-sacramento">John Bonachon</p>
                    <p className="text-4xl mt-10 md:text-6xl font-sacramento">John Bonachon</p>
                    <p className="text-4xl mt-10 md:text-6xl font-sacramento">John Bonachon</p>
                    <p className="text-4xl mt-10 md:text-6xl font-sacramento">John Bonachon</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Family