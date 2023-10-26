import React from 'react';

const Album = ({album}) => {

    const {id,userId,title}=album
    return (
        <div>
            <div>ID: {id}</div>
            <div>userId: {userId}</div>
            <div>Title :{title}</div>
            <br/>
        </div>
    );
};

export {Album};