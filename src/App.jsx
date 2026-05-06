import './App.css'
import { useState } from "react";
import Cabecalho from './components/Cabecalho'
import PaginaPrincipal from './components/PaginaPrincipal'
import PaginaEquipe from './components/PaginaEquipe'

export default function App() {
  const [pagina, setPagina] = useState("principal")

  return (
    <>
      <Cabecalho mudarPagina={setPagina} paginaAtual={pagina} />
      {pagina === "principal" && <PaginaPrincipal />}
      {pagina === "equipe" && <PaginaEquipe />}
    </>
  )
}