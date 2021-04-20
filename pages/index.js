import Page from "../layouts/Page";
import {useEffect, useState} from "react";
import { productCategoryService } from "../services";
import Link from "next/link"

export default function Home() {
    const [productCategories, setProductCategories] = useState([])
    useEffect(() => {
        (async function () {
            let { data } = await productCategoryService.get_children();
            setProductCategories(data)
        })()
    }, [])

    return (
        <Page title="Home page .. ">
            <div className="container mx-auto">
                <section>
                    <div className="welcome-banner flex justify-between items-center py-5 px-12 mb-12" style={{backgroundColor: '#F2FCFF'}}>
                        <div className="px-12">
                            <h1 className="text-5xl font-black text-gray-600">Read what people say <br/> about products before <br/> buying them</h1>
                            <div className="items-center bg-white inline-flex justify-between pl-2 pr-4 mt-12 border rounded shadow-lg w-2/3">
                                <input type="text" className="focus:outline-none px-4 py-3 flex-1" placeholder="search for any product"/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.012" height="17.012" viewBox="0 0 17.012 17.012">
                                    <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-1.667 -1.667)">
                                        <path id="Path_68" data-name="Path 68" d="M15.833,9.167A6.667,6.667,0,1,1,9.167,2.5a6.667,6.667,0,0,1,6.667,6.667Z" fill="none" stroke="#f76e00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667"/>
                                        <path id="Path_69" data-name="Path 69" d="M17.5,17.5l-3.625-3.625" fill="none" stroke="#f76e00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <img src={"banner-image.svg"} alt="Banner image"/>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex justify-between">
                        <h3 className="text-2xl font-bold">Product categories</h3>
                        <div><a href="#" className="text-primary hover:underline">Show all</a></div>
                    </div>
                    <div className="grid grid-cols-8 gap-10 my-8">
                        {
                            productCategories.map((category, i) => (
                                <Link key={i} href={"/categories/"+category._id}>
                                    <div className="bg-gray-200 rounded-2xl py-5 text-center shadow transition-shadow cursor-pointer hover:shadow-2xl hover:bg-gray-100">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" className="mx-auto"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 5v11h16V5H4zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2V4.007zM1 19h22v2H1v-2z"/></svg>
                                        </div>
                                        <h4 className="text-lg font-medium mt-4">{ category.name }</h4>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </section>
            </div>
        </Page>
    );
}
