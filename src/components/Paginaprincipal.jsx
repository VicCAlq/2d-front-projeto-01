import { useState } from "react";
import Card from "./Card";
import Botao from "./Botao";

const alunos = [
  {
    id: 1,
    nome: "Arthur",
    codigos: [
      { categoria: "Muito fácil",               codigo: "// Código do Arthur aqui" },
      { categoria: "Muito difícil",              codigo: "// Código do Arthur aqui" },
      { categoria: "Me ajudou a entender",       codigo: "// Código do Arthur aqui" },
      { categoria: "Não ajudou a entender nada", codigo: "" }],
  },
  {
    id: 2,
    nome: "Heytor",
    codigos: [
      { categoria: "Muito fácil",               codigo: "// Código do Heytor aqui" },
      { categoria: "Muito difícil",              codigo: "// Código do Heytor aqui" },
      { categoria: "Me ajudou a entender",       codigo: "// Código do Heytor aqui" },
      { categoria: "Não ajudou a entender nada", codigo: "// Código do Heytor aqui" },
    ],
  },
  {
    id: 3,
    nome: "Imael",
    codigos: [
      { categoria: "Muito fácil",               codigo: "// Código do Imael aqui" },
      { categoria: "Muito difícil",              codigo: "// Código do Imael aqui" },
      { categoria: "Me ajudou a entender",       codigo: "// Código da Imael aqui" },
      { categoria: "Não ajudou a entender nada", codigo: "// Código do Imael aqui" },
    ],
  },
  {
    id: 4,
    nome: "Sophia",
    codigos: [
      { categoria: "Muito fácil",               codigo: "// Código da Sophia aqui" },
      { categoria: "Muito difícil",              codigo: "// Código da Sophia aqui" },
      { categoria: "Me ajudou a entender",       codigo: "// Código da Sophia aqui" },
      { categoria: "Não ajudou a entender nada", codigo: "" },
    ],
  },
]

const estilos = {
  pagina: {
    backgroundColor: "#0f0f1a",
    minHeight: "100vh",
    paddingBottom: "32px",
  },
  menu: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    padding: "16px",
    borderBottom: "1px solid #2a2a3e",
  },
  cardsContainer: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  titulo: {
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "4px",
  },
  placeholder: {
    padding: "48px",
    textAlign: "center",
    color: "#4a4a6a",
    fontSize: "15px",
  },
}

export default function PaginaPrincipal() {
  const [alunoSelecionado, setAlunoSelecionado] = useState(null)

  function handleSelecionar(aluno) {
    if (alunoSelecionado?.id === aluno.id) {
      setAlunoSelecionado(null)
    } else {
      setAlunoSelecionado(alunos.find((a) => a.id === aluno.id))
    }
  }

  return (
    <div style={estilos.pagina}>

      {/* Menu inline */}
      <div style={estilos.menu}>
        {alunos.map((aluno) => (
          <Botao
            key={aluno.id}
            aluno={aluno}
            selecionado={alunoSelecionado?.id === aluno.id}
            onPress={handleSelecionar}
          />
        ))}
      </div>

      {/* Cards ou placeholder */}
      {alunoSelecionado ? (
        <div style={estilos.cardsContainer}>
          <p style={estilos.titulo}>Códigos de {alunoSelecionado.nome}</p>
          {alunoSelecionado.codigos.map((item, index) => (
            <Card key={index} categoria={item.categoria} codigo={item.codigo} />
          ))}
        </div>
      ) : (
        <p style={estilos.placeholder}>
          Clique em um dos integrantes
        </p>
      )}

    </div>
  )
}