import axios from "axios";

import {baseURL} from "../baseURL/baseURL";

const axiosService = axios.create({baseURL})

export {
    axiosService
}