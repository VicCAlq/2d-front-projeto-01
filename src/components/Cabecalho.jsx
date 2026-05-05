import { styles } from '../styles/main';

export default function Cabecalho({ setPagina }) {
  return (
    <header style={styles.cabecalho}>
        <button style={styles.botoeslink} onClick={() => setPagina('principal')}>
          Página Principal
        </button>
        <h1 style={styles.titulo}>
          Vitrine de Códigos
        </h1>
        <button style={styles.botoeslink} onClick={() => setPagina('sobre')}>
          Sobre a Equipe
        </button>
    </header>
  );
}