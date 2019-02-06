let NeDB = require('nedb');
let db = new NeDB({

    filename: 'users.db',
    autoload: true

});


module.exports = (app) => {

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
    
    
    app.post('/users', (req, res) => {
        
        // salvar registro json en la base de datos
        db.insert(req.body, (err, user) => { // objeto json mas la funcion

            if (err) {
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                });
            } else {
                res.status(200).json(user);
            }

        });
    
    });

};