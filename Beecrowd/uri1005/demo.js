var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift()).toFixed(1);
let B = parseFloat(lines.shift()).toFixed(1);

let MEDIA =  ((3.5 * A) + (7.5 * B)) / 11

console.log('MEDIA =', MEDIA.toFixed(5));