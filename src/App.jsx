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
    muitoFacil: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    muitoDificil: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    entendeu: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    naoAjudou: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
    muitoFacil: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    muitoDificil: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    entendeu: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    naoAjudou: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'matheus',
    nome: 'Matheus',
    avatar: matheusImg,
    muitoFacil: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    muitoDificil: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    entendeu: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    naoAjudou: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
