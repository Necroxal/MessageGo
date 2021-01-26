const express = require('express');
const bodyParser = require('body-parser');
const response = require('./response');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

//Router mini apps
router.get('/message', function(req,res){
    console.log(req.headers);
    res.header({
        "custom-header": "Valor personalizado",
    });
    //res.send('Lista de mensajes');
    response.succes(req,res,'Lista de mensajes');
});
router.post('/message', function(req,res){
    console.log(req.query);
    if(req.query.error == "ok"){
        response.error(req,res,'error simulado',400);
    }
    else{
        response.succes(req,res,'añadido correctamente',200);
    }

});
// app.use('/', function(req, res){
//     res.send('hola'); //Responde con un hola en el navegador
// });

app.listen(3000)
console.log('La aplicacion estaá escuchando al puerto 3000')
