import axios from "axios";
import {baseUrl} from "../constants/url";

const axiosService = axios.create({baseURL:baseUrl})

export {
    axiosService
}