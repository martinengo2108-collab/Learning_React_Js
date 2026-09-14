import PostCard from "./postCard";

import EmptyState from "./EmptyState";

function PostList({posts,onDelete}){
    if(posts.length===0){
    
        return <EmptyState />
    }
    return(
        <div className="post-grid">
            {posts.map((post)=>(
                <PostCard
                key={post.id}
                post={post}
                onDelete={onDelete}/>
            ))}
        </div>
    )
}
export default PostList;