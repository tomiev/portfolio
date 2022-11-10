import React from "react"
import Project from "./Project"
import { motion } from 'framer-motion';

const FeaturedProjects = ({ projects }) => {
  return (
    <section id='projects' className='p-[calc(8px+1.5625vw)] lg:px-48 lg:py-20'>
      <div className="flex justify-between whitespace-nowrap items-center gap-2 mb-8 z-10 bg-dark_gray">
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
          >Featured Projects
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
        className="flex flex-col-reverse md:grid md:grid-cols-2 xl:flex xl:flex-row-reverse gap-4 lg:gap-8 justify-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.5 }}
        >
        { projects.map((project, index) => {
          return <Project key={project.id} index={index} project={project} />
        })}
      </motion.div>
    </section>
  )
}

export default FeaturedProjects
