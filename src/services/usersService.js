import {axiosService} from "./axiosService";
import {urls} from "../constant/urls";



const userService = {
    getAll: () => axiosService.get(urls.users)
}

export {
    userService
}