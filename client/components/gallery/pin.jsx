import React from 'react'
import { Link } from 'react-router-dom'

// see public/style.css
const PIN_CSS_WIDTH = 230

const getCSSHeight = (width, height) => {
    const aspect = height / width
    return aspect * PIN_CSS_WIDTH
}

const Pin = ({ pin }) => {
    const { id, width, height } = pin
    return (
        <div className="pin" style={{ height: getCSSHeight(width, height) }}>
            <Link to={`/pin/${id}`}>
                <img src={pin.imageUrl} style={{ borderRadius: '10px' }} />
            </Link>
        </div>
    )
}

export default Pin
