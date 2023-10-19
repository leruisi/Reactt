

import {urls} from "../baseUrl/baseUrl";
import {axiosService} from "./axiosService";

const launchesService = {
    getAll: () => axiosService.get(urls.launches.base),

}

export {
  launchesService
}