
import {url} from "../constans";
import {axiosService} from "./axiosService";



const episodesService ={
    getAll:(page)=>axiosService.get(url.episodes, {params:{page}})
}
export {
    episodesService
}