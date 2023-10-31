import React, { useEffect, useState } from 'react';
import { userDetailsService } from "../../services/userDetailsService";
import {Detail} from "./Detail";


const UserDetails = ({user}) => {
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        userDetailsService.getById(user.id).then(({ data }) => setUserDetails(data));
    }, [user.id]);

    return (
        <div>
            {userDetails && (
                <Detail detail={userDetails} />
            )}
        </div>
    );
};

export {UserDetails};