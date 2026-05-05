import { useState } from "react";

const estilos ={
    creditos: {


    margin: "30px 1px 1px 0px",


padding: "20px",
    backgroundColor: "#273250",
    display: "flex",

    
    flexDirection: "column", 

    
    justifyContent: "center",
    alignItems: "center",
    }
}
export default function Creditos() {


    return(<>
        <footer style={estilos.creditos}>
            
            <br /><p>Git Hub :
                 <a href="https://github.com/VicCAlq/2d-front-projeto-01/tree/3-GabrielLeal-BrendhaPriscilla-GustavoHenrique-Caua-BrenoCosta" 
                 target="_blank" >
                    Projeto Front-end do primeiro Trimestre
                    </a></p>
                    <p style={{color:"silver"}}>Contribuentes: gabriel leal, Caua rafael,
            Gustavo Henrique, <br/>Brendha priscilla, Breno costa</p>
            <h2>"Obrigado pela sua atençao!"</h2>
        </footer>
    </>)
}