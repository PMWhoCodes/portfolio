import Head from 'next/head'
import { FC } from 'react'
import Layout from '~/components/Layout'
import styles from 'src/modules/home/Home.module.css'

const HomePage: FC = () => {

  return (
    <>
      <Head>
        <title>Javier Garcia</title>
        <meta name="description" content="Javier Garcia is a Product Manager open to freelancing with companies of multile sizes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <h1 className={styles.hero}>I HELP COMPANIES <span className={styles.heroHighlight}>BUILD &amp; SCALE </span> DIGITAL PRODUCTS BY MANAGING THE PRODUCT TEAMS DESIGN AND ENGINEERING</h1>
          <h2 className={styles.subheading}><span className={styles.subheadingBold}>I am Javier, Senior Product Manager at STRV —</span> Leading design and engineering teams to bring outstanding apps to market, that solve customer needs.</h2>
      </Layout>
    </>
  )
}

export { HomePage }
