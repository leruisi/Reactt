import React, {useEffect, useState} from 'react';
import {CommentsForm} from "./CommentsForm/CommentsForm";
import {Comments} from "./Comments/Comments";
import {commentsService} from "../services/CommentsService";

const CommentsContainer = () => {
    const [comments, setComments] = useState([]) //зберігає наші комменти

    useEffect(()=>{  //робиться запит на наші комменти
            commentsService.getAll().then(({data})=>setComments(data))
    },[])




    return (
        <div>
                <CommentsForm/>
                            <hr/>
                <Comments comments={comments}/>

        </div>
    );
};

export {CommentsContainer};