/* eslint-disable react/no-did-mount-set-state */
import React from 'react'
import axios from 'axios'
import MasonryLayout from 'react-masonry-layout'

import Pin from './pin'

const Loader = () => (
    <section className="section">
        <progress className="progress is-small is-danger" max="100">
            Loading
        </progress>
    </section>
)

const Loaded = () => (
    <section className="section">
        <em className="has-text-grey-lighter">(all pins loaded)</em>
    </section>
)

class AllPins extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pins: [],
            loading: false,
            end: false,
        }
    }

    async componentDidMount() {
        try {
            const { end, pins } = await this.getPins(0)
            this.setState({ end, pins })
        } catch (err) {
            console.error(err)
        }
    }

    async getPins(offset = 0) {
        this.setState({ loading: true })
        const { data } = await axios.get('/api/pins', {
            params: { offset },
        })
        this.setState({ loading: false })
        return data
    }

    loadItems = async () => {
        try {
            const offset = this.state.pins.length
            const { pins, end } = await this.getPins(offset)
            this.setState(oldState => ({
                end,
                pins: [...oldState.pins, ...pins],
            }))
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
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
                            infiniteScroll={this.loadItems}
                            infiniteScrollLoading={this.state.loading}
                            infiniteScrollSpinner={<Loader />}
                            infiniteScrollEnd={this.state.end}
                            infiniteScrollEndIndicator={<Loaded />}
                        >
                            {this.state.pins.map(pin => (
                                <Pin key={pin.id} pin={pin} />
                            ))}
                        </MasonryLayout>
                    </div>
                </div>
            </section>
        )
    }
}

export default AllPins
