var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines.shift().split(' ')
var codeA = parseInt(line1[0])
var unitA = parseInt(line1[1])
var priceA = parseFloat(line1[2])

var line2 = lines.shift().split(' ')
var codeB = parseInt(line2[0])
var unitB = parseInt(line2[1])
var priceB = parseFloat(line2[2])

var result = (unitA * priceA) + (unitB * priceB)

console.log("VALOR A PAGAR: R$ " + result.toFixed(2))