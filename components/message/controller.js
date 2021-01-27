//Funcion, quien la añade y que añade (user, message)
const chalk = require('chalk');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error(chalk.blue('[MessaggeController] No hay usuario o mensaje'));
            return reject(chalk.red('Los datos son incorrectos'));
        }
        //fullmesagge objeto creado para añadir la fecha
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        };

        console.log(fullMessage);
        resolve(fullMessage);

    });


}

module.exports = {
    addMessage,
};