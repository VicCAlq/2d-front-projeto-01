import { useState } from 'react'
import { alunos } from './data/alunos'
import { styles } from './styles/main'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Menu from './components/Menu'
import Conteudo from './components/Conteudo'
import Card from './components/Card'
import './App.css'





function App() {
  const [pagina, setPagina] = useState('principal')

  const [alunoSelecionado, setAlunoSelecionado] = useState (null)



  return (
    <div style={styles.tudo}>
      <Cabecalho setPagina={setPagina} />
      
      <main style={styles.conteudos}>
        {pagina === 'principal' && (
          <div style={styles.principalposicao}>
            <h2>Integrantes da Equipe</h2>
            <Menu 
              alunos={alunos} 
              setAlunoSelecionado={setAlunoSelecionado} 
            />
            <Card aluno={alunoSelecionado} />
          </div>
        )}

{pagina === 'sobre' && <Conteudo />}
      </main>
      <Rodape /> {}
    </div>
  )
}

export default App