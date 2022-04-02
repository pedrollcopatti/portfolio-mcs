import {Box, Button, Divider, Flex, Heading, IconButton, Image, Spacer, Stack, Text} from '@chakra-ui/react';
import { Nav } from '../components/Nav';
import perfilMateus from '../assets/perfilMateus.jpg'
import carteirabw from '../assets/carteira-bw.png'
import cecllbw from '../assets/cecll-bw.png'
import traderbw from '../assets/trader-bw.png'
import portalbw from '../assets/portal-bw.png'
import {ReactComponent as facebook} from '../assets/facebook.svg'
import {ReactComponent as wpp} from '../assets/wpp.svg'
import{ReactComponent as medium} from '../assets/medium.svg'
import {ReactComponent as instagram} from '../assets/instagram.svg'
import { Facebook } from '../assets/Facebook';
import { WhatsApp } from '../assets/WhatsApp';
import { Medium } from '../assets/Medium';
import { Instagram } from '../assets/Instagram';

export function Home(){
    return(
        <Flex
        height='100%'
        width='100%'
        align='center'
        direction='column'
        >
        <Nav/>
            <Stack
            mt='48'
            width='80vw'
            align='center'
            spacing='32'
            >

                {/* HEADER */}

                <Stack
                spacing='12'
                align='center'
                >
                    <Heading size='3xl'>Copywriting sem padrão</Heading>
                    <Text fontFamily='monospace' fontSize='xl'>Seu produto pode pautar o discurso de um mercado inteiro.</Text>
                </Stack>
                <Stack
                spacing='10'
                width='55%'
                >
                    <Text textAlign='center' fontFamily='monospace' fontSize='lg'>Na minha visão — você pode discordar —, quando um cliente contrata um copywriter, ele espera receber algo persuasivo, impactante e, principalmente, algo novo. Afinal, a cada dia que passa a concorrência está maior e mais profissional. Tudo o que um empresário de respeito não quer é ter seu produto considerado irrelevante, “mais do mesmo”. No mercado atual, quando isso acontece podemos dizer que o produto já fracassou.
                    </Text>
                    <Text textAlign='center' fontFamily='monospace' fontSize='lg'>
                    No entanto, infelizmente, o que mais vemos por aí são cartas de venda e anúncios sendo  copiados a torto e a rodo. Fórmulas prontas, criatividade zero.</Text>
                </Stack>

                {/* COMEÇO DA PARTE ESCURA */}

                <Flex
                width='100%'
                align='center'
                justify='center'
                pt='12'
                pb='12'
                >
                    <Stack
                    width='50%'
                    spacing='12'
                    align='center'
                    >
                        <Stack>
                        <Text textAlign='center' fontFamily='monospace' fontSize='lg'>Se me permite dar um conselho de amigo,</Text>
                        <Text textAlign='center' fontFamily='monospace' fontSize='lg'>não invista seu dinheiro nesse tipo de serviço.</Text>
                        </Stack>
                        <Heading size='lg' textAlign='center'>Você quer pagar por um trabalho que você mesmo, com um conhecimento mínimo, poderia fazer rapidamente e com pouco esforço?</Heading>
                        <Flex
                        width='100%'
                        justify='left'
                        >
                        <Text fontFamily='monospace' fontSize='lg'>Se for o seu caso,</Text>    
                        </Flex>
                        <Flex
                        width='100%'
                        justify='center'
                        >
                        <Heading size='ms' textAlign='center'>sinto muito,</Heading>  
                        </Flex>
                        <Flex
                        width='100%'
                        justify='right'
                        >
                        <Text fontFamily='monospace' fontSize='lg'>não tenho como te ajudar.</Text>  
                        </Flex>
                        <Heading size='xl' textAlign='center'>Eu valorizo o seu tempo tanto quanto o meu</Heading>
                        <Text textAlign='center' fontFamily='monospace' fontSize='lg'> e prestar um serviço de “copia e cola” é como jogar seu dinheiro no lixo — e minha consciência moral junto.</Text>
                    </Stack>
                </Flex>

                {/* MAS, SE */}

                <Stack
                width="65%"
                align='center'
                spacing='0'
                >
                    <Flex align='flex-end' width='100%'>
                    <Heading size='2xl'>Mas se,</Heading>
                    <Spacer />
                    <Text ml='2' textAlign='justify' fontFamily='monospace' fontSize='lg'>por outro lado, o que você procura para seu produto </Text>
                    </Flex>
                    <Text ml='2' textAlign='justify' fontFamily='monospace' fontSize='lg'>é uma campanha de venda persuasiva e original, entregue no prazo e com resultados, para dizer o mínimo, muito satisfatórios, então considere hoje um grande dia, pois você acaba de encontrar tudo isso por um preço incrivelmente acessível.</Text>
                </Stack>
                {/* APRESENTAÇÃO */}
                <Stack
                direction='row' 
                width="65%"
                spacing='12'
                height="100%"
                >
                    <Stack 
                    >
                        <Stack 
                        justify='left'
                        textAlign='left'>
                            <Heading size='xl'>Muito prazer,</Heading>
                            <Heading size='xl'>sou Mateus Costella</Heading>
                        </Stack>
                        <Spacer />
                        <Text ml='2' textAlign='justify' fontFamily='monospace' fontSize='lg'>um copywriter profissional que não joga de acordo com as regras do jogo: 
                        </Text>
                        <Heading size='xl'>eu procuro criá-las.</Heading>
                    </Stack>
                    <Box
                    width='60%'
                    height="100%"
                    >
                    <Image borderRadius='2' src={perfilMateus}/>
                    </Box>
                </Stack>
                <Stack
                width='65%'
                >
                <Text ml='2' textAlign='left' fontFamily='monospace' fontSize='lg'>Qual é o melhor dia para conversarmos sobre seus planos de crescimento em vendas?</Text>
                
                {/* DIAS DA SEMANA */}
                
                </Stack>
                <Stack
                width='65%'
                spacing='12'
                >
                    <Heading textAlign='center' size='2xl'>Algumas marcas com as quais já trabalhei</Heading>
                    <Stack
                    spacing='8'
                    direction='row'
                    width='100%'
                    >
                    <Box width='25%' >
                    <Image src={carteirabw}/>
                    </Box>
                    <Box width='25%'>
                    <Image src={cecllbw}/>
                    </Box>
                    <Box width='25%'>
                    <Image src={portalbw}/>
                    </Box>
                    <Box width='25%'>
                    <Image src={traderbw}/>
                    </Box>
                    </Stack>
                    <Text ml='2' textAlign='center' fontFamily='monospace' fontSize='lg'>Algumas das campanhas que escrevi já foram copiadas por empresas bilionárias. Outras pautaram o discurso de todo um mercado. Esse é o poder da originalidade.</Text>
                </Stack>
                <Stack
                width='65%'
                spacing='16'
                justify='center'
                align='center'
                >
                    <Heading textAlign='center' size='lg'>Clique no botão abaixo se quiser saber mais sobre meu trabalho.</Heading>
                    <Text ml='2' textAlign='center' fontFamily='monospace' fontSize='lg'>Faça isso somente se a ideia de ter a concorrência te encarando com sangue nos olhos não for um grande incômodo para você.</Text>
                    <Button colorScheme='blue' width='50%' size='lg'><Heading size='sm'>PODEMOS CONVERSAR?</Heading></Button>
                </Stack>
            </Stack>
            <Stack
                mt='24'
                mb='12'
                height='30vh'
                width='100%'
                spacing='12'
                align='center'
                justify='center'
                >
                    <Divider mt='12' mb='12'/>
                    <Stack
                    direction='row'
                    spacing='12'
                    >
                    <IconButton
                    variant='unstyled'
                    aria-label='facebook'
                    icon={<Facebook/>}
                    />
                    <IconButton
                    variant='unstyled'
                    aria-label='whatsapp'
                    icon={<WhatsApp/>}
                    />
                    <IconButton
                    variant='unstyled'
                    aria-label='medium'
                    icon={<Medium/>}
                    />
                    <IconButton
                    variant='unstyled'
                    aria-label='instagram'
                    icon={<Instagram/>}
                    />
                    </Stack>
                   <Stack
                   align='center'
                   justify='center'
                   >
                   <Heading fontWeight='400' size='sm'>Mateus Costella Savaris</Heading>
                    <Heading fontWeight='400' size='xs'>Copywriting sem padrão</Heading>
                   </Stack>
                </Stack>
        </Flex>
    )
}