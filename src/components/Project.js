import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt"

export default function Project({ project, index }) {
  return (
    <article className='rounded-lg'>
      <div className='group relative'>
        {/* Project image */}
        <GatsbyImage
          image={(project.image.localFile.childImageSharp.gatsbyImageData)}
          alt={"Screen grab from " + project.title}
          className={`rounded-lg`}
        />
        {/* Projects info overlay */}
        <div className='absolute w-full h-full top-0 left-0 p-4 md:h-0 rounded-lg flex flex-col backdrop-brightness-[.20] justify-center items-center md:opacity-0 group-hover:h-full group-hover:opacity-100 duration-300'>
          <h3 className='m-2 lg:mb-6 text-2xl'>{project.title}</h3>
          <p>{project.description}</p>
          <div className='mb-4'>
            {project.stack.map((item) => {
              return <span className='mt-2 inline-block bg-[#001f54] mr-2 py-1 px-2 rounded-lg text-sm' key={item.id}>{item.title}</span>
            })}
          </div>
          <div>
            <a href={project.github} aria-label="Go to project's GitHub" className='inline-block mr-4 text-2xl'><FaGithub /></a>
            <a href={project.url} aria-label="Visit project site" className='inline-block text-2xl'><FaExternalLinkAlt /></a>
          </div>
        </div>
      </div>
    </article>
  )
}
