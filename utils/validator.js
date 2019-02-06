module.exports = {

    user: (app, req, res) => {

        // validator
        req.assert('name', 'O nome e obrigatorio').notEmpty();
        req.assert('email', 'O email esta invalido').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors) {
            app.utils.error.send(errors, req, res);
            return false; // parar la ejecucion de la pagina
        } else {
            return true;
        }

    }

};