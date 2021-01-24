import React, { useRef } from "react"

function RefHook() {
  const title = useRef()
  setTimeout(() => {
    console.log(title)
    console.log(title.current.textContent)
  }, 10)

  return (
    <div>
      <h1 ref={title}>Title of the page</h1>
    </div>
  )
}

export default RefHook
