import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Apresentacao from './components/Apresentacao'
import Funcionalidades from './components/Funcionalidades'
import Pratos from "./components/Pratos"
import Depoimentos from "./components/Depoimentos"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Apresentacao />
      <Funcionalidades />
      <Pratos />
      <Depoimentos />
    </div>
  )
}

export default App
