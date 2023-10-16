import React from 'react';

const Simpson = ({name,age,photo}) => {
    return (
        <div>
            Name: {name} -
            Age: {age}
            <br/>
            <img src={photo} alt={name}/>

        </div>
    );
};

export {Simpson};