import React from 'react';

import {Outlet, useLoaderData} from "react-router-dom";
import {Post} from "../components/Post/Post";


const PostPage = () => {

        const {data} = useLoaderData();
    return (
        <div>
            <Post post={data}/>
            <Outlet/>
        </div>
    );
};

export {PostPage};