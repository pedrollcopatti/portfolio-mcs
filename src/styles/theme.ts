import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    styles: {
        global:{
            body: {
                bg: 'pallete.white',
                color: 'pallete.black'
            }
        }
    },
    colors: {
        pallete: {
            "black": '#222426',
            "gray": '#6C7480',
            "white": '#F0F3F7',
            "green": '#52CC56',
            "red": '#CC5252',
            "alt": '#4588E5',
        }
    },
    fonts:{
        body: 'Montserrat',
        heading: 'Montserrat',
        monospace: 'Inconsolata',
    }
})