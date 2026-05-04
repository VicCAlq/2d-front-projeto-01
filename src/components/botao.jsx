export default function Botao({ aluno, selecionarAluno }) {
  return (
    <button
      className="botao-aluno"
      onClick={() => selecionarAluno(aluno)}
    >
      {aluno.nome}
    </button>
  );
}