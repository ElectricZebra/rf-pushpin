import React from 'react'
import MasonryLayout from 'react-masonry-layout'

import Pin from './pin'

const randomItems = () =>
    Array.from({ length: 25 }, () => ({
        id: Math.floor(Math.random() * 100000),
        height: 300 + (Math.floor(Math.random() * 200) - 100),
    }))

const Loader = () => (
    <section className="section">
        <progress className="progress is-small is-danger" max="100">
            Loading
        </progress>
    </section>
)

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pins: randomItems(),
            loading: false,
        }
    }

    loadItems = () => {
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState(oldState => ({
                pins: [...oldState.pins, ...randomItems()],
                loading: false,
            }))
        }, 1000)
    }

    render() {
        return (
            <div className="section">
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
                            infiniteScroll={this.loadItems}
                            infiniteScrollLoading={this.state.loading}
                            infiniteScrollSpinner={<Loader />}
                        >
                            {this.state.pins.map(pin => (
                                <Pin key={pin.id} pin={pin} />
                            ))}
                        </MasonryLayout>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery
