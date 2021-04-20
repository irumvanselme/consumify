import Link from "next/link"

export default function Logo() {
    return (
        <Link href="/" passHref>
            <div className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="208" height="39" viewBox="0 0 208 39">
                    <g id="Group_8" data-name="Group 8" transform="translate(-44 -55)">
                        <circle id="Ellipse_14" data-name="Ellipse 14" cx="15" cy="15" r="15" transform="translate(44 60)" fill="#f76e00"/>
                        <text id="C" transform="translate(49.578 83)" fill="#fff" fontSize="24" fontFamily="Larsseit-ExtraBold, Larsseit" fontWeight="800"><tspan x="0" y="0">C</tspan></text>
                    </g>
                    <text id="Revue" transform="translate(40 19)" fontSize="20" fontFamily="Larsseit-ExtraBold, Larsseit" fontWeight="800"><tspan x="0" y="0">Revue</tspan></text>
                    <text id="The_consumers_community" data-name="The consumers community" transform="translate(40 35)" fill="#666" fontSize="14" fontFamily="Larsseit-Medium, Larsseit" fontWeight="500"><tspan x="0" y="0">The consumers community</tspan></text>
                </svg>
            </div>
        </Link>
    );
}
