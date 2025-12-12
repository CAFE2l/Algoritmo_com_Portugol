import readline from 'readline-sync';

// Dicionário de Cores (Texto)
const cores = {
    limpa: "\x1b[m",
    vermelho: "\x1b[31m",
    verde: "\x1b[32m",
    amarelo: "\x1b[33m",
    azul: "\x1b[34m",
    roxo: "\x1b[35m",
    ciano: "\x1b[36m",
    cinza: "\x1b[37m",
    pretoebranco: "\x1b[7;30m"
};

// Dicionário de Fundos
const fundo = {
    branco: "\x1b[40m",
    vermelho: "\x1b[41m",
    verde: "\x1b[42m",
    amarelo: "\x1b[43m",
    azul: "\x1b[44m",
    roxo: "\x1b[45m",
    ciano: "\x1b[46m",
    cinza: "\x1b[47m",
    vermelho_claro: "\x1b[101m",
    verde_claro: "\x1b[102m",
    amarelo_claro: "\x1b[103m",
    azul_claro: "\x1b[104m",
    roxo_claro: "\x1b[105m",
    ciano_claro: "\x1b[106m",
    cinza_claro: "\x1b[107m"
};

// Dicionário de Estilos
const estilos = {
    reset: "\x1b[0m",
    negrito: "\x1b[1m",
    fraco: "\x1b[2m",
    italico: "\x1b[3m",
    sublinhado: "\x1b[4m",
    inverso: "\x1b[7m",
    invisivel: "\x1b[8m",
    tachado: "\x1b[9m",
    duplosublinhado: "\x1b[21m",
    normal: "\x1b[22m",
    semitalico: "\x1b[23m",
    sem_sublinhado: "\x1b[24m",
    sem_inverso: "\x1b[27m",
    visivel: "\x1b[28m",
    sem_tachado: "\x1b[29m"
};

// Dados
const frase: string = "IMC CALCULATOR";
const barrinhas: number = 35;

// Função para simular o .center() do Python
// Lógica: Calcula quanto sobra de espaço e divide por 2
const padding: number = Math.floor((barrinhas - frase.length) / 2);
const fraseCentralizada: string = " ".repeat(padding) + frase + " ".repeat(padding);

// === IMPRESSÃO ===

// Linha 1: Título colorido com repetidores
console.log(
    `${estilos.negrito}${cores.azul}${"=".repeat(15)}` +
    `${cores.amarelo}IMC` +
    `${cores.verde}${"=".repeat(12)}${cores.limpa}`
);

// Linha 2: Fundo branco e texto cinza (Centralizado)
console.log(
    `${cores.cinza}${fundo.branco}${estilos.negrito}` +
    `${fraseCentralizada}` +
    `${cores.limpa}` // O Limpa aqui é essencial pra não bugar o resto do terminal
);

// Linha 3: Rodapé vermelho
console.log(
    `${estilos.negrito}${cores.vermelho}` +
    `${"=".repeat(33)}` +
    `${cores.limpa}`
);

let mais90: number[] = [];
let menos50menos160: number[] = [];
let mais190mais100: number[] = [];
let todasAlturas: number[] = [];
let todosPesos: number[] = []; // Se quiser calcular média de peso também

for(let i = 1; i <= 7; i++){
    let peso = readline.questionFloat(`${cores.cinza}${estilos.negrito}Digite o seu peso: `);
    let altura = readline.questionFloat(`Digite sua altura: `);
    
    // Armazena para cálculos gerais
    todasAlturas.push(altura);
    todosPesos.push(peso);
    
    // Sua lógica de classificação
    if(peso < 50 && altura < 1.60){
        menos50menos160.push(peso, altura);
    } else if(peso > 90){
       mais90.push(peso);
    } else if(peso > 100 && altura > 1.90){
        mais190mais100.push(altura, peso);
    }
}

// Calcula média de altura
let somaAlturas = todasAlturas.reduce((soma, altura) => soma + altura, 0);
let mediaAltura = somaAlturas / todasAlturas.length;

// Calcula média de peso (opcional)
let somaPesos = todosPesos.reduce((soma, peso) => soma + peso, 0);
let mediaPeso = somaPesos / todosPesos.length;

console.log(`${cores.cinza}Pessoas acima de ${cores.verde}90kg: ${mais90.length}${cores.cinza} pessoas`);
console.log(`Pessoas com menos de ${cores.vermelho}50kg${cores.cinza} e menos de ${cores.vermelho}1.60m: ${menos50menos160} ${cores.cinza}pessoas`);
console.log(`Pessoas com mais de ${cores.azul}1.90m${cores.cinza} e mais de ${cores.azul}100kg: ${mais190mais100} ${cores.cinza}pessoas`);
console.log(`Média de altura do grupo: ${cores.amarelo}${mediaAltura.toFixed(2)}m${cores.cinza}`);
console.log(`Média de peso do grupo: ${cores.ciano}${mediaPeso.toFixed(2)}kg${cores.cinza}`);