import { useState } from "react";

const estilos = {
  cabecalho: {
    margin: "0px 0px 20px 0px",
    backgroundColor: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    backgroundColor: "#248",
    color: "#ddd",
    borderRadius: "200px",
    padding: "10px",
    margin: "5px",
  }
}

export default function Cabecalho({
 mudarPagina
}) {
  const [selecionado, setSelecionado] = useState("inicial")

  return(<>
    <header style={estilos.cabecalho}>
      <button 
        style={{
            ...estilos.botao,
            backgroundColor: selecionado === "inicial"
            ? "#248"
            : "#777"
        }} 
        onClick={() => {
          setSelecionado("inicial")
          mudarPagina("inicial")
        }}
      >Página inicial</button>
      



      <button
        style={{
            ...estilos.botao,
            backgroundColor: selecionado === "equipe"
            ? "#248"
            : "#777"
        }}  
        
       onClick={() => {
        setSelecionado("equipe")
        mudarPagina("equipe")
      }}>Sobre a equipe</button>

    
    </header>
  </>)
}