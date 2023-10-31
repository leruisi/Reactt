import React from 'react';

const PostDetail = ({post}) => {
   const {id,title} = post
    return (
        <div>
            {id}
            {title}
        </div>
    );
};

export {PostDetail};