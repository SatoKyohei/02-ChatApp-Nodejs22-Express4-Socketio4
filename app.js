const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// io.on('connection', ...) でクライアントからの接続をリッスン
// 第一引数のconnectionは任意ではなく固定のイベント名
io.on("connection", (socket) => {

    // .on(<イベント名>, callback) でイベントを検知(=データの受信)
    socket.on("message", (msg) => {
        console.log("message: " + msg);

        // .emit(イベント名, data) でイベントを発火(=データの送信)
        io.emit('message', msg)
    });
});

http.listen(port, () => {
    console.log("server listening. Port:" + port);
});
