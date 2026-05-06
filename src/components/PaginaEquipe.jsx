const estilos = {
  pagina: {
    backgroundColor: "#0f0f1a",
    minHeight: "100vh",
    padding: "32px 16px",
  },
  titulo: {
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "24px",
  },
  lista: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  item: {
    backgroundColor: "#1e1e2e",
    borderRadius: "12px",
    padding: "16px",
    borderLeft: "4px solid #7c3aed",
  },
  nome: {
    color: "#a78bfa",
    fontWeight: "700",
    fontSize: "15px",
    marginBottom: "4px",
  },
  descricao: {
    color: "#c4c4d4",
    fontSize: "14px",
    margin: 0,
  },
}

const membros = [
  { nome: "Arthur",  descricao: " Forneceu os Códigos Das Atividades " },
  { nome: "Heytor",  descricao: " Menu / Página principal " },
  { nome: "Imael",   descricao: " Lista De Códigos " },
  { nome: "Sophia",  descricao: " Cards " },
]

export default function PaginaEquipe() {
  return (
    <div style={estilos.pagina}>
      <p style={estilos.titulo}>Sobre a equipe</p>
      <ul style={estilos.lista}>
        {membros.map((membro) => (
          <li key={membro.nome} style={estilos.item}>
            <p style={estilos.nome}>{membro.nome}</p>
            <p style={estilos.descricao}>{membro.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}