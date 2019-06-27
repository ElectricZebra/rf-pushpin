const React = require('react')
const { Link } = require('react-router-dom')

const Title = () => (
    <Link to="/" className="navbar-item">
        <strong>PushPin</strong>
    </Link>
)

export default Title
