import React from 'react'
import { Link } from 'react-router-dom'

const Pin = ({ pin }) => {
    const { id, height } = pin
    return (
        <div className="pin" style={{ height }}>
            <Link to={`/pin/${id}`}>
                <img
                    src={`https://picsum.photos/230/${height}?random=${id}`}
                    style={{ borderRadius: '10px' }}
                />
            </Link>
        </div>
    )
}

export default Pin
