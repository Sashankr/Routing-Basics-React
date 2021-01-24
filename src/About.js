import React from "react"
import { Link } from "react-router-dom"

function About() {
  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
        dolores.
      </p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default About
