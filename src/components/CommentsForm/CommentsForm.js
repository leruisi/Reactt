
import {useForm} from "react-hook-form";
import {commentsService} from "../../services/CommentsService";

const CommentsForm = ({setComments}) => {
    const {reset,handleSubmit,register,formState:{isSubmitSuccessful}}=useForm()

    const save = async (comment)=>{
     const {data}=  await commentsService.create(comment);
     setComments(prev=>[...prev,data]);

    }

    if (isSubmitSuccessful){
        reset()
    }



    return (
        <form onSubmit={handleSubmit(save)}>

            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'email'} {...register('email')}/>
            <input type='text' placeholder={'body'} {...register('body')}/>
            <button >save</button>

        </form>
    );
};

export {CommentsForm};