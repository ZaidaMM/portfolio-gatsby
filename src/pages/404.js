import React from "react"
import { Link } from "gatsby"

const error = () => {
  return (
    <main className="error-page">
      <div className="error-container">
        <h1>page not found</h1>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </main>
  )
}
export default error
