import {Box, Button, Divider, Flex, Heading, IconButton, Image, Spacer, Stack, Text} from '@chakra-ui/react';
import { Nav } from '../components/Nav';
import perfilMateus from '../assets/perfilMateus.jpg'
import carteirabw from '../assets/carteira-bw.png'
import cecllbw from '../assets/cecll-bw.png'
import traderbw from '../assets/trader-bw.png'
import portalbw from '../assets/portal-bw.png'
import { Facebook } from '../assets/Facebook';
import { WhatsApp } from '../assets/WhatsApp';
import { Medium } from '../assets/Medium';
import { Instagram } from '../assets/Instagram';
import useWindowSize from '../hooks/useWindowSize';
import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Monospace } from '../components/Monospace';
import { Marcas } from '../components/Marcas';
import { Mark } from '../components/Mark';

export function Home(){

    const MotionButton = motion(Button);
    const MotionFlex = motion(Flex);

//COMEÇO DA LÓGICA DO SMOOTH SCROLL

  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
      
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

//FINAL DA LÓGICA DO SMOOTH SCROLL

    return(
        <Flex
        ref={app}
        height='100%'
        width='100%'
        align='center'
        direction='column'
        >
        <Nav/>
            <Stack
            ref={scrollContainer}
            mt='80'
            width='80vw'
            height='2500px'
            align='center'
            spacing='32'
            >

                {/* HEADER */}

                <Stack
                spacing='64'
                align='center'
                >
                <Stack
                spacing='16'
                align='center'
                justify='center'
                width='100%'
                >
                    <Heading textAlign='center' _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}} size='4xl'>Copywriting sem padrão</Heading>
                    <Text textAlign='center' _selection={{ color: '#4588E5', background: 'transparent'}} fontFamily='monospace' fontSize='2xl'>Seu produto pode pautar o discurso de um mercado inteiro.</Text>
                </Stack>
                <Stack
                spacing='10'
                width='55%'
                >
                    <Monospace selectionColor='#52CC56'>Na minha visão — você pode discordar —, quando um cliente contrata um copywriter, ele espera receber algo persuasivo, impactante e, principalmente, algo novo. Afinal, <Mark on={0.23} mark='rgb(230, 255, 0)'>a cada dia que passa a concorrência está maior e mais profissional</Mark>.Tudo o que um empresário de respeito não quer é ter seu produto considerado irrelevante, “mais do mesmo”.
                    </Monospace>
                    <Monospace>No mercado atual, quando isso acontece podemos dizer que o produto já fracassou.</Monospace>
                    <Monospace selectionColor='#4588E5'>
                    No entanto, infelizmente, <Mark on={0.35} mark='rgb(230, 255, 0)'>o que mais vemos por aí são campanhas sendo copiadas a torto e a rodo</Mark>. Fórmulas prontas, criatividade zero.</Monospace>
                </Stack>
                </Stack>

                {/* COMEÇO DA PARTE ESCURA */}

                <MotionFlex
                width='100%'
                align='center'
                justify='center'
                pt='12'
                pb='12'
                initial={{background: '#F0F3F7', color:'#222426'}}
                whileInView={{background: '#222426', color:'#F0F3F7'}}
                transition={{duration: 1, delay: 0.5}}
                drag
                dragConstraints={{
                    top: -1,
                    left: -1,
                    right: 1,
                    bottom: 1,
                }}
                >
                    <Stack
                    width='50%'
                    spacing='12'
                    align='center'
                    >
                        <Stack>
                        <Monospace selectionColor='#CC5252'>Se me permite dar um conselho de amigo,</Monospace>
                        <Monospace selectionColor='#52CC56'>não invista seu dinheiro nesse tipo de serviço.</Monospace>
                        </Stack>
                        <Heading _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}}  size='lg' textAlign='center'>Você quer pagar por um trabalho que você mesmo, com um conhecimento mínimo, poderia fazer rapidamente e com pouco esforço?</Heading>
                        <Flex
                        width='100%'
                        justify='left'
                        >
                        <Monospace selectionColor='#4588E5'>Se for o seu caso,</Monospace>    
                        </Flex>
                        <Flex
                        width='100%'
                        justify='center'
                        >
                        <Heading _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}}  size='ms' textAlign='center'>sinto muito,</Heading>  
                        </Flex>
                        <Flex
                        width='100%'
                        justify='right'
                        >
                        <Monospace selectionColor='#CC5252'>não tenho como te ajudar.</Monospace>  
                        </Flex>
                        <Heading _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}}  size='xl' textAlign='center'>Eu valorizo o seu tempo tanto quanto o meu</Heading>
                        <Text _selection={{ color: '#4588E5', background: 'transparent'}} textAlign='center' fontFamily='monospace' fontSize='lg'> e prestar um serviço de “copia e cola” é como jogar seu dinheiro no lixo — e minha consciência moral junto.</Text>
                    </Stack>
                </MotionFlex>

                {/* MAS, SE */}

                <Stack
                width="65%"
                align='center'
                spacing='0'
                >
                    <Flex align='flex-end' width='100%'>
                    <Heading _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}}  size='2xl'>Mas se,</Heading>
                    <Spacer />
                    <Monospace selectionColor='#52CC56'>por outro lado, o que você procura para seu produto </Monospace>
                    </Flex>
                    <Text  _selection={{ color: '#4588E5', background: 'transparent'}} textAlign='justify' fontFamily='monospace' fontSize='lg' selectionColor='#CC5252'>é uma campanha de venda persuasiva e original, entregue no prazo e com resultados, para dizer o mínimo, muito satisfatórios, então considere hoje um grande dia, pois você acaba de encontrar tudo isso por um preço incrivelmente acessível.</Text>
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
                            <Heading _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}}  size='xl'>Muito prazer,</Heading>
                            <Heading _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}}  size='xl'>sou Mateus Costella</Heading>
                        </Stack>
                        <Spacer />
                        <Text  _selection={{ color: '#52CC56', background: 'transparent'}} textAlign='left' fontFamily='monospace' fontSize='lg'>um copywriter profissional que não joga de acordo com as regras do jogo: 
                        </Text>
                        <Heading _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}}  size='xl'>eu procuro criá-las.</Heading>
                    </Stack>
                    <Box
                    width='60%'
                    height="100%"
                    >
                    <Image borderRadius='2' src={perfilMateus}/>
                    </Box>
                </Stack>

                {/* DIAS DA SEMANA */}

                <Stack
                width='65%'
                align='center'
                justify='center'
                spacing='8'
                
                >
                    <Mark talign={true} on={1.41} mark='rgb(230, 255, 0)'>Qual é o melhor dia para conversarmos sobre seus planos de crescimento em vendas?</Mark>

                    <Stack
                    width='80%'
                    direction='row'
                    align='center'
                    justify='center'
                    spacing='auto'
                    >
                    <MotionButton width='75px' style={{background: '#222426'}} transition={{duration: 0.5}} whileHover={{scale: 1.1, background: ['#4588E5', '#74CDC0', '#A1FF8B', '#4588E5']}}  textColor='pallete.white' >SEG</MotionButton>
                    <MotionButton width='75px' style={{background: '#222426'}} transition={{duration: 0.5}} whileHover={{scale: 1.1, background: ['#4588E5', '#74CDC0', '#A1FF8B', '#4588E5']}}  textColor='pallete.white' >TER</MotionButton>
                    <MotionButton width='75px' style={{background: '#222426'}} transition={{duration: 0.5}} whileHover={{scale: 1.1, background: ['#4588E5', '#74CDC0', '#A1FF8B', '#4588E5']}}  textColor='pallete.white' >QUA</MotionButton>
                    <MotionButton width='75px' style={{background: '#222426'}} transition={{duration: 0.5}} whileHover={{scale: 1.1, background: ['#4588E5', '#74CDC0', '#A1FF8B', '#4588E5']}}  textColor='pallete.white' >QUI</MotionButton>
                    <MotionButton width='75px' style={{background: '#222426'}} transition={{duration: 0.5}} whileHover={{scale: 1.1, background: ['#4588E5', '#74CDC0', '#A1FF8B', '#4588E5']}}  textColor='pallete.white' >SEX</MotionButton>
                    <MotionButton width='75px' style={{background: '#222426'}} transition={{duration: 0.5}} whileHover={{scale: 1.1, background: ['#4588E5', '#74CDC0', '#A1FF8B', '#4588E5']}}  textColor='pallete.white' >SÁB</MotionButton>
                    </Stack>
                </Stack>
                <Stack
                width='65%'
                spacing='12'
                >
                    <Heading _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}}  textAlign='center' size='2xl'>Algumas marcas com as quais já trabalhei</Heading>
                    <Marcas/>
                    <Text _selection={{ color: '#4588E5', background: 'transparent'}} ml='2' textAlign='center' fontFamily='monospace' fontSize='lg'>Algumas das campanhas que escrevi já foram copiadas por empresas bilionárias. Outras pautaram o discurso de todo um mercado. Esse é o poder da <Mark on={1.88} mark='rgb(230, 255, 0)'>originalidade</Mark>.</Text>
                </Stack>
                <Stack
                width='65%'
                spacing='16'
                justify='center'
                align='center'
                >
                    <Heading _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}}  textAlign='center' size='lg'>Clique no botão abaixo se quiser saber mais sobre meu trabalho.</Heading>
                    <Monospace selectionColor='#52CC56'>Faça isso somente se a ideia de ter a concorrência te encarando com sangue nos olhos não for um grande incômodo para você.</Monospace>
                    <MotionButton style={{background: '#4588E5'}} transition={{duration: 0.5}} whileHover={{scale: 1.1, background: ['#4588E5', '#74CDC0', '#A1FF8B', '#4588E5']}}  textColor='pallete.white' width='50%' size='lg'><Heading _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}}  size='sm'>PODEMOS CONVERSAR?</Heading></MotionButton>
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
                    _focus={{border:'none'}}
                    variant='unstyled'
                    aria-label='facebook'
                    icon={<Facebook/>}
                    />
                    <IconButton
                    _focus={{border:'none'}}
                    variant='unstyled'
                    aria-label='whatsapp'
                    icon={<WhatsApp/>}
                    />
                    <IconButton
                    _focus={{border:'none'}}
                    variant='unstyled'
                    aria-label='medium'
                    icon={<Medium/>}
                    />
                    <IconButton
                    _focus={{border:'none'}}
                    variant='unstyled'
                    aria-label='instagram'
                    icon={<Instagram/>}
                    />
                    </Stack>
                   <Stack
                   align='center'
                   justify='center'
                   >
                   <Heading _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}}  fontWeight='400' size='sm'>Mateus Costella Savaris</Heading>
                    <Heading _selection={{ color: 'transparent', background: 'transparent', '-webkit-text-stroke': '2px #1976D2'}}  fontWeight='400' size='xs'>Copywriting sem padrão</Heading>
                   </Stack>
                </Stack>
            </Stack>
            
        </Flex>
    )
}