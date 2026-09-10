import{
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
} from "../services/postServices.js";
export async function getAllPosts(req,res){
    try{
        const posts=await getPosts();
    }
}