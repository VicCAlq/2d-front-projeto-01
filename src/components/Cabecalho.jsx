import { useState } from "react";
import { styles } from '../styles/main.js';

export default function Cabecalho({ setPagina }) {
  return (
    <header style={styles.cabecalho}>
      <button onClick={() => setPagina('principal')}>
        Página Principal
      </button>

      <button onClick={() => setPagina('equipe')}>
        Sobre a Equipe
      </button>
    </header>
  );
}