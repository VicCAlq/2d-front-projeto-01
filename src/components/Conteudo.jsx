import styles from "../styles/main.js";

export default function Conteudo({ membros }) {
  const s = styles.conteudo;

  return (
    <section style={s.wrapper}>
      <h2 style={s.titulo}>Sobre a Equipe</h2>
      {membros.map((membro) => (
        <div key={membro.nome} style={s.item}>
          <p style={s.nome}>{membro.nome}</p>
          <p style={s.descricao}>{membro.contribuicao}</p>
        </div>
      ))}
    </section>
  );
}
