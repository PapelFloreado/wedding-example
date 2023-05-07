import React from 'react'
import Navbar from "../Navbar/Navbar"
import Hero from '../Hero/Hero'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import Couple from '../Couple/Couple'
import Family from '../Family/Family'

const Home = () => {
  return (
        <>
           <Navbar/>
           <Hero/>
           <CountdownTimer countDownTimestampsMS={1685128142000}/>
           <Couple/>
           <Family/>
        </>
  )
}

export default Home