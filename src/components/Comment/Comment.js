import React from 'react';

const Comment = ({comment}) => {
    const {id, name,email, body}= comment
    return (
        <div>
            <br/>
            <div> ID: {id}</div>
            <br/>
            <div> Name:{name}</div>
            <br/>
            <div> Email: {email}</div>
            <br/>
            <div> Body: {body}</div>
            <hr/>
        </div>
    );
};

export {Comment};