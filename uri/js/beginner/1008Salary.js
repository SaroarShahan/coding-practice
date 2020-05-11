var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift())
var workedHour = parseInt(lines.shift())
var amount = +parseFloat(lines.shift()).toFixed(2)


console.log("NUMBER = " + number)
console.log("SALARY = U$ " + (workedHour * amount).toFixed(2))
