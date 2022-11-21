import React from "react"
import data from "../../constants/social_links"
import { graphql } from "gatsby"

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  return (
    <>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
      </main>
    </>
  )
}

export const query = graphql`
  {
    strapiProject {
      description
      title
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default ProjectTemplate
