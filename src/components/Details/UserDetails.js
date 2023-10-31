import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetails = ({user}) => {
    const {id,name, email,phone,address, company}=user

    const navigate = useNavigate()
    return (
        <div>
            <div>{id}-</div>
            <div>{name}</div>
            <div>Email: {email},</div>
            <div> Phone :{phone},-</div>
            <div>Address :{address.city}</div>
            <div>Company name: {company.name}</div>
            <br/>

            <button onClick={()=>navigate(`/user-details/:id/post/:postId`)}>post of current user</button>


        </div>
    );
};

export {UserDetails};
