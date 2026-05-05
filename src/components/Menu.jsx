import { styles } from '../styles/main';
import Botao from './Botao';

export default function Menu({ alunos, setAlunoSelecionado }) {
  return (
    <div style={styles.listaAlunos}>
      {alunos.map((aluno, index) => (
        <Botao 
          key={index} 
          aluno={aluno} 
          aoClicar={() => setAlunoSelecionado(aluno)} 
        />
      ))}
    </div>
  );
}