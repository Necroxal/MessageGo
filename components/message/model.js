const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//A traves de un obejto definir todas las propiedades que queremos tenr 
const mySchema = new Schema({
    user: String,
    //Se creo message tipo objeto para mandar un mensaje estrcito y no se guarde ningun tipo de info
    //que no sea mensjae
    message: {
        type: String,
        required: true,
    },
    date: Date
});

const model = mongoose.model('message', mySchema); //Collecion en mongo y el esquema
module.exports = model;