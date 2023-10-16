import React from 'react';
import "./Simp.css"

const Simps = ({user}) => {
    const {name, age,img}= user
    return (
        <div className="family">
            <div className="block"> {/* Первый блок */}
                Name: {name} -
                Age:  {age}
            </div>
            <div className="block"> {/* Второй блок */}
                {img && <img src={img} alt={name} />}
            </div>
        </div>
    );
};

export {Simps};