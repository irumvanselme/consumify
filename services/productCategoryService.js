import { Service } from "./httpService";

class ProductCategoryService extends Service{
    get_all(){
        return this.axios.get("/product-categories")
    }

    get_children(){
        return this.axios.get("/product-categories/children")
    }

    get_one(id) {
        return this.axios.get("/product-categories/"+id)
    }

    get_products(id){
        return this.axios.get("/product-categories/"+id+"/products")
    }
}

export  default new ProductCategoryService();