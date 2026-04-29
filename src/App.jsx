import './App.css'
import { useState } from "react";
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import Botao from './components/botao'

const estilos={
   botao: {
    backgroundColor: "#248",
    color: "#ddd",
    borderRadius: "5px",
    padding: "10px",
    margin: "5px",
    width: "150px",
    height: "50px",
  }
}

export default function App() {
  const paginaInicial = <>
    <h1>Vamos ver nosso códigos aqui</h1>
    <p>Para Saber mais sobre os códigos escolhidos, clique nas fotos abaixo:</p>
    <Botao texto="Clique aqui" estilo={estilos.botao}
    
    />
  </>

  const paginaEquipe = <>
    <h1>Sobre a equipe em construção</h1>
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

      

      <Rodape />
    </>
  )
}
