import React from 'react';
import {useLocation} from "react-router-dom";
import {Post} from "../components/Posts/Post";
import style from "./Post.module.css"


const PostPage = () => {
    const {state: postId}= useLocation()
    return (

        <div className={style.Post}>
            Post:
            <Post postId={postId}/>
        </div>
    );
};

export  {PostPage};