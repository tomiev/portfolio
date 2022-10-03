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
    <nav style ={{ top: visible ? '0' : '-60px' } } className='flex py-1 m-auto w-screen justify-evenly leading-10 fixed top-0 z-[1000] backdrop-blur-sm duration-200'>
      <AnchorLink to="/#home"><u>Home</u></AnchorLink>
      <AnchorLink to="/#projects"><u>Projects</u></AnchorLink>
      <AnchorLink to="/#contact"><u>Contact</u></AnchorLink>
      <Link to='/' target="_blank" rel="noopener noreferrer"><u>Resumé</u></Link>
    </nav>
  );
};
