export const styles = {
  cabecalho: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: '#1e2127',
    color: 'white',
    borderBottom: '2px solid #ff0000'
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#1e2127',
    borderRadius: '10px',
    margin: '20px 0'
  },
  botao: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: 'white'
  },
  imagem: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '10px',
    objectFit: 'cover'
  },
  card: {
    border: '1px solid #1e2127',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px #1e2127'
  },
  titulo: {
    color: '#1e2127',
    marginBottom: '5px',
    fontSize: '20px'
  },
  subtitulo: {
    color: '#1e2127',
    fontSize: '14px',
    fontStyle: 'italic',
    marginBottom: '10px'
  },
  containerCodigo: {
    backgroundColor: '#1e2127',
    color: '#1e2127',
    padding: '15px',
    borderRadius: '5px',
    overflowX: 'auto',
    textAlign: 'left'
  },
  codigo: {
    fontFamily: 'monospace',
    fontSize: '14px'
  },
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    textAlign: 'left'
  },
  lista: {
    listStyleType: 'none',
    padding: 0
  },
  item: {
    marginBottom: '15px',
    fontSize: '18px'
  },
  rodape: {
    marginTop: 'auto',
    padding: '20px',
    borderTop: '1px solid #e5e4e7',
    textAlign: 'center'
  }
};