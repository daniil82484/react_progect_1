import React, {useEffect, useState} from 'react';
import PostItem from "../postItem/PostItem";


const PostList = (list) => {

    const [posts, srtPosts] = useState([]);

    useEffect(() => {
        fetch("/api/accounts").then(
            response => response.json())
            .then(
                data => {
                    srtPosts(data)
                })
    }, [])

    return (
        <div className={"d-flex flex-column gap-5"}>
            {(typeof posts.accounts === 'undefined') ? (
                <p>...</p>
            ): (
                posts.accounts.map(post =>
                    <PostItem post={post} key={post.id}/>
                )
            )}
            <button className={'btn btn-primary'}>GO</button>
        </div>
    );
};

export default PostList;