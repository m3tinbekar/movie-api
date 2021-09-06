import axios from "axios"

const http = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    headers : {
        "Content-Type": "application/json"
    },
});

http.interceptors.request.use(
    (config) =>{
        config.headers["accept"] = 'application/json';
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default http;