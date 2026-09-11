import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getPost } from "../services/postservice";
import Loading from "../components/Loading";

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
        async function loadPost(){
            try{
                const data=await getPost(id);

                setPost(data);
            }catch{
                setError("This story could not be found.")
            }finally{
                setLoading(false);
            }
        }
        loadPost();
    },[id]);

}