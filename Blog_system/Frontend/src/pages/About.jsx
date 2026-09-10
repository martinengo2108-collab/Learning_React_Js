import { Link } from "react-router-dom";
function About() {
    return (
        <main
            className="about-page">
            <section className="about-hero">
                <span
                    className="section-label">
                    ABOUT StudentSphere
                </span>
                <h1>
                    Every students has a story worth sharing.
                </h1>
                <p>
                    StudentSphere is a community-driven blogging platfrom where young people can share their experiences,lessons,challenges and discoveries.

                </p>
            </section>
            <section
                className="about-grid">
                <div className="about-card">
                    <span>01</span>
                    <h2>Share</h2>
                    <p>
                        Tell your story and share the experiences that shaped your student journey.

                    </p>
                </div>
                <div className="about-card">
                    <span>02</span>

                    <h2>Discover</h2>
                    <p>
                        Learn from ther students and discover perspectives different from yours .
                    </p>
                </div>
                <div className="about-card">
                    <span>03</span>
                    <h2>Inspire</h2>

                    <p>
                        Your experience could help anotheer student make a better decision or feel less alone.
                    </p>
                </div>

            </section>
            
        </main>
    )
}