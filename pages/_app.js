import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import { AnimatePresence } from "framer-motion";
import {useEffect} from "react";

function MyApp({ Component, pageProps, router }) {
    useEffect(() => {
        console.log(router)
    }, [])
    return (
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
    );
}

export default MyApp;
