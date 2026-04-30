import { useState } from "react";

const estilos ={
    rodape: {
        margin: "20px 0px 0px 0px",
        backgroundColor: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}
export default function Rodape() {
    return(<>
        <footer style={estilos.rodape}>
            <p>Criado por: Pedro Benício, Miguel Angelo,
           <br /> Michel Nascimento, Tiago de Oliveira, Yasmin Rocha</p>
            <br /><p>Git Hub :
                 <a href="https://github.com/VicCAlq/2d-front-projeto-01/tree/1-Yasmin-Thiago-Benicio-Michel-Miguel" 
                 target="_blank" >
                    Projeto de Front-end 1º Trimestre
                    </a></p>
        </footer>
    </>)
}