import React from "react"
import { FaLaptopCode, FaSketch, FaAndroid, FaMobileAlt } from "react-icons/fa"
import { MdDraw } from "react-icons/md"
const services = [
  {
    id: 1,
    icon: <FaLaptopCode className="service-icon" />,
    title: "web development",
    text: `Building fast, responsive and secure websites from start to completion.`,
  },
  {
    id: 2,
    icon: <MdDraw className="service-icon" />,
    title: "web design",
    text: `Creating the design and layout of websites, or updating an already existing one.`,
  },
  {
    id: 3,
    icon: <FaMobileAlt className="service-icon" />,
    title: "app design",
    text: `Creating easy to use apps, looking after the overall style (UI) and the general look and feel (UX).`,
  },
]

export default services
