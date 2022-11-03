import React from "react"
import Project from "./Project"

const FeaturedProjects = ({ projects }) => {
  return (
    <section id='projects' className='p-[calc(8px+1.5625vw)] anchor min-h-screen'>
      <div className='flex items-center mb-4'>
        <h2 className='font-semibold text-3xl'>Recent Projects</h2>
      </div>
      <div className="flex gap-8">
        { projects.map((project, index) => {
          return <Project key={project.id} index={index} project={project} />
        })}
      </div>
    </section>
  )
}

export default FeaturedProjects
