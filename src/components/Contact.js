import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { FaArrowCircleUp } from 'react-icons/fa'

function copyToClipboard() {
  navigator.clipboard.writeText('evansmtodd@gmail.com').then(() => alert('Coped to clipboard'))
}

export default function Contact() {
  return (
    <section id='contact' className='p-[calc(8px+1.5625vw)] bg-[#BB4025]'>
      <div className='w-full'>
        <div className='mb-4'>
          <div className='flex justify-between'>
            <h2 className='font-semibold text-3xl'>Contact</h2>
            <AnchorLink to="/#home" className='text-2xl'><FaArrowCircleUp /></AnchorLink>
          </div>
          <p className='mt-6'>Please drop me an email if you have an enquiry and I’ll get back to you as soon as possible.</p>
          <button
            onClick={copyToClipboard}
            className='text-xl text-left mt-6 border-b-2 border-none hover:border-solid'
            >evansmtodd@gmail.com
          </button>
          <div className='flex gap-24 mt-12'>
            <a href="https://linkedin.com/in/todd-evans-te" aria-label='LinkedIn' className='mb-2 border-b-2 border-none hover:border-solid'>LinkedIn</a>
            <a href="https://github.com/tomiev" aria-label='GitHub' className='mb-2 border-b-2 border-none hover:border-solid'>GitHub</a>
          </div>
        </div>
        <div className="bg-white h-[0.0625rem]"></div>
      </div>
    </section>
  )
}
