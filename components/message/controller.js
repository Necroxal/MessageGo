//Funcion, quien la añade y que añade (user, message)
const store = require('./store');
const chalk = require('chalk');
const  socket  = require('../../socket').socket;
//controlador para añadir mensaje
function addMessage(chat,user, message, file) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error(chalk.blue('[MessaggeController] No hay usuario o mensaje o chat'));
            reject(chalk.red('Los datos son incorrectos'));
            return false;
        }

        let fileUrl = '';
        if (file){ //si viene un archivo
            fileUrl = 'http://localhost:3000/app/files/' + file.filename;
        }
        //fullmesagge objeto creado para añadir la fecha
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl,
        };

        store.add(fullMessage);

        socket.io.emit('message', fullMessage);

        resolve(fullMessage);

    });


}
//para ver mensaje
function getMessage(filterChat) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat));
    });
}
//async/await estamos interactuando con otro metodo que es asincrono, en este caso los metodos de store
function updateMessage(id, message){
    return new Promise(async (resolve,reject)=>{
        if (!id || !message){
            reject('Datos invalidos');
            return false;
        }
        const result =  await store.updateText(id,message);
        resolve(result);
    });
}
function deleteMessage(id){
    return new Promise((resolve,reject)=>{
        if(!id){
            reject('Datos ivalidos');
            return false;
        }
        store.removeMessage(id)
        .then(() => {
            resolve();
            
        }).catch(e => {
            reject(e);
        });
    });
}
module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
};