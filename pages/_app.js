import '../styles/globals.css'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#5661f5',
    800: '#5664f0',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })




function MyApp({ Component, pageProps }) {
  return(
    <>
    <ChakraProvider theme={theme}>
    <Component {...pageProps} />
    </ChakraProvider>
    
    </>
  )
}

export default MyApp
