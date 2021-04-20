import { Service } from "./httpService";

class ProductService extends Service {
    async getAll() {
        return this.axios.get("/products");
    }
    async getOne(id) {
        return await this.axios.get("/products/" + id);
    }
}

export default new ProductService();
