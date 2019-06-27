import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import SearchForm from './search-form'

const MyLink = ({ children, ...props }) => (
    <NavLink className="navbar-item" activeClassName="is-active" {...props}>
        {children}
    </NavLink>
)

const Brand = () => (
    <div className="navbar-brand">
        <Link to="/" className="navbar-item">
            <img id="logo" src="/images/pushpin.png" className="navbar-item" />
        </Link>
        <Link to="/" className="navbar-item">
            <strong>PushPin</strong>
        </Link>
    </div>
)

const NavLeft = () => (
    <div className="navbar-start">
        <div className="navbar-item">
            <SearchForm />
        </div>
        <MyLink exact to="/">
            Home
        </MyLink>
        <MyLink to="/about">About</MyLink>
        <MyLink to="/profile">Profile</MyLink>
    </div>
)

const NavRight = () => (
    <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
                <a className="button is-danger is-rounded is-outlined">
                    Sign up
                </a>
                <a className="button is-light is-rounded">Log in</a>
            </div>
        </div>
    </div>
)

const Nav = () => (
    <nav
        className="navbar is-white is-fixed-top"
        role="navigation"
        aria-label="main"
    >
        <Brand />
        <div className="navbar-menu">
            <NavLeft />
            <NavRight />
        </div>
    </nav>
)

export default Nav
