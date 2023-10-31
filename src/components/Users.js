import React, { useEffect, useState } from 'react';
import { userService } from "../services/usersService";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        userService.getAll().then(({ data }) => setUsers(data));
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <p>ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <button onClick={() => navigate(`/user-details/${user.id}`)}>Get Posts</button>
                </div>
            ))}
        </div>
    );
};

export { Users };
