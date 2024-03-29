import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Rodape from "./Components/Rodape";
import ContadorPage from "./pages/ContadorPage/ContadorPage";
import ErrorPage from "./pages/ErrorPage";
import SobrePage from "./pages/SobrePage";
import SobreMimPage from "./pages/SobrePage/SobreMimPage";
import SobrePretaLabPage from "./pages/SobrePage/SobrePretaLabPage";
import PokemonPage from "./pages/PokemonPage";
import EnderecoPage from "./pages/EnderecoPage";
import EstudantesPage from "./pages/InicioPage";
import "./global.css";
function App() {
  return (
    <>
      <Header />

      <div style={{ marginBottom: "130px" }}>
        <Routes>
          <Route path="/" element={<SobreMimPage />} />
          <Route path="/estudantes" element={<EstudantesPage />} />
          <Route path="/contador" element={<ContadorPage />} />
          <Route path="/pokemons" element={<PokemonPage />} />
          <Route path="/endereco" element={<EnderecoPage />} />
          <Route path="/sobre">
            <Route index element={<SobrePage />} />
            <Route path="mim" element={<SobreMimPage />} />
            <Route path="preta-lab" element={<SobrePretaLabPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <Rodape mensagem=" Continue a nadar <3" />
    
    </>
  )
}

export default App;