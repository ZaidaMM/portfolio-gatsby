import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        {/* <Services /> */}
      </main>
    </>
  )
}
