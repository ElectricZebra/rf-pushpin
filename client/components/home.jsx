import React from 'react'

import Gallery from './gallery/gallery'

const Home = () => (
    <>
        <section className="section">
            <div className="container">
                <h1 className="title">Welcome to PushPin</h1>
                <p className="subtitle">
                    Pushing and Popping your Favorite Pins
                </p>
            </div>
        </section>
        <Gallery />
    </>
)

export default Home
