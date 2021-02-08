const express = require("express");
const app = express();

var port = parseInt(process.argv.slice(2)) || 3001; //receberá parametro via command line, sendo o padrão 3001.
// console.log(process.argv)

app.get("/", (req, res) => {
	res.send("Página inicial do site, seja bem vindo");
});

app.get("/blog/:paper?", (req, res) => { //parametro não obrigatório (paper)
	var paper = req.params.paper;

	if(paper){
		res.send("Você está no artigo: "+ paper);
	}else{
		res.send("Página do blog, seja bem vindo");
	}
});

app.get("/about/:name", (req, res) => {//parametro obrigatório (name)
	res.send("Aqui serão encontradas informações sobre: "+ req.params.name);
});

app.get("/name", (req, res) => {
	var name = req.query["name"];
	if(name){
		res.send("Seu o nome passado foi: "+ name);
	}else{
		res.send("Você pode nos passar seu nome na url.")
	}
});

app.listen(port, function(err) {
	if(err){
		console.log("Ocorreu um erro na hora de levantar servidor.")
	}else{
		console.log("Servidor iniciado na porta: "+port)
	}
});