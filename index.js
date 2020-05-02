const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', client => {
  console.log('someone has connected');
  client.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  client.on('disconnect', () => { "Someone has left the chat" });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
server.listen(3000, () => {
  console.log('listening on *:3000');
});
