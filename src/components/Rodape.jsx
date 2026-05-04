import { useState } from "react";

const estilos ={
    rodape: {
    margin: "20px 0px 0px 0px",
    backgroundColor: "#222",
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center",
    }
}
export default function Rodape() {
    return(<>
        <footer style={estilos.rodape}>
            
            <br /><p>Git Hub :
                 <a href="https://github.com/VicCAlq/2d-front-projeto-01/tree/1-Yasmin-Thiago-Benicio-Michel-Miguel" 
                 target="_blank" >
                    Projeto de Front-end 1º Trimestre
                    </a></p>
                    <p style={{color:"gold"}}>Criado por: Pedro Benício, Miguel Angelo,
            Michel Nascimento, <br/>Thiago de Oliveira, Yasmin Rocha</p>
        </footer>
    </>)
}