const React = require('react')
const { Link } = require('react-router-dom')

const Logo = () => (
    <Link to="/" className="navbar-item">
        <img id="logo" src="/images/pushpin.png" />
    </Link>
)

export default Logo
