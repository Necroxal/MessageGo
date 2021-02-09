const express = require('express');
const path = require('path'); //extrae nombre del archivo de una ruta
const multer = require('multer'); //permite manjear el multi-plataform para manipular archivos
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
//Metodos get y post
//Veer mensajes y/o ver mensajes de usarios en especifico
const storage = multer.diskStorage({ //
    destination:  "public/files",
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
const upload = multer({ storage: storage })

router.get('/', function(req,res){
    const filterMessage =  req.query.chat || null; 
    controller.getMessage(filterMessage) //si se tiene que filtrar una informacion y si no vendrá null
    .then((messageList)=>{
        response.succes(req,res,messageList,200);
    })
    .catch(e=>{
        response.error(req,res, 'Unexpected Error',500,e);
    });
});
//Añadir mensajes
router.post('/',upload.single('file'), function(req,res){
    controller.addMessage(req.body.chat,req.body.user, req.body.message, req.file)
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