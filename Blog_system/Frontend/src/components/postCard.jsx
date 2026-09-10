import { Link } from "react-router-dom";


function postCard({ post, onDelete }) {
    const category = post.category || "Studennt Life";
    return(
        <article className="post-card">

            <div className="post-card-top">
                <span className="post-category">
                    {category}
                </span>
            </div>

        </article>
    )
}