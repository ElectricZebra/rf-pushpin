import React from 'react'

// "Hamburger" menu with three lines, toggles nav opened and closed on mobile

const Burger = ({ active, onClick }) => {
    const activeClass = active ? ' is-active' : ''
    return (
        <a
            role="button"
            className={'navbar-burger' + activeClass}
            aria-label="menu"
            aria-expanded="false"
            onClick={onClick}
        >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </a>
    )
}

export default Burger
