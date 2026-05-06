export default function Conteudo({ listaAlunos }) {
  return (
    <main style={styles.container}>
      <h2 style={styles.titulo}>Sobre a Equipe</h2>
      <ul style={styles.lista}>
        {listaAlunos.map((aluno, index) => (
          <li key={index} style={styles.item}>
            <strong>{aluno.nome}:</strong> {aluno.descricao}
          </li>
        ))}
      </ul>
    </main>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  titulo: {
    borderBottom: '2px solid #000000',
    paddingBottom: '10px'
  },
  lista: {
    listStyleType: 'none', 
    padding: 0
  },
  item: {
    marginBottom: '15px',
    fontSize: '18px'
  }
};