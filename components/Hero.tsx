"use client"
import React, { useEffect, useRef } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import gsap from 'gsap';
import HorizontalBorder from './ui/HorizontalBorder';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const macHeaderRef = useRef(null);
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const headingRef3 = useRef(null);
  const wrapperRef = useRef(null);
  const detsRef = useRef(null);
  const arrowRef = useRef(null);


  useEffect(() => {
    const macHeader = macHeaderRef.current;
    const heading1 = headingRef1.current;
    const heading2 = headingRef2.current;
    const heading3 = headingRef3.current;
    const wrapper = wrapperRef.current;
    const dets = detsRef.current;
    const arrowDown = arrowRef.current;

    gsap.set([wrapper, macHeader, heading1, heading2, heading3, dets, arrowDown], {
      // y: -50,
      opacity: 0
    });

    gsap.to(macHeader, {
      opacity: 1,
      duration: 0.5,
    });

    gsap.to([wrapper, macHeader, heading1, heading2, heading3, dets, arrowDown], {
      // y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      ease: "power4.in"
    });
  }, []);

  return (
    <div className='relative h-screen pt-[150px] px-5 lg:px-60 w-full'>
      <div ref={wrapperRef} className="relative overflow-hidden rounded-3xl border dark-border p-3 w-full h-full box-border">
        <HorizontalBorder/>
        <div className="rounded-2xl overflow-hidden border dark-border h-full">
          <div ref={macHeaderRef} className="mac-header h-[50px] overflow-hidden flex justify-between items-center gap-5">
            <div className='flex gap-3 px-5'>
              <div className="bg-red-800 w-5 h-5 rounded-full shadow-lg shadow-red-800"></div>
              <div className="bg-yellow-800 w-5 h-5 rounded-full shadow-lg shadow-yellow-800"></div>
              <div className="bg-green-800 w-5 h-5 rounded-full shadow-lg shadow-green-800"></div>
            </div>
          </div>
          <div className="px-5 lg:px-10 py-8">
            <div className="">
              <h1 ref={headingRef1} className='text-[13vw] lg:text-[6vw] font-semibold tracking-wider text-shadow-white leading-none text-white'>
                I bring <span className=' text-[13vw] lg:text-[6vw] font-semibold'>digital visions</span> to
              </h1>
              <h1 ref={headingRef2} className='text-[13vw] lg:text-[6vw] font-semibold tracking-wider text-shadow-white leading-none text-white'>
                life through design &
              </h1>
              <h1 ref={headingRef3} className='text-[13vw] lg:text-[6vw] font-semibold tracking-wider text-shadow-white leading-none text-white'>
                <>code.</>
              </h1>
            </div>
            <div className="relative float-right my-10">
              <p ref={detsRef} className='text-3xl font-semibold tracking-wide'>Freelancer. Based in India.</p>
              <p className='text-3xl'></p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[200px] absolute bottom-0 left-0 w-[100%] hero-fade flex justify-center items-center">
        <div ref={arrowRef}>
          <FiArrowDown className='text-white box-shadow-white mt-14' size={40} />
        </div>
      </div>
    </div>
  )
}

export default Hero