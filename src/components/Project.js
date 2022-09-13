import React from 'react'
import { Link, graphql } from "gatsby"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
// import { FaGithub, FaHome } from "react-icons/fa"

export default function Project({ project }) {
  console.log(project)
  return (
    <article>
      <GatsbyImage
        image={(project.image.localFile.childImageSharp.gatsbyImageData)}
        alt=""
      />
    </article>
  )
}
