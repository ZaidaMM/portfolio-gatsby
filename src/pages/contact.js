import React from "react"

const contact = () => {
  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in Touch</h3>
          <form>
            <div className="form-group">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="name"
              ></input>
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="email"
              ></input>
              <textarea
                name="message"
                className="form-control"
                placeholder="message"
                rows="6"
              ></textarea>
            </div>
            <button type="submit" className="btn submit-btn">
              Submit
            </button>
          </form>
        </article>
      </section>
    </>
  )
}
export default contact
