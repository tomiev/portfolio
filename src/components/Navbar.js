import React, { useState, useEffect } from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { debounce } from '../utilities/helpers'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    /* Find current scroll position */
    const currentScrollPos = window.pageYOffset;

    /* Set state based on comparing location info */
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);

    /* Set state to new scroll position */
    setPrevScrollPos(currentScrollPos);
  }, 50);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className='flex justify-center'>
      <nav style ={{ top: visible ? '0' : '-80px' } } className='hidden md:flex gap-9 text-md px-5 py-4 w-auto mt-4 justify-center items-center fixed z-[1000] bg-black/40 overflow-hidden backdrop-blur-md duration-200 rounded-xl shadow-md'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ bounce: 0 }}>
          <AnchorLink to="/#home" className='lg:hover:underline'>Home</AnchorLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ bounce: 0, delay: 0.1 }}>
          <AnchorLink to="/#projects" className='lg:hover:underline'>Projects</AnchorLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ bounce: 0, delay: 0.2 }}>
          <AnchorLink to="/#contact" className='lg:hover:underline'>Contact</AnchorLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ bounce: 0, delay: 0.3 }}>
          <a href="/todd_evans_cv.pdf" target='_blank' rel='noopener noreferrer' className='lg:hover:underline'>Resumé</a>
        </motion.div>
      </nav>
    </div>
  );
};
