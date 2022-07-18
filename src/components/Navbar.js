import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between leading-10'>
      <Link to="/">
        <StaticImage className='w-10 rounded-md' src='/Users/toddevans/code/tomiev/portfolio/src/images/Logo.png' alt='TE logo'/>
      </Link>
      <div className="space-x-4 align-middle">
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>
        <Link to="/" className='btn'>Resumé</Link>
      </div>
    </nav>
  )
}
