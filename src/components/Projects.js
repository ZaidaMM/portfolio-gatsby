import React from "react"
import Title from "../components/Title"
import Project from "../components/Project"
import { Link } from "gatsby"

const Projects = ({ projects, showLink, title }) => {
  // console.log(props)
  return (
    <section className="section project">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}
export default Projects
