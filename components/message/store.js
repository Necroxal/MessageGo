const Model = require('./model');


function addMessage(message){
    //list.push(message);
    //Usando mongoDb
    const myMessage = new Model(message);
    myMessage.save();
}
//devolverlo a traves de la api
async function getMessage(filterUser){
    let filter = {} 
    if(filterUser !== null){
        filter = {user: filterUser}; //mongo db muestra los usarios que estan en el filter user
    }
    const messages =  await Model.find(filter); //Pedir todos los documetos
    return messages;
}

async function updateText(id, message){
    const founMessage = await Model.findOne({ //devuleve la primera aparacion d ela busqueda
        _id: id // Base de datos tomara el id que nos ha venido desde la url
    });
    founMessage.message = message;
    const newMessage = await founMessage.save();
    return newMessage;
}
function removeMessage(id){
    return Model.deleteOne({
        _id:id
    });
}
module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    removeMessage: removeMessage
}