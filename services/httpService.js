import axios from "axios"

axios.defaults.baseURL = "http://localhost:3001/api/"

export class Service {
    constructor() {
        this.axios = axios
    }
}