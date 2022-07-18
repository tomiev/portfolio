import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import HeroVideo from '../images/HeroVideo.webm';
import { motion, AnimatePresence } from 'framer-motion';
import { unmountComponentAtNode } from 'react-dom';

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
        <div className='m-auto max-w-fit max-h-10 mb-2 bg-lime p-2 pb-9 rounded-md -skew-x-12 text-dark_gray text-lg'>
          <motion.p
            key={ word }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1, ease: 'easeInOut'}}
            >{ word }
          </motion.p>
        </div>
        <p className='text-lg mb-10'>websites.</p>
        <Link to='/'>
          <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
					</svg>
        </Link>
      </div>
    </div>
  )
}
