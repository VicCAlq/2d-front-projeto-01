export default function Conteudo({ equipe }) {
  return (
    <div className="conteudo">
      <h2>Equipe do Projeto</h2>

      <div className="equipe-grid">
        {equipe.map((membro, i) => (
          <div key={i} className="membro-card">
            {/* Adicionando a imagem aqui */}
            <img 
              src={membro.foto} 
              alt={membro.nome} 
              className="membro-foto" 
            />
            <h3>{membro.nome}</h3>
            <p>{membro.funcao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
