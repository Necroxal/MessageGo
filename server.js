const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');
db('mongodb+srv://german:145689@cluster0.gx4fd.mongodb.net/messagego?retryWrites=true&w=majority');



var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(router);
router(app);
//Router mini apps

app.use('/app', express.static('public'));

app.listen(3000)
console.log('La aplicacion estaá escuchando al puerto 3000')
