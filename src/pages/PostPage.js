import React from 'react';
import {useLocation} from "react-router-dom";
import {Post} from "../components/Posts/Post";


const PostPage = () => {
    const {state:commentId}= useLocation()
    return (
        <div>
            <Post commentId={commentId}/>
        </div>
    );
};

export  {PostPage};