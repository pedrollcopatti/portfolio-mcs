import { Flex, Text } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
type MarkProps = {
    children: ReactNode
    mark: string
    on: number
    talign: boolean
}

export function Mark(props: MarkProps){
    const [isEnter, setIsEnter] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 2], [0, 3]);
  
    useEffect(() => {
        yRange.onChange(v =>setIsEnter(v >= props.on)
        )
    }, [yRange]);
    
    return(
        <motion.span
        style={props.talign ? {textAlign: "center"}:{}}
        initial={{background: '#F0F3F7', color:'#222426'}}
        transition={{duration: 0.7, delay: 0.5}}
        animate={isEnter ? {background: `${props.mark}`}:{}}
        >
        {props.children}
        </motion.span>
    )
}