import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Header from './Componentes/Header'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header/>
      </div>
    </ChakraProvider>
  )
}

export default App
