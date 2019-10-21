import axios from 'axios'
import {apiUrls, keys} from '@/config/constants';

let axiosInstance = axios.create();

axiosInstance.defaults.baseURL = apiUrls.baseURL;

if (localStorage.getItem(keys.token.local) && axiosInstance.defaults.params) {
    axiosInstance.defaults.params[keys.token.param] = localStorage.getItem(keys.token.local);
}

export default axiosInstance
