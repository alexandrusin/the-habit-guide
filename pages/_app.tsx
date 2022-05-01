import 'styles/style.scss'
import type { AppProps } from 'next/app'
import { Header, Main, Footer } from 'components/layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<Main>
				<Component {...pageProps} />
			</Main>
			<Footer />
		</>
	)
}

export default MyApp
