import { productCategoryService } from "../../services";
import Page from "../../layouts/Page";
import {useEffect, useState} from "react";
import Product from "../../components/product/Product";

export default function ProductCategoryPage({ category }){
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async function () {
            let { data } = await productCategoryService.get_products(category._id)
            setProducts(data)
        })()
    }, [])

    return (
        <Page title={category.name}>
            <h1 className="text-center text-3xl font-black text-gray-700 mb-12">Best {category.name} to buy</h1>
            <div className="container">
                {products.map((product, i) => (
                    <Product key={i} product={product}/>
                ))}
            </div>
        </Page>
    )
};

ProductCategoryPage.getInitialProps = async ({ query: { category_id } }) => {
    let { data } = await productCategoryService.get_one(category_id)
    return { category: data };
};