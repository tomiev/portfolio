import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { FaArrowCircleUp } from 'react-icons/fa'
import { motion } from 'framer-motion';


function copyToClipboard() {
  navigator.clipboard.writeText('evansmtodd@gmail.com').then(() => alert('Coped to clipboard'))
}

export default function Contact() {
  return (
    <section id='contact' className='p-[calc(8px+1.5625vw)] lg:px-48 lg:py-20 bg-[#BB4025]'>
      <div className='w-full'>
        <div className='mb-4'>
          <motion.div
            className='flex justify-between'
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.5 }}
            ><h2 className='font-semibold text-3xl'>Contact</h2>
            <AnchorLink to="/#home" className='text-2xl'><FaArrowCircleUp /></AnchorLink>
          </motion.div>
          <motion.p
            className='mt-6'
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.5 }}
            >Please drop me an email if you have an enquiry and I’ll get back to you as soon as possible.
          </motion.p>
          <motion.button
            onClick={copyToClipboard}
            className='text-xl text-left mt-6 lg:hover:underline'
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.5 }}
            >evansmtodd@gmail.com
          </motion.button>
          <motion.div
          className='flex gap-24 mt-12'
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.5 }}
            ><a href="https://linkedin.com/in/todd-evans-te" aria-label='LinkedIn' className='mb-2 lg:hover:underline'>LinkedIn</a>
            <a href="https://github.com/tomiev" aria-label='GitHub' className='mb-2 lg:hover:underline'>GitHub</a>
          </motion.div>
        </div>
        <motion.div
          className="bg-white h-[0.0625rem] relative"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, amount: "all" }}
          transition={{ delay: 0.7, duration: 1 }}
          >
        </motion.div>
      </div>
    </section>
  )
}
