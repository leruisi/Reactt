import React from 'react';
import {Outlet} from "react-router-dom";

const PostPage = () => {
    return (
        <div>

            <Outlet/>
        </div>
    );
};

export {PostPage};