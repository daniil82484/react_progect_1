import React, {useEffect, useState} from 'react';
import PostItem from "../postItem/PostItem";


const PostList = (list) => {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    const [posts, srtPosts] = useState([
        {id:1, name:'title-1', password:'body-1'},
        {id:2, name:'title-2', password:'body-2'},
        {id:3, name:'title-3', password:'body-3'}
    ]);


    return (
        <div className={"d-flex flex-column gap-5"}>
            {posts.map(post =>
                <div>
                    <PostItem post={post} key={post.id}/>

                </div>
                )}
            {(typeof  backendData.users === 'undefined') ? (
                <p>...</p>
            ): (
                backendData.users.map((user, i) =>(
                    <p key={i}>{user}</p>
                ))
            )}
            <button className={'btn btn-primary'}>GO</button>
        </div>
    );
};

export default PostList;