import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type MonospaceProps = {
    children: ReactNode
    selectionColor: string
}

export function Monospace(props: MonospaceProps){
    return(
        <Text _selection={{ color: `${props.selectionColor}`, background: 'transparent'}} textAlign='center' fontFamily='monospace' fontSize='lg'>
            {props.children}
        </Text>
    )
}