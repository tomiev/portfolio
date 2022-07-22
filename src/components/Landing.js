import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MemoizedHero } from './ParticlesBackground';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export default function Landing() {
  const [word, setWord] = useState('impactful');

  // Updates the highlighted word every 3 seconds
  useEffect(() => {
    const words = ['intuitive', 'fast', 'sleek', 'modern', 'fun', 'impactful', 'effective', 'scalable', 'functional', 'professional']
    let count = 0;

    const interval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * 11);
      count = (count + randomNumber) % words.length; // 'Word' will be updated indefinitely since count will always be an integer between 0 and words.length
      setWord((word) => words[count]);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [])

  return (
    <section id='home' className='min-h-screen relative p-4 m-auto'>
      <MemoizedHero />
      <div className='m-auto my-60 absolute z-1'>
        <div className=''>
          <h1 className='text-7xl font-neueMontrealBold'>Todd Evans</h1>
          <p className='mt-8 mb-2 text-lg'>Developer who loves building
            <span>
              <div className='max-w-fit max-h-10 mb-2 bg-lime p-2 pb-9 rounded-md -skew-x-12 text-dark_gray text-lg'>
                <motion.p
                  key={ word }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{duration: 1, ease: 'easeInOut'}}
                  >{ word }
                </motion.p>
              </div>
            </span>
          websites.</p>
        </div>
          <AnchorLink to='/#about'>
            <svg class="arrows">
                <path class="a1" d="M0 0 L30 32 L60 0"></path>
                <path class="a2" d="M0 20 L30 52 L60 20"></path>
                <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </AnchorLink>
      </div>
    </section>
  )
}
