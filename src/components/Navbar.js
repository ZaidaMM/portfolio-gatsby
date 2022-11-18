import React from "react"
import { FaAlignRight } from "react-icons/fa"
import { Link } from "gatsby"
import pageLinks from "../constants/links"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2 className="logo">
            <span>Web</span>
            Dev
          </h2>
          <button className="toggle-btn" type="button">
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
