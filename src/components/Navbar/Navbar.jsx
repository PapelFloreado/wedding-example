import React from 'react'
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='w-full bg-nav '>
        <nav className='flex  container justify-center h-40 max-w-[1240px] mx-auto px-4 bg-nav  '>
            <img className='w-2/6 md:w-1/6' src={logo} alt="weeding logo names" />
        </nav>
    </div>
  )
}

export default Navbar