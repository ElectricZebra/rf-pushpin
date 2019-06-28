/* eslint-disable react/no-did-mount-set-state */
import React from 'react'
import axios from 'axios'

import Gallery from './gallery'

class AllPins extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pins: [],
            loading: false,
        }
    }

    async componentDidMount() {
        try {
            this.setState({ loading: true })
            const { data: pins } = await axios.get('/api/pins')
            this.setState({ pins })
        } catch (err) {
            console.error(err)
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        return <Gallery pins={this.state.pins} loading={this.state.loading} />
    }
}

export default AllPins
