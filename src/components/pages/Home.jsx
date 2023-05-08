import React from 'react'
import Navbar from "../Navbar/Navbar"
import Hero from '../Hero/Hero'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import Couple from '../Couple/Couple'
import Family from '../Family/Family'
import Itinerario from '../Itinerario/Itinerario'
import Gallery from '../Gallery/Gallery'

const Home = () => {
  return (
        <>
           <Navbar/>
           <Hero/>
           <CountdownTimer countDownTimestampsMS={1685128142000}/>
           <Couple/>
           <Family/>
           <Itinerario/>
           <Gallery/>
        </>
  )
}

export default Home