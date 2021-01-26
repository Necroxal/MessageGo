const express = require('express');
const router = express.Router();

var app = express();
app.use(router);

//Router mini apps
router.get('/message', function(req,res){
    res.send('Lista de mensajes');
});
router.post('/message', function(req,res){
    res.send('Mensaje añadido');
});
// app.use('/', function(req, res){
//     res.send('hola'); //Responde con un hola en el navegador
// });

app.listen(3000)
console.log('La aplicacion estaá escuchando al puerto 3000')
