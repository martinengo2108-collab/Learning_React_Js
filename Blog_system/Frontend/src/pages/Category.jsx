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
    posts.filter(
        (post)=>(post.category||"Student life")===category
    );
    return(
    <main className="page-container" >
        <div className="page-header"><span
        className="section-label">
            EXPLORE
            </span>
            <h1>Browse by category</h1>
            <p>
                Find stories from students with experiences similar to yours.
            </p>
            </div>
            <CategoryBar
            selectedCategory={category}
            onCategoryChange={setCategory}
            />
            {loading?(
                <Loading/>
            ):(
                <PostList posts={filteredPosts}/>
            )}
    </main>
    );
}

export default Category;