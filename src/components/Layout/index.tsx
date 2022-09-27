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
            <main className={styles.container}>
                <Header />
                <div>{children}</div>
                <Footer />
            </main>
        </>
    )
}

export default Layout