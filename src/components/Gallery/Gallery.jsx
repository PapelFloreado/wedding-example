import React from 'react'
import pareja1 from "../../assets/pareja1.jpg"
import pareja2 from "../../assets/pareja2.jpg"
import pareja3 from "../../assets/pareja3.jpg"
import pareja4 from "../../assets/pareja4.jpg"
import pareja5 from "../../assets/pareja5.jpg"


const Gallery = () => {

  return (
    <div className='flex mx-auto w-3/4 '>
        <div className='m-6' >
            <img className='m-10 grayscale hover:grayscale-0 hover:scale-110 duration-500 ease-in-out' src={pareja1} alt="" />
            <img className='m-10 grayscale hover:grayscale-0 hover:scale-110 duration-500 ease-in-out'  src={pareja4} alt="" />
            <img className='m-10 grayscale hover:grayscale-0 hover:scale-110 duration-500 ease-in-out'  src={pareja5} alt="" />
        </div>
        <div className='m-6' >
            <img className='m-10 grayscale hover:grayscale-0 hover:scale-110 duration-500 ease-in-out'  src={pareja2} alt="" />
            <img className='m-10 grayscale hover:grayscale-0 hover:scale-110 duration-500 ease-in-out'  src={pareja3} alt="" />
            
        </div>
    </div>
  )
}

export default Gallery