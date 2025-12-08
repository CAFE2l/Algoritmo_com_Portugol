import readline from 'readline-sync';

let nome: string = readline.question("Qual é o seu nome? ");
let salario: number = parseFloat(readline.question("Qual o seu salário? "));

console.log(`O funcionário ${nome} tem um salário de R$ ${salario.toFixed(2)}`);