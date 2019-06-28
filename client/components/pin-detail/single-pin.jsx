/* eslint-disable react/no-did-mount-set-state */
const React = require('react')
const axios = require('axios')

import PinCard from './pin-card'

class PinDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            pin: null,
        }
    }
    async componentDidMount() {
        const pinId = this.props.match.params.id
        try {
            this.setState({ loading: true })
            const { data: pin } = await axios.get(`/api/pins/${pinId}`)
            this.setState({ pin })
        } catch (err) {
            console.error(err)
        } finally {
            this.setState({ loading: false })
        }
    }
    render() {
        return (
            <>
                {this.state.loading ? <p>Loading</p> : null}
                {this.state.pin ? <PinCard pin={this.state.pin} /> : null}
            </>
        )
    }
}

export default PinDetail
