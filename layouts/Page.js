import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Page({
    children,
    title,
    useNavBar = true,
    useFooter = true,
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
        >
            <Head>
                <title>{title}</title>
            </Head>
            {useNavBar && <Navbar />}
            <main>{children}</main>
            {useFooter && <Footer />}
        </motion.div>
    );
}
