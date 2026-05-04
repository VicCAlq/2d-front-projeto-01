import { useState } from 'react'
import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'
import Menu from './components/Menu.jsx'
import Card from './components/Card.jsx'
import Conteudo from './components/Conteudo.jsx'
import { styles } from './styles/main.js'
import arthurImg from './assets/avatars/arthur.jpeg'
import biancaImg from './assets/avatars/bianca.jpeg'
import clariceImg from './assets/avatars/clarice.jpeg'
import joaoImg from './assets/avatars/joao.jpeg'
import matheusImg from './assets/avatars/matheus.png'


const estudantes = [
  {
    id: 'arthur',
    nome: 'Arthur',
    avatar: arthurImg,
    muitoFacil: 'let musicaFavorita = "Dollhouse".',
    muitoDificil: 'function buscarTravaLinguasComPalavra(palavra){let novaLista = [] let i = 0 while (i < travaLinguas.length) {if (travaLinguas[i].includes(palavra)){novaLista.push(travaLinguas[i])} i++}return novaLista}',
    entendeu: 'let pedras = [] pedras.concat("quartzo", "basalto", "granito") pedras.reverse() pedras.push("calcário", "mármore", "mica") pedras.reverse()',
    naoAjudou: 'const resposta02 = frutas[frutas.length-1]',
  },
  {
    id: 'bianca',
    nome: 'Bianca',
    avatar: biancaImg,
    muitoFacil: 'const cemReaisEmBarrasDeOuro = true',
    muitoDificil: 'let acumulador = 0 let neg = []for (i = -100;i >= -1; i--) {  if (i % 2 == 0) {neg.push(i)}} for (let soma of neg) { acumulador += soma}',
    entendeu: 'class UmBesouro {}',
    naoAjudou: 'let resultado09 = frutas let temp2 = resultado09[1] resultado09[1] = resultado09[3] resultado09[3] = resultado09[5] resultado09[5] = temp2',
  },
  {
    id: 'clarice',
    nome: 'Clarice',
    avatar: clariceImg,
    muitoFacil: 'let tartarugasVoamVerdadeOuNao = false',
    muitoDificil: 'let array = [] for (i = 0; i < itensDomesticos.length; i++) {if (itensDomesticos[i].toLowerCase.startsWith("a")) {array.push(i)}}ista ordenada com while: precisei revisar o passo a passo várias vezes.',
    entendeu: 'frutas[frutas.length] = "limão"',
    naoAjudou: 'animais.reverse() let z = animais.shift() animais.push(z) let x = animais.shift() animais.push(x) let y = animais.shift() animais.push(y)',
  },
  {
    id: 'joao',
    nome: 'João',
    avatar: joaoImg,
    muitoFacil: 'let soma = 0 for (i = 0; i <= 100; i++) {soma += i}',
    muitoDificil: 'let pedras = [] pedras.concat("quartzo", "basalto", "granito") pedras.reverse() pedras.push("calcário", "mármore", "mica") pedras.reverse()',
    entendeu: 'let listaNova = [pedras.pop() pedras.pop() pedras.pop() pedras.pop() pedras.pop() pedras.pop()]',
    naoAjudou: 'function dobro (n) {return n * n}',
  },
  {
    id: 'matheus',
    nome: 'Matheus',
    avatar: matheusImg,
    muitoFacil: 'let cincoPatinhosForamPassear = true',
    muitoDificil: 'let reversa = [] let acc1 = nomes.length - 1 while  (acc1 >= 0){acc--reversa.push(reversa[acc1])}',
    entendeu: 'let nomeDaSuaEscola = ("ETE Cícero Días")',
    naoAjudou: 'novaLista = [] for (let pets of petsExoticos){for (let letras of pets){if (letras == "r") {novaLista.push(pets)}}}',
  }
]

const membrosDoTime = [
  { nome: 'Arthur', role: 'Desenvolveu o componente Botao, as funções do APP.jsx. e o style' },
  { nome: 'Bianca', role: 'Desenvolveu o componente Card e organizou o layout da página principal.' },
  { nome: 'Clarice', role: 'Desenvolveu o componente Conteudo e o componente Cabecalho.' },
  { nome: 'João', role: 'Desenvolveu o componente Menu e implementou a lógica de navegação.' },
  { nome: 'Matheus', role: 'Desenvolveu o componente Rodape e implementou a lógica de exibição de informações.' }
]

const urlDoRepositorio = 'https://github.com/VicCAlq/2d-front-projeto-01/tree/2-JoaoPedro-ArthurMachado-Clarice-MatheusGuilherme-Bianca'
const autores = 'Arthur, Bianca, Clarice, João e Matheus'

export default function App() {
  const [page, setPage] = useState('principal')
  const [selectedId, setSelectedId] = useState(estudantes[0].id)

  const estudantesSelecionados = estudantes.find((estudante) => estudante.id === selectedId) ?? estudantes[0]

  return (
    <div style={styles.app}>
      <Cabecalho page={page} onChangePage={setPage} />
      <main style={page === 'sobre' ? { ...styles.pageMain, display: 'flex', justifyContent: 'center', alignItems: 'center' } : styles.pageMain}>
        {page === 'principal' ? (
          <>
            <Menu estudantes={estudantes} selectedId={selectedId} onSelectEstudante={setSelectedId} />
            <Card conteudo={estudantesSelecionados} />
          </>
        ) : (
          <Conteudo time={membrosDoTime} />
        )}
      </main>
      <Rodape urlDoRepositorio={urlDoRepositorio} autores={autores} />
    </div>
  )
}
