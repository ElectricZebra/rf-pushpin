import React from 'react'
import MasonryLayout from 'react-masonry-layout'

import Pin from './pin'

const Loader = () => (
    <section className="section">
        <progress className="progress is-small is-danger" max="100">
            Loading
        </progress>
    </section>
)

const Gallery = ({ pins, loading }) => (
    <section className="section">
        <div className="columns is-centered">
            <div className="column is-narrow has-text-centered">
                <MasonryLayout
                    id="masonry-layout"
                    position={false}
                    sizes={[
                        { columns: 2, gutter: 20 },
                        { mq: '880px', columns: 3, gutter: 20 },
                        { mq: '1070px', columns: 4, gutter: 20 },
                        { mq: '1300px', columns: 5, gutter: 20 },
                    ]}
                    infiniteScrollLoading={loading}
                    infiniteScrollSpinner={<Loader />}
                >
                    {pins.map(pin => (
                        <Pin key={pin.id} pin={pin} />
                    ))}
                </MasonryLayout>
            </div>
        </div>
    </section>
)

export default Gallery
