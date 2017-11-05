const WebSocket = require('ws');
const wss = new WebSocket.Server({ host: 'localhost', port:3131 });

wss.on('connection', function connection(ws){
    ws.on('message', function incoming(message){
        console.log('Received message is %s', message);
    });

    ws.send('OK baby');
});
