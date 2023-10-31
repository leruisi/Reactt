import React from 'react';

import {UserDetails} from "../components/Details/UserDetails";
import {Outlet, useLoaderData} from "react-router-dom";

import TitlePage from "./TitlePage";



const UserDetailsPage = () => {
    const {data} = useLoaderData();





    return (
        <div>
            Details
            <UserDetails  user={data} />
            <Outlet/>
            <TitlePage/>

        </div>
    );

};

export {UserDetailsPage};