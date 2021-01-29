const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
//Metodos get y post

router.get('', function(req,res){
    controller.getMessage()
    .then((messageList)=>{
        response.succes(req,res,messageList,200);
    })
    .catch(e=>{
        response.error(req,res, 'Unexpected Error',500,e);
    });
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