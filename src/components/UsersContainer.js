import React, {useEffect, useState} from 'react';
import {UsersForm} from "./UsersForm/UsersForm";
import {Users} from "./Users/Users";
import {userService} from "./services/UserService";


const UsersContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))

    },[])





    return (
        <div>
            <UsersForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>

        </div>
    );
};

export {UsersContainer};