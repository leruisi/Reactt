
import {url} from "../constans";
import {axiosService} from "./axiosService";

const charatersService = {
    getByIds:(ids)=>axiosService.get(url.characters.byIds(ids))
}
 export {
    charatersService
}