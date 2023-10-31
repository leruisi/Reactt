import {axiosService} from "./axiosService";

import {urls} from "../constant/urls";

const userDetailsService = {
    getById: (id) => axiosService.get(urls.userDetails.byId(id))
}

export {
  userDetailsService
}