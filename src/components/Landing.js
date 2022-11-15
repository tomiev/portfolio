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
        <div className='absolute bottom-[10%] flex justify-evenly gap-16 md:gap-32 items-center w-full mb-16 xl:mb-24'>
          <motion.a
            href="https://linkedin.com/in/todd-evans-te"
            className='hidden md:block lg:hover:underline'
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
            className='absolute animate-spin-slow linear infinite w-[110px] h-[110px] md:w-[130px] md:h-[130px]' />
          <motion.a
            href="https://github.com/tomiev"
            className='hidden md:block lg:hover:underline'
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6, bounce: 0}}
            >GitHub
          </motion.a>
        </div>
      </div>
    </section>
  )
}
