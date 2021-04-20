import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page({
    children,
    title,
    useNavBar = true,
    useFooter = true,
}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            {useNavBar && <Navbar />}
            <main>{children}</main>
            {useFooter && <Footer />}
        </div>
    );
}
