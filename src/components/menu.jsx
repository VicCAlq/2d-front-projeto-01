export default function Menu({ alunos, selecionarAluno }) {
  return (
    <div className="menu">
      {alunos.map((aluno, index) => (
        <button
          key={index}
          className="botao-aluno"
          onClick={() => selecionarAluno(aluno)}
        >
          {aluno.nome}
        </button>
      ))}
    </div>
  );
}