import './App.css'
import { useState } from "react";
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Botao from './components/Botao'
import Cards from './components/Cards'
import Conteudo from './components/Conteudo'

export default function App() {

  const [pagina, setPagina] = useState("inicial");

  return (<>
      <Cabecalho 
        pagina={pagina}
        mudarPagina={setPagina}
      />

      {pagina === "inicial" && (
        <>
          <h1>Vamos ver nossos códigos aqui</h1>
          <p>Clique nas fotos abaixo:</p>

          <Botao mudarPaginaCod={setPagina} />
        </>
      )}

      {pagina === "equipe" && (
        <div>
          <h1>Sobre a equipe em construção</h1>
          <Conteudo/>
        </div>
      )}

      {["pedro","yasmin","miguel","tiago","michel"].includes(pagina) && (
        <Cards
          nome={pagina}
          voltar={() => setPagina("inicial")}
        />
      )}

      <Rodape />
    </>
  )
}