import { styles } from '../styles/main.js'

export default function Cabecalho({ page, onChangePage }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.headerTitle}>Vitrine de Códigos</h1>
      <nav style={styles.headerNav}>
        <button
          type="button"
          style={
            page === 'principal'
              ? { ...styles.pageButton, ...styles.pageButtonActive }
              : styles.pageButton
          }
          onClick={() => onChangePage('principal')}
        >
          Principal
        </button>
        <button
          type="button"
          style={
            page === 'sobre'
              ? { ...styles.pageButton, ...styles.pageButtonActive }
              : styles.pageButton
          }
          onClick={() => onChangePage('sobre')}
        >
          Sobre a equipe
        </button>
      </nav>
    </header>
  )
}
