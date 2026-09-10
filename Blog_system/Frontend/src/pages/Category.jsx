import { useEffect, useefffect, useState } from "react";

import CategoryBar from "../components/CategoryBar";
import PostList from "../components/postList";
import Loading from"../components/Loading";
import{getPosts}from"../services/postservice";

function Category(){
    const[posts,setPosts]=useState([]);
    const[category,setCategory]=useState("All");

    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        async function loadPosts(){
            try{
                const dat=await getPosts();

                setPosts(data);
            }finally{
                setLoading(false)
            }
        }
        loadPosts();
    },[]);
    const filteredPosts=
    category==="All"?
    posts:
    posts.filter()
}