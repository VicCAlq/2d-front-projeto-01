import { styles } from '../styles/main.js'

export default function Conteudo({ time }) {
  return (
    <section style={styles.content}>
      <h2 style={styles.sectionTitle}>Sobre a equipe</h2>
      <ul style={styles.teamList}>
        {time.map((member) => (
          <li key={member.nome} style={styles.teamItem}>
            <strong>{member.nome}</strong>: {member.role}
          </li>
        ))}
      </ul>
    </section>
  )
}
