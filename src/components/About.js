import React from 'react'
import SkillSphere from './SkillSphere'
import { motion } from 'framer-motion';


export default function About() {
  return (
    <section id ='about' className='p-[calc(8px+1.5625vw)] lg:px-48 lg:pt-20 h-fit'>
      <div className="flex justify-center gap-2 items-center mb-4 md:mb-6">
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
      <motion.div
        className='flex flex-col lg:flex-row justify-center text-lg gap-2 lg:gap-32'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.5 }}
        ><div className='flex flex-col gap-6 lg:w-96 lg:text-xl'>
          <p>I'm a passionate software developer who enjoys problem-solving and learning new skills. I transitioned to coding when I realised how much I enjoyed the programming aspect of my psychology research. With my background in psychology and people-focused job experiences, I’m a natural team player who cares about my peers and performs well in collaborative teams.</p>
          <p>Lately I've been self-learning React, GraphQL, TailwindCSS, and Gatsby. I also have experience with JavaScript, Ruby on Rails, HTML5/CSS3, Postgresql, and a range of other technologies.</p>
        </div>
        <div className='flex flex-col mt-4 lg:w-96'>
          <div className='flex justify-center lg:flex-none lg:mt-4 lg:ml-4 overflow-hidden'>
            <SkillSphere />
          </div>
        </div>
      </motion.div>
      {/* <span className='text-lime text-xl lg:text-3xl'></span> */}
    </section>
  )
}
