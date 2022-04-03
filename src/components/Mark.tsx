import { Flex, Text } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";
type MarkProps = {
    children: ReactNode
    mark: string
}

export function Mark(props: MarkProps){
    const MotionText = motion(Text);
    return(
        <motion.span
        initial={{background: '#F0F3F7', color:'#222426'}}
        whileInView={{background: `${props.mark}`}}
        transition={{duration: 0.5, delay: 0.5}}>
        {props.children}
        </motion.span>
    )
}