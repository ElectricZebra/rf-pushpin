import React from 'react'

import HeroContainer from './hero-container'

const PinCard = ({ pin }) => (
    <HeroContainer>
        <div className="box pin-detail">
            <article className="media">
                <div className="media-left">
                    <img src={pin.imageUrl} />
                </div>
                <div className="media-content">
                    <div className="content">
                        <h1 className="title">Pin</h1>
                        <p>{pin.description}</p>
                    </div>
                </div>
            </article>
        </div>
    </HeroContainer>
)

export default PinCard
