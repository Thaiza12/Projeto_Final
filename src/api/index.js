import axios from "axios";

const api = axios.create({
    baseURL: "https://api.thecatapi.com"
})

export default api

