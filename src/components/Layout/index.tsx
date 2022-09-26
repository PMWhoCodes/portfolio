import React, { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";


type AppProps = {
    children: JSX.Element
}

const Layout = ({ children }: AppProps) => {
    return (
        <>
            <main>
                <Header />
                <div>{children}</div>
                <Footer />
            </main>
        </>
    )
}

export default Layout