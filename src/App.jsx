import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Apresentacao from './components/Apresentacao'
import Funcionalidades from './components/Funcionalidades'
import Pratos from "./components/Pratos"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Apresentacao />
      <Funcionalidades />
      <Pratos />
    </div>
  )
}

export default App
