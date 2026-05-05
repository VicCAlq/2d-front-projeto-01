import Card from "./components/exemplo";

function App() {
  return (
    <div>

      <Card 
        nome="Gustavo"
        codigo={`1 - Fácil:
export let noveDivididoPorTres = 3

2 - Difícil:
const numeros = [15, -3, 8, -12, 0, -7, 22, -1, 9, -5, 18, -2];
let quantidade = 0;
let posicao = 0;

while (posicao < numeros.length) {
  quantidade += numeros[posicao++] < 0;
}

export const resposta03 = quantidade

3 - Ajudou Muito:
function buscarTravaLinguasComPalavra(palavraABuscar){
  let ind = 0
  let resultados = [];
  
  while (ind < travaLinguas.length) {
    if (travaLinguas[ind].includes(palavraABuscar)) {
      resultados.push(travaLinguas[ind]);
    }
    ind++;
  }
  
  return resultados;
}

export const resposta08 = buscarTravaLinguasComPalavra

4 - Não Ajudou Nada:
export let valorIndefinido = undefined;`}
      />

      <Card 
        nome="Gabriel"
        codigo={`Fácil:
export let quantidaDeBolos = 75

Difícil:
const itensDomesticos = ["geladeira", "fogao", "mesa", "cadeira", "sofa", "televisao", "armario"];
const itensLongos = [];

for (let i = 0; i < itensDomesticos.length; i++) {
  if (itensDomesticos[i].length > 6) {
    itensLongos.push(itensDomesticos[i]);
  }
}

export const resposta07 = itensLongos

Ajudou em nada:
/* 05 */
export const conducao = "Ônibus"

Ajudou muito:
let animais = ["gato", "cachorro", "peixe", "leao"];

animais.shift();
animais.shift();
animais.shift();
animais.push("polvo", "formiga", "caranguejo");

export const resposta09 = animais;`}
      />

      <Card 
        nome="Cauã"
        codigo={`Fácil:
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]
export const resposta01 = frutas[1]

Difícil:
const itensDomesticos = ["geladeira", "fogao", "mesa", "cadeira", "sofa", "televisao", "armario"];
const itensImpar = [];

for (let i = 0; i < itensDomesticos.length; i++) {
  if (i % 2 !== 0) {
    itensImpar.push(itensDomesticos[i]);
  }
}

export const resposta06 = itensImpar

Ajudou muito:
let numero = 0;
let resultado = 0;

while (numero <= 32){
  resultado = resultado + numero;
  numero++;
}

export const resposta02 = resultado

Ajudou em nada:
/* 01 */
export let meuNome = "Felizberto Adalberto";`}
      />

      <Card 
        nome="Breno"
        codigo={`Fácil:
let b01 = 0
let soma01 = 0

while (b01 <= 32) {
  soma01 = soma01 + b01
  b01++
}

export const resposta01 = soma01

Difícil:
let nomes = ["Ana", "Eduardo", "Igor", "Otavio", "Ulisses", "Carlos"]
let nomesvo = []
let i09 = 0

const vogais = ["A", "E", "I", "O", "U"]

while (i09 < nomes.length) {
  if (vogais.includes(nomes[i09][0])) {
    nomesvo.push(nomes[i09])
  }
  i09++
}

export const resposta09 = nomesvo

Ajudou muito:
let somaNegativosPares = 0

for (let contador2 = -2; contador2 >= -100; contador2 -= 2) {
  somaNegativosPares += contador2
}

export const resposta03 = somaNegativosPares

Ajudou em nada:
let soma = 0
let quantiti = 0

for (let i = 0; i <= 200; i += 3) {
  soma += i
  quantiti++
}

let media = soma / quantiti

export const resposta04 = media`}
      />

      <Card 
        nome="Brendha"
        codigo={`Achei fácil:
function saudacao(){
    return "Bom dia!"
}

export const resposta01 = saudacao

Achei difícil:
function buscarTravaLinguasComPalavra(palavra){

let indice = 0
let travaLinguasPalavra= []

while(indice<travaLinguas.length){
  if(travaLinguas[indice].includes(palavra)){
    travaLinguasPalavra.push(travaLinguas[indice])
  }
  indice++
}

return travaLinguasPalavra 
}

export const resposta08 = buscarTravaLinguasComPalavra

Ajudou muito:
let petsMaiusculos=[]

for(let pet of petsExoticos){
  petsMaiusculos.push(pet.toUpperCase())
}

export const resposta09 = petsMaiusculos

Ajudou em nada:
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]
export const resposta01 = frutas[1]`}
      />

    </div>
  );
}

export default App;