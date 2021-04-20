import Logo from "./common/Logo";
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="container py-5 flex justify-between">
            <Logo />
            <div>
                <Link href="/auth/login" passHref>
                    <button className="p-2.5 px-5 hover:bg-gray-300 transition-all hover:shadow-lg">Login</button>
                </Link>
                <Link href="/auth/register" passHref>
                    <button className="p-2.5 px-5 hover:bg-gray-300 transition-all hover:shadow-lg border">Register</button>
                </Link>
            </div>
        </div>
    );
}
