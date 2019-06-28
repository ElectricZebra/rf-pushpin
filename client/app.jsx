import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/nav/nav'
import Home from './components/home'
import Profile from './components/profile'
import About from './components/about'

const App = () => (
    <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
    </Router>
)

export default App
