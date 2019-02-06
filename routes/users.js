let NeDB = require('nedb');
let db = new NeDB({

    filename: 'users.db',
    autoload: true

});


module.exports = (app) => {

    let route = app.route('/users'); // creo las rutas para el CRUD

    route.get((req, res) => {

        db.find({}).sort({name:1}).exec((err, users) => { // listando usuarios de NeDB
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-type', 'application/json');
                res.json({
                    users: users
                });
            }
        });

    });
    
    
    route.post((req, res) => {

        // salvar registro json en la base de datos
        db.insert(req.body, (err, user) => { // objeto json mas la funcion

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }

        });
    
    });

};