import { Box, Flex, Img, Text } from "@chakra-ui/react";

export default function BodySignIn() {
    return (
        <>
            <Flex>
                <Box width='354px' height='265px'>
                    <Text
                        fontFamily='titles.family'
                        fontWeight='700'
                        fontSize='56px'
                        lineHeight='59px'
                        margin='220px 0px 0px 63px'
                        color='grey.600'
                    >Inovando a gestão para um futuro sustentável.</Text>

                </Box>
                <Flex alignItems='center'>
                    <Img src='/images/Illustration - Man.svg' />
                </Flex>
                <Flex
                    flexDirection='column'
                    justifyContent='space-between'
                    alignItems='flex-end'
                >
                    <Box>
                        <Img src='/images/Illustration - Sun.svg' transform='rotate(-22.75deg)' filter='blur(0)' />
                        <Box>
                        <Img background='radial-gradient(ellipse at right top, #FC7939 0%, #6534A4 62%, #6534A4 100%)' borderRadius='200px' width='487px' transform='rotate(-9.43deg)' filter='blur(11px)' backdropFilter='blur(10px)'/>

                        </Box>
                    </Box>
                    <Box>
                        <Img src='/images/Group 51.svg' marginBottom='37px' />
                    </Box>

                </Flex>
            </Flex>
        </>
    )
}