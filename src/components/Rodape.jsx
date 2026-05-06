import { styles } from "../styles/main";

export default function Rodape() {
  return (
    <footer style={styles.rodape}>
      <a 
        href="https://github.com/VicCAlq/2d-front-projeto-01/tree/8-AndreRicardo-GabrielCavalcanti-LuannaCarla-WaldemirViegas-GabrielTavares" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Repositório no GitHub
      </a>

      <p>Feito por: Gabriel Tavares, Gabriel Cavalcanti, Luanna Carla, André Ricardo e Waldemir Viegas</p>
    </footer>
  );
}