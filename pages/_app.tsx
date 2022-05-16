import 'styles/style.scss'
import React from 'react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Header, Main, Footer } from 'components/layout'

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient())
	return (
		<QueryClientProvider client={queryClient}>
			<Header />
			<Main>
				<Component {...pageProps} />
			</Main>
			<Footer />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default MyApp
