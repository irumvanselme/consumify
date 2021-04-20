import { useEffect, useState } from "react";

import Page from "../../layouts/Page";
import productService from "../../services/productService";

export default function Product({ product_id }) {
    const [product, setProduct] = useState({
        categories: [],
        about_the_product: [],
    });
    useEffect(async () => {
        let { data } = await productService.getOne(product_id);
        setProduct(data);
    }, [product_id]);

    return (
        <Page title="Product view " useNavBar>
            <div className="p-12 m-auto container flex">
                <div className="w-5/12">images</div>
                <div className="w-6/12">
                    <div className="flex justify-between items-baseline">
                        <h1 className="text-3xl font-medium">{product.name}</h1>
                        <a className="text-blue-500 hover:underline cursor-pointer">
                            Edit
                        </a>
                    </div>
                    <div className="flex mt-5">
                        {product.categories.map((category, i) => (
                            <div
                                key={i}
                                className="text-blue-500 hover:underline pr-5 cursor-pointer"
                            >
                                {category.name}
                            </div>
                        ))}
                    </div>
                    <div className="flex mt-7">
                        <div className="mr-5">stars</div>
                        <div className="mr-5">{product.rates} Ratings</div>
                        <div className="mr-5">{product.reviews} Reviews</div>
                    </div>
                    <div className="w-8/12 mt-5 text-gray-600">
                        {product.description}
                    </div>
                    <div className="mt-5">
                        <hr />
                        <h5 className="text-xl py-4 font-bold">
                            About the product
                        </h5>
                        <ul>
                            {product.about_the_product.map((listItem, i) => (
                                <li key={i}>{listItem}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Page>
    );
}

Product.getInitialProps = ({ query: { product_id } }) => {
    return { product_id };
};
