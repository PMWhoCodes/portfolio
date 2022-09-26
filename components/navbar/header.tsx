import React from "react"
import { navLinks } from "./data"
import Link from "next/link"

const Header = () => {
    return (
        <header>
            <section>
                <h3>Javier Garcia</h3>
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