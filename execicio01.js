var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pos-unoesc');

var db = mongoose.connection;

db.on('error', function(err){
	console.log('Erro de conexao.', err);

});

db.on('open', function(){
	console.log('Conexao aberta');
});

db.on('connected', function(err){
	console.log('Conectado');
});

db.on('disconnected', function(err){
	console.log('Desconectado');
});

