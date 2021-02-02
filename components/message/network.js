const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
//Metodos get y post
//Veer mensajes y/o ver mensajes de usarios en especifico
router.get('', function(req,res){
    const filterMessage =  req.query.user || null; 
    controller.getMessage(filterMessage) //si se tiene que filtrar una informacion y si no vendrá null
    .then((messageList)=>{
        response.succes(req,res,messageList,200);
    })
    .catch(e=>{
        response.error(req,res, 'Unexpected Error',500,e);
    });
});
//Añadir mensajes
router.post('', function(req,res){
    controller.addMessage(req.body.user, req.body.message)
    .then((fullmesagge) => {
        response.succes(req,res,fullmesagge,200);
    }).catch((e) => {
        response.error(req,res,'Informacion invalida',400,'Error en el controlador ');
    });

});
//Actualizar mensajes
router.patch('/:id', function(req,res){ //Se puede acceder a ese id con params
    controller.updateMessage(req.params.id, req.body.message)
    .then((data)=>{
        response.succes(req,res,data,200);
    })
    .catch(e =>{
        response.error(req,res,'Error interno',500,e);
    });

});
//Eliminar mensjaes
router.delete('/:id', function(req,res){
    controller.deleteMessage(req.params.id)
    .then(()=>{
        response.succes(req,res,`Usuario ${req.params.id} eliminado `, 200);
    })
    .catch(e =>{
        response.error(req,res,'error interno', 500, e);
    });
});
module.exports = router;