import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className="text-red-900 text-5xl font-bold">
                    this is anselme
                </div>
            </main>
        </div>
    );
}
