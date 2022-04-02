import {Flex, Image, Box, Spacer, IconButton} from '@chakra-ui/react' 
import { motion } from "framer-motion";
import { Logo } from '../assets/Logo';
import logo from '../assets/logo.svg';
import { Message } from '../assets/Message';

export function Nav(){
    const MotionFlex = motion(Flex);
    const MotionIconButton = motion(IconButton);

    return(
    <MotionFlex
    mt='4'
    width='90vw'
    height='50px'
    align='center'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    >
    <Box>
    <Logo/>
    </Box>
    <Spacer/>
    <Message/> 

    </MotionFlex>
    )
}