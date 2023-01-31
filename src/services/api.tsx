import axios from "axios";

const uri = 'http://localhost:3000'

const api = axios.create({
    baseURL: uri
});

export default api;