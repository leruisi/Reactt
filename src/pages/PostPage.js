import React from 'react';
import {Posts} from "../components/Post/Posts";

const PostPage = () => {
    //будем рендериь (обновлять) компоненту пост
    return (
        <div>
            Post
            <Posts/>
        </div>
    );
};

export {PostPage};