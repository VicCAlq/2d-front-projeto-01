import React from "react";

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
    borderRadius: "50px",
    padding: "10px",
    margin: "5px",
  }
}

export default function Cabecalho({ pagina, mudarPagina }) {
  return (
    <header style={estilos.cabecalho}>
      
      <button 
        style={{
          ...estilos.botao,
          backgroundColor: pagina === "inicial" ? "#248" : "#777"
        }} 
        onClick={() => mudarPagina("inicial")}
      >
        Página inicial
      </button>

      <button
        style={{
          ...estilos.botao,
          backgroundColor: pagina === "equipe" ? "#248" : "#777"
        }}  
        onClick={() => mudarPagina("equipe")}
      >
        Sobre a equipe
      </button>

    </header>
  );
}