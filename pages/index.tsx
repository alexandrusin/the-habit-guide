import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Habit Guide</title>
        <meta name="description" content="Ideas, hacks and habits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello World</h1>
      </main>
    </>
  )
}

export default Home
