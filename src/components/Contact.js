import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

function copyToClipboard() {
  navigator.clipboard.writeText('evansmtodd@gmail.com').then(() => alert('Coped to clipboard'))
}

export default function Contact() {
  return (
    <section id='contact' className='p-4 bg-orange-500 text-slate-500'>
      <div className='flex items-center mb-4'>
        <h2 className='font-semibold text-2xl'>GET IN TOUCH</h2>
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col items-start w-[65%] lg:w-[50%] xl:w-[40%]'>
          <button
            onClick={copyToClipboard}
            className='text-left mb-2 border-b-2 border-dotted hover:border-solid border-slate-500'
            >evansmtodd@gmail.com
          </button>
          <a href="https://linkedin.com/in/todd-evans-te" aria-label='LinkedIn' className='mb-2 w-[35%] border-b-2 border-dotted hover:border-solid border-slate-500'>LINKEDIN</a>
          <a href="https://github.com/tomiev" aria-label='GitHub' className='mb-2 w-[35%] border-b-2 border-dotted hover:border-solid border-slate-500'>GITHUB</a>
        </div>
        <div className='h-[100%]'>
          <StaticImage src="/Users/toddevans/code/tomiev/portfolio/src/images/sun.png" alt="Rotating sun" className='h-24 w-24 animate-spin-slow' />
        </div>
        </div>
    </section>
  )
}
