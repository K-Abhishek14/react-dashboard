import axios from 'axios';
import store from '../redux/store';

// https://prelive.selfsignup.assccl.com/spark-business-account
// https://sandboxapp.assccl.com:8443/spark-business-account
// https://prelive.selfsignup.assccl.com/spark-business-account-sandbox

const API = axios.create({
    baseURL: 'https://sandboxapp.assccl.com:8443/spark-business-account-v2',
});

API.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token');
    config.headers = { ...config.headers, 'Authorization': `Bearer ${token}` };
    return config;
},
    function (error) {
        return Promise.reject(error);
    }
)

export default API;