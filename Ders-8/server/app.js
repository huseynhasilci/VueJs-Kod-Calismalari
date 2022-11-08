const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();
const PORT = process.env.PORT || 1987;
const server = http.createServer(app);


const io = socketio(server,{
    cors: {
        origin:"*",
        methods: ["GET","POST","OPTIONS"],
    }
});

server.listen(PORT,() => {
    //console.log(`sunucu ${PORT} uzerinde calisiyor`);
    io.on("connection",socket => {
        console.log(socket);
    })
});