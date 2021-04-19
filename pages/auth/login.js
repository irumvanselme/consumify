import styles from "../../styles/pages/auth.module.scss"
import Logo from "../../components/common/Logo";
import FormControl from "../../components/common/input";
import Button from "../../components/common/Button";
import Link from "next/link"
import Page from "../../layouts/Page";

export default function LogIn(){
    return (
        <Page title="consumify | login">
            <div className={styles.container}>
                <div className={styles.card}>
                    <Logo />
                    <form autoComplete="off">
                        <h1 className="text-2xl font-medium my-4">Welcome back !</h1>
                        <FormControl placeHolder="Email or username"/>
                        <FormControl placeHolder="Password"/>
                        <Link href="/anselme" parseHref>
                            <div  className="text-right text-blue-500 mb-5 hover:underline cursor-pointer">Forgot your password</div>
                        </Link>
                        <Button>Log in</Button>
                        <div className="flex mt-5">
                            <div>No account ? </div>
                            <Link href="/auth/register" parseHref>
                                <div className="text-blue-500 ml-2 cursor-pointer hover:underline"> Create one</div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Page>
    )
}