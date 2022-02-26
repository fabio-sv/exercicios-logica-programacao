var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let nome = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let vendas = parseFloat(lines.shift());

let salarioMes = (vendas * 0.15) + salarioFixo;
console.log('TOTAL = R$', salarioMes.toFixed(2));