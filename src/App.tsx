import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';
import { Home } from './pages/Home';


function App() {

    return (

        <BrowserRouter>
        <ChakraProvider theme={theme}>
        <Route path='/' component={Home} />
        </ChakraProvider>
        </BrowserRouter>
    )
}

export default App;