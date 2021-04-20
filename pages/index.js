import Page from "../layouts/Page";

export default function Home() {
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
                                        <path id="Path_68" data-name="Path 68" d="M15.833,9.167A6.667,6.667,0,1,1,9.167,2.5a6.667,6.667,0,0,1,6.667,6.667Z" fill="none" stroke="#f76e00" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
                                        <path id="Path_69" data-name="Path 69" d="M17.5,17.5l-3.625-3.625" fill="none" stroke="#f76e00" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <img src="banner-image.svg" alt="Banner image"/>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>Product categories</h3>
                </section>
            </div>
        </Page>
    );
}
