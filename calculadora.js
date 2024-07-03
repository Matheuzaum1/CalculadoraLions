function adicao(x, y) {
    let resultado = x + y;
    console.log(`O resultado é ${resultado}`);
}

function subtracao(x, y) {
    let resultado = x - y;
    console.log(`O resultado é ${resultado}`);
}

function divisao(x, y) {
    if (y != 0) {
        let resultado = x / y;
        console.log(`O resultado é ${resultado}`);
    } else {
        console.log("Não é possível dividir por zero.");
    }
}

function multiplicacao(x, y) {
    let resultado = x * y;
    console.log(`O resultado é ${resultado}`);
}

function porcentagem(x, y) {
    let resultado = (x * y) / 100;
    console.log(`O resultado é ${resultado}`);
}

const prompt = require('prompt-sync')();

console.log("Escolha a operação a ser feita");
let opcao = prompt(`=== Menu ===
    1 - Adição
    2 - Subtração
    3 - Divisão
    4 - Multiplicação
    5 - Porcentagem
Escolha uma opção: `);

let num1, num2;

switch (parseInt(opcao)) {
    case 1:
        num1 = parseFloat(prompt("Digite o primeiro número: "));
        num2 = parseFloat(prompt("Digite agora o segundo número: "));
        if (!isNaN(num1) && !isNaN(num2)) {
            adicao(num1, num2);
        } else {
            console.log("Entradas inválidas. Por favor, insira números válidos.");
        }
        break;
    case 2:
        num1 = parseFloat(prompt("Digite o primeiro número: "));
        num2 = parseFloat(prompt("Digite agora o segundo número: "));
        if (!isNaN(num1) && !isNaN(num2)) {
            subtracao(num1, num2);
        } else {
            console.log("Entradas inválidas. Por favor, insira números válidos.");
        }
        break;
    case 3:
        num1 = parseFloat(prompt("Digite o primeiro número: "));
        num2 = parseFloat(prompt("Digite agora o segundo número: "));
        if (!isNaN(num1) && !isNaN(num2)) {
            divisao(num1, num2);
        } else {
            console.log("Entradas inválidas. Por favor, insira números válidos.");
        }
        break;
    case 4:
        num1 = parseFloat(prompt("Digite o primeiro número: "));
        num2 = parseFloat(prompt("Digite agora o segundo número: "));
        if (!isNaN(num1) && !isNaN(num2)) {
            multiplicacao(num1, num2);
        } else {
            console.log("Entradas inválidas. Por favor, insira números válidos.");
        }
        break;
    case 5:
        num1 = parseFloat(prompt("Digite o valor: "));
        num2 = parseFloat(prompt("Digite a porcentagem: "));
        if (!isNaN(num1) && !isNaN(num2)) {
            porcentagem(num1, num2);
        } else {
            console.log("Entradas inválidas. Por favor, insira números válidos.");
        }
        break;
    default:
        console.log("Opção inválida");
}
