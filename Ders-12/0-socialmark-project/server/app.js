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
        console.log("hobbaaaa");
        //console.log(socket);
        console.log(socket.id);
        //socket.join("133") odaya bilgi gönderme
        //io.in(roomID).emit() --> burada roomId ile eşleşenn yere data göndermiş olduk
        //! Karsilama 
        socket.emit("WELCOME_MESSAGE",`${socket.id} kardes hg`);
        // socket.on("INPUTTAN_GONDERILEN_SEND_MESSAGE",(data) => {
        //     console.log("INPUTTAN_GONDERILEN_SEND_MESSAGE",data);
        // });
        socket.on("NEW_BOOKMARK_EVENT",(bookmark) => {
            console.log("NEW_BOOKMARK_EVENT",bookmark);
            //io.emit("NEW_BOOKMARK_ADDED",bookmark);
            // ! gonderen haric herekse bookmark bilgisini gönderme işlemi
            socket.broadcast.emit("NEW_BOOKMARK_ADDED",bookmark)
        })
    })
});