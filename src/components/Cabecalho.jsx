import styles from "../styles/main.js";

export default function Cabecalho({ paginaAtual, setPagina }) {
  const s = styles.cabecalho;

  return (
    <header style={s.wrapper}>
      <p style={s.titulo}>Vitrine de Códigos</p>
      <nav style={s.nav}>
        <button
          style={{
            ...s.link,
            ...(paginaAtual === "principal" ? s.linkAtivo : {}),
          }}
          onClick={() => setPagina("principal")}
        >
          Início
        </button>
        <button
          style={{
            ...s.link,
            ...(paginaAtual === "sobre" ? s.linkAtivo : {}),
          }}
          onClick={() => setPagina("sobre")}
        >
          Sobre a Equipe
        </button>
      </nav>
    </header>
  );
}
