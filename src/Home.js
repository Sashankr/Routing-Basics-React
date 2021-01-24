import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h2>HOMEPAGE</h2>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Home
