import React, { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./layout.module.css"


type AppProps = {
    children: JSX.Element| JSX.Element[]
}

const Layout = ({ children }: AppProps) => {
    return (
        <>
            <main>
                <Header />
                <div className={styles.container}>{children}</div>
                <Footer />
            </main>
        </>
    )
}

export default Layout