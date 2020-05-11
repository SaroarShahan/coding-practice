var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var seller = lines.shift()
var salary = +parseFloat(lines.shift()).toFixed(2)
var sold = +parseFloat(lines.shift()).toFixed(2)
var total = (salary + sold * .15).toFixed(2)

console.log("TOTAL = R$ " + total)