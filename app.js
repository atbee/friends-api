const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello My Friends, Welcome to our API!');
});
app.get('/miwtoo', (req, res) => {
	res.send('Sawaddee, I am miwtoo. Not pokemon!');
});
app.get('/folk', (req, res) => {
	res.send('<h2 style = "color:green; text-align: center;">Hello My Name is Folk.</h2>');
});

module.exports = app;
