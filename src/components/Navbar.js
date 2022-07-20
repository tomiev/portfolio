import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { todd_evans_resume } from '/Users/toddevans/code/tomiev/portfolio/static/todd_evans_resume.pdf';

export default function Navbar() {
  return (
    <nav className='flex justify-between leading-10 sticky top-0 z-50 backdrop-blur-sm'>
      <AnchorLink to='/#home'>
        <StaticImage className='w-10 rounded-md' src='/Users/toddevans/code/tomiev/portfolio/src/images/Logo.png' alt='TE logo'/>
      </AnchorLink>
      <div className="space-x-4">
        <AnchorLink to="/#projects">Projects</AnchorLink>
        <AnchorLink to="/#contact">Contact</AnchorLink>
        <Link to='/' target="_blank" rel="noopener noreferrer">Resumé</Link>
      </div>
    </nav>
  )
}
