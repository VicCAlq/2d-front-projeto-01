export const alunos = [
  {
    id: 1,
    nome: "Caio Brandão",
    emoji: "🧑‍💻",
    codigos: [
      {
        tipo: "facil",
        titulo: "While Q01 — Soma de 1 a 32",
        codigo: `let soma01 = 0
let i01 = 1

while (i01 <= 32) {
  soma01 += i01
  i01++
}

export const resposta01 = soma01`,
        descricao: "Achei fácil porque é o uso mais básico do while: só incrementar e acumular.",
      },
      {
        tipo: "dificil",
        titulo: "While Q10 — Nome mais longo da lista",
        codigo: `let i10 = 0
let maiorNome = nomes[0]

while (i10 < nomes.length) {
  if (nomes[i10].length > maiorNome.length) {
    maiorNome = nomes[i10]
  }
  i10++
}

export const resposta10 = maiorNome`,
        descricao: "Difícil porque precisei pensar em comparar strings com .length e guardar o estado.",
      },
      {
        tipo: "ajudou",
        titulo: "While Q07 — Nomes com 5 letras ou menos",
        codigo: `let i07 = 0
let curtos = []

while (i07 < nomes.length) {
  if (nomes[i07].length <= 5) {
    curtos.push(nomes[i07])
  }
  i07++
}

export const resposta07 = curtos`,
        descricao: "Me ajudou a entender como usar a propriedade .length em strings dentro de um loop.",
      },
      {
        tipo: "naoajudou",
        titulo: "While Q09 — Nomes que começam com vogal",
        codigo: `let i09 = 0
let vogais = []
const letrasVogais = ["A", "E", "I", "O", "U"]

while (i09 < nomes.length) {
  let primeiraLetra = nomes[i09][0].toUpperCase()
  if (letrasVogais.includes(primeiraLetra)) {
    vogais.push(nomes[i09])
  }
  i09++
}

export const resposta09 = vogais`,
        descricao: "Não me ajudou muito — ainda confundo quando usar .includes() em array vs em string.",
      },
    ],
  },
  {
    id: 2,
    nome: "Vinicyus",
    emoji: "🎯",
    codigos: [
      {
        tipo: "facil",
        titulo: "For Q01 — Soma de 1 a 100",
        codigo: `let soma01 = 0
for (let i = 1; i <= 100; i++) {
  soma01 += i
}

export const resposta01 = soma01`,
        descricao: "Bem fácil, a sintaxe do for ficou clara logo e o acumulador é simples.",
      },
      {
        tipo: "dificil",
        titulo: "For Q04 — Média dos múltiplos de 3 entre 1 e 200",
        codigo: `let somaMultiplos3 = 0
let contadorMultiplos3 = 0
for (let i = 1; i <= 200; i++) {
  if (i % 3 === 0) {
    somaMultiplos3 += i
    contadorMultiplos3++
  }
}

export const resposta04 = somaMultiplos3 / contadorMultiplos3`,
        descricao: "Difícil porque precisei manter dois contadores ao mesmo tempo e só dividir no final.",
      },
      {
        tipo: "ajudou",
        titulo: "For Q06 — Itens nos índices ímpares",
        codigo: `let indicesImpares = []
for (let i = 1; i < itensDomesticos.length; i += 2) {
  indicesImpares.push(itensDomesticos[i])
}

export const resposta06 = indicesImpares`,
        descricao: "Me ajudou a entender que posso controlar o passo do for (i += 2) em vez de sempre usar i++.",
      },
      {
        tipo: "naoajudou",
        titulo: "For Q03 — Soma dos pares negativos entre -100 e -1",
        codigo: `let somaParesNegativos = 0
for (let i = -100; i <= -1; i++) {
  if (i % 2 === 0) {
    somaParesNegativos += i
  }
}

export const resposta03 = somaParesNegativos`,
        descricao: "Não entendi direito o comportamento do operador % com números negativos em JavaScript.",
      },
    ],
  },
  {
    id: 3,
    nome: "Samuel Assunção",
    emoji: "🚀",
    codigos: [
      {
        tipo: "facil",
        titulo: "For Q09 — Nomes de pets em maiúsculas (for...of)",
        codigo: `let petsMaiusculos = []
for (let pet of petsExoticos) {
  petsMaiusculos.push(
    pet.toUpperCase()
  )
}

export const resposta09 = petsMaiusculos`,
        descricao: "Muito fácil — o for...of deixa o código limpo e o .toUpperCase() é direto.",
      },
      {
        tipo: "dificil",
        titulo: "For Q12 — Primeiro pet que começa com 's'",
        codigo: `let petComS = "não encontrado"
for (let pet of petsExoticos) {
  if (
    pet[0] === "s"
    && petComS === "não encontrado"
  ) {
    petComS = pet
  }
}

export const resposta12 = petComS`,
        descricao: "Difícil porque precisei usar a própria variável resultado como flag para não sobrescrever.",
      },
      {
        tipo: "ajudou",
        titulo: "For Q08 — Lista em ordem reversa",
        codigo: `let ordemReversa = []
for (let i = itensDomesticos.length - 1; i >= 0; i--) {
  ordemReversa.push(itensDomesticos[i])
}

export const resposta08 = ordemReversa`,
        descricao: "Me ajudou a entender que o for pode começar do fim e decrementar com i--.",
      },
      {
        tipo: "naoajudou",
        titulo: "For Q11 — Contar pets com mais de 7 letras (for...of)",
        codigo: `let contadorNomes = 0
for (let pet of petsExoticos) {
  if (pet.length > 7) {
    contadorNomes++
  }
}

export const resposta11 = contadorNomes`,
        descricao: "Achei muito parecido com outras questões — não aprendi nada de novo com essa.",
      },
    ],
  },
  {
    id: 4,
    nome: "Maria Helena",
    emoji: "🌸",
    codigos: [
      {
        tipo: "facil",
        titulo: "While Q05 — Lista de nomes em ordem reversa",
        codigo: `let i05 = nomes.length - 1
let nomesInv = []

while (i05 >= 0) {
  nomesInv.push(nomes[i05])
  i05--
}

export const resposta05 = nomesInv`,
        descricao: "Fácil porque a lógica de começar do fim e decrementar ficou bem clara pra mim.",
      },
      {
        tipo: "dificil",
        titulo: "While Q03 — Contar números negativos no array",
        codigo: `const numeros = [15, -3, 8, -12, 0, -7, 22, -1, 9, -5, 18, -2]
let i03 = 0
let negativos = 0

while (i03 < numeros.length) {
  if (numeros[i03] < 0) {
    negativos++
  }
  i03++
}

export const resposta03 = negativos`,
        descricao: "Difícil porque me confundi em separar o índice (i03) do contador de negativos.",
      },
      {
        tipo: "ajudou",
        titulo: "While Q08 — Nomes em maiúsculas",
        codigo: `let i08 = 0
let maiusculos = []

while (i08 < nomes.length) {
  maiusculos.push(nomes[i08].toUpperCase())
  i08++
}

export const resposta08 = maiusculos`,
        descricao: "Me ajudou a entender que posso chamar métodos de string diretamente dentro do push().",
      },
      {
        tipo: "naoajudou",
        titulo: "While Q02 — Soma dos ímpares de 1 a 50",
        codigo: `let soma02 = 0
let i02 = 1

while (i02 <= 50) {
  if (i02 % 2 !== 0) {
    soma02 += i02
  }
  i02++
}

export const resposta02 = soma02`,
        descricao: "Não aprendi muito — é muito parecida com a Q01, só muda a condição do if.",
      },
    ],
  },
  {
    id: 5,
    nome: "Davi Emmanuel",
    emoji: "⚡",
    codigos: [
      {
        tipo: "facil",
        titulo: "For Q02 — Contar ímpares entre 1 e 50",
        codigo: `let qtdImpares = 0
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    qtdImpares++
  }
}

export const resposta02 = qtdImpares`,
        descricao: "Fácil — já sabia usar o operador % para verificar paridade.",
      },
      {
        tipo: "dificil",
        titulo: "For Q07 — Itens com mais de 6 letras",
        codigo: `let intensLongos = []
for (let i = 0; i < itensDomesticos.length; i++) {
  if (itensDomesticos[i].length > 6) {
    intensLongos.push(itensDomesticos[i])
  }
}

export const resposta07 = intensLongos`,
        descricao: "Difícil porque errei várias vezes o acesso ao item: esqueço que é itensDomesticos[i] e não só i.",
      },
      {
        tipo: "ajudou",
        titulo: "For Q10 — Pets com a letra 'r' (for...of)",
        codigo: `let petsComR = []
for (let pet of petsExoticos) {
  if (pet.includes("r")) {
    petsComR.push(pet)
  }
}

export const resposta10 = petsComR`,
        descricao: "Me ajudou a entender o .includes() para buscar letras dentro de strings.",
      },
      {
        tipo: "naoajudou",
        titulo: "While Q04 — Soma dos múltiplos de 7 entre 1 e 100",
        codigo: `let soma04 = 0
let i04 = 1

while (i04 <= 100) {
  if (i04 % 7 === 0) {
    soma04 += i04
  }
  i04++
}

export const resposta04 = soma04`,
        descricao: "Parecida demais com as outras questões de soma com condição — não trouxe nada novo.",
      },
    ],
  },
];

export const membros = [
  {
    nome: "Caio Brandão",
    emoji: "🧑‍💻",
    contribuicao: "Criou e programou o componente Botao e o componente Menu.",
  },
  {
    nome: "Vinicyus",
    emoji: "🎯",
    contribuicao: "Programou o componente Cabecalho e a lógica de navegação entre páginas.",
  },
  {
    nome: "Samuel Assunção",
    emoji: "🚀",
    contribuicao: "Criou e programou o componente Card e o arquivo de estilos (styles/main.js).",
  },
  {
    nome: "Maria Helena",
    emoji: "🌸",
    contribuicao: "Programou o componente Conteudo e a página Sobre a Equipe.",
  },
  {
    nome: "Davi Emmanuel",
    emoji: "⚡",
    contribuicao: "Criou o componente Rodape e organizou os dados dos alunos no arquivo de dados.",
  },
];
