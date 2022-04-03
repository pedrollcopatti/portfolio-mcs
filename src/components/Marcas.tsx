import { Box, Image, Stack } from "@chakra-ui/react";
import carteirabw from '../assets/carteira-bw.png'
import carteira from '../assets/carteira.png'
import cecllbw from '../assets/cecll-bw.png'
import cecll from '../assets/cecll.png'
import portalbw from '../assets/portal-bw.png'
import portal from '../assets/portal.png'
import traderbw from '../assets/trader-bw.png'
import trader from '../assets/trader.png'
import { MarcaItem } from "./MarcaItem";

export function Marcas(){
    const marcas = [
        {
            image: carteira,
            imageBW: carteirabw
        },
        {
            image: cecll,
            imageBW: cecllbw
        },
        {
            image: portal,
            imageBW: portalbw
        },
        {
            image: trader,
            imageBW: traderbw
        },

    ]
    return(
        <Stack
        spacing='8'
        direction='row'
        width='100%'
        >
       {marcas.map(marca =>{
           return <MarcaItem image={marca.image} imageBW={marca.imageBW}/>
       })}
        </Stack>
    )

}