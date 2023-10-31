import {axiosService} from "./axiosService";

import {urls} from "../constant/urls";

const userDetailsService = {
    getById: (user) => axiosService.get(urls.userDetails.byId(user))
}

export {
  userDetailsService
}