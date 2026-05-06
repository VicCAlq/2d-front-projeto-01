const estilos = {
  cabecalho: {
    margin: "0px 0px 20px 0px",
    backgroundColor: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  botao: {
    backgroundColor: "#777",
    color: "#ddd",
    borderRadius: "5px",
    padding: "10px",
    margin: "5px",
    border: "none",
    cursor: "pointer",
  },
  botaoSelecionado: {
    backgroundColor: "#248",
  },
}

export default function Cabecalho({ mudarPagina, paginaAtual }) {
  return (
    <div style={estilos.cabecalho}>
      <button
        style={{
          ...estilos.botao,
          ...(paginaAtual === "principal" ? estilos.botaoSelecionado : {}),
        }}
        onClick={() => mudarPagina("principal")}
      >
        Página Principal
      </button>
      <button
        style={{
          ...estilos.botao,
          ...(paginaAtual === "equipe" ? estilos.botaoSelecionado : {}),
        }}
        onClick={() => mudarPagina("equipe")}
      >
        Sobre a equipe
      </button>
    </div>
  )
}