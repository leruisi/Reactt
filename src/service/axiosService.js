
import axios from "axios";
import {baseURL} from "../baseUrl/baseUrl";

const axiosService = axios.create({ baseURL });

export { axiosService };
