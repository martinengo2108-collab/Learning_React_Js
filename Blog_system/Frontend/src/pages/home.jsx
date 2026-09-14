import { useMemo, useState, useEffect } from "react";
import Loading from "../components/Loading";

import PostList from "../components/postList";
import CategoryBar from "../components/CategoryBar";
import SearchBar from "../components/searchBar";
import FeaturedPost from "../components/FeaturedPost";

import Hero from "../components/Hero";
import {
    getPosts,
    deletePost,
} from "../services/postservice";

function Home() {
    const [posts, setPosts] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadPosts() {
            try {
                setLoading(true);

                const data = await getPosts();
                setPosts(data);
            } catch (err) {
                setError("Unable to load stories.");

            } finally {
                setLoading(false);

            }
        }
        loadPosts();
    }, []);

    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {

            const matchesSearch =
                post.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||

                post.body
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            const category =
                post.category || "Student Life";
            const matchesCategory =
                selectedCategory === "All" ||
                category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [posts, searchTerm, selectedCategory]);

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this history"
        );
        if (!confirmed) return;

        try {
            await deletePost(id);

            setPosts((currentPosts) =>
                currentPosts.filter((post) =>
                    post.id !== id)
            )
        } catch {
            alert("Unable to delete this post.");
        }
    };
    return (
        <>

            <Hero />
            <main id="discover"
                className="home-main">
                < FeaturedPost post={posts[0]} />
                <section
                    className="discover-section">
                    <div className="section-heading">
                        <div>
                            <span
                                className="section-label">
                                COMMUNITY STORIES
                            </span>
                            <h2> Discover student expriences</h2>
                        </div>
                        <SearchBar
                            searchTerm={searchTerm}
                            onSearch={setSearchTerm} />
                    </div>
                    <CategoryBar
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory} />
                    {loading && <Loading />}
                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}
                    {!loading && !error && (
                        <PostList
                            posts={filteredPosts}
                            onDelete={handleDelete} />
                    )}
                </section>

            </main>
        </>
    )
}

export default Home;