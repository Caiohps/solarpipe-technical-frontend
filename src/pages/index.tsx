import { Box, Button, Link, Text } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>Solarpipe</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Box background='grey.300' width='100vw' height='100vh'>
				<Text>Bem vindo, ${ }</Text>
				<Link as={NextLink}
					width='130px'
					href='/sign-in'
					background='secondary.600'
					display='flex'
					flex-direction='row'
					justify-content=' center'
					align-items='center'
					padding=' 16px'
					borderRadius='24px'
					textColor='#FFFFFF'
				>Sair</Link>
			</Box>
		</>
	)
}
