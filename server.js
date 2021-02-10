const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');

const db = require('./db');
const router = require('./network/routes');
db('mongodb+srv://german:145689@cluster0.gx4fd.mongodb.net/messagego?retryWrites=true&w=majority');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(router);
router(app);
//Router mini apps

app.use('/app', express.static('public'));

server.listen(3000, function(){
    console.log('La aplicacion estaá escuchando al puerto 3000');
});

