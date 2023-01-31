import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { customTheme } from '../theme'
import { LoginProvider } from '../contexts/LoginContext'

export default function App({ Component, pageProps }: AppProps) {
	return (

		<ChakraProvider theme={customTheme}>
			<LoginProvider>
				<Component {...pageProps} />
			</LoginProvider>
		</ChakraProvider>
	)
}
