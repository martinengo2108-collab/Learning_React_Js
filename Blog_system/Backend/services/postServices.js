import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "../data/posts.json");


function readPosts() {
    const data = fs.readFileSync(DATA_FILE, "utf-8");

    return JSON.parse(data);
}


function savePosts(posts) {
    fs.writeFileSync(
        DATA_FILE,
        JSON.stringify(posts, null, 2)
    );
}


export function getAllPosts() {
    return readPosts();
}


export function getPostById(id) {
    const posts = readPosts();

    return posts.find(post => post.id === Number(id));
}


export function createPost(postData) {
    const posts = readPosts();

    const newPost = {
        id: posts.length > 0
            ? posts[posts.length - 1].id + 1
            : 1,

        title: postData.title,
        body: postData.body,
        category: postData.category,
        author: postData.author,
    };

    posts.push(newPost);

    savePosts(posts);

    return newPost;
}


export function updatePostById(id, postData) {
    const posts = readPosts();

    const index = posts.findIndex(
        post => post.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    posts[index] = {
        ...posts[index],
        title: postData.title,
        body: postData.body,
        category: postData.category,
        author: postData.author,
    };

    savePosts(posts);

    return posts[index];
}


export function deletePostByid(id) {
    const posts = readPosts();

    const index = posts.findIndex(
        post => post.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    const deletedPost = posts[index];

    posts.splice(index, 1);

    savePosts(posts);

    return deletedPost;
}