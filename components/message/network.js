const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
//Metodos get y post

router.get('', function(req,res){
    console.log(req.headers);
    res.header({
        "custom-header": "Valor personalizado",
    });
    //res.send('Lista de mensajes');
    response.succes(req,res,'Lista de mensajes');
});
router.post('', function(req,res){
    controller.addMessage(req.body.user, req.body.message)
    .then((fullmesagge) => {
        response.succes(req,res,fullmesagge,200);
    }).catch((e) => {
        response.error(req,res,'Informacion invalida',400,'Error en el controlador ');
    });

});

module.exports = router;