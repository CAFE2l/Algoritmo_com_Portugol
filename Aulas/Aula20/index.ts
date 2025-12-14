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

let pessoas = [];  // Array para armazenar objetos com nome e peso

while (true) {
    let nome = readline.question(`${cores.cinza}${estilos.negrito}digite o nome: `);
    let peso = readline.questionFloat(`digite o peso: `);
    
    // === ALTERAÇÃO AQUI ===
    // Agora adicionamos um OBJETO ao array, contendo nome e peso
    pessoas.push({
        nome: nome,    // Guarda o nome
        peso: peso     // Guarda o peso
    });
    
    let pergunta = readline.question(`Quer continuar? ${cores.vermelho}[S/N]:${cores.cinza}`).toUpperCase();
    if (pergunta == "N") {
        break;
    }
}

// === CÁLCULOS MODIFICADOS ===

// 1. Criar arrays separados só com os pesos (para cálculos matemáticos)
let pesos = pessoas.map(pessoa => pessoa.peso);

// 2. Encontrar o MAIOR peso
let maiorPeso = Math.max(...pesos);
// Encontrar a PESSOA com o maior peso
let pessoaMaisPesada = pessoas.find(pessoa => pessoa.peso === maiorPeso);

// 3. Encontrar o MENOR peso
let menorPeso = Math.min(...pesos);
// Encontrar a PESSOA com o menor peso
let pessoaMenosPesada = pessoas.find(pessoa => pessoa.peso === menorPeso);

// 4. Cálculos de soma e média (usando o array 'pesos')
let soma = pesos.reduce((valor, total) => total + valor, 0);
let media = soma / pesos.length;

// === EXIBIÇÃO DOS RESULTADOS ===
console.log(`Ao todo foram cadastradas ${cores.verde}${pessoas.length}${cores.cinza} pessoas`);
console.log(`A soma dos pesos foi ${cores.azul}${soma}Kg${cores.cinza}`);
console.log(`A média dos pesos é ${cores.amarelo}${media}Kg${cores.cinza}`);

// === NOVAS LINHAS ADICIONADAS ===
// Mostra o nome da pessoa mais pesada junto com seu peso
console.log(`A pessoa mais pesada é ${cores.azul}${pessoaMaisPesada.nome}${cores.cinza} com ${cores.azul}${maiorPeso}Kg${cores.cinza}`);

// Mostra o nome da pessoa menos pesada junto com seu peso
console.log(`A pessoa menos pesada é ${cores.vermelho}${pessoaMenosPesada.nome}${cores.cinza} com ${cores.vermelho}${menorPeso}Kg${cores.cinza}`);