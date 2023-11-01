import {axiosService} from "./axiosService";

import {urls} from "../constant/urls";


const postService = {
  //   віводим пості по айди юзера типо не все а толькоте у кого айди
  getByUserId:(userId)=>axiosService.get(urls.posts.base,{params:{userId:userId}}),
//     а єто віводим один пост уже
    getById:(id)=>axiosService.get(urls.posts.byId(id))

}

export {
    postService
}