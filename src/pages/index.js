import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Navbar from '../components/Navbar'
import Landing from "../components/Landing"
import About from "../components/About"
import FeaturedProjects from "../components/FeaturedProjects"
import Contact from "../components/Contact"

const IndexPage = () => {
  const { allStrapiProject } = useStaticQuery(graphql`
    {
      allStrapiProject(filter: {featured: {eq: true}}) {
        nodes {
          github
          id
          title
          url
          description
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          stack {
            id
            title
          }
        }
      }
    }
  `)

  return (
    <main className="bg-dark_gray text-white">
      <Navbar />
      <div>
        <Landing />
        <About />
        <FeaturedProjects projects={ allStrapiProject.nodes } />
        <Contact />
      </div>

    </main>
  )
}

export default IndexPage
