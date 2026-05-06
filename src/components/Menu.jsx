import styles from "../styles/main.js";
import Botao from "./Botao.jsx";

export default function Menu({ alunos, alunoAtivo, setAlunoAtivo }) {
  const s = styles.menu;

  return (
    <nav style={s.wrapper}>
      {alunos.map((aluno) => (
        <Botao
          key={aluno.id}
          aluno={aluno}
          ativo={alunoAtivo?.id === aluno.id}
          onClick={() => setAlunoAtivo(aluno)}
        />
      ))}
    </nav>
  );
}
