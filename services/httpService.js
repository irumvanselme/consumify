import axios from "axios";

axios.defaults.baseURL = "https://consumify.herokuapp.com/api";

export class Service {
    constructor() {
        this.axios = axios;
    }
}
