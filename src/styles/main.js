const styles = {
  cabecalho: {
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 16px",
      borderBottom: "1px solid #ccc",
      backgroundColor: "#f0f0f0",
    },
    titulo: {
      fontSize: "16px",
      fontWeight: "bold",
      margin: 0,
    },
    nav: {
      display: "flex",
      gap: "8px",
    },
    link: {
      cursor: "pointer",
      padding: "4px 10px",
      border: "1px solid #999",
      background: "#fff",
      fontSize: "14px",
    },
    linkAtivo: {
      background: "#d0e8ff",
      fontWeight: "bold",
      border: "1px solid #4a90d9",
    },
  },

  rodape: {
    wrapper: {
      borderTop: "1px solid #ccc",
      padding: "10px 16px",
      textAlign: "center",
      fontSize: "13px",
      backgroundColor: "#f0f0f0",
    },
    link: {
      color: "#0000cc",
    },
    texto: {
      marginTop: "4px",
    },
  },

  menu: {
    wrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      padding: "12px 16px",
      borderBottom: "1px solid #ccc",
      backgroundColor: "#fafafa",
    },
  },

  botao: {
    wrapper: {
      padding: "6px 14px",
      border: "1px solid #999",
      background: "#fff",
      cursor: "pointer",
      fontSize: "14px",
    },
    wrapperAtivo: {
      background: "#d0e8ff",
      border: "1px solid #4a90d9",
      fontWeight: "bold",
    },
    nome: {
      margin: 0,
    },
  },

  card: {
    wrapper: {
      border: "1px solid #ccc",
      padding: "12px 16px",
      textAlign: "left",
      backgroundColor: "#fafafa",
    },
    tag: {
      display: "inline-block",
      fontSize: "11px",
      fontWeight: "bold",
      padding: "2px 6px",
      marginBottom: "6px",
    },
    titulo: {
      fontSize: "14px",
      fontWeight: "bold",
      margin: "0 0 8px",
    },
    pre: {
      background: "#fff",
      border: "1px solid #ddd",
      padding: "10px",
      fontSize: "12px",
      overflowX: "auto",
      fontFamily: "monospace",
      lineHeight: "1.5",
      margin: 0,
    },
    descricao: {
      fontSize: "12px",
      color: "#555",
      marginTop: "8px",
      fontStyle: "italic",
    },
  },

  conteudo: {
    wrapper: {
      padding: "24px 16px",
      maxWidth: "700px",
    },
    titulo: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "16px",
    },
    item: {
      padding: "10px 14px",
      border: "1px solid #ccc",
      marginBottom: "8px",
      backgroundColor: "#fafafa",
    },
    nome: {
      fontSize: "14px",
      fontWeight: "bold",
      margin: "0 0 4px",
    },
    descricao: {
      fontSize: "13px",
      margin: 0,
    },
  },

  paginaPrincipal: {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "12px",
      padding: "16px",
    },
    placeholder: {
      padding: "40px 16px",
      color: "#666",
      fontSize: "14px",
    },
  },
};

export default styles;
