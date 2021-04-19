import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Page({children, title, useNavBar}){
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            { useNavBar && <Navbar /> }
            <main>
                {children}
            </main>
        </div>
    )
}