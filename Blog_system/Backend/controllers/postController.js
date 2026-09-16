import {
    getAllPosts,
    getPostById,
    createPost,
    updatePostById,
    deletePostByid,
} from "../services/postServices.js";
export function getPosts(req, res) {
    try {
        const posts = getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({

            message: "Failed to fetch posts",
        });
    }
}

export function getPost(req, res) {
    try {
        const post = getPostById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found",
            });
        }

        res.json(post);
    } catch (error) {

    }
}