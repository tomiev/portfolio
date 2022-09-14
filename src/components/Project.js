import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaShare } from "@react-icons/all-files/fa/FaShare"

export default function Project({ project, index }) {
  return (
    <article className='mb-16 grid'>
      {/* Project image */}
      <a href={project.url}>
        <GatsbyImage
          image={(project.image.localFile.childImageSharp.gatsbyImageData)}
          alt={"Screen grab from " + project.title}
          className='h-72 z-10 rounded-lg md:h-80 lg:col-start-1 lg:col-span-8 lg:row-start-1 lg:row-span-1 lg:h-[30rem]'
        />
      </a>
      {/* Project info */}
      <div className='py-4 px-8 rounded-lg bg-blurple lg:z-20 lg:col-start-5 lg:col-span-12 lg:row-start-1 lg:row-span-1'> {/* TODO: Change colour */}
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
