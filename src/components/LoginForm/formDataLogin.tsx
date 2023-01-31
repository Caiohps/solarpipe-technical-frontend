import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Link, Spacer, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useState } from "react";
import api from "../../services/api";

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e: any) {
        // e.preventDefault();

        const { data } = await api.post('/authentication/login', {
            email,
            password
        });
    };

    return (
        <>
            <Box>
                <Text
                    fontFamily='titles.family'
                    fontWeight='700'
                    fontSize='24px'
                    lineHeight='titles.lineHeight'
                    margin='124px 0px 31.6px 80px'
                >Bem-vindo! 👋</Text>
                <Spacer />
                <FormControl marginLeft='80px' marginRight='81px'>
                    <FormLabel
                        fontFamily='titles.family'
                        fontWeight='700'
                        fontSize='16px'
                        lineHeight='titles.lineHeight'
                    >Email</FormLabel>
                    <Input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='pipe@email.com' width='350px' height='56px' borderRadius='24px' />
                    <FormLabel
                        fontFamily='titles.family'
                        fontWeight='700'
                        fontSize='16px'
                        lineHeight='titles.lineHeight'
                        marginTop='24px'
                    >Senha</FormLabel>
                    <Input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='**************' width='350px' height='56px' borderRadius='24px' />
                    <FormHelperText
                        margin='10px 0px 89px 200px'
                        fontFamily='titles.family'
                        fontWeight='500'
                        fontSize='16px'
                        lineHeight='titles.lineHeight'
                        fontStyle='normal'
                        color='grey.100'
                    >Esqueceu sua senha?</FormHelperText>
                    <Box width='350px'>
                        <Link as={NextLink}
                            href='/'
                            onClick={(e) => handleSubmit(e)}
                            background='secondary.600'
                            display='flex'
                            flex-direction='row'
                            justify-content=' center'
                            align-items='center'
                            padding=' 16px 142px'
                            borderRadius='24px'
                            textColor='#FFFFFF'
                            width='full'
                        >
                            Entrar
                        </Link>
                        <Text textAlign='unset' margin='32px 0px 32px 160px'>Ou</Text>
                        <Link as={NextLink}
                            href='#'
                            background='secondary.600'
                            display='flex'
                            flex-direction='row'
                            justify-content=' center'
                            align-items='center'
                            padding=' 16px'
                            borderRadius='24px'
                            textColor='#FFFFFF'
                            width='full'

                        >
                            Cadastrar-se
                        </Link>

                    </Box>
                </FormControl>

            </Box>
        </>
    )

}