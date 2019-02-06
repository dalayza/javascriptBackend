const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


let app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // todo lo que recibe via post lo convierte en json
app.use(expressValidator());


consign().include('routes').include('utils').into(app); // consign incluye todas las rutas y lo coloca en el app
                                                        // creara la propiedad utils 


app.listen(3000, '127.0.0.1', () => {

    console.log('Servidor rodando!');

});