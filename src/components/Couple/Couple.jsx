import React from 'react'
import novios from "../../assets/novios.jpg"


const Couple = () => {

  return (

        <div className='bg-melon bg-cover bg-opacity-50'>
            <div className='flex items-center justify-center'>
                <h2 className=' basis-1/3 text-9xl text-end mr-20'>Eva</h2>
                <div className=' mx-auto basis-1/3  w-1/4'>/
                    <img className='rounded-full  shadow-2xl shadow-black my-10' src={novios} alt="couple photo" />
                </div>
                <h2 className='text-9xl ml-20 basis-1/3'>Mark</h2>
            </div>
            <h2 className='text-6xl font-roboto text-center py-16'>Join us in our wedding</h2>
        </div>
  )
}

export default Couple