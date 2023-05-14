import React from 'react'
import {motion} from "framer-motion"
import amazon from "../../assets/amazon 1.png"
import prezola from "../../assets/prezola 1.png"
import bank from "../../assets/card 1.png"

const Gifts = () => {

  return (
    <div className='bg-melon py-20'>
        <motion.h2 
            initial={{ opacity: 0, scale:0.5 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeInOut'}}
            animate={{scale: 1}}
            exit={{ opacity: 0}} className='text-6xl md:text-8xl font-roboto text-center'>Gift Table</motion.h2>
        <motion.p initial={{ opacity: 0, scale:0.5 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeInOut', delay:0.2}}
            animate={{scale: 1}}
            exit={{ opacity: 0}} className='text-center text-4xl md:text-6xl mt-10'>Our best gift is that you join us this day.</motion.p>
        <motion.p initial={{ opacity: 0, scale:0.5 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeInOut', delay:0.2}}
            animate={{scale: 1}}
            exit={{ opacity: 0}} className='text-center text-4xl md:text-6xl mt-6'>But if you want to have a detail these are the options.</motion.p>
        <motion.div initial={{ opacity: 0, scale:0.5 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeInOut', delay:0.4}}
            animate={{scale: 1}}
            exit={{ opacity: 0}} className='md:flex-row flex flex-col justify-center items-center text-4xl mt-10'>
            <div className='basis-1/3 text-center'>
                <div className='flex justify-center mx-auto mt-10'>
                    <a className='flex justify-center items-center' href="http://amazon.com" target="_blank" rel="noopener noreferrer">
                        <img className='w-2/3 md:w-1/2 hover:scale-95 duration-700 ease-in-out' src={amazon} alt="amazon shop icon" />
                    </a>
                </div>
                <h2 className='text-4xl mt-10'>Amazon wedding list</h2>
            </div>
            <div className='basis-1/3 text-center mt-10'>
                    <a className='flex justify-center items-center' href="http://prezola.com" target="_blank" rel="noopener noreferrer">
                        <img className=' hover:scale-95 duration-700 ease-in-out' src={prezola} alt="shop prezola icon" />
                    </a>
                <h2 className='text-4xl mt-10 text-center'>Prezola wedding list</h2>
            </div>
            <div className='basis-1/3 text-center mt-10'>
                <div className='flex justify-center items-center'>
                    <img className='w-1/5   hover:scale-95 duration-700 ease-in-out' src={bank} alt="bank icon" />
                </div>
                <div className='mt-10'>
                    <h2 className='text-4xl'>Bank Account</h2>
                    <p className='text-4xl '>Account Number: xxxxxxx</p>
                </div>
            </div>
        </motion.div>

    </div>
  )
}

export default Gifts