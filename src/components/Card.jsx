import styles from "../styles/main.js";

const tagConfig = {
  facil:    { label: "Muito Fácil",      cor: "#155724", bg: "#d4edda" },
  dificil:  { label: "Muito Difícil",    cor: "#721c24", bg: "#f8d7da" },
  ajudou:   { label: "Me ajudou muito",  cor: "#004085", bg: "#cce5ff" },
  naoajudou:{ label: "Não ajudou nada",  cor: "#383d41", bg: "#e2e3e5" },
};

export default function Card({ conteudo }) {
  const s = styles.card;
  const tag = tagConfig[conteudo.tipo] ?? { label: conteudo.tipo, cor: "#333", bg: "#eee" };

  return (
    <div style={s.wrapper}>
      <span style={{ ...s.tag, color: tag.cor, background: tag.bg }}>
        {tag.label}
      </span>
      <p style={s.titulo}>{conteudo.titulo}</p>
      <pre style={s.pre}><code>{conteudo.codigo}</code></pre>
      {conteudo.descricao && <p style={s.descricao}>{conteudo.descricao}</p>}
    </div>
  );
}
