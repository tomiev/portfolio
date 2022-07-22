import * as React from "react"
import Navbar from '../components/Navbar'
import Landing from "../components/Landing"
import About from "../components/About"
import FeaturedProjects from "../components/FeaturedProjects"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    <main className="bg-dark_gray text-white">
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <Landing />
          <About />
          <FeaturedProjects />
          <Contact />
        </div>
      </div>
    </main>
  )
}

export default IndexPage
