const express = require('express');


let app = express();


app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Ola</h1>');

});


app.get('/users', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json({
        users: [{
            name: 'Denis Alayza',
            email: 'denis.alayza@gmail.com',
            id: 1
        }]
    });

});


app.listen(3000, '127.0.0.1', () => {

    console.log('Servidor rodando!');

});