import { useState } from "react";
import Pedro from "../assets/Pedro.png";
import Yasmin from "../assets/Yasmin-removebg-preview.png";
import Miguel from "../assets/Miguel-removebg-preview.png";
import Tiago from "../assets/Tiago.png";

const estilos={
    imagens:{
       width:"300px", 
       height: "300px",       
    objectfit: "cover", 
    borderradius: "50%",
    },
    botao:{
    background: "none",
    border: "none",      
    padding: "0",       
    cursor: "pointer",     
    }
}
   
export default function Cards({paginaProjetosPedro,paginaInicial,mudarcodigo}){
     const [tela, setTela] = useState("home");

    return(<>
    <figure>
        <button style={estilos.botao}>
            <img src={Pedro} alt="imagem de Pedro" style={estilos.imagens}  onClick={() => setTela("codigos")}/>
            <figcaption><h2>Pedro Benício</h2></figcaption>
        </button>
    </figure>

     <figure>
        <button style={estilos.botao}>
            <img src={Yasmin} alt="imagem de Yasmin" style={estilos.imagens}/>
            <figcaption><h2>Yasmin Rocha</h2></figcaption>
        </button>
    </figure>

     <figure>
        <button style={estilos.botao}>
            <img src={Miguel} alt="imagem de Miguel" style={estilos.imagens}/>
            <figcaption><h2>Miguel Angelo</h2></figcaption>
        </button>
    </figure>

     <figure>
        <button style={estilos.botao}>
            <img src={Tiago} alt="imagem de Tiago" style={estilos.imagens}/>
            <figcaption><h2>Tiago Oliveira</h2></figcaption>
        </button>
    </figure>

     <figure>
        <button style={estilos.botao}>
            <img src="src/assets/michel.png" alt="imagem de yasmin" style={estilos.imagens}/>
            <figcaption><h2>Michel Nacimento</h2></figcaption>
        </button>
    </figure>
    
    </>)
}