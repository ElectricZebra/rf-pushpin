import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/nav/nav'
import Home from './components/home'
import Profile from './components/profile'
import About from './components/about'
import PinDetail from './components/pin-detail/single-pin'
import Boards from './gallery/boards'

const App = () => (
    <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/pin/:id" component={PinDetail} />
        <Route path='/boards' component={Boards} />
    </Router>
)

export default App
