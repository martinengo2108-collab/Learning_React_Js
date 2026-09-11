import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

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
    
}