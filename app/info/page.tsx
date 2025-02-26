"use client"

import Hero from './_components/Hero'
import Lenis from 'lenis';
import React, { useEffect } from 'react'
import Intro from './_components/Intro';

const Info = () => {
  return (
    <div className='hero background color min-h-screen'>
      <Hero/>
      <Intro/>
    </div>
  )
}

export default Info