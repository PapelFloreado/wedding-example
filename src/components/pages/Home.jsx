import React from 'react'
import Navbar from "../Navbar/Navbar"
import Hero from '../Hero/Hero'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import Couple from '../Couple/Couple'
import Family from '../Family/Family'
import Itinerario from '../Itinerario/Itinerario'
import Gifts from '../Gifts/Gifts'
import Confirm from '../Confirm/Confirm'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'

const Home = () => {
  return (
        <>
           <Navbar/>
           <Hero/>
           <CountdownTimer className="absolute" countDownTimestampsMS={1701537002000}/>
           <Couple/>
           <Family/>
           <Itinerario/>
           <Gallery/>
           <Gifts/>
           <Confirm/>
           <Footer/>
        </>
  )
}

export default Home