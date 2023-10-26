import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/postsService";
import {PostInfo} from "./PostInfo";

const Post = ({postId}) => {
    const [post, setPost] = useState(null);



    useEffect(() => {
        postsService.getById(postId)
            .then(({ data }) => {
                if (data) {
                    setPost(data);
                } else {
                    console.error('Дані поста не отримано або є пустими.');
                }
            })
            .catch(error => {
                console.error('Помилка завантаження поста:', error);
            });
    }, [postId]);

//
//     useEffect(() => {
//         postsService.getById(postId).then(({data}) => setPost(data))
//     }, [postId])
//
//
//     if (post) {
//
    return (
         <div>
             {post && <PostInfo post={post} />}
         </div>
    );
};





export {Post};