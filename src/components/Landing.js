import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MemoizedBackground } from './ParticlesBackground';
import { StaticImage } from 'gatsby-plugin-image'


export default function Landing() {
  return (
    <section id='home' className='min-h-screen flex justify-center relative p-4'>
        <MemoizedBackground />
        <div className='absolute z-1 mt-72'>
          <div><h1 className='text-7xl'><em><strong>Todd Evans</strong></em></h1></div>
          <div><p className='text-7xl ml-24'>Software Developer</p></div>
        </div>
        <div className='absolute self-end flex justify-evenly items-center w-full mb-32'>
          <a href="https://linkedin.com/in/todd-evans-te">LinkedIn</a>
          <svg height="130" width="130">
      		  <circle cx="65" cy="60" r="40%" fill="#bee11e" />
      		  <text x="43" y="65" fill="white"></text>
    	    </svg>
          <a href="https://github.com/tomiev">GitHub</a>
        </div>
    </section>
  )
}
