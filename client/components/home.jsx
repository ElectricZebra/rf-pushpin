import React from 'react'

import Gallery from './gallery/gallery'

const Home = () => (
    <>
        <section className="section">
            <div className="container">
                <h1 className="title">Hello World</h1>
                <p className="subtitle">
                    Example <strong>text</strong>!
                </p>
            </div>
        </section>
        <Gallery />
    </>
)

export default Home
