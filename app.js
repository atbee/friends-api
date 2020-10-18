const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello My Friends, Welcome to our API!');
});
app.get('/miwtoo', (req, res) => {
	res.send('Sawaddee, I am miwtoo. Not pokemon!');
});
app.get('/many', (req, res) => {
	res.send('Howdy! I am Many!!!!!');
});
app.get('/nine', (req, res) => {
	res.send('Hello! I am Your friends , I can fly 🐺');
});
app.get('/gafair', (req, res) => {
	res.send('Hi! I am Gafair');
});
app.get('/tao', (req, res) => {
	res.send('hello ! may the force be with you !!');
});
app.get('/atb', (req, res) => {
	res.send('I am a thibet, nice to meet you again.');
});

module.exports = app;
