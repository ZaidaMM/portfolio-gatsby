import React from "react"
import Title from "./Title"
import services from "../constants/services"

const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Services" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, title, text, icon } = service
          return (
            <div key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p className="service-p">{text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Services
