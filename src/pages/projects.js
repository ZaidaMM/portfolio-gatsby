import React from "react"
import Projects from "../components/Projects"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const ProjectsPage = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProject: { nodes: projects },
  } = data
  // console.log(projects)
  return (
    <>
      <main className="projects-page">
        <Projects title="All Projects" projects={projects} />
        {/* PROJECTS */}
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        github
        id
        slug
        stack {
          id
          title
        }
        title
        url
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        description
        featured
      }
    }
  }
`

export default ProjectsPage
