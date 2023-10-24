
import {urls} from "../urls/urls";
import {axiosService} from "./axiosService";

const commentsService ={
    getAll: () => axiosService.get(urls.comments),
    create:(comment)=>axiosService.post(urls.comments, comment)
}

export {
    commentsService
}