import {axiosService} from "./axiosService";
import {urls} from "../constants/url";

const commentsService = {
    getAll:()=>axiosService.get(urls.comments)
}
export {
    commentsService
}