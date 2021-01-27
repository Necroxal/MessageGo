express = require('express');
//Para usar una ruta ya definida en los metodos
const message = require('../components/message/network');
const routes = function(server){
    server.use('/message',message);
}
module.exports = routes;