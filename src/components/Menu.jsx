import Botao from './Botao.jsx'
import { styles } from '../styles/main.js'

export default function Menu({ estudantes, selectedId, onSelectEstudante }) {
  return (
    <section style={styles.menu}>
      <h2 style={styles.sectionTitle}>Escolha um aluno</h2>
      <div style={styles.menuGrid}>
        {estudantes.map((estudante) => (
          <Botao
            key={estudante.id}
            estudante={estudante}
            active={estudante.id === selectedId}
            onClick={() => onSelectEstudante(estudante.id)}
          />
        ))}
      </div>
    </section>
  )
}
