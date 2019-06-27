import React from 'react'
import MasonryLayout from 'react-masonry-layout'

const Brick = ({ idx }) => (
    <div
        key={idx}
        style={{
            width: '230px',
            height: (300 + (Math.floor(Math.random() * 200) - 100)) + 'px',
            lineHeight: `300px`,
            color: 'gray',
            fontSize: '32px',
            display: 'block',
            background: 'rgba(0,0,0,0.7)',
        }}
    >
        {idx}
    </div>
)

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: Array.from({ length: 25 }, () => ({})),
        }
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
                        >
                            {this.state.items.map((item, i) => (
                                <Brick key={i} idx={i} />
                            ))}
                        </MasonryLayout>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery
