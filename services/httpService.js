import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_APIS_URL + "/api";

export class Service {
    constructor() {
        this.axios = axios;
    }
}
