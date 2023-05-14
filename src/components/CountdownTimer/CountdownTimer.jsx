import React from 'react'
import { useState, useEffect } from 'react'
import {getRemainingTimeUntilMsTimestamp} from "./Utils/CountdownTimerUtils.jsx"

const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00"
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
      <div className=' text-6xl font-roboto my-20 flex-col justify-center'>
        <div className=' justify-center flex  items-center basis-full'>
          <h2 className='text-center mb-28 text-4xl md:text-8xl border-b-2 border-black'>May 26, 2023</h2>
        </div>
        <div className='text-center text-2xl md:text-6xl'> 
          <span className='mx-3  w-20'>{remainingTime.days}</span>
          <span className='mx-3'>days</span>
          <span className='mx-3 w-20'>{remainingTime.hours}</span>
          <span className='mx-3'>hours</span>
          <span className='mx-3 w-20'>{remainingTime.minutes}</span>
          <span className='mx-3'>minutes</span>    
          <span className='mx-3 min-w-24'>{remainingTime.seconds}</span>
          <span className='mx-3 '>seconds</span>
        </div>
          <p className='text-center text-4xl md:text-8xl mt-16'>Until the day!!!</p>
      </div>

  )
}

export default CountdownTimer