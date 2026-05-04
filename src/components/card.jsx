export default function Card({ codigo }) {
  return (
    <div className="card">
      <h3>{codigo.titulo}</h3>
      <pre>{codigo.conteudo}</pre>
    </div>
  );
}