import React from "react"
import pageLinks from "../constants/links"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"

const Sidebar = () => {
  const isOpen = true
  return (
    <>
      <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
        <button type="button" className="close-btn">
          <FaTimes />
        </button>
        <div className="side-container">
          <ul className={isOpen ? "sidebar-links" : null}>
            {pageLinks.map(link => {
              return (
                <li key={link.id}>
                  <Link to={link.url} className="sidebar-links">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <ul className={isOpen ? "social-links sidebar-icons" : null}>
            {socialLinks.map(link => {
              return (
                <li key={link.id}>
                  <a href={link.url} className="social-link">
                    {link.icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}
export default Sidebar
