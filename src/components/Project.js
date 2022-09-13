import React from 'react'
import { Link, graphql } from "gatsby"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
// import { FaGithub, FaHome } from "react-icons/fa"

export default function Project(project, key, index) {
  // console.log(project.project.image)
  return (
    <article>
      <GatsbyImage
        image={getImage(project.project.image)}
        alt=""
      />
    </article>
  )
}
