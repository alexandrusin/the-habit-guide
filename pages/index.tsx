import type { NextPage } from 'next'
import Head from 'next/head'
import { GetServerSideProps, GetStaticProps } from 'next'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>The Habit Guide</title>
				<meta name="description" content="Ideas, hacks and habits" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			</Head>
			<h1 className="headline1">Hello World</h1>
		</>
	)
}

export default Home
