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
                <h2>{post.title}</h2>

                <p>{post.body}</p>
                <Link to={`/posts/${post.id}`} className="featured-button">
                Read the full story →
                </Link>
            </div>
            <div className="featured-visual">
                <div className="featured-symbol">✦</div>
            </div>
        </section>
    );
}

export default FeaturedPost;