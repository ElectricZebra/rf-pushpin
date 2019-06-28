const React = require('react')

const HeroContainer = ({ children }) => (
    <section className="hero is-light is-fullheight-with-navbar">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="columns is-centered">{children}</div>
            </div>
        </div>
    </section>
)

export default HeroContainer
