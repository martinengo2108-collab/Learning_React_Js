import { link } from "react-router-dom";

function Hero() {
    return (
        <section
            className="hero">
            <div className="hero-content">
                <span
                    className="hero-label">
                    ✨ An environment for student voices

                </span>
                <h1>Learn from <br />experience <br />
                    ,change your <span>
                        perspective</span></h1>

                <p>Discover real experiences from students,share what you've learned,
                    and inspire someone on their journey.
                </p>

                <div className="hero-actions">
                    <Link to="/create" className="hero-primary">
                        Share your story </Link>
                    <a href="#discover"
                        className="hero-secondary">
                        Explore stories
                    </a>
                </div>
            </div>
            <div className="hero-decoration">
                <div className="floating-card card-one">
                    💡
                    <span>Share Ideas</span>

                </div>

                <div className="floating-card card-two">
                    
                </div>
            </div>
        </section>
    )
}