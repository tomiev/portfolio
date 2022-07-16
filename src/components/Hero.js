import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import HeroVideo from '../images/HeroVideo.webm';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [word, setWord] = useState('impactful');

  // Updates the highlighted word every 3 seconds
  useEffect(() => {
    const words = ['intuitive', 'fast', 'sleek', 'modern', 'fun', 'quality', 'impactful', 'effective', 'scalable', 'functional']
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
    <div className='my-16 grid-cols-1 md:grid-cols-2'>
      <div>
        <video className='rounded-md' playsInline autoPlay muted loop>
          <source src={HeroVideo} type="video/webm" />
        </video>
      </div>
      <div className='text-center -mt-6'>
        <h1 className='text-5xl'>Todd Evans</h1>
        {/* Consider making the below one <p> with a <span> for the highlight */}
        <p className='mt-8 mb-2 text-lg'>Developer who loves building</p>
        <AnimatePresence>
          <motion.div
            key={ word }
            className='inline-block m-auto mb-2 bg-lime p-2 rounded-md -skew-x-12 text-dark_gray text-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, duration: 0.6 }}
            exit={{ opacity: 0, duration: 0.6 }}>

            <p>{ word }</p>
          </motion.div>
        </AnimatePresence>
        <p className='text-lg mb-10'>websites.</p>
        <Link to='/' className='btn'>See more</Link>
      </div>
    </div>
  )
}
