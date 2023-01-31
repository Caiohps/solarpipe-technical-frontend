import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import BodySignIn from '../../components/Body/bodySignIn'
import LoginForm from '../../components/LoginForm/formDataLogin'

export default function SignIn() {
	return (
		<>
			<Head>
				<title>Login | Solarpipe</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Box as='section'>
				<Flex
				background='grey.100'
				> 
					<Box
						background='grey.900'
						width='511px'
						height='980px'
						borderRadius='0px 128px 0px 0px'
						gap='3em'
						>
						<Flex
							margin='115px 0px 0px 80px'
							alignItems='center'
							gap='1em'
						>
							<img src='/images/Icon.svg' alt='icone'></img>
							<img src='/images/solarpipe.svg' alt='imagem da logo'></img>
						</Flex>
						<LoginForm />

					</Box>
					<BodySignIn />
				</Flex>
			</Box>



		</>
	)
}
