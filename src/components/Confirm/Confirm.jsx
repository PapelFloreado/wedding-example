import React from 'react'
import { BsWhatsapp } from "react-icons/bs";

const Confirm = () => {
    
  return (
    <div className='mt-20'>
        <h2 className='text-6xl md:text-8xl font-roboto text-center  text-melon'>Save the date</h2>
        <div className='text-melon flex-col'>
            <div className='mt-10 text-center'>
                <p className='text-4xl md:text-6xl'>We would be very happy if you join us on this special day.</p>
                <p className='text-4xl md:text-6xl mt-6'>For this we need you to confirm your attendance.</p>
            </div>        
            <div className='md:flex-row flex flex-col font-roboto my-20 text-4xl items-center justify-center mx-auto'>
                <button className='hover:border-white duration-700 ease-in-out  text-white bg-melon flex justify-center gap-5' type='button'>
                    <BsWhatsapp/>
                    <a className='text-white text-2xl md:text-6xl' href="https://wa.me/5491140435288/?text=Hi!%20I%20liked%20your%20application%20I%20would%20like%20to%20hire%20you" target="_blank" rel="noopener noreferrer">We regret not being able to accompany you.</a>
                </button>
                <button className='hover:border-melon flex justify-center gap-5' type='button'>
                    <BsWhatsapp/>
                    <a className='text-melon text-2xl md:text-6xl' href="https://wa.me/5491140435288/?text=Hi!%20I%20liked%20your%20application%20I%20would%20like%20to%20hire%20you" target="_blank" rel="noopener noreferrer">We will accompany you on this special day</a>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Confirm