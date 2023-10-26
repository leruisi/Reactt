import {axiosService} from "./axiosService";
import {urls} from "../constants/url";

const postsService = {
    getById:(id)=>axiosService.get(urls.posts.byId(id))
}
export {
    postsService
}