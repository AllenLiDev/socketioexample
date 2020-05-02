//Create a web application instance
const app = require('express')();

//Create a http server
const server = require('http').createServer(app);

//Create a socket server instance
const io = require('socket.io')(server);

//
io.on('connection', client => {
  // console message when user connects
  console.log("someone has entered the chat");
  // display message when someone types in chat
  client.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  // console message when user disconnects
  client.on('disconnect', () => {
    console.log("Someone has left the chat");
  });
});

// define a route handler '/' that gets called when we hit our website home.
app.get('/', (req, res) => {
  // sends the index.html file
  res.sendFile(__dirname + '/index.html');
});

// We make the http server listen on port 3000
server.listen(3000, () => {
  console.log('listening on localhost:3000');
});
