"use client"

import Hero from './_components/Hero'
import Lenis from 'lenis';
import React, { useEffect } from 'react'
import Intro from './_components/Intro';

const Info = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className='hero background color min-h-screen'>
      <Hero/>
      <Intro/>
    </div>
  )
}

export default Info