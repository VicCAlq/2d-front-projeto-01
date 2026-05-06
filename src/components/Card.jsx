const estilos = {
  card: {
    backgroundColor: "#1e1e2e",
    borderRadius: "12px",
    padding: "16px",
    borderLeft: "4px solid #7c3aed",
  },
  categoria: {
    color: "#a78bfa",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "8px",
  },
  codigoBox: {
    backgroundColor: "#0f0f1a",
    borderRadius: "8px",
    padding: "12px",
  },
  codigo: {
    color: "#7dd3fc",
    fontSize: "13px",
    fontFamily: "monospace",
    whiteSpace: "pre-wrap",
    margin: 0,
  },
}

export default function Card({ categoria, codigo }) {
  return (
    <div style={estilos.card}>
      <p style={estilos.categoria}>{categoria}</p>
      <div style={estilos.codigoBox}>
        <pre style={estilos.codigo}>{codigo}</pre>
      </div>
    </div>
  )
}