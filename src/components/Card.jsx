import { styles } from '../styles/main.js'

export default function Card({ conteudo }) {
  return (
    <article style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.cardTitle}>Códigos de {conteudo.nome}</h2>
      </div>
      <ul style={styles.cardList}>
        <li style={styles.cardItem}>
          <p style={styles.cardItemLabel}>Muito fácil</p>
          <p style={styles.cardItemText}>{conteudo.muitoFacil}</p>
        </li>
        <li style={styles.cardItem}>
          <p style={styles.cardItemLabel}>Muito difícil</p>
          <p style={styles.cardItemText}>{conteudo.muitoDificil}</p>
        </li>
        <li style={styles.cardItem}>
          <p style={styles.cardItemLabel}>Ajudou a entender muita coisa</p>
          <p style={styles.cardItemText}>{conteudo.entendeu}</p>
        </li>
        <li style={styles.cardItem}>
          <p style={styles.cardItemLabel}>Não ajudou a entender nada</p>
          <p style={styles.cardItemText}>{conteudo.naoAjudou}</p>
        </li>
      </ul>
    </article>
  )
}
