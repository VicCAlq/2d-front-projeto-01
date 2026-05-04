import { styles } from '../styles/main.js'

export default function Botao({ estudante, onClick, active }) {
  const initials = estudante.nome
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <button
      type="button"
      style={active ? { ...styles.botao, ...styles.botaoActive } : styles.botao}
      onClick={onClick}
    >
      {estudante.avatar ? (
        <img src={estudante.avatar} alt={estudante.nome} style={styles.avatarImg} />
      ) : (
        <div style={styles.avatar}>{initials}</div>
      )}
      <div>
        <strong>{estudante.nome}</strong>
      </div>
    </button>
  )
}
