import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MemoizedBackground } from './ParticlesBackground';

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
    <section id='home' className='min-h-screen relative p-4'>
      <MemoizedBackground />
      <div className='mt-52 absolute z-1'>
        <div>
          <h1 className='text-7xl font-neueMontrealMedium'><u>Todd Evans</u></h1>
          <p className='mt-8 mb-2 text-lg'>Developer who loves building</p>
            <div className='flex space-x-2'>
              <div className='max-w-fit max-h-10 mb-2 bg-lime p-2 pb-9 rounded-md -skew-x-12 text-dark_gray text-lg'>
                <motion.p
                  key={ word }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{duration: 1, ease: 'easeInOut'}}
                  >{ word }
                </motion.p>
              </div>
              <div className='text-lg max-h-10 mx-1 my-2'><p>websites.</p></div>
            </div>
        </div>
      </div>
    </section>
  )
}
