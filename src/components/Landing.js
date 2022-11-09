import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MemoizedBackground } from './ParticlesBackground';
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'



export default function Landing() {
  return (
    <section id='home' className='h-screen flex justify-center relative p-[calc(8px+1.5625vw)] lg:px-48 lg:py-20'>
      <MemoizedBackground />
      <div className='flex justify-center items-center'>
        <div className='absolute z-1 text-center md:text-left'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl md:italic'><strong>Todd Evans</strong></h1>
          <div><p className='text-3xl mt-2 md:text-6xl lg:text-7xl md:ml-24'>Software Developer</p></div>
        </div>
        <div className='absolute bottom-[15%] flex justify-evenly items-center w-full mb-32'>
          <a href="https://linkedin.com/in/todd-evans-te" className='hover:underline'>LinkedIn</a>
          <a href="https://github.com/tomiev" className='hover:underline'>GitHub</a>
        </div>
        <AnchorLink to="/#about" className='hover:underline'>
          <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
					</svg>
        </AnchorLink>
        {/* <svg height="130" width="130">
          <circle cx="65" cy="60" r="40%" fill="#bee11e" />
          <text x="43" y="65" fill="white"></text>
        </svg> */}
      </div>
    </section>
  )
}
