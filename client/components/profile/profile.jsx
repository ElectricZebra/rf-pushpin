const React = require('react')
import { NavLink, Route, Redirect } from 'react-router-dom'

import Gallery from '../gallery/gallery'

const Person = () => (
    <section className="section">
        <div className="container">
            <h1 className="title">Sandy Tiernan</h1>
            <p className="subtitle">
                I want to ride my bicycle, I want to ride my bike.
            </p>
        </div>
    </section>
)

const NavContainer = ({ children }) => (
    <div className="container">
        <nav className="navbar" role="navigation" aria-label="sub-page">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item buttons">{children}</div>
                </div>
            </div>
        </nav>
    </div>
)

const ProfileNav = () => (
    <NavContainer>
        <NavLink
            className="button is-rounded is-light"
            activeClassName="is-active"
            to="/profile/boards"
        >
            Boards
        </NavLink>
        <NavLink
            className="button is-rounded is-light"
            activeClassName="is-active"
            to="/profile/pins"
        >
            Pins
        </NavLink>
    </NavContainer>
)

const ProfileRoutes = () => (
    <>
        <Redirect exact from="/profile" to="/profile/boards" />
        {/* <Route path="/profile/boards" component={Gallery} /> */}
        <Route path="/profile/pins" component={Gallery} />
    </>
)

const Profile = () => (
    <>
        <Person />
        <ProfileNav />
        <ProfileRoutes />
    </>
)

export default Profile
