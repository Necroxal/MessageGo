//Funcion, quien la añade y que añade (user, message)
const store = require('./store');
const chalk = require('chalk');
//controlador para añadir mensaje
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

        store.add(fullMessage);
        resolve(fullMessage);

    });


}
//para ver mensaje
function getMessage(filterUser){ 
    return new Promise((resolve,reject) =>{
        resolve(store.list(filterUser));
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