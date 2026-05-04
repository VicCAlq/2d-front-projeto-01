export default function Cabecalho({ setPagina }) {
  return (
    <header>
      <button onClick={() => setPagina("home")}>Home</button>
      <button onClick={() => setPagina("sobre")}>Sobre</button>
    </header>
  );
}
