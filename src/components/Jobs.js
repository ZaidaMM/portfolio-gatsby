import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./Title"

const query = graphql`
  query {
    allStrapiJob {
      nodes {
        position
        company
        date
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const jobs = data.allStrapiJob.nodes
  console.log(data)
  return <div>Jobs</div>
}
export default Jobs
