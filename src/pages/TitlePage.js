import React from 'react';
import {useLoaderData} from "react-router-dom";
import {Title} from "../components/Title";


const TitlePage = () => {



    const{data}=useLoaderData()
    return (
        <div>
<Title post={data}/>
        </div>
    );
};

export default TitlePage;