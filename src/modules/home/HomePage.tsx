import Head from 'next/head'
import { FC } from 'react'
import Layout from '~/components/Layout'
import styles from '../styles/Home.module.css'

const HomePage: FC = () => {

  return (
    <>
      <Head>
        <title>Javier Garcia</title>
        <meta name="description" content="Javier Garcia is a Product Manager open to freelancing with companies of multile sizes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          <h1>Javier Garcia</h1>
        </div>
      </Layout>
    </>
  )
}

export { HomePage }
