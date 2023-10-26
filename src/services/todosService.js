import {axiosService} from "./axiosService";
import {urls} from "../constants/url";

const todosService = {
    getAll:()=>axiosService.get(urls.todos)
}
export {
    todosService
}