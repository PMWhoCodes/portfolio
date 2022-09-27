import { link } from "fs"
import Link from "next/link"
import { navLinks } from "./data"
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
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