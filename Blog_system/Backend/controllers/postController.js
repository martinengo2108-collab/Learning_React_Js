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
        res.status(500).json({
            message: "Failed to fetch post",
        })

    }
}

export function addPost(req, res) {
    try {
        const { title, body, category, author } = req.body;

        if (!title || !body || !category || !author) {
            return res.status(400).json({
                message: "Title,body,category,and author are required",
            })
        }
    }
}