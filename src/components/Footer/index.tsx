import { link } from "fs"
import Link from "next/link"
import { navLinks } from "./data"


const Footer = () => {
    return (
        <footer>
            <ul>
                {navLinks.map((link,index) => {
                    return (
                        <Link href={link.path} key={index}>
                            <li>{link.name}</li>
                        </Link>
                    )
                })}
            </ul>
        </footer>
    )
}

export default Footer