const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
//Get para ver todos los usuarios
router.get('/', function(req,res){
    controller.getUsers(req.body.name)
    .then((data)=>{
        response.succes(req,res,data,201)
    })
    .catch((e)=>{
        response.error(req,res,'internal error', 500, e)
    });
});
//Post para añadir usuarios
router.post('/', function(req,res){
    controller.addUser(req.body.name)
    .then((data) => {
        response.succes(req,res,data,201);
    }).catch((e) => {
        response.error(req,res,'Internal error',500,e);
    });

});

module.exports = router;