express = require('express');
//Para usar una ruta ya definida en los metodos
const message = require('../components/message/network');
const user = require('../components/user/network');
const routes = function(server){
    server.use('/message',message);
    server.use('/user',user);
}
module.exports = routes;