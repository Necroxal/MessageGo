const db = require("mongoose")
const Model = require('./model')
const url = 'mongodb+srv://german:145689@cluster0.gx4fd.mongodb.net/messagego?retryWrites=true&w=majority';
db.Promise = global.Promise //Devuelva las promesas
db.connect(url, { useNewUrlParser: true , useUnifiedTopology: true })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));

function addMessage(message){
    //list.push(message);
    //Usando mongoDb
    const myMessage = new Model(message);
    myMessage.save();
}
//devolverlo a traves de la api
async function getMessage(){
    //return list;
    const messages =  await Model.find(); //Pedir todos los documetos
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
module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText

}