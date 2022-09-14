import React from "react"
import Project from "./Project"

const FeaturedProjects = ({ projects }) => {
  return (
    <section id='projects' className='p-4 anchor min-h-screen'>
      <div className='flex items-center mb-4'>
        <h2 className='font-semibold text-4xl'>Featured</h2>
        <div className="line"></div>
      </div>
      <div>
        { projects.map((project, index) => {
          return <Project key={project.id} index={index} project={project} />
        })}
      </div>
    </section>
  )
}

export default FeaturedProjects
