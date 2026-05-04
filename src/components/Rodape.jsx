import { styles } from '../styles/main.js'

export default function Rodape({ urlDoRepositorio, autores }) {
  return (
    <footer style={styles.footer}>
      <a style={styles.footerLink} href={urlDoRepositorio} target="_blank" rel="noreferrer">
        Repositório do GitHub
      </a>
      <p style={styles.footerText}>Criado por: {autores}</p>
    </footer>
  )
}
