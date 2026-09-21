import express from "express";

import {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
} from "../controllers/postController.js";

const router = express.Router();