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

class AllPins extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pins: [],
            loading: false,
        }
    }

    handleError(err) {
        this.setState({ loading: false })
        console.error(err)
    }

    async componentDidMount() {
        try {
            const pins = await this.getAllPins()
            this.setState({ pins })
        } catch (err) {
            this.handleError(err)
        }
    }

    async getAllPins() {
        this.setState({ loading: true })
        const { data: pins } = await axios.get('/api/pins')
        this.setState({ loading: false })
        return pins
    }

    loadItems = async () => {
        try {
            const pins = await this.getAllPins()
            this.setState(oldState => ({
                pins: [...oldState.pins, ...pins],
            }))
        } catch (err) {
            this.handleError(err)
        }
    }

    render() {
        return (
            <section className="section">
                {this.state.loading ? <Loader /> : null}
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
                            infiniteScrollDisabled
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
