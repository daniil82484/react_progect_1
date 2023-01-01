import React, {useState} from 'react';

const PostItem = (props) => {

    const [likes, setLikes] = useState(
        <div>
            <strong>{props.post.id} {props.post.name}</strong>
            <div>
                {props.post.password}
            </div>

        </div>
    )

    return (
        likes
    );
};

export default PostItem;