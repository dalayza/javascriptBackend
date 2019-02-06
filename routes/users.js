//biblioteca de rutas
let express = require('express');
let routes = express.Router();

routes.get('/', (req, res) => {

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


routes.get('/admin', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json({
        users: []
    });

});


module.exports = routes;