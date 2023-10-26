import {axiosService} from "./axiosService";
import {urls} from "../constants/url";

const albumsService = {
    getAll:()=>axiosService.get(urls.albums)
}
export {
    albumsService
}