
import {useForm} from "react-hook-form";
import {commentsService} from "../../services/CommentsService";
// import {joiResolver} from "@hookform/resolvers/joi";
// import {commentsValidator} from "../../validators/validators";

const CommentsForm = ({setComments}) => {
    const {reset,handleSubmit,register}=useForm()


    // const CommentsForm = ({setComments}) => {
    // const {reset,handleSubmit,register,formState:{isValid}}=useForm({
    //     mode:'all',
    //     resolver: joiResolver(commentsValidator)
    // })

    const save = async (comment)=>{
     const {data}=  await commentsService.create(comment);
     setComments(prev=>[...prev,data]);
     reset()

    }





    return (
        <form onSubmit={handleSubmit(save)}>

            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'email'} {...register('email')}/>
            <input type='text' placeholder={'body'} {...register('body')}/>
            {/*<button disabled={!isValid}>save</button>*/}
            <button>save</button>

        </form>
    );
};

export {CommentsForm};