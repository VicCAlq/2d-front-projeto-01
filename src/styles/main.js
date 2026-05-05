export const styles = {
cabecalho: {
  backgroundColor: "#0400ff",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 20px",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  boxSizing: "border-box",
},
  titulo: {
    margin: -30,
    fontSize: "40px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-40%)",
    textAlign: "center",
    color : "white",
     flex: 1,
    textAlign: "center"
  },

foto: {
   width: "50px",
  height: "50px",
  objectFit: "cover",
  borderRadius: "50%",
  margin: "3px"
},

 botaoAluno:{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80px",
  padding: "5px",
  border: "1px",
  cursor: "pointer",
  borderRadius: "10px",
  border: "1px outset black",
  flexWrap: "wrap",
  gap: "10px",
},

listaAlunos: {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "15px",
},

  botoeslink: {
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    borderRadius: "5px",
    padding: "8px 15px",
    cursor: "pointer",
    fontSize: "20px"
  },
  tudo:{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'},
  conteudos:{
    flex: 1,
    marginTop: '80px' 
  },
  principalposicao:{
    textAlign: 'center',
    padding: '20px', 
  },
  sobreposicao:{
    textAlign: 'center',
    padding: '20px',

  },
  card: {
    margin: "20px auto",
    marginTop: "20px",
    backgroundColor: "#f4f4f4",
    border: "2px dotted black",
    borderRadius: "10px",
    padding: "16px",
    width: "900px",
  }
};