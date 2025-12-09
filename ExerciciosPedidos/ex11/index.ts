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
const frase: string = "EQUAÇÃO DO SEGUNDO GRAU";
const barrinhas: number = 35;

// Função para simular o .center() do Python
// Lógica: Calcula quanto sobra de espaço e divide por 2
const padding: number = Math.floor((barrinhas - frase.length) / 2);
const fraseCentralizada: string = " ".repeat(padding) + frase + " ".repeat(padding);

// === IMPRESSÃO ===

// Linha 1: Título colorido com repetidores
console.log(
    `${estilos.negrito}${cores.azul}${"=".repeat(15)}` +
    `${cores.amarelo}EQUAÇÃO` +
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


let cigarrosPorDia: number = readline.questionInt(`${cores.cinza}${estilos.negrito}Quantos cigarros voce fuma por dia? `);
let anosFumando: number = readline.questionInt(`Por Quantos anos você fuma? `);

// 1. Calcular o total de dias que a pessoa já viveu fumando (anos * 365)
// 2. Multiplicar pelos cigarros diários
let totalCigarros = (anosFumando * 365) * cigarrosPorDia;

// 3. Calcular minutos perdidos (cada cigarro = 10 min)
let minutosPerdidos = totalCigarros * 10;

// 4. Converter minutos em dias
// (Um dia tem 1440 minutos -> 60 min * 24 horas)
let diasDeVidaPerdidos = minutosPerdidos / 1440;

// Usando o .toFixed(1) pra não ficar um número gigante tipo 12.444444
console.log(`${estilos.italico}Você perdeu aproximadamente ${cores.vermelho}${diasDeVidaPerdidos.toFixed(1)} ${cores.cinza}dias de vida.`);