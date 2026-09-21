const API_URL = "https://jsonplaceholder.typicode.com/posts"

export async function getPosts() {
    const response = await fetch(API_URL);

    if (!response.ok) {

        throw new Error("Failed to fetch posts");
    }

    return response.json();
}

export async function createPost(postData) {
    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postData)
    });
    if (!response.ok) {
        throw new Error("Failed to create post");
    }
    return response.json();
}

export async function updatePost(id, postData) {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    });

    if (!response.ok) {
        throw new Error("Failed to delete post");
    }
    return response.json();

}

export async function deletePost(id) {

    const response = await fetch(`${API_URL}/{id}`, {
        method: "DELETE",
    });
}