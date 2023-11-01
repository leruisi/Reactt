import {axiosService} from "./axiosService";
import {urls} from "../constant/urls";
import axios from "axios";



const userService = {
    getAll: () => axiosService.get(urls.users.base),
    getById:(id)=>axiosService.get(urls.users.byId(id))
}

export {
    userService
}