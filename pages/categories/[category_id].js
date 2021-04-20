import {useEffect, useState} from "react";
import { productCategoryService } from "../../services";
import Page from "../../layouts/Page";

export default function ProductCategoryPage({ category }){
    return (
        <Page title={category.name}>
            <h1 className="text-center">Best {category.name} to buy</h1>
        </Page>
    )
}

ProductCategoryPage.getInitialProps = async ({ query: { category_id } }) => {
    let { data } = await productCategoryService.get_one(category_id)
    return { category: data };
};