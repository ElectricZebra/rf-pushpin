import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import SearchForm from './search-form'
import Logo from './logo'
import Title from './title'
import Burger from './burger'

const MyLink = ({ children, ...props }) => (
    <NavLink className="navbar-item" activeClassName="is-active" {...props}>
        {children}
    </NavLink>
)

const LeftLinks = () => (
    <>
        <MyLink exact to="/">
            Home
        </MyLink>
        <MyLink to="/about">About</MyLink>
        <MyLink to="/profile">Profile</MyLink>
    </>
)

const RightLinks = () => (
    <div className="navbar-item buttons">
        <Link to="/login" className="button is-danger is-rounded is-outlined">
            Log in
        </Link>
    </div>
)

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            active: false,
        }
    }
    toggleActive = () => {
        this.setState(oldState => ({
            active: !oldState.active,
        }))
    }
    render() {
        const isActive = this.state.active ? ' is-active' : ''
        return (
            <nav
                className="navbar is-fixed-top"
                role="navigation"
                aria-label="main"
            >
                <div className="navbar-brand">
                    <Logo />
                    <Title />
                    <Burger
                        active={this.state.active}
                        onClick={this.toggleActive}
                    />
                </div>
                <div className={'navbar-menu' + isActive}>
                    <div className="navbar-start">
                        <SearchForm />
                        <LeftLinks />
                    </div>
                    <div className="navbar-end">
                        <RightLinks />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav
