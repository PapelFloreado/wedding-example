import React from 'react'
import { BiChurch, BiHotel, BiParty } from "react-icons/bi"
import { GoLocation } from "react-icons/go";

const Itinerario = () => {

  return (
    <div className=' my-10 py-20 text bg-melon'>
        <h2 className='text-center  font-roboto text-4xl md:text-8xl mb-16'>Itinerary</h2>
        <div className='md:flex-row flex flex-col justify-around text-center text-2xl md:text-4xl'>
            <div className='border-2 p-12 basis-1/4 border-white  hover:shadow-2xl md:hover:scale-110 duration-700 ease-in-out'>
                <div className='flex justify-center mx-auto mb-6'>
                    <BiHotel/>
                </div>
                <h2 className='md:text-6xl'>Lodging</h2>
                <p>Hotel</p>
                <p>26 - 28 December</p>
                <div className='flex justify-center mx-auto mt-10'>
                    <button className='flex justify-center font-roboto items-baseline  mx-auto  bg-white'>
                        <GoLocation/>
                        <a className='' href="https://goo.gl/maps/qKv5ez7wCiDWJ5es8" target="_blank" rel="noopener noreferrer">See location</a>
                    </button>
                </div>
            </div>
            <div className='border-2 basis-1/4 border-white p-12 hover:shadow-2xl md:hover:scale-110  duration-700 ease-in-out'>
                <div className='flex justify-center mx-auto mb-6'>
                    <BiChurch/>
                </div>
                <h2 className='md:text-6xl'>Mass</h2>
                <p>Church</p>
                <p>27 December</p>
                <div className='flex justify-center items-baseline mx-auto mt-10'>
                    <button className='flex justify-center items-baseline font-roboto  mx-auto  bg-white'>
                        <GoLocation/>
                        <a href="https://goo.gl/maps/qKv5ez7wCiDWJ5es8" target="_blank" rel="noopener noreferrer">Church</a>
                    </button>
                </div>

               
            </div>
            <div className='border-2 basis-1/4 border-white p-12 hover:shadow-2xl md:hover:scale-110  duration-700 ease-in-out'>
                <div className='flex justify-center mx-auto mb-6'>
                    <BiParty/>
                </div>
                <h2 className='md:text-6xl'>Party</h2>
                <p>Hotel</p>
                <p>26 - 28 December</p>
                <div className='flex justify-center mx-auto mt-10'>
                    <button className='flex justify-center items-baseline font-roboto  mx-auto  bg-white'>
                        <GoLocation/>
                        <a href="https://goo.gl/maps/qKv5ez7wCiDWJ5es8" target="_blank" rel="noopener noreferrer">Hotel</a>
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Itinerario