import React from 'react';

const User = ({user}) => {
    const {id,name,username,email}= user
    return (
        <div>
            ID : {id}
            <br/>
            Name:{name}
            <br/>
            UserName:{username}
            <br/>
            Email:{email}
            <hr/>
        </div>
    );
};

export {User};