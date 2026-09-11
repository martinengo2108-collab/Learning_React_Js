import { useEffect, useState } from "react";

import { data, useNavigate, useParams } from "react-router-dom";

import PostForm from "../components/postForm";
import { createPost } from "../services/postservice";
import {
    getPost,
    updatePost,
} from "../services/postservice";


function EditPost() {
    const { id } = useParams();

    const navigate=useNavigate();

    const[post,setPost]=useState(null);

    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        async function loadPost() {

            try{
                const data=await getPost(id);

                setPost(data);
            }catch{
                alert("Unable to load this story")
            }finally{
                setLoading(false);
            }
            
        }

        loadPost()
    },[id]);

    const handleUpdate=async (updatedPost)=>{
        try{
            const data=await updatePost(id,updatedPost);

            navigate(`/posts/${data.id}`);
        }catch{
            alert("Unable to updatee this story.");
        }
    };
    if(loading){
        return<Loading />
    }
    if(!post){
        return 
        <p>Story not found.</p>
    }

    return(

        <main
        className="form-page">
            <div className="form-header">
                <span
                className="section-label">
                    EDIT STORY
                </span>
                <h1>
                    Update your story
                </h1>

                <p>
                    Make changes to your experiences before publishing it again
                </p>
            </div>
            <PostForm
            
            />
        </main>
    );

}

export default EditPost;