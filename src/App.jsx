import './App.css'
import { useState } from "react";
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Botao from './components/Botao'
import Cards from './components/Cards'


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
  ,botaoCentro: {
    
  /*display: "flex",
  justifyContent: "center",
  alignItems: "center"*/
  backgroundColor: "#248",
  color: "#ddd",
  borderRadius: "1000px", 
  padding: "10px",
 
  }
}

export default function App() {

  const paginaInicial = <>
    <h1>Vamos ver nosso códigos aqui</h1>
    <p>Para Saber mais sobre os códigos escolhidos, clique nas fotos abaixo:</p>
    
  </>

  const paginaEquipe = <>
    <h1>Sobre a equipe em construção</h1>
  </>

  


 const [pagina, setPagina] = useState("inicial")

  return (
    <>
      <Cabecalho mudarPagina={setPagina} />

      {pagina === "inicial" && (
        <>
          <h1>Vamos ver nossos códigos aqui</h1>
          <p>Clique nas fotos abaixo:</p>

          <Botao mudarPaginaCod={setPagina} />
        </>
      )}

      {pagina === "equipe" && (
        <h1>Sobre a equipe em construção</h1>
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

