import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

type MarcaItemProps = {
    image: string,
    imageBW: string
}

export function MarcaItem(props: MarcaItemProps){
    const MotionBox = motion(Box)
    const [hover, setHover] = useState(false);

    return(
        <MotionBox width='25%' whileHover={{scale: 1.1}} onHoverStart={()=>{setHover(true)}} onHoverEnd={()=>{setHover(false)}}>
        {
            !hover ? 
            <Image src={props.imageBW}/>
            :
            <Image src={props.image}/>
        }
        </MotionBox>
    );
}