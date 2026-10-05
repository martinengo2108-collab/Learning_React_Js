import { Link } from "react-router-dom";


function postCard({ post, onDelete }) {
    const category = post.category || "Student Life";

    const isAdmin = sessionStorage.getItem("adminToken");

    return (
        <article className="post-card">

            <div className="post-card-top">
                <span className="post-category">
                    {category}
                </span>
                <span
                    className="post-number">
                    No {post.id}
                </span>
            </div>
            <h3>{post.title}</h3>
            <p>
                {post.body.length > 130
                    ? `${post.body.substring(0, 130)}...` : post.body}
            </p>
            <div className="post-card-footer">
                <span className="author">
                    By {post.author || "Student"}
                </span>
                <div className="post-actions">
                    <Link to={`/posts/${post.id}`}
                        className="read-more">
                        Read →
                    </Link>
                    <Link
                        to={`/edit/${post.id}`} className="edit-link">
                        Edit
                    </Link>
                    {onDelete && sessionStorage.getItem("adminToken") && (
                        <button
                            className="delete-button"

                            onClick={() => onDelete(post.id)}
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>

        </article>
    );
}

export default postCard;