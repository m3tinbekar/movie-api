import axios from "../config.js"

export default {
    movie : async (parameters = {}) =>{
        console.log({parameters});
        return await axios.get(axios.defaults.baseURL+parameters)
    },
    try : async (parameters = {}) => {
        console.log({parameters});
        return await axios.get(axios.defaults.baseURL+parameters)
    }
}