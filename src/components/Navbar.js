import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between'>
      <div className="">
        <Link to="/">Todd Evans</Link>
      </div>
      <div className="flex">
        <Link to="/">About</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Resumé</Link>
      </div>
    </nav>
  )
}
