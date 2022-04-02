import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export function Monospace(children: ReactNode){
    return(
        <Text fontFamily='monospace'>
            {children}
        </Text>
    )
}