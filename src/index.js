import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './views/home/index'
import PageTest from './views/Pagetest/index'

const NewProjectSep15153015 = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={PageTest} exact path="/page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<NewProjectSep15153015 />, document.getElementById('app'))
