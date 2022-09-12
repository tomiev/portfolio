import * as React from "react"
import { graphql } from "gatsby"
import Navbar from '../components/Navbar'
import Landing from "../components/Landing"
import About from "../components/About"
import FeaturedProjects from "../components/FeaturedProjects"
import Contact from "../components/Contact"

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data;

  console.log(data);

  return (
    <main className="bg-dark_gray text-white">
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <Landing />
          <About />
          <FeaturedProjects projects={ projects } />
          <Contact />
        </div>
      </div>
    </main>
  )
}

export const query = graphql`
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
              fluid {
                ...GatsbyImageSharpFluid
              }
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
`

export default IndexPage
