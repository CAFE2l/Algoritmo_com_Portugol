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

let vetor: number[] = [];
let pares: number[] = [];
let posicoesPares: number[] = [];

for(let i = 1; i <= 10; i++) {
    let pergunta = readline.questionInt(`${cores.cinza}${estilos.negrito}Digite o ${cores.verde}${i}º${cores.cinza} número: `);
    vetor.push(pergunta);
    
    if (pergunta % 2 == 0) {
        pares.push(pergunta); // Guarda o valor par
    }
}

// Encontra as posições dos pares no vetor original
for(let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
        posicoesPares.push(i); // Guarda a posição (índice)
    }
}

console.log(`\n${estilos.negrito}${cores.azul}=== RESULTADOS ===${cores.limpa}`);
console.log(`${estilos.negrito}${cores.cinza}Vetor completo: ${cores.azul}[${vetor.join(', ')}]${cores.cinza}`);
console.log(`Números ${cores.verde}pares${cores.cinza} encontrados: ${cores.verde}[${pares.join(', ')}]${cores.cinza}`);
console.log(`Posições dos pares no vetor ${cores.vermelho}(índices): [${posicoesPares.join(', ')}]${cores.cinza}`);

// Bônus: Mostrar de forma detalhada
console.log(`\n${estilos.negrito}${cores.verde}=== DETALHAMENTO ===${cores.limpa}`);
posicoesPares.forEach(posicao => {
    console.log(`Posição ${posicao}: número ${vetor[posicao]}`);
});