import React from 'react';
import {useLoaderData} from "react-router-dom";

const Posts = () => {
    const {data}=useLoaderData()
    return (
        <div>
            {data.map(post=>
                <div  key ={post.id}>
                    Title: {post.title}
                    <button></button>
                </div>)}
        </div>
    );
};
export {Posts};