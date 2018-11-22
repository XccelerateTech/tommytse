//server.js
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
io.on("connection", socket => {
  var currentRoom;
  socket.join(currentRoom);
  socket.on("subscribe", function(room) {
    console.log("joining room", room);
    socket.join(room);
    currentRoom = room;
  });

  socket.on("send", function(msg) {
    io.to(currentRoom).emit("send", msg);
    console.log(msg);
  });
});

http.listen(3030);
