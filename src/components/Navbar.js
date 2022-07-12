import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between'>
      <div><Link to="/">Todd Evans</Link></div>
      <div className="space-x-8">
        <Link to="/">About</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>
        <Link to="/" className='btn'>Resumé</Link>
      </div>
    </nav>
  )
}
