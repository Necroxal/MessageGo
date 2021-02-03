const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//A traves de un obejto definir todas las propiedades que queremos tenr 
const mySchema = new Schema({
   name: String,
   
});

const model = mongoose.model('User', mySchema); //Collecion en mongo y el esquema
module.exports = model;