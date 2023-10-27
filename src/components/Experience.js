import React from "react"
import { motion } from 'framer-motion'
import SectionHeader from "./SectionHeader"

const Experience = () => {
  return (
    <section id='experience' className='p-[calc(8px+1.5625vw)] lg:px-48 lg:py-20'>
      <SectionHeader title="Experience" />
      <motion.div
        className="flex flex-col-reverse md:grid md:grid-cols-2 xl:flex xl:flex-row-reverse gap-4 lg:gap-8 justify-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.5 }}>
      </motion.div>
    </section>
  )
}

export default Experience;
