import postCard from "./postCard";

import EmptyState from "./EmptyState";

function PostList({posts,onDelete}){
    if(postCard.length===0){
        
        return <EmptyState />
    }
}