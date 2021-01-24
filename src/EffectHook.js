import React, { useState, useEffect, useRef } from "react"

function EffectHook() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const divRef = useRef()

  useEffect(() => {
    console.log(divRef)
  }, [counter, counter2])

  return (
    <div ref={divRef}>
      <p>{counter}</p>
      <p>{counter2}</p>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Counter 1 increment
      </button>
      <button onClick={() => setCounter2((counter2) => counter2 + 1)}>
        Counter 2 increment
      </button>
    </div>
  )
}

export default EffectHook
