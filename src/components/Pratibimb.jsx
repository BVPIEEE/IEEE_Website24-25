'use client'

import React, { useState, useEffect } from 'react'

const Pratibimb = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function calculateTimeLeft() {
    const difference = +new Date("2023-12-31") - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  return (
    <div className='font-poppins flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-darkblue to-blue text-white p-4'>
      <h1 
        className='text-4xl sm:text-6xl md:text-8xl font-bold mb-4'
        data-aos="fade-down"
      >
        PRATIBIMB
      </h1>
      <div 
        className='text-2xl sm:text-4xl font-bold mb-8'
        data-aos="fade-up"
        data-aos-delay="400"
      >
        COMING SOON
      </div>
      <div className='flex space-x-4 text-center' data-aos="fade-up" data-aos-delay="600">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className='flex flex-col'>
            <span className='text-3xl sm:text-5xl font-bold'>{value}</span>
            <span className='text-sm sm:text-base text-skyblue'>{unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pratibimb

