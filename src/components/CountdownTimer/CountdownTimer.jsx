import React from 'react'
import { useState, useEffect } from 'react'
import {getRemainingTimeUntilMsTimestamp} from "./Utils/CountdownTimerUtils.jsx"

const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
    
}

const CountdownTimer = ({countDownTimestampsMS}) => {

  const [ remainingTime, setRemainingTime ] = useState(defaultRemainingTime)

  useEffect(()=>{
      const intervalId = setInterval(()=>{
          updateRemainingTime(countDownTimestampsMS)
      },1000)
      return()=>clearInterval(intervalId)

  },[countDownTimestampsMS])

  function updateRemainingTime(countdown) {
      setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))

  }

  return (
    <div className='bg-back bg-cover bg-fixed md:bg-fixed'>
      <div className=' text-6xl font-roboto py-20 flex-col text-melon justify-center'>
        <h1 className='text-6xl font-sacramento text-center md:text-9xl'>Eva & Mark</h1>
        <h2 className='text-6xl font-sacramento text-center mb-16 md:text-9xl'>Wedding</h2>
        <div className=' justify-center flex  items-center basis-full'>
          <h2 className='text-center mb-28 text-4xl md:text-8xl border-b-2 border-melon'>December 25, 2023</h2>
        </div>
        <div className='text-center flex justify-around text-xl md:text-6xl'> 
          <div className=' bg-melon rounded-xl shadow-2xl items-center justify-center  min-h-[100px] text-white w-1/6 flex flex-col '>  
            <p className=''>{remainingTime.days}</p>
            <p>days</p>
          </div>
          <div className=' bg-melon rounded-xl shadow-2xl items-center justify-center  min-h-[100px] text-white w-1/6 flex flex-col '>
            <p>{remainingTime.hours}</p>
            <p>hours</p>
          </div>
          <div className=' bg-melon rounded-xl shadow-2xl items-center justify-center  min-h-[100px] text-white w-1/6 flex flex-col '>
            <p>{remainingTime.minutes}</p>
            <p>minutes</p>
          </div>
          <div className=' bg-melon rounded-xl shadow-2xl items-center justify-center  min-h-[100px] text-white w-1/6 flex flex-col '>
            <p>{remainingTime.seconds}</p>
            <p>seconds</p>
          </div>
        </div>
          <p className='text-center text-4xl md:text-8xl mt-16'>Until the day!!!</p>
      </div>
    </div>

  )
}

export default CountdownTimer