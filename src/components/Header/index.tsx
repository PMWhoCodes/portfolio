import React from "react"
import { navLinks } from "./data"
import Link from "next/link"
import { Logo } from "../logo"
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.navContainer}>
            <section className={styles.leftNav}>
                <Logo />
                <h3 className={styles.name}>Javier Garcia</h3>
            </section>
            <span className='fill-space' />
            <section>
                <nav>
                    <ul>
                        {navLinks.map((link, index) => {
                            return (
                                <Link href={link.path} key={index}>
                                    <li >{link.name}</li>
                                </Link>
                            )
                        })}
                    </ul>
                </nav>
            </section>
        </header>)
}

export default Header