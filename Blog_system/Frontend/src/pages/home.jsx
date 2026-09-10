import { useState } from "react";
import Loading from"../components/Loading";

import{
    getPosts,
    deletePost,
}from "../services/postservice";

function Home(){
    const[posts,setPosts]=useState([]);

    const[searchTerm,setSearchTerm]=useState("");
}