import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState, useEffect } from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { debounce } from '../utilities/helpers'

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
        <AnchorLink to="/#home" className='hover:underline'>Home</AnchorLink>
        <AnchorLink to="/#projects" className='hover:underline'>Projects</AnchorLink>
        <AnchorLink to="/#contact" className='hover:underline'>Contact</AnchorLink>
        <Link to='/' target="_blank" rel="noopener noreferrer" className='hover:underline'>Resumé</Link>
      </nav>
    </div>
  );
};
