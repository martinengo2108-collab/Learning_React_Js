import { Link } from "react-router-dom";

function FeaturedPost({ post }) {
    if (!post) return null;
    return(
        <section
        className="featured-post">
            <div className="featured-content">
                <span
                className="featured-label">
                    FEATURED STORY 
                </span>
                
            </div>
        </section>
    )
}