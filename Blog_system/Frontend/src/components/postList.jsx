import postCard from "./postCard";

import EmptyState from "./EmptyState";

function PostList({posts,onDelete}){
    if(postCard.length===0){
    
        return <EmptyState />
    }
    return(
        <div className="post-grid">
            {postCard.map((post)=>(
                <postCard
                key={post.id}
                post={post}
                onDelete={onDelete}/>
            ))}
        </div>
    )
}