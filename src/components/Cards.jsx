import { useState } from "react";
const estilos={
    botao:{
  backgroundColor: "#248",
  color: "#ddd",
  borderRadius: "1000px", 
  padding: "10px",
  width: "60%",
  height: "50px"
    },
  letras: {
  backgroundColor: "#1e1e1e", 
  borderLeft: "4px solid #ff8c00", 
  borderRadius: "5px", 
  padding: "15px 20px", 
  margin: "10px 0", 
  fontFamily: "Arial, sans-serif",
  color: "#d4d4d4",
  lineHeight: "1.6",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
}
 
}
const Codigos = {
  pedro: (
    <p>
      <strong>Uma questão que achei muito fácil</strong> <br />
      <p style={estilos.letras}>
        <code>export const resposta09 = "fido" != "snoopy"</code>
      </p>
      <br />

      <strong>Uma questão que achei muito difícil</strong> <br />
      <p style={estilos.letras}>
        <code>
          "let indice3 = 0;<br />
          let e = nomes.length;<br />
          const segundaLista = [];<br /><br />

          while(indice3 &lt; e)&#123;<br />
          &nbsp;&nbsp;if(indice3 % 2 === 0)&#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;segundaLista.push(nomes[indice3]);<br />
          &nbsp;&nbsp;&#125;<br />
          &nbsp;&nbsp;indice3++;<br />
          &#125;<br /><br />

          console.log(segundaLista);<br />
          export const resposta06 = segundaLista;"
        </code>
      </p>

      <strong>Uma questão que o ajudou a entender muita coisa</strong> <br />
      <p style={estilos.letras}>
        <code>
          "const itensDomesticosComC = [];<br />
          for(let i = 0; i &lt; itensDomesticos.length; i++)&#123;<br />
          &nbsp;&nbsp;if(itensDomesticos[i].startsWith(&quot;c&quot;))&#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;itensDomesticosComC.push(itensDomesticos[i]);<br />
          &nbsp;&nbsp;&#125;<br />
          &#125;<br /><br />
          export const resposta05 = itensDomesticosComC;"
        </code>
      </p>

      <strong>Uma questão que não ajudou a entender nada</strong>
      <p style={estilos.letras}>
        <code>export const gatoRachado = "Kiki"</code>
      </p>
    </p>
  ),

  yasmin: (
    <p>
      <strong>Uma questão que achei muito fácil</strong> <br />
      <p style={estilos.letras}>
        <code>
          "const frutas =[&quot;maçã&quot;,&quot;banana&quot;,&quot;laranja&quot;,&quot;uva&quot;, &quot;pêra&quot;, &quot;manga&quot;];<br /><br />
          export const resposta01 = frutas[1];"
        </code>
      </p>

      <strong>Uma questão que achei muito difícil</strong> <br />
      <p style={estilos.letras}>
        <code>
          "let soma04 = 0;<br />
          let i04 = 1;<br /><br />
          while (i04 &lt;= 100) &#123;<br />
          &nbsp;&nbsp;if (i04 % 7 === 0) &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;soma04 += i04;<br />
          &nbsp;&nbsp;&#125;<br />
          &nbsp;&nbsp;i04++;<br />
          &#125;<br /><br />
          export const resposta04 = soma04;"
        </code>
      </p>

      <strong>Uma questão que o ajudou a entender muita coisa</strong> <br />
      <p style={estilos.letras}>
        <code>
          "function ehPositivo(numero) &#123;<br />
          &nbsp;&nbsp;if (numero &gt; 0) &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return true;<br />
          &nbsp;&nbsp;&#125;<br />
          &nbsp;&nbsp;else if (numero &lt;= 0) &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return false;<br />
          &nbsp;&nbsp;&#125;<br />
          &#125;<br /><br />
          export const resposta03 = ehPositivo;"
        </code>
      </p>

      <strong>Uma questão que não ajudou a entender nada</strong>
      <p style={estilos.letras}>
        <code>
          "let petComS = &quot;não encontrado&quot;;<br />
          for (let pet of petsExoticos) &#123;<br />
          &nbsp;&nbsp;if (pet[0] === &quot;s&quot; && petComS === &quot;não encontrado&quot;) &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;petComS = pet;<br />
          &nbsp;&nbsp;&#125;<br />
          &#125;<br /><br />"
        </code>
      </p>
    </p>
  ),

  miguel: (
    <p>
      <strong>Uma questão que achei muito fácil</strong> <br />
      <p style={estilos.letras}>
        <code>Exercício de estrutura condicional</code>
      </p>

      <strong>Uma questão que achei muito difícil</strong> <br />
      <p style={estilos.letras}>
        <code>Exercício de Laços de repetição</code>
      </p>

      <strong>Uma questão que o ajudou a entender muita coisa</strong> <br />
      <p style={estilos.letras}>
        <code>Exercício de tipos de variáveis</code>
      </p>

      <strong>Uma questão que não ajudou a entender nada</strong>
      <p style={estilos.letras}>
        <code>Exercício de Laços de repetição</code>
      </p>
    </p>
  ),

  thiago: (
    <p>
      <strong>Uma questão que achei muito fácil</strong> <br />
      <p style={estilos.letras}>
        <code>
          "let b01 = 0;<br />
          let soma01 = 0;<br />
          while(b01 &lt;= 32)&#123;<br />
          &nbsp;&nbsp;soma01 = soma01 + b01;<br />
          &nbsp;&nbsp;b01++;<br />
          &#125;<br /><br />
          export const resposta01 = soma01;"
        </code>
      </p>

      <strong>Uma questão que achei muito difícil</strong> <br />
      <p style={estilos.letras}>
        <code>
          "let nomesvo = [];<br />
          let i09 = 0;<br />
          while (i09 &lt; nomes.length) &#123;<br />
          &nbsp;&nbsp;if(nomes[i09][0] === &quot;A&quot;)&#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;nomesvo.push(nomes[i09]);<br />
          &nbsp;&nbsp;&#125;<br />
          &nbsp;&nbsp;if(nomes[i09][0] === &quot;E&quot;)&#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;nomesvo.push(nomes[i09]);<br />
          &nbsp;&nbsp;&#125;<br />
          &nbsp;&nbsp;if(nomes[i09][0] === &quot;I&quot;)&#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;nomesvo.push(nomes[i09]);<br />
          &nbsp;&nbsp;&#125;<br />
          &nbsp;&nbsp;if(nomes[i09][0] === &quot;O&quot;)&#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;nomesvo.push(nomes[i09]);<br />
          &nbsp;&nbsp;&#125;<br />
          &nbsp;&nbsp;if(nomes[i09][0] === &quot;U&quot;)&#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;nomesvo.push(nomes[i09]);<br />
          &nbsp;&nbsp;&#125;<br />
          &nbsp;&nbsp;i09++;<br />
          &#125;<br /><br />
          export const resposta09 = nomesvo;"
        </code>
      </p>

      <strong>Uma questão que o ajudou a entender muita coisa</strong> <br />
      <p style={estilos.letras}>
        <code>
          "let somaNegativosPares = 0;<br />
          for(let contador2 = -2; contador2 &gt;= -100; contador2-=2)&#123;<br />
          &nbsp;&nbsp;somaNegativosPares += contador2;<br />
          &#125;<br /><br />
          export const resposta03 = somaNegativosPares;"
        </code>
      </p>

      <strong>Uma questão que não ajudou a entender nada</strong>
      <p style={estilos.letras}>
        <code>
          "let soma = 0;<br />
          let quantiti = 0;<br />
          let mdia = 0;<br />
          for(let i = 0; i &lt;= 200; i +=3)&#123;<br />
          &nbsp;&nbsp;soma += i;<br />
          &nbsp;&nbsp;quantiti++;<br />
          &#125;<br /><br />
          mdia = soma / quantiti;<br />
          export const resposta04 = media;"
        </code>
      </p>
    </p>
  ),

  michel: (
    <p>
      <strong>Uma questão que achei muito fácil</strong> <br />
      <p style={estilos.letras}>
        <code></code>
      </p>

      <strong>Uma questão que achei muito difícil</strong> <br />
      <p style={estilos.letras}>
        <code></code>
      </p>

      <strong>Uma questão que o ajudou a entender muita coisa</strong> <br />
      <p style={estilos.letras}>
        <code></code>
      </p>

      <strong>Uma questão que não ajudou a entender nada</strong>
      <p style={estilos.letras}>
        <code></code>
      </p>
    </p>
  )
};
export default function Cards({ nome, voltar }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h1>Sobre o código do {nome}</h1>
         <p>Aqui vai uma descrição do código escolhido pelo {nome}:</p>
         {Codigos[nome]}
      <button onClick={voltar} style={estilos.botao}>
        Voltar
      </button> <br />
    </div>
  )
}