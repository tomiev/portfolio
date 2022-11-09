import React from "react"
import Project from "./Project"

const FeaturedProjects = ({ projects }) => {
  return (
    <section id='projects' className='p-[calc(8px+1.5625vw)] lg:px-48 lg:py-20'>
      <div className="flex justify-between items-center gap-2 mb-8">
        <div className='line'></div>
        <h2 className='font-semibold text-3xl text-center'>Featured Projects</h2>
        <div className="line"></div>
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 xl:flex xl:flex-row-reverse gap-4 lg:gap-8 justify-center">
        { projects.map((project, index) => {
          return <Project key={project.id} index={index} project={project} />
        })}
      </div>
    </section>
  )
}

export default FeaturedProjects
