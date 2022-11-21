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
  console.log(image.localFile)
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(image.localFile)}
        className="project-img"
        alt={title}
      />
    </article>
  )
}
export default Project
