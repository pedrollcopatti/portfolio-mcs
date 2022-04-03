import {Flex, Box, Spacer, IconButton} from '@chakra-ui/react' 
import { motion } from "framer-motion";
import { useState } from 'react';
import { Logo } from '../assets/Logo';
import { Link } from 'react-scroll'
import { Message } from '../assets/Message';

export function Nav(){
    const MotionFlex = motion(Flex);
    const MotionIconButton = motion(IconButton);
    const [isHover, setIsHover] = useState(false)

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
    onHoverStart={()=>{setIsHover(true)}}
    onHoverEnd={()=>{setIsHover(false)}}
    variant='unstyled'
    aria-label='message'
    icon={<Message/>}
    />
    </MotionFlex>
    )
}