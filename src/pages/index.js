import * as React from "react"
import Navbar from '../components/Navbar'
import Landing from "../components/Landing"
import About from "../components/About"
import FeaturedProjects from "../components/FeaturedProjects"

const IndexPage = () => {
  return (
    <main className="bg-dark_gray text-white text-sm py-4 px-4 md:py-8 md:px-18 lg:px-24">
      <Navbar />
      <Landing />
      <About />
      <FeaturedProjects />
    </main>
  )
}

export default IndexPage
