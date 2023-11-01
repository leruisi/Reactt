import React, {useEffect, useState} from 'react';

import {UserDetails} from "../components/UsersContainer/UserDetails";
import {Outlet, useParams} from "react-router-dom";
import {userService} from "../services/usersService";

const UserDetailsPage = () => {
    // Тут нам надо разложить юзера сполной инфой на этой странице и поэтому будет тут отобраажаться эта компонета <UserDetails/>


    const {userId}=useParams() // - по цьому айди будемо робити запит на конкретного юзера
    const [user, setUser] = useState(null)

    useEffect(()=>{
        userService.getById(userId).then(({data})=>setUser(data))
    },[userId])



    return (
        <div>
            { user&& <UserDetails user={user}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};