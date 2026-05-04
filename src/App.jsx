import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Menu from "./components/Menu";
import Card from "./components/Card";
import Conteudo from "./components/Conteudo";
import "./App.css";

export default function App() {
  const [pagina, setPagina] = useState("home");
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  const alunos = [
    {
      nome: "Livia Morais",
      
     codigos: [
  {
    titulo: "Muito fácil",
    conteudo: `const frutas = ["maçã","banana","laranja"];
const resposta01 = frutas[1];`
  },
  {
    titulo: "Muito difícil",
    conteudo: `let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}`
  },
  {
    titulo: "Aprendi muito",
    conteudo: `function dobro(n){
  return n * 2;
}`
  },
  {
    titulo: "Não entendi",
    conteudo: `array.map(x => x * 2)`
  }
]
    },

    {
      nome: "David Ludovico",
      foto: "https://via.placeholder.com/50",
     codigos: [
  {
    titulo: "Muito fácil",
    conteudo: `const ultimo = lista[lista.length - 1];`
  },
  {
    titulo: "Muito difícil",
    conteudo: `let soma = 0;
for (let i = -100; i <= -1; i++) {
  if (i % 2 === 0) {
    soma += i;
  }
}`
  },
  {
    titulo: "Aprendi muito",
    conteudo: `function nomeCompleto(a,b){
  return a + " " + b;
}`
  },
  {
    titulo: "Não entendi",
    conteudo: `filter(x => x > 10)`
  }
]
    },

    {
      nome: "Petrus Guilherme",
     
      codigos: [
  {
    titulo: "Muito fácil",
    conteudo: `const x = 10;`
  },
  {
    titulo: "Muito difícil",
    conteudo: `let temp = frutas[2];
frutas[2] = frutas[5];
frutas[5] = temp;`
  },
  {
    titulo: "Aprendi muito",
    conteudo: `function ehPositivo(n){
  return n > 0;
}`
  },
  {
    titulo: "Não entendi",
    conteudo: `includes("texto")`
  }
]
    },

    {
      nome: "Jennifer Marielle",
      foto: "https://via.placeholder.com/50",
    codigos: [
  {
    titulo: "Muito fácil",
    conteudo: `const soma = a + b;`
  },
  {
    titulo: "Muito difícil",
    conteudo: `while(i < lista.length){
  i++;
}`
  },
  {
    titulo: "Aprendi muito",
    conteudo: `function saudacao(){
  return "Bom dia!";
}`
  },
  {
    titulo: "Não entendi",
    conteudo: `split(" ")`
  }
]
    },

    {
      nome: "Eduardo Cristiano",
     
      codigos: [
  {
    titulo: "Muito fácil",
    conteudo: `const numeros = [1,2,3];
const primeiro = numeros[0];`
  },
  {
    titulo: "Muito difícil",
    conteudo: `let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
numeros[numeros.length] = soma;`
  },
  {
    titulo: "Aprendi muito",
    conteudo: `function contar(lista){
  return lista.length;
}`
  },
  {
    titulo: "Não entendi",
    conteudo: `elementos.filter(e => e.numeroAtomico % 2 === 0)`
  }
]
    }
  ];

 
const equipe = [
  {
    nome: "Livia",
    funcao: "Programou o Menu e Botao",
    foto: "/livia.png"
  },
  {
    nome: "Jennifer Marielle",
    funcao: "Criou o Card e exibiu os códigos",
    foto: "/mariele.png" 
  },
  {
    nome: "Petrus Guilherme",
    funcao: "Implementou a lógica do App e navegação",
    foto: "/petrus.png"
  },
  {
    nome: "Eduardo Cristiano",
    funcao: "Criou o Conteudo (página sobre equipe)",
    foto: "/eduardo.png"
  },
  {
    nome: "David Ludovico",
    funcao: "Fez o Rodape e organização geral",
    foto: "/david.png"
  }
];

  return (
   <>
  <div className="stars"></div>

  <Cabecalho setPagina={setPagina} />

  {pagina === "home" && (
    <>
      <Menu alunos={alunos} selecionarAluno={setAlunoSelecionado} />

      {alunoSelecionado &&
        alunoSelecionado.codigos.map((c, i) => (
          <Card key={i} codigo={c} />
        ))}
    </>
  )}

  {pagina === "sobre" && <Conteudo equipe={equipe} />}

  <Rodape />
</>
  );
}
