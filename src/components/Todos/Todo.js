import React from 'react';

const Todo = ({todo}) => {
    const {id,title,completed}=todo
    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Completed : {completed}</div>
            <br/>

        </div>
    );
};

export {Todo};