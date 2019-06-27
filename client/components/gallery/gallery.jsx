import React from 'react'
import MasonryLayout from 'react-masonry-layout'

const Brick = ({ data }) => {
    const { id, height } = data
    return (
        <div className="brick" style={{ height }}>
            <img
                src={`https://picsum.photos/230/${height}?random=${id}`}
                style={{ borderRadius: '10px' }}
            />
        </div>
    )
}

const randomItems = () => Array.from({ length: 25 }, () => ({
    id: Math.floor(Math.random() * 100000),
    height: 300 + (Math.floor(Math.random() * 200) - 100)
}))

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: randomItems(),
            loading: false
        }
    }

    loadItems = () => {
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState(oldState => ({
                items: [
                    ...oldState.items,
                    ...randomItems(),
                ],
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
                            infiniteScrollSpinner={<p>Loading...</p>}
                        >
                            {this.state.items.map((item) => (
                                <Brick key={item.id} data={item} />
                            ))}
                        </MasonryLayout>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery
