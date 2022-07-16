import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
import HeroVideo from '../images/HeroVideo.webm'

export default function Hero() {
  const [word, setWord] = useState('intuitive');

  useEffect(() => {
    const words = ['intuitive', 'fast', 'attractive', 'modern', 'blazing', 'fun', 'quality', 'beautiful', 'impactful', 'effective', 'scalable']
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
    <div className='py-16 grid-cols-1 md:grid-cols-2'>
      <div>
        <video className='rounded-md' playsInline autoPlay muted loop>
          <source src={HeroVideo} type="video/webm" />
        </video>
      </div>
      <div className='text-center -mt-6'>
        <h1 className='text-5xl'>Todd Evans</h1>
        <p className='mt-8 mb-2 text-lg'>Developer who loves building</p>
        <div className='m-auto mb-2 bg-lime w-20 text-dark_gray text-lg'>
          <i>{ word }</i>
        </div>
        <p className='text-lg mb-10'>websites.</p>
        <Link to='/' className='btn'>See more</Link>
      </div>
    </div>
  )
}
