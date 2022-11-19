import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Title from "./Title"
import { FaLongArrowAltRight } from "react-icons/fa"

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
  const {
    allStrapiJob: { nodes: jobs },
  } = data
  const { position, company, date, desc } = jobs[0]
  // console.log(data)

  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="section-center jobs-center">
        <div className="btn-container"></div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaLongArrowAltRight className="job-icon" />
                {item.name}
              </div>
            )
          })}
        </article>

        <Link to="/about" className="btn center-btn">
          More info
        </Link>
      </div>
    </section>
  )
}
export default Jobs
