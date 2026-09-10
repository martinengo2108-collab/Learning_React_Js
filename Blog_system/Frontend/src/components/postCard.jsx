import { Link } from "react-router-dom";


function postCard({ post, onDelete }) {
    const category = post.category || "Studennt Life";
    return (
        <article className="post-card">

            <div className="post-card-top">
                <span className="post-category">
                    {category}
                </span>
                <span
                    className="post-number">
                    #{post.id}
                </span>
            </div>
            <h3>{post.title}</h3>
            <p>
                {post.body.length > 130
                    ? `${post.body.substring(0, 130)}...` : post.body}
            </p>
            <div className="post-card-footer">
                <span className="author">
                    By Student
                </span>
            </div>

        </article>
    )
}