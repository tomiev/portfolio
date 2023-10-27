import React from 'react'
import SkillSphere from './SkillSphere'
import SectionHeader from './SectionHeader'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id ='about' className='p-[calc(8px+1.5625vw)] lg:px-48 lg:pt-20 h-fit flex-col'>
      <SectionHeader title="About" />
      <motion.div
        className='text-lg flex flex-col md:flex-row justify-center align-center w-100'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.5 }}>
        <div class="md:w-6/12">
          <p>I'm a Software Developer who loves problem-solving, learning new skills and working with passionate people.
            <br />
            <br />
            Currently working at <a href="https://photosentinel.com/" class="text-[#d8f047] lg:hover:underline">photoSentinel</a> building long-term time-lapse solutions using ASP.NET, JavaScript, PostgreSQL, HTML/CSS, and Bootstrap.
            I also have some experience with Ruby on Rails, React, GraphQL, and a range of other technologies.
            <br />
            <br />
            In my time away from the screen, I enjoy watching and playing basketball 🏀, practising guitar 🎸, and learning about psychology and philosophy 📚.
          </p>
        </div>
        <div class="md:w-6/12 flex justify-center mb-0 pb-0">
          <SkillSphere />
        </div>
      </motion.div>
    </section>
  )
}
