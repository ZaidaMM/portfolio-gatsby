import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({
  index,
  description,
  title,
  github,
  stack,
  url,
  image,
  slug,
}) => {
  console.log(stack)
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(image.localFile)}
        className="project-img"
        alt={title}
      />
      <div className="project-info">
        <span className="project-number">{index + 1}.</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            {
              return <span key={item.id}>{item.title}</span>
            }
          })}
        </div>
        <div className="project-links">
          <a
            href={github}
            className="project-icon"
            alt="github"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
          <a
            href={github}
            className="project-icon"
            alt="project"
            target="_blank"
          >
            <FaShareSquare />
          </a>
        </div>
      </div>
    </article>
  )
}
export default Project
