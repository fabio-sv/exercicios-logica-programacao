var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = parseFloat(3.14159);
var raio = parseFloat(lines.shift());

var area = n * (raio * raio);

console.log('A='+area.toFixed(4));