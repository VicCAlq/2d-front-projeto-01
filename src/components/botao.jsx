const estilos = {
  botao: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1e1e2e",
    borderRadius: "12px",
    padding: "12px",
    width: "100px",
    border: "2px solid transparent",
    cursor: "pointer",
  },
  botaoSelecionado: {
    borderColor: "#7c3aed",
    backgroundColor: "#2d1f4e",
  },
  fotoPlaceholder: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    backgroundColor: "#3b3b52",
    marginBottom: "8px",
  },
  nome: {
    color: "#c4c4d4",
    fontSize: "14px",
    fontWeight: "600",
  },
  nomeSelecionado: {
    color: "#a78bfa",
  },
}

export default function Botao({ aluno, selecionado, onPress }) {
  return (
    <button
      style={{
        ...estilos.botao,
        ...(selecionado ? estilos.botaoSelecionado : {}),
      }}
      onClick={() => onPress(aluno)}
    >
      <div style={estilos.fotoPlaceholder} />
      <span style={{
        ...estilos.nome,
        ...(selecionado ? estilos.nomeSelecionado : {}),
      }}>
        {aluno.nome}
      </span>
    </button>
  )
}