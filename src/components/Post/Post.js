import React from 'react';
import {useLoaderData} from "react-router-dom";
import {PostDetail} from "./PostDetail";

const Post = () => {

    const {data}=useLoaderData()
    return (
        <div>
            {data.map(post=><PostDetail key={post.id} post={post}/>)}



        </div>
    );
};
export {Post};