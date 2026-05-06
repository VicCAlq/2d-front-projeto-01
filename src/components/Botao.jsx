import styles from "../styles/main.js";

export default function Botao({ aluno, ativo, onClick }) {
  const s = styles.botao;

  return (
    <button
      style={{
        ...s.wrapper,
        ...(ativo ? s.wrapperAtivo : {}),
      }}
      onClick={onClick}
    >
      <p style={s.nome}>{aluno.nome}</p>
    </button>
  );
}
