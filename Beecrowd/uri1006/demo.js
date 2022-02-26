/* A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift()).toFixed(1);
let B = parseFloat(lines.shift()).toFixed(1);
let C = parseFloat(lines.shift()).toFixed(1);

let media = ((2 * A) + (3 * B) + (5 * C)) / 10;
console.log('MEDIA =', parseFloat(media).toFixed(1));