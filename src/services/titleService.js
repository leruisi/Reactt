import {axiosService} from "./axiosService";

import {urls} from "../constant/urls";

const titleService = {
    getByPostId: (postId) => axiosService.get(urls.post.byPostId(postId))
}

export {
   titleService
}