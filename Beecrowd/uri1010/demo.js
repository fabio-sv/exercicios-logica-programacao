var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift().split(' ');
let codigo = linha1.shift();
let quantidade = parseInt(linha1.shift());
let valor = parseFloat(linha1.shift());

let linha2 = lines.shift().split(' ');
let codigo2 = linha2.shift();
let quantidade2 = parseInt(linha2.shift());
let valor2 = parseFloat(linha2.shift());

let total = (quantidade * valor) + (quantidade2 * valor2); 

console.log('VALOR A PAGAR: R$', total.toFixed(2));