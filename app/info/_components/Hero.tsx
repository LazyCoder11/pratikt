import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className="flex items-center justify-center h-full gap-x-4">
            <span className="size-4 rounded-full bg-white white-blur"></span>
            <h2 className='uppercase text-base'>About Me</h2>
        </div>
    </div>
  )
}

export default Hero