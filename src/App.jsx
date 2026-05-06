import { useState } from "react";
import Cabecalho from "./components/Cabecalho.jsx";
import Rodape from "./components/Rodape.jsx";
import Menu from "./components/Menu.jsx";
import Card from "./components/Card.jsx";
import Conteudo from "./components/Conteudo.jsx";
import { alunos, membros } from "./dados.js";
import styles from "./styles/main.js";

function App() {
  const [pagina, setPagina] = useState("principal");
  const [alunoAtivo, setAlunoAtivo] = useState(null);

  const s = styles.paginaPrincipal;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100svh" }}>
      <Cabecalho paginaAtual={pagina} setPagina={setPagina} />

      <main style={{ flex: 1 }}>
        {pagina === "principal" && (
          <>
            <Menu
              alunos={alunos}
              alunoAtivo={alunoAtivo}
              setAlunoAtivo={setAlunoAtivo}
            />

            {alunoAtivo ? (
              <div style={s.grid}>
                {alunoAtivo.codigos.map((codigo, i) => (
                  <Card key={i} conteudo={codigo} />
                ))}
              </div>
            ) : (
              <p style={s.placeholder}>
                👆 Selecione um aluno para ver os códigos escolhidos por ele.
              </p>
            )}
          </>
        )}

        {pagina === "sobre" && <Conteudo membros={membros} />}
      </main>

      <Rodape />
    </div>
  );
}

export default App;
