import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
    return (
        <AnimatePresence exitBeforeEnter={true}>
            <Component {...pageProps} />
        </AnimatePresence>
    );
}

export default MyApp;
