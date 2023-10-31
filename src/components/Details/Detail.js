import React from 'react';

const Detail = ({detail}) => {
    const{id,name,username}=detail
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <button>C</button>
        </div>
    );
};

export {Detail};