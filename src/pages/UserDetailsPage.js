import React from 'react';

import {UserDetails} from "../components/Details/UserDetails";
import {useRouteLoaderData} from "react-router-dom";



const UserDetailsPage = () => {
    const {user} = useRouteLoaderData();




    return (
        <div>
            Details
            <UserDetails  user={user} />
        </div>
    );

};

export {UserDetailsPage};