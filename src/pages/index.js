import * as React from "react"
import Navbar from '../components/Navbar'
import Landing from "../components/Landing"
import About from "../components/About"
import FeaturedProjects from "../components/FeaturedProjects"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    <main className="bg-dark_gray text-white text-sm ">
      <Navbar />
      <Landing />
      <About />
      <FeaturedProjects />
      <Contact />
    </main>
  )
}

export default IndexPage
