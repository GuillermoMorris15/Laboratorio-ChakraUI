import { Container } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Text } from '@chakra-ui/react'
function Header() {
    
    return(
        <div>
            <Container maxW='100%' bg='#2C7A7B' color='#000000'>
                <Card align='center'>
                    <CardBody>
                        <Text   
                        bg="#fff"
                        bgClip="text"
                        fontSize='4xl'
                        >Sueña en grande</Text>
                    </CardBody>
                    <CardFooter>
                        <Button m="2" colorScheme='red'>Ver  Detalles </Button>
                        <Button  m="2"colorScheme='red'>ver videos</Button>
                    </CardFooter>
                </Card>
            </Container>
        </div>
    )
}
export default Header