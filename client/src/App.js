import React, {useState} from "react";
import './App.css';
import Dialog from "./component/dialog/Dialog";
import Counter from "./component/counter/Counter";
import PostList from "./component/postList/postList";


const App = (props) => {

    return (
        <div className={"App"}>
            <PostList />
        </div>
    );
};

export default App;
