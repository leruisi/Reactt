import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/postsService";
import {PostInfo} from "./PostInfo";

const Post = ({commentId}) => {
    const [post, setPost] = useState(null);



    useEffect(() => {
        postsService.getById(commentId).then(({data}) => setPost(data))
    }, [commentId])

    return (
        <div>
            <PostInfo post={post}/>
        </div>
    );
};





export {Post};