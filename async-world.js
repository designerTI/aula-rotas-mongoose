var fs = require('fs');

console.log("Vou ler", Date.now());
console.time("leitura");

//var file = fs. readFileSync("20140426_173309.mp4");
fs.readFile('20140426_173309.mp4', function(err, data){
	console.log(data);
});

console.timeEnd("leitura");
console.log("ja li", Date.now());