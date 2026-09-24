import fundo from "./assets/fundo_GourmetOn.png"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Apresentacao from "./components/Apresentacao"
import Funcionalidades from "./components/Funcionalidades"
import Pratos from "./components/Pratos"
import Depoimentos from "./components/Depoimentos"
import Contato from "./components/Contato"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${fundo})`, backgroundPosition: "right top", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        className="min-h-screen bg-[#F5EEE5]"
      >
        <Header/>
        <Hero/>
      </div>

      <Apresentacao/>
      <Funcionalidades/>
      <Pratos/>
      <Depoimentos/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App