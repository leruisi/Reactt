import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id,name}=user
    // навигация на другую страницу для детальной инфі (ми окажемся на странице UserDetailsPage поєтому идем писать код на єту страницу)
    const navigate = useNavigate()

    return (
        <div>
                <div>ID :{id}</div>
                <div>NAME: {name}</div>
            <button onClick={()=>navigate(`${id}`, {state:{user:user}})}>user Details</button>
        </div>
    );
};

export {User};