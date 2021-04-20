import styles from "../../styles/pages/auth.module.scss";
import Logo from "../../components/common/Logo";
import FormControl from "../../components/common/input";
import Link from "next/link";
import Button from "../../components/common/Button";
import Page from "../../layouts/Page";

export default function Register(){
    return (
        <Page title="consumify | register " useFooter={false} useNavBar={false}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <Logo />
                    <form autoComplete="off">
                        <h1 className="text-2xl font-medium my-4">Hello, Friend !</h1>
                        <FormControl placeHolder="Full names" className="bg-gray-200"/>
                        <FormControl placeHolder="Email" className="bg-gray-200"/>
                        <FormControl placeHolder="Username" className="bg-gray-200"/>
                        <FormControl placeHolder="Password" className="bg-gray-200"/>
                        <Button>register</Button>
                        <div className="flex mt-5">
                            <div>Already have an account ? </div>
                            <Link href={"/auth/login"} parseHref>
                                <div className="text-blue-500 ml-2 cursor-pointer hover:underline">Log in</div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Page>
    )
}