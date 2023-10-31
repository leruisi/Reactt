import React from 'react';



const Title = ({post}) => {
   const {title}=post

    return (
        <div>

            {title}

        </div>
    );
};

export {Title};