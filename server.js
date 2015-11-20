const express = require('express');
const app = express();

// Models
const contatos = [
	{ nome: 'Pedro', data: '20/11/2015', telefone: '(22)873260', cor: 'gray' },
	{ nome: 'José', data: '20/11/2015', telefone: '(22)873261', cor: 'pink' },
	{ nome: 'Fernanda', data: '20/11/2015', telefone: '(22)873212', cor: 'green' }
];
const operadoras = [
	{ nome: 'Vivo', codigo: 22, preco: 23 },
	{ nome: 'Claro', codigo: 34, preco: 56 },
	{ nome: 'Tim', codigo: 12, preco: 78 }
];

// Middlewares
app.use( express.static('public') );

// Rotas
app.get( '/api/contato', (req, res) => res.json(contatos) );
app.get( '/api/operadora', (req, res) => res.json(operadoras) );

// Inicia o servidor web
app.listen( 3000, () => console.log('Servidor rodando em http://localhost:3000...') );