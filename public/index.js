const functions = require('firebase-functions');
const express = require('express');
const app = express();

// Rota para "Hello, World!"
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/foo', (req, res) => {
    res.send('Hello, World!');
});

exports.app = functions.https.onRequest(app);
