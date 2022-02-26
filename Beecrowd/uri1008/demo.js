var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numeroFuncioanario = parseInt(lines.shift());
let numeroHorasTrabalhadas = parseInt(lines.shift()); 
let valorHora = parseFloat(lines.shift());

let salario = numeroHorasTrabalhadas * valorHora;

console.log('NUMBER =', numeroFuncioanario);
console.log('SALARY = U$', salario.toFixed(2));