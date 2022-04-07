import {Flex, Box, Spacer, IconButton} from '@chakra-ui/react' 
import { motion } from "framer-motion";
import { useState } from 'react';
import { Logo } from '../assets/Logo';
import { Link } from 'react-scroll'
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
    position='fixed'
    >
    <Box>
    <Logo/>
    </Box>
    <Spacer/>
    <MotionIconButton
    _focus={{border:'none'}}
    whileHover={{scale: 1.1}}
    variant='unstyled'
    aria-label='message'
    icon={<Message/>}
    />
    </MotionFlex>
    )
}