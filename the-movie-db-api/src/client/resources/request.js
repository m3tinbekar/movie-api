import axios from "../config.js"

export default {
    // movie : async (parameters = {}) =>{
    //     console.log({parameters});
    //     return await axios.get(axios.defaults.baseURL+parameters)
    // },
    movie : async (parameters = {}) => {
        console.log({parameters});
        return await axios.get(axios.defaults.baseURL+parameters)
    },
    moviePopular : async (parameters = {}) => {
        console.log({parameters});
        return await axios.get(axios.defaults.baseURL+parameters)
    },
    movieNowPlaying : async (parameters = {}) => {
        console.log({parameters});
        return await axios.get(axios.defaults.baseURL+parameters)
    },
    movieUpComing : async (parameters = {}) => {
        console.log({parameters});
        return await axios.get(axios.defaults.baseURL+parameters)
    },
    movieTopRated : async (parameters = {}) => {
        console.log({parameters});
        return await axios.get(axios.defaults.baseURL+parameters)
    },
    movieDetail : async (parameters = {}) => {
        console.log({parameters});
        return await axios.get(axios.defaults.baseURL+parameters)
    },
    movieCast : async (parameters = {}) => {
        console.log({parameters});
        return await axios.get(axios.defaults.baseURL+parameters)
    },

    
}