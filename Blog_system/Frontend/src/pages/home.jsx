import { useState } from "react";
import Loading from "../components/Loading";

import {
    getPosts,
    deletePost,
} from "../services/postservice";

function Home() {
    const [posts, setPosts] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
        async function loadPosts(){
            try{
                setLoading(true);

                const data=await getPosts();
                setPosts(data);
            }catch(err){
                setError("Unable to load stories.");

            }finally{
                setLoading(false);
                
            }
        }
        loadPosts();
    })
}