function multiplicacao(a: number, b: number): number {
  return a * b;
}

function saudacao(nome: string): string{
  return "Olá" + nome;
}

const multiplicacaoResult = multiplicacao(5, 3);
const saudacaoResult = saudacao("Joao");

console.log("Resultado da multiplicacao: ", multiplicacaoResult);
console.log(saudacaoResult, "!");
