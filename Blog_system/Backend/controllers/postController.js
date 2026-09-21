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
        console.error(error);

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

        console.error(error);

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

        const newPost = createPost({
            title,
            body,
            category,
            author,
        });

        res.status(201).json(newPost);
    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to create post",
        })
    }
}

export function updatePost(req, res) {
    try {
        const {
            title,
            body,
            category,
            author,
        } = req.body;
        if (!title || !body || !category || !author) {
            return res.status(400).json({
                message: "Tite,body,category,and author are required"
            });

        }

        const updatePost = updatePostById(req.params.id,
            {
                title,
                body,
                category,
                author,
            });

        if (!updatePost) {
            return res.status(404).json({
                message: "Post not found"
            });
            
        }
        res.json(updatePost);
    } catch (error) {
        res.status(500).json({
            message: "Failed to update post"
        });
    }
}