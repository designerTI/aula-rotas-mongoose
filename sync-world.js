var fs = require('fs');

console.log("Vou ler", Date.now());
console.time("leitura");

var file = fs. readFileSync("20140426_173309.mp4");
console.log(file);

console.timeEnd("leitura");
console.log("ja li", Date.now());