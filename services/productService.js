import { Service } from "./httpService";

class ProductService extends Service {
    getAll() {
        return this.axios.get("/products");
    }
    async getOne(id) {
        return this.axios.get("/products/" + id);
    }
}

export default new ProductService();
