import React from 'react';

const UserDetails = ({user}) => {
    const {id,name,userId}=user
    return (
        <div>
            {id}
            {name}
            {userId}
        </div>
    );
};

export {UserDetails};
