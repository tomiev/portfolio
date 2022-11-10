import React from 'react'
import SkillSphere from './SkillSphere'
import { motion } from 'framer-motion';


export default function About() {
  return (
    <section id ='about' className='p-[calc(8px+1.5625vw)] lg:px-48 lg:pt-20 h-fit'>
      <div className="flex justify-center gap-2 items-center mb-8">
        <motion.div
          className='line'
          initial={{ width: "0%" }}
          whileInView={{ width: "50%" }}
          viewport={{ once: true, amount: "all" }}
          transition={{ delay: 0.7, duration: 1 }}
          >
          </motion.div>
        <motion.h2
          className='font-semibold text-3xl text-center'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "all" }}
          transition={{ duration: 0.5 }}
          >About
        </motion.h2>
        <motion.div
          className="line"
          initial={{ width: "0%" }}
          whileInView={{ width: "50%" }}
          viewport={{ once: true, amount: "all" }}
          transition={{ delay: 0.7, duration: 1 }}
          >
        </motion.div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center text-lg gap-2 lg:gap-32'>
        <motion.p
          className='mt-4 lg:w-96 lg:text-2xl'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "all" }}
          transition={{ duration: 0.5 }}
          >"Lorem ipsum dolor sit amet, consectetur <span className='text-lime text-xl lg:text-3xl'>adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <span className='text-lime text-xl lg:text-3xl'>nostrud</span> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, quis nostrud exercitation ullamco nisi, ut aliquip ex ea commodo consequat.“
        </motion.p>
        <div className='flex flex-col mt-4 lg:w-96'>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.5 }}
            >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, quis nostrud exercitation ullamco nisi, ut aliquip ex ea commodo consequat.
          </motion.p>
          <motion.div
            className='flex justify-center lg:flex-none lg:mt-4 lg:ml-4 overflow-hidden'
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.5 }}
            ><SkillSphere />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
