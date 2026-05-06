import styles from "../styles/main.js";

export default function Rodape() {
  const s = styles.rodape;

  return (
    <footer style={s.wrapper}>
      <a
        href="https://github.com/VicCAlq/2d-front-projeto-01/tree/7-CaioBrandao-Vinicyus-SamuelAssuncao-MariaHelena-DaviEmmanuel"
        target="_blank"
        rel="noopener noreferrer"
        style={s.link}
      >
        Repositório no GitHub
      </a>
      <p style={s.texto}>
        Criado por: Caio Brandão, Vinicyus, Samuel Assunção, Maria Helena, Davi Emmanuel
      </p>
    </footer>
  );
}
