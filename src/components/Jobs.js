import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Title from "./Title"
import { FaLongArrowAltRight } from "react-icons/fa"

const query = graphql`
  query {
    allStrapiJob(sort: { date: DESC }) {
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
  const [value, setValue] = useState(0)
  const { position, company, date, desc } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="section-center jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                className={index === value ? "job-btn active-btn " : "job-btn"}
                key={index}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>
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
