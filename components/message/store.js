const db = require("mongoose")
const Model = require('./model')

db.Promise = global.Promise //Devuelva las promesas
db.connect('mongodb+srv://root:<root>@cluster0.gx4fd.mongodb.net/<MessageGo>?retryWrites=true&w=majority',{
    useNewUrlParser: true, //No haya problema de compatibilidad
    useUnifiedTopology: true //
})

function addMessage(message){
    list.push(message);
}
function getMessage(){
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessage
}