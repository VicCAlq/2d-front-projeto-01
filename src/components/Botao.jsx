import { styles } from "../styles/main";

export default function Botao({ nome, foto, onClick }) {
  return (
    <button style={styles.botao} onClick={onClick}>
      <img src={foto} alt={`Foto de ${nome}`} style={styles.imagem} />
      <span>{nome}</span>
    </button>
  );
}