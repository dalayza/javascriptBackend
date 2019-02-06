//biblioteca de rutas
let express = require('express');
let routes = express.Router();


routes.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Ola</h1>');

});


module.exports = routes;