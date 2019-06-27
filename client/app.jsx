import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/nav/nav'
import Home from './components/home'

const App = () => (
    <Router>
        <Nav />
        <Route exact path="/" component={Home} />
    </Router>
)

export default App
