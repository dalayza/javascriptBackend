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

        if (!app.utils.validator.user(app, req, res)) return false; // validator

        // salvar registro json en la base de datos
        db.insert(req.body, (err, user) => { // objeto json mas la funcion

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }

        });
    
    });



    let routeId = app.route('/users/:id'); // creo las rutas para el CRUD


    routeId.get((req, res) => {

        db.findOne({ _id: req.params.id }).exec((err, user) => { // buscar un objeto
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });

    });


    routeId.put((req, res) => {

        if (!app.utils.validator.user(app, req, res)) return false; // validator

        db.update({ _id: req.params.id }, req.body, err => { // buscar un objeto
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                // res.status(200).json(req.body); // Ve datos
                // res.status(200).json(req.params); // Ve id
                res.status(200).json(Object.assign(req.params, req.body)); // juntar las dos informaciones
            }
        });

    });


    routeId.delete((req, res) => {

        db.remove({ _id: req.params.id }, {}, err => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(req.params);
            }
        });

    });

};