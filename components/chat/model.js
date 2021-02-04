const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//A traves de un obejto definir todas las propiedades que queremos tenr 
const mySchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'User',
    }]
});
 //Pendientes
const model = mongoose.model('Chat', mySchema); //Collecion en mongo y el esquema
module.exports = model;