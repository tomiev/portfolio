import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState, useEffect } from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { debounce } from '../utilities/helpers'

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  /* TODO: Test app performance without debounce */
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
    <nav style ={{ top: visible ? '0' : '-60px' } } className='flex duration-200 px-4 py-1 justify-between leading-10 fixed top-0 z-[1000] backdrop-blur-sm shadow-md w-screen'>
      <AnchorLink to='/#home'>
        <StaticImage className='w-10 rounded-md' src='/Users/toddevans/code/tomiev/portfolio/src/images/Logo.png' alt='TE logo' />
      </AnchorLink>
      <div className="space-x-4">
        <AnchorLink to="/#projects">Projects</AnchorLink>
        <AnchorLink to="/#contact">Contact</AnchorLink>
        <Link to='/' target="_blank" rel="noopener noreferrer">Resumé</Link>
      </div>
    </nav>
  );
};
