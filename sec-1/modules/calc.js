var instruction = "Utilize as funções sum, sub, mult, div, passando dois valores como parametros. \nexemplo: "+
"sum(10,25)";


function sum(val1, val2) {
	return val1+val2
}

function sub(val1, val2) {
	return val1-val2
}

function mult(val1, val2) {
	return val1*val2
}

function div(val1, val2) {
	return val1/val2
}


// module.exports = sum; //para enviar apenas uma variavel e chamar ela pelo próprio nome

module.exports = {
	sum,
	sub,
	mult,
	div,
	instruction
};