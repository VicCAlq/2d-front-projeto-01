import './App.css'
import { useState } from "react";
import Cabecalho from './components/Cabecalho'
import Menu from './components/Menu';
import Botao from './components/Botao'; 
import Card from './components/Card';  
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';

export default function App() {
  const [paginaAtual, setPaginaAtual] = useState('principal');
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  // Dados da Equipe
  const integrantes = [
    { 
      nome: "Gabriel Tavares", 
      descricao: "Programou o funcionamento do componente 'Botao' e a lógica de troca de alunos.",
      foto: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      codigoFacil: "(exercicio-funcoes) Questão 9 - function contarElementos(elementos){.  return elementos.length. }. export const resposta09 = contarElementos",
      codigoDificil: "(exercicio-funcoes) Questão 8 - function buscarTravaLinguasComPalavra(palavra){. let indice = 0. let novaLista = []. while (indice < travaLinguas.length). {. if (travaLinguas[indice].includes(palavra)){. novaLista.push(travaLinguas[indice]). }. indice++. }. return novaLista. }. export const resposta08 = buscarTravaLinguasComPalavra",
      codigoAjudou: "(exercicio-funcoes) Questão 7 - function contarPalavrasTravaLingua(numero){. return travaLinguas[numero].split(' ').length. }. export const resposta07 = contarPalavrasTravaLingua",
      codigoNaoAjudou: "(exercicio-listas-metodos) Questão 11 - let pedras = []. pedras = pedras.concat(['quartzo', 'basalto', 'granito']). pedras.reverse(). pedras.push('calcário', 'mármore', 'mica'). pedras.reverse(). export const resposta11 = pedras"
    },
    { 
      nome: "Gabriel Cavalcanti", 
      descricao: "Criou e programou os componentes 'Menu' e 'Card'.",
      foto: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      codigoFacil: "(exercicio-listas-metodos) Questão 2 - const itemRemovido = profissoes.pop(). export const resposta02 = itemRemovido",
      codigoDificil: "(exercicio-laços-for) Questão 5 - let contador4 = 0. const objetos0 = []. for (let items1 of itensDomesticos) {. if (items1.startsWith('c')) {. objetos0[contador4] = items1. contador4++. }. }. export const resposta05 = objetos0",
      codigoAjudou: "(exercicio-funcoes) Questão 3 - function ehPositivo(numero){. if (numero >= 0) {. return true. } else if (numero <= 0){. return false. }.  }. export const resposta03 = ehPositivo",
      codigoNaoAjudou: "(exercicio-laços-while) Questão 7 - let ind = 0;. const terceiraLista = [];. let elemeto = nomes.length - 1;. while(ind <= elemento){. if(nomes[ind].length <= 5){ . terceiraLista.push(nomes[ind]); . }. ind++;. }. console.log(terceiraLista);. export const resposta07 = terceiraLista;"
    },
    { 
      nome: "Luanna Carla", 
      descricao: "Criou e integrou o componente 'Conteudo' e 'Rodape' ao código.",
      foto: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      codigoFacil: "(exercicio-listas-indices) Questão 4 - frutas[frutas.length-1]='limão';. export const resposta04 = frutas",
      codigoDificil: "(exercicio-listas-indices) Questão 9 - export const resposta08 = soma;. numeros;[numeros[1],numeros[4]]=[numeros[4],numeros[1]];. numeros;[numeros[3],numeros[6]]=[numeros[6],numeros[3]];. numeros;[numeros[5],numeros[1]]=[numeros[1],numeros[5]];. export const resposta09 = numeros",
      codigoAjudou: "(exercicio-listas-indices) Questão 5 - export const resposta08 = soma;. numeros;[numeros[1],numeros[4]]=[numeros[4],numeros[1]];. numeros;[numeros[3],numeros[6]]=[numeros[6],numeros[3]];. numeros;[numeros[5],numeros[1]]=[numeros[1],numeros[5]];. export const resposta09 = numeros",
      codigoNaoAjudou: "(exercicio-listas-indices) Questão 7 - numeros;[numeros[0],numeros[6]]=[numeros[6],numeros[0]];. numeros;[numeros[1],numeros[6]]=[numeros[6],numeros[1]];. numeros;[numeros[2],numeros[6]]=[numeros[6],numeros[2]];. numeros;[numeros[3],numeros[6]]=[numeros[6],numeros[3]];. numeros;[numeros[4],numeros[6]]=[numeros[6],numeros[4]];. numeros;[numeros[5],numeros[6]]=[numeros[6],numeros[5]];. export const resposta07 = numeros"
    },
    { 
      nome: "André Ricardo", 
      descricao: "Criou e ajustou os estilos na 'main.js'",
      foto: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      codigoFacil: "(exercicio-funcoes) Questão 1 - function saudacao(){. console.log('Bom dia!'). }. export const resposta01 = saudacao",
      codigoDificil: "(exercicio-laços-while) Questão 9 - let nomesVogais = []. let i09 = 0. while (i09 < nomes.length){. if(nomes[i09][0] === 'A'){. nomesVogais.push(nomes[i09]). }. if(nomes[i09][0] === 'E'){. nomesVogais.push(nomes[i09]). }. if(nomes[i09][0] === 'I'){. nomesVogais.push(nomes[i09]). }. if(nomes[i09][0] === 'O'){. nomesVogais.push(nomes[i09]). }. if(nomes[i09][0] === 'U'){. nomesVogais.push(nomes[i09]). }. i09++. }. export const resposta09 = nomesVogais",
      codigoAjudou: "(exercicio-funcoes) Questão 8 - function buscarTravaLinguasComPalavra(palavra){. let novaLista = []. let indice = 0. while(indice < travaLinguas.length){. if(travaLinguas[indice].includes(palavra)){. novaLista.push(travaLinguas[indice]). }. indice++. }. return novaLista. }. export const resposta08 = buscarTravaLinguasComPalavra",
      codigoNaoAjudou: "(exercicio-laços-for) Questão 12 - let petComS = 'não encontrado'. for(let pet of petsExoticos){. if(pet[0] === 's' && petComS === 'não encontrado'){. petComS = pet. }. }. export const resposta12 = petComS"
    },
    { 
      nome: "Waldemir Viegas", 
      descricao: "Criou e programou o componente 'Cabecalho' e a navegação entre páginas.",
      foto: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      codigoFacil: "(exercicio-funcoes) Questão 2 - function dobro(numero){. return numero * 2. }. export const resposta02 = dobro",
      codigoDificil: "(exercicio-funcoes) Questão 10 - function buscarPorNumeroAtomico(elementos, numeroAtomico){. if(elementos[numeroAtomico - 1] !== undefined){. return elementos[numeroAtomico - 1]. } else {. return null. }. }. export const resposta10 = buscarPorNumeroAtomico",
      codigoAjudou: "(exercicio-listas-indices) Questão 10 - const novaLista = [numeros[numeros.length - 1], numeros[numeros.length - 2], numeros[numeros.length - 3]]. export const resposta10 = novaLista",
      codigoNaoAjudou: "(exercicio-listas-indices) Questão 7 - tempo = numeros[6]. let tempoDois = numeros[5]. let tempoTres = numeros[4]. let tempoQuatro = numeros[3]. let tempoCinco = numeros[2]. let tempoSeis = numeros[1]. numeros[1] = numeros[0]. numeros[0] = tempo. numeros[2] = tempoSeis. numeros[3] = tempoCinco. numeros[4] = tempoQuatro. numeros[5] = tempoTres. numeros[6] = tempoDois. export const resposta07 = numeros"
    }
  ];

  return (
    <>
      
      <Cabecalho setPagina={setPaginaAtual} />

      {paginaAtual === 'principal' && (
        <main>
          <Menu>
            {integrantes.map((aluno) => (
              <Botao 
                key={aluno.nome}
                nome={aluno.nome} 
                foto={aluno.foto} 
                onClick={() => setAlunoSelecionado(aluno)} 
              />
            ))}
          </Menu>

          {alunoSelecionado && (
            <section className="vitrine-codigos">
              <h2>Códigos de {alunoSelecionado.nome}</h2>
              <Card questao="Muito Fácil" dificuldade="Fácil" codigo={alunoSelecionado.codigoFacil} />
              <Card questao="Muito Difícil" dificuldade="Difícil" codigo={alunoSelecionado.codigoDificil} />
              <Card questao="Ajudou A Entender Muita Coisa" dificuldade="Médio" codigo={alunoSelecionado.codigoAjudou} />
              <Card questao="Não Ajudou A Entender Nada" dificuldade="Não Entendi" codigo={alunoSelecionado.codigoNaoAjudou} />
            </section>
          )}
        </main>
      )}

      {/* Se a página for sobre a equipe... */}
      {paginaAtual === 'equipe' && (
        <Conteudo listaAlunos={integrantes} />
      )}
      <Rodape/>
    </>
  );
}