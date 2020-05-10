var a = +parseFloat(lines.shift()).toFixed(1);
var b = +parseFloat(lines.shift()).toFixed(1);
var avg = ((a * 3.5 + b * 7.5) / (3.5 + 7.5)).toFixed(5);

console.log("MEDIA = " + avg);
