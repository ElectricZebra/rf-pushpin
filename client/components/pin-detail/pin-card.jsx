const React = require('react')

const PinCard = ({ pin }) => (
    <section className="hero is-light is-fullheight-with-navbar">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="columns is-centered">
                    <div className="box pin-detail">
                        <article className="media">
                            <div className="media-left">
                                <img src={pin.imageUrl} />
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <h1 className="title">Pin</h1>
                                    <p>{pin.description}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default PinCard
