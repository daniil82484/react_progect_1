import React, {useState} from 'react';

const Counter = () => {

    const [likes, setLikes] = useState(0)
    function increment() {
        setLikes(likes + 1)
    }
    function decrement() {
        setLikes(likes - 1)
    }

    return (
        <div>
            <h1>{likes}</h1>
            <div className={'d-flex gap-5'}>
                <button className={'btn flex-fill btn-danger'} onClick={decrement}>-</button>
                <button className={'btn flex-fill btn-primary'} onClick={increment}>+</button>
            </div>
        </div>
    );
};

export default Counter;