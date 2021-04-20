import FormControl from "./common/input";
import Button from "./common/Button";

export default function Footer() {
    return (
        <div className=" bg-gray-100 container py-12">
            <div className="grid grid-cols-3 gap-4 py-12">
                <div>
                    <h1 className="text-4xl font-black text-gray-600 pb-8">What
                        is {process.env.NEXT_PUBLIC_APP_NAME}</h1>
                    <div className="w-3/4 mt-5">
                        <p>
                            Nowadays people start to read all about products before buying them. That's why This
                            platform
                            was made
                        </p>
                        <p className="mt-3">
                            Revue is an platform for consumers where they review the products they consumed so that
                            other consumers read all about the products before consuming them.
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl text-gray-600 font-medium mt-5">SITE MAP</h1>
                    <ul className="mt-5">
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Best laptops</li>
                        <li>Best phones</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl text-gray-600 font-medium mt-5">CONTACT US</h1>
                    <FormControl placeHolder="Your names " className="border bg-white"/>
                    <FormControl placeHolder="Your Email " className="border bg-white"/>
                    <textarea placeholder="Your Email "
                              rows={5}
                              className="border bg-white px-5 py-2 my-2 focus:outline-none focus:border-blue-100 w-full focus:shadow-lg transition-shadow"></textarea>
                    <Button>SEND</Button>
                </div>
            </div>
        </div>
    );
}
