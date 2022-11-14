import React from 'react';
import { motion } from 'framer-motion';
import { MemoizedBackground } from './ParticlesBackground';
import { StaticImage } from 'gatsby-plugin-image'

export default function Landing() {
  return (
    <section id='home' className='h-screen flex justify-center relative p-[calc(8px+1.5625vw)] lg:px-48 lg:py-20'>
      <MemoizedBackground />
      <div className='flex justify-center'>
        <div className='absolute top-[40%] z-1 text-center md:text-left'>
          <motion.h1
            className='text-5xl md:text-6xl lg:text-7xl md:italic'
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{bounce: 0, delay: 0.4}}
            ><strong>Todd Evans</strong>
          </motion.h1>
          <motion.p
            className='text-3xl mt-2 md:text-6xl lg:text-7xl md:ml-24'
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.5, bounce: 0}}
            >Software Developer
          </motion.p>
        </div>
        <div className='absolute bottom-[10%] flex justify-evenly gap-32 items-center w-full mb-16 md:mb-24'>
          <motion.a
            href="https://linkedin.com/in/todd-evans-te"
            className='lg:hover:underline'
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6, bounce: 0}}
            >LinkedIn
          </motion.a>
          <StaticImage
            src="/Users/toddevans/code/tomiev/portfolio/src/images/landing-circle.png"
            alt="Scroll down button"
            placeholder="none"
            width={100}
            height={100}
            className='absolute animate-spin-slow linear infinite md:w-[130px] md:h-[130px]' />
          <motion.a
            href="https://github.com/tomiev"
            className='lg:hover:underline'
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6, bounce: 0}}
            >GitHub
          </motion.a>
        </div>
        {/* <motion.div
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.7, bounce: 0}}
          ><AnchorLink to="/#about" className='lg:hover:underline'>
            <svg class="arrows">
                <path class="a1" d="M0 0 L30 32 L60 0"></path>
                <path class="a2" d="M0 20 L30 52 L60 20"></path>
                <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </AnchorLink>
        </motion.div> */}
        {/* <svg height="130" width="130">
          <circle cx="65" cy="60" r="40%" fill="#bee11e" />
          <text x="43" y="65" fill="white"></text>
        </svg> */}
      </div>
    </section>
  )
}
