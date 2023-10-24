import React from 'react';
import {useForm} from "react-hook-form";

const CommentsForm = () => {
    const {reset,handleSubmit,register}=useForm()



    return (
        <form onSubmit={handleSubmit(save)}>

        </form>
    );
};

export {CommentsForm};