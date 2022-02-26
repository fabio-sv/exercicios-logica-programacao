var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var SOMA = parseInt(A + B);

console.log('SOMA =', SOMA);