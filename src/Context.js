import React, { useContext, useState, useEffect } from "react"

const MyContext = React.createContext()

const Component1 = () => {
  const { state, setState } = useContext(MyContext)
  useEffect(() => {
    setTimeout(() => {
      setState((state) => ({
        ...state,
        name: "something cool",
      }))
    }, 1000)
  }, [])
  return <h1>Hello {state.name}</h1>
}

const Component2 = () => {
  return <h1>Hello 2</h1>
}

function Context() {
  const [obj, setObj] = useState({
    name: "Joe",
    role: "dev",
  })
  return (
    <MyContext.Provider value={{ state: obj, setState: setObj }}>
      <div>
        <Component1 />
        <Component2 />
      </div>
    </MyContext.Provider>
  )
}

export default Context
