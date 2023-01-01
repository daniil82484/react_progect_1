import React, {useState} from 'react';

const Input = () => {

    const [name, setName] = useState("Hello, world!")

    return (
        <div className={'d-flex flex-column gap-5'}>
            <h1 className={'text-start'}>{name}</h1>
            <input
                type='text'
                value={name}
                onChange={event => setName(event.target.value)}
            />
        </div>
    );
};

export default Input;