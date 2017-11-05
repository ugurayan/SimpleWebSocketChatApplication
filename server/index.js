var server = require('ws').Server;
var s = new server({ port:3131 });

s.on('connection', function(){
    ws.on('message', function(message){
        console.log('Received message is :' + message);
    });
});
