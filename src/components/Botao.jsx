import { styles } from '../styles/main';

export default function Botao({ aluno, aoClicar }) {
  return (
    <button 
      style={styles.botaoAluno} 
      onClick={aoClicar}
    >
      <img src={aluno.foto} alt={aluno.nome} style={styles.foto} />
      <span style={{ margin: 0 }}>{aluno.nome}</span>
    </button>
  );
}