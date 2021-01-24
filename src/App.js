import React from "react"
import About from "./About"
import Home from "./Home"
import Greeting from "./Greeting"
import RefHook from "./RefHook"
import EffectHook from "./EffectHook"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/about" component={About} exact={true}></Route>
          <Route
            path="/greeting/:name"
            component={Greeting}
            exact={true}
          ></Route>
          <Route path="/ref" exact={true} component={RefHook} />
          <Route path="/effect" exact={true} component={EffectHook} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
