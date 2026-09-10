const API_URL = "https://jsonplaceholder.typicode.com/posts"

export async function getPosts() {
    const response = await fetch(API_URL);

    if(!response.ok){
        throw new Error("Failed to fetch posts");
    }

    return response.json();

}
export async function getPost(id){
    const response=await fetch(`${API_URL}/${id}`);
    
    if(!response.ok){
        throw new Error("Failed to fetch posts");

    }
    return response.json();

}

