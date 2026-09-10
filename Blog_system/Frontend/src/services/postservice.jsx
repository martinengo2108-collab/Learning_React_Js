const API_URL = "https://jsonplaceholder.typicode.com/posts"

export async function getPosts() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    return response.json();

}
export async function getPost(id) {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch posts");

    }
    return response.json();

}

export async function createPost(post) {
    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    });

    if (!response.ok) {
        throw new Error("Failed to create post");
    }
    return response.json();
}

export async function updatePost(id, post) {

    const response = await fetch(`${API_URL}/${id}`,{
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(post),

    });

    if(!response.ok){
        throw new Error("failed to update post");
    }
    return response.json();
}