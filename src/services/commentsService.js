import {axiosService} from "./axiosService";
import {urls} from "../constant/urls";

const commentsService={
    // віводим комменти по айди поста уже!!!!!

    getByPostId:(postId)=>axiosService.get(urls.comments, {params: {postId:postId}})

//  {postId:postId}}) для ссилки со знаком вопроса
}

export {
    commentsService
}