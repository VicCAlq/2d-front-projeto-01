import { useState } from "react"; 
import Pedro from "../assets/Pedro.png"; 
import Yasmin from "../assets/Yasmin-removebg-preview.png"; 
import Miguel from "../assets/Miguel-removebg-preview.png"; 
import Thiago from "../assets/Thiago.png"; 

const estilos = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginLeft: "20px"
  },

  figure: {
    display: "flex",
    alignItems: "center", 
    gap: "20px"
  },

  imagens: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "50%",
  },

  texto: {
    color: "#818181"
  }
}
 
 export default function Conteudo({}){
    
    return(<> 
    <div style={estilos.container}> 
        <figure style={estilos.figure}>
        <img src={Pedro} alt="imagem de Pedro" style={estilos.imagens}/>
            <figcaption style={estilos.texto}>
                <h2>Pedro Benício</h2>
                <p>Desenvolvedor Front-end</p>
                <p>Responsável pela produção do Componente "Botao"</p>
            </figcaption>
         </figure> 

        <figure style={estilos.figure}> 
        <img src={Yasmin} alt="imagem de Yasmin" style={estilos.imagens}/>
         <figcaption style={estilos.texto}>
            <h2>Yasmin Rocha</h2>
            <p>Desenvolvedor Front-end</p>
            <p>Responsável pela produção do Componente "Rodape"</p>
         </figcaption> 
         </figure>

          <figure style={estilos.figure}> 
                <img src={Miguel} alt="imagem de Miguel" style={estilos.imagens}/> 
                <figcaption style={estilos.texto}>
                    <h2>Miguel Angelo</h2>
                    <p>Desenvolvedor Front-end</p>
                    <p>Responsável pela produção do Componente "Cards"</p>
                </figcaption>
            </figure>
            

        <figure style={estilos.figure}>
            <img src={Thiago} alt="imagem de Thiago" style={estilos.imagens}/>
            <figcaption style={estilos.texto}>
                <h2>Thiago Oliveira</h2>
                <p>Desenvolvedor Front-end</p>
                <p>Responsável pela produção do Componente "Menu"</p>
            </figcaption> 
        </figure>
                        
                         
                         
        <figure style={estilos.figure}>
            <img src="src/assets/michel.png" alt="imagem de Michel" style={estilos.imagens}/>
            <figcaption style={estilos.texto}>
                <h2>Michel Nacimento</h2>
                <p>Desenvolvedor Front-end</p>
                <p>Responsável pela produção do Componente "Conteudo"</p>
            </figcaption> 
        </figure> 
    </div>
</>) }
