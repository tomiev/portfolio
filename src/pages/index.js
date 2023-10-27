import * as React from "react"
import Navbar from '../components/Navbar'
import Landing from "../components/Landing"
import About from "../components/About"
import Experience from "../components/Experience"
import FeaturedProjects from "../components/FeaturedProjects"
import Contact from "../components/Contact"
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <main className="bg-dark_gray text-white">
      <Helmet>
        <title>Todd Evans | Software Developer</title>
      </Helmet>
      <Navbar />
      <div>
        <Landing />
        <About />
        <Experience />
        <FeaturedProjects />
        <Contact />
      </div>
    </main>
  )
}

export default IndexPage
