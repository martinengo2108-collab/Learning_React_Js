import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getPost } from "../services/postservice";
import Loading from "../components/Loading";

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadPost() {
            try {
                const data = await getPost(id);

                setPost(data);
            } catch {
                setError("This story could not be found.")
            } finally {
                setLoading(false);
            }
        }
        loadPost();
    }, [id]);
    if (loading) {
        return <Loading />;

    }
    if (error) {
        return (
            <div className="error-page">
                <h2>{error}</h2>
                <Link
                    to="/">← Back home</Link>
            </div>
        );
    }
    return (
        <main
            className="details-page">

            <Link
                to="/" className="back-link">
                ← Back to stories
            </Link>
            <article
                className="full-post">
                <span
                    className="post-category">
                    <h1>{post.category || "Student life"}</h1>
                </span>
                <h1>{post.title}</h1>
                

            </article>
        </main>
    )

}