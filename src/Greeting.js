import React from "react"
import { useParams } from "react-router-dom"

function Greeting() {
  const params = useParams()

  return (
    <div>
      <h2>Welcome,{params.name}</h2>
    </div>
  )
}

export default Greeting
