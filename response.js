//manejo de respuestas
const chalk = require('chalk');
exports.succes = function(req,res, message, status){
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

exports.error = function(req,res, error, status, details){
    console.error(chalk.red('[response error]'+details));
    res.status(status || 500).send({
        error: error,
        body: ''
    });
}