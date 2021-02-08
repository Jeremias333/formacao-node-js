var http = require("http");
var port = parseInt(process.argv.slice(2)) || 8181
http.createServer(function(req, res) {
	res.end("<h1>Bem vindo ao meu site</h1>")
}).listen(port);

console.log("aplicação rodando na porta: "+port)