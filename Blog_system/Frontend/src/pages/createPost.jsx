import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PostForm from "../components/postForm";
import { createPost } from "../services/postservice";

function CreatePost() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleCreate=async (post)=>{
        try{
            setLoading(true);

            const newPost=await createPost(post);

            navigate(`/posts/${newPost.id}`);
        }catch{
            alert("Unable to publish your story.");
        }finally{
            setLoading(false)
        }
    };

    return(
        <main
        className="form-page">
            <div className="form-header">
                <span className="section-label">
                    SHARE YOUR EXPERIENCE
                    
                </span>
                <h1>
                    Tell your story
                </h1>

                <p>
                    Your experiences could inspire another student.
                </p>
            </div>
            <PostForm
            onSubmit={handleCreate}
            submitText={
                loading?"Publishing...":"Publish story"
            }

            />
        </main>
    );
}

export default CreatePost;