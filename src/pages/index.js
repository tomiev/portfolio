import * as React from "react"
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"

const IndexPage = () => {
  return (
    <main className="h-screen bg-dark_gray text-white text-sm py-4 px-4 md:py-8 md:px-18 lg:px-24">
      <Navbar />
      <Hero />
    </main>
  )
}

export default IndexPage

// w-16 md:w-32 lg:w-48
