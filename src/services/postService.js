import {axiosService} from "./axiosService";

import {urls} from "../constant/urls";

const postService = {
    getByUserId: (userId) => axiosService.get(urls.posts.byUserId(userId)),

}

export {
    postService
}