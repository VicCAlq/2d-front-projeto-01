import { styles } from '../styles/main.js';

export default function Card({ questao, dificuldade, codigo }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.titulo}>{questao}</h3>
      
      <p style={styles.subtitulo}>Nível: {dificuldade}</p>
      
      <div style={styles.containerCodigo}>
        <pre>
          <code style={styles.codigo}>
            {codigo}
          </code>
        </pre>
      </div>
    </div>
  );
}