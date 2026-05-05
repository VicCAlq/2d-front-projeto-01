import { styles } from '../styles/main';


export default function Card({ aluno }) {

  if (!aluno) {
    return <p>Selecione um aluno</p>
  }

  return (
    <div style={styles.card}>
      <h2>{aluno.nome}</h2>
      <pre>{aluno.codigo}</pre>
    </div>
  )
}


