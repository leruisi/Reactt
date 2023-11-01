import {useNavigate} from "react-router-dom";


const UserDetails = ({user}) => {
const {id,name,username,email,phone,address} = user
//    навигация будет на PostPage
const navigate =  useNavigate()



    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{address.city}</div>
            <button onClick={()=>navigate(`posts`)}>Post User</button>
        </div>
    );
};

export {UserDetails};