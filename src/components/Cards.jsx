import { useState } from "react";
const estilos={
    botao:{
        backgroundColor: "#248",
  color: "#ddd",
  borderRadius: "1000px", 
  padding: "10px",
  width: "100%",
  height: "50px"
    }
 
}
 const Codigos ={
    pedro: "Código do Pedro",
    yasmin: "Código da Yasmin",
    miguel: "Código do Miguel",
    tiago: "Código do Tiago",
    michel: "Código do Michel"
 }
export default function Cards({ nome, voltar }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <h1>Sobre o código do {nome}</h1>
         <p>Aqui vai uma descrição do código escolhido pelo {nome}.</p>
         <p>{Codigos[nome]}</p>
      <button onClick={voltar} style={estilos.botao}>
        Voltar
      </button>
    </div>
  )
}