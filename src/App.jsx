import './App.css'
import { useState } from "react";
import Cabecalho from './components/Cabecalho'

export default function App() {
  const paginaInicial = <>
    <h1>Vamos criar nosso projeto aqui</h1>
  </>

  const paginaEquipe = <>
    <h3>Sobre a equipe em construção</h3>
  </>

  const [conteudo, setConteudo] = useState(paginaInicial)

  return (
    <>
      <Cabecalho
        paginaInicial={paginaInicial}
        paginaEquipe={paginaEquipe}
        mudarPagina={setConteudo}
      />
      {conteudo}
    </>
  )
}