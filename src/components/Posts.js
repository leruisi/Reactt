import React from 'react';
import {useLoaderData, useNavigate, useParams} from "react-router-dom";


const Posts = () => {
    const {data}=useLoaderData()
    const { id } = useParams();

    const navigate = useNavigate();
    return (
        <div><br/>
            {data.map(post=>
                <div  key ={post.id}>
                    Title: {post.title}
                    <div>
                        <button onClick={() => navigate(`/user-details/${id}/posts/post/${post.id}`)}>post details</button>
                    </div>
                    <br/>
                </div>)}
        </div>
    );
};

export {Posts };