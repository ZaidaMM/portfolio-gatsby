import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

export default function Home() {
  const data = useStaticQuery(query)
  const {
    allStrapiProject: { nodes: projects },
  } = data
  // console.log(projects)
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="Featured Projects" showLink projects={projects} />
      </main>
    </>
  )
}

const query = graphql`
  query {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        title
        description
        stack {
          title
          id
        }
        github
        url
        featured
        id
        slug
        image {
          localFile {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
          id
        }
      }
    }
  }
`
