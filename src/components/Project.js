import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaShare } from "@react-icons/all-files/fa/FaShare"

export default function Project({ project, index }) {
  return (
    <article className='mb-16 grid relative'>
      {/* Project image */}
      <a href={project.url}>
        <div className={`transition-all duration-500 h-full w-full opacity-95 absolute z-[1] bg-[#001f54]
          md:hidden rounded right-0
          ${index % 2 === 1 && 'right-0'}`
        }></div>
        <GatsbyImage
          image={(project.image.localFile.childImageSharp.gatsbyImageData)}
          alt={"Screen grab from " + project.title}
          className={`h-full w-full md:w-[55%] absolute z-0 rounded object-cover object-top
          transition-all duration-500 group-hover:scale-105 ${index % 2 === 1 && 'right-0'}`}
        />
      </a>
      {/* Project info */}
      <div className={`z-[2] relative flex flex-col justify-between p-4 w-full h-full md:w-[55%] items-start
        ${index % 2 === 1 ? '' : 'float-right  md:items-end'}`
      }>
        <span>0{index + 1}.</span>
        <h3 className='mb-6 text-2xl'>{project.title}</h3>
        <p>{project.description}</p>
        <div className='mb-4'>
          {project.stack.map((item) => {
            return <span className='mt-2 inline-block bg-slate-900 mr-2 py-1 px-2 rounded-lg text-sm' key={item.id}>{item.title}</span>
          })}
        </div>
        <div>
          <a href={project.github} aria-label="Go to project's GitHub" className='inline-block mr-4 text-2xl'><FaGithub /></a>
          <a href={project.url} aria-label="Visit project site" className='inline-block text-2xl'><FaShare /></a>
        </div>
      </div>
    </article>
  )
}
